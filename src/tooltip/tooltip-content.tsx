import { Instance, createPopper } from "@popperjs/core"
import { Ref } from "@solid-primitives/refs"
import { JSX, createSignal, onCleanup, onMount } from "solid-js"
import { useTooltip } from "./tooltip-provider"
import { Placement } from "../lib.types"

import gsap from "gsap"

export type TooltipContentProps = {
    children: JSX.Element
    trigger?: HTMLElement
    placement?: Placement
}

export default function TooltipContent(props: TooltipContentProps) {
    let popper: Instance | undefined

    const tooltip = useTooltip()
    const zIndex = 99

    const [ref, setRef] = createSignal<HTMLElement>()

    onMount(() => {
        const trigger = props.trigger
        const content = ref()

        if (!trigger || !content) return

        popper = createPopper(trigger, content, {
            strategy: "fixed",
            placement: props.placement ?? tooltip.placement,
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 3],
                    },
                },
            ],
            onFirstUpdate(_state) {
                const content = ref()

                if (content) {
                    gsap.set(content, { opacity: 0, y: "+=10px", filter: "blur(5px)", zIndex })
                    gsap.to(content, {
                        opacity: 0.95,
                        y: "-=10px",
                        filter: "blur(0px)",
                        duration: 0.08,
                    })
                }
            },
        })

        onCleanup(() => popper?.destroy())
    })

    return <Ref ref={setRef}>{props.children}</Ref>
}
