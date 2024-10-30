import { Ref } from "@solid-primitives/refs"
import { JSX, Show, createSignal, onCleanup, onMount } from "solid-js"
import { useTooltip } from "./tooltip-provider"
import { Dynamic } from "solid-js/web"
import { Placement } from "../lib.types"

import TooltipContent from "./tooltip-content"

export type TooltipProps = {
    children?: JSX.Element
    placement?: Placement
    hideDelayInMs?: number
}

export function Tooltip(props: TooltipProps) {
    const tooltip = useTooltip()
    const hideDelayInMs = props.hideDelayInMs ?? tooltip.hideDelayInMs
    let timeout: NodeJS.Timeout | undefined

    const [trigger, setTrigger] = createSignal<HTMLElement>()
    const [show, setShow] = createSignal(false)
    const [text, setText] = createSignal("")

    function onMouseEnter(e: MouseEvent) {
        const target = e.target as HTMLElement
        const dataTips = target.getAttribute("data-tips") ?? ""

        if (dataTips) {
            clearTimeout(timeout)
            setText(dataTips)
            setShow(true)
        }
    }

    function onMouseLeave(_: MouseEvent) {
        if (hideDelayInMs) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setShow(false)
            }, hideDelayInMs)
        } else {
            setShow(false)
        }
    }

    onMount(() => {
        trigger()?.addEventListener("mouseenter", onMouseEnter)
        trigger()?.addEventListener("mouseleave", onMouseLeave)

        onCleanup(() => {
            trigger()?.removeEventListener("mouseenter", onMouseEnter)
            trigger()?.removeEventListener("mouseleave", onMouseLeave)
        })
    })

    return (
        <>
            <Show when={show()}>
                <TooltipContent placement={props.placement} trigger={trigger()}>
                    {tooltip.WrapperElement ? (
                        <Dynamic children={text()} component={tooltip.WrapperElement} />
                    ) : (
                        <div>{text()}</div>
                    )}
                </TooltipContent>
            </Show>
            <Ref ref={setTrigger}>{props.children} </Ref>
        </>
    )
}
