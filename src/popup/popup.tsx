import { JSX } from "solid-js"
import { PopupProvider } from "./popup-provider"

declare type AutoPlacement = "auto" | "auto-start" | "auto-end"
declare type BasePlacement = "top" | "bottom" | "right" | "left" | "auto"
declare type VariationPlacement =
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end"
export type Placement = AutoPlacement | BasePlacement | VariationPlacement

export type PopupProps = {
    children: JSX.Element
    defaultOpen?: boolean
    placement?: Placement
    animationDurationInMs?: number
}

export function Popup(props: PopupProps) {
    return (
        <PopupProvider
            animationDurationInMs={props.animationDurationInMs}
            placement={props.placement}
            defaultOpen={props.defaultOpen}
        >
            {props.children}
        </PopupProvider>
    )
}
