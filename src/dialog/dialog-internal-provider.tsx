import { JSX, createMemo, createSignal, onMount } from "solid-js"
import { useDialogForInternal } from "./dialog-provider"
import { Ref } from "@solid-primitives/refs"
import { DialogInternalContext } from "./dialog-internal-context"

import gsap from "gsap"

export type DialogInternalProviderProps = {
    onClose: VoidFunction
    children?: JSX.Element
    closeOnScrimClick?: boolean
}

export function DialogInternalProvider(props: DialogInternalProviderProps) {
    const [contentRef, setContentRef] = createSignal<HTMLElement>()
    const scrimRef = createMemo(() => contentRef()?.parentElement)

    const globalDialog = useDialogForInternal()
    const scrimSpec = globalDialog.config.scrimSpec
    const contentSpec = globalDialog.config.contentSpec

    let scrimGsap: gsap.core.Tween | undefined
    let contentGsap: gsap.core.Tween | undefined

    function animateContentShow() {
        const content = contentRef()
        if (!content) return

        contentGsap?.pause()
        gsap.set(content, contentSpec.enterFrom)
        contentGsap = gsap.to(content, contentSpec.enterTo)
    }

    function animateScrimShow() {
        const scrim = scrimRef()
        if (!scrim) return

        scrimGsap?.pause()
        gsap.set(scrim, {
            inset: 0,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.25rem",
            overflow: "hidden",
            zIndex: globalDialog.state.latestZIndex,
        })

        globalDialog.requestRender()

        gsap.set(scrim, scrimSpec.enterFrom)
        scrimGsap = gsap.to(scrim, scrimSpec.enterTo)
    }

    function animateShow() {
        animateScrimShow()
        animateContentShow()
    }

    onMount(animateShow)

    function animateScrimHide() {
        const scrim = scrimRef()
        if (!scrim) return

        scrimGsap?.pause()
        gsap.set(scrim, scrimSpec.leaveFrom)
        scrimGsap = gsap.to(scrim, scrimSpec.leaveTo)
    }

    function animateContentHide() {
        const content = contentRef()
        if (!content) return

        contentGsap?.pause()
        gsap.set(content, contentSpec.leaveFrom)
        contentGsap = gsap.to(content, contentSpec.leaveTo)
    }

    function animateHide() {
        animateContentHide()
        animateScrimHide()

        scrimGsap?.then(() => {
            props.onClose?.()
        })
    }

    function onScrimClick() {
        const scrim = scrimRef()
        const content = contentRef()
        if (!scrim || !content) return

        if (props.closeOnScrimClick == true) {
            scrim.onclick = function (e) {
                const target = e.target as HTMLElement
                const isNotSafeArea = target.contains(content)
                if (isNotSafeArea) animateHide()
            }
        }
    }

    onMount(onScrimClick)

    return (
        <DialogInternalContext.Provider
            value={{
                onClose: animateHide,
                closeOnScrimClick: props.closeOnScrimClick,
            }}
        >
            <Ref ref={setContentRef}>{props.children}</Ref>
        </DialogInternalContext.Provider>
    )
}
