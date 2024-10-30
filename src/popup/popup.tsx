import { JSX } from "solid-js"
import { PopupProvider } from "./popup-provider"
import { Placement } from "../lib.types"

export type PopupProps = {
    children: JSX.Element
    defaultOpen?: boolean
    placement?: Placement
    animationDurationInMs?: number
    trigger?: "click" | "hover"
    offset?: [number, number]
    unHoverHideToleranceInMs?: number
    keepContentOnHover?: boolean
}

export function Popup(props: PopupProps) {
    return (
        <PopupProvider
            animationDurationInMs={props.animationDurationInMs}
            placement={props.placement}
            defaultOpen={props.defaultOpen}
            trigger={props.trigger}
            offset={props.offset}
            keepContentOnHover={props.keepContentOnHover}
            unHoverHideToleranceInMs={props.unHoverHideToleranceInMs}
        >
            {props.children}
        </PopupProvider>
    )
}
