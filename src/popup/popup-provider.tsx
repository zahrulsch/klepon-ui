import { JSX, createContext, onCleanup, onMount, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import { createPopper } from "@popperjs/core"
import { Placement } from "../lib.types"

import gsap from "gsap"

if (import.meta.env.PROD) {
    console.log("prod")
}

export type PopupContextValue = {
    state: {
        isOpen: boolean
        placement: Placement
        animationDurationInMs: number
        triggerRef?: Element
        contentRef?: Element
    }
    setTrigger: (element?: Element) => void
    setContent: (element?: Element) => void
}

const PopupContext = createContext<PopupContextValue | null>(null)

export function usePopup() {
    const context = useContext(PopupContext)
    if (!context) throw new Error("usePopup must be called inside PopupProvider")
    return context
}

export type PopupProviderProps = {
    children: JSX.Element
    defaultOpen?: boolean
    placement?: Placement
    animationDurationInMs?: number
    offset?: [number, number]
    trigger?: "click" | "hover"
    unHoverHideToleranceInMs?: number
    keepContentOnHover?: boolean
}

export function PopupProvider(props: PopupProviderProps) {
    const [contextState, setContextState] = createStore<PopupContextValue["state"]>({
        isOpen: props.defaultOpen ?? false,
        placement: props.placement ?? "bottom-start",
        animationDurationInMs: props.animationDurationInMs ?? 120,
    })
    const contextValue: PopupContextValue = {
        state: contextState,
        setTrigger(element) {
            setContextState("triggerRef", element)
        },
        setContent(element) {
            setContextState("contentRef", element)
        },
    }

    function animateShow() {
        setContextState("isOpen", true)

        const content = contextState.contentRef as HTMLElement | undefined
        const trigger = contextState.triggerRef as HTMLElement | undefined
        const duration = contextState.animationDurationInMs / 1000

        if (!content || !trigger) return

        const placement = contextState.placement

        createPopper(trigger, content, {
            placement,
            modifiers: [
                {
                    name: "offset",
                    options: { offset: props.offset ?? [0, 2] },
                },
            ],
            onFirstUpdate() {
                const minWidth = content.getBoundingClientRect().width
                gsap.set(content, { minWidth, opacity: 0, filter: "blur(5px)", y: "+=10px" })
                gsap.to(content, { opacity: 1, duration, filter: "blur(0px)", y: "-=10px" })
            },
        })
    }

    function animateHide() {
        const content = contextState.contentRef as HTMLElement | undefined
        if (!content) return

        const duration = contextState.animationDurationInMs / 1000
        gsap.to(content, {
            opacity: 0,
            filter: "blur(5px)",
            y: "+=10px",
            delay: 0,
            duration,
        }).then(() => {
            setContextState("isOpen", false)
        })
    }

    function animate() {
        if (!contextState.isOpen) {
            animateShow()
            document.addEventListener("click", onDocumentClick)
        } else {
            animateHide()
        }
    }

    function onDocumentClick(ev: MouseEvent) {
        const target = ev.target as HTMLElement
        const { isOpen, triggerRef: trigger, contentRef: content } = contextState

        if (isOpen && !(trigger?.contains(target) || content?.contains(target))) {
            animateHide()
            document.removeEventListener("click", onDocumentClick)
        }
    }

    let timeout: NodeJS.Timeout | undefined

    function onMouseLeave() {
        const content = contextState.contentRef
        const trigger = contextState.triggerRef

        if (props.keepContentOnHover) {
            const timeoutDuration = props.unHoverHideToleranceInMs ?? 100

            function listenHover(e: MouseEvent) {
                clearTimeout(timeout)

                timeout = setTimeout(() => {
                    const target = e.target as HTMLElement
                    const mouseOverContent = content?.contains(target)
                    const mouseOverTrigger = trigger?.contains(target)

                    if (!mouseOverContent && !mouseOverTrigger) {
                        animateHide()
                        document.removeEventListener("mousemove", listenHover)
                        trigger?.addEventListener("mouseenter", onMouseEnter)
                    }
                }, timeoutDuration)
            }

            document.addEventListener("mousemove", listenHover)
        } else {
            animateHide()
            trigger?.addEventListener("mouseenter", onMouseEnter)
        }
    }

    function onMouseEnter() {
        const trigger = contextState.triggerRef
        animateShow()
        trigger?.removeEventListener("mouseenter", onMouseEnter)
    }

    onMount(() => {
        const trigger = contextState.triggerRef

        if (props.trigger == "click") {
            trigger?.addEventListener("click", animate)
        } else {
            trigger?.addEventListener("mouseenter", onMouseEnter)
            trigger?.addEventListener("mouseleave", onMouseLeave)
        }

        onCleanup(() => {
            trigger?.removeEventListener("click", animate)
            trigger?.removeEventListener("mouseenter", onMouseEnter)
            trigger?.removeEventListener("mouseleave", onMouseLeave)
        })
    })

    onMount(() => {
        if (props.defaultOpen) {
            animateShow()
        }
    })

    return <PopupContext.Provider value={contextValue}>{props.children}</PopupContext.Provider>
}
