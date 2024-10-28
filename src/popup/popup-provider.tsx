import { JSX, createContext, onCleanup, onMount, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import { Placement } from "./popup"
import { createPopper } from "@popperjs/core"

import gsap from "gsap"

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
                    options: { offset: [0, 2] },
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
        const duration = contextState.animationDurationInMs / 1000

        if (!content) return

        gsap.to(content, {
            opacity: 0,
            filter: "blur(5px)",
            y: "+=10px",
            delay: 0.05,
            duration,
        }).then(() => {
            setContextState("isOpen", false)
        })
    }

    function animate() {
        if (!contextState.isOpen) animateShow()
        else animateHide()
    }

    function onDocumentClick(ev: MouseEvent) {
        const target = ev.target as HTMLElement
        const { isOpen, triggerRef: trigger, contentRef: content } = contextState

        if (isOpen && !(trigger?.contains(target) || content?.contains(target))) {
            animateHide()
        }
    }

    onMount(() => {
        const trigger = contextState.triggerRef
        if (!trigger) return

        trigger.addEventListener("click", animate)
        document.addEventListener("click", onDocumentClick)

        onCleanup(() => {
            trigger?.removeEventListener("click", animate)
            document.removeEventListener("click", onDocumentClick)
        })
    })

    onMount(() => {
        if (props.defaultOpen) {
            animateShow()
        }
    })

    return <PopupContext.Provider value={contextValue}>{props.children}</PopupContext.Provider>
}
