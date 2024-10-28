import { JSX } from "solid-js"
import { PopupContextValue, usePopup } from "./popup-provider"
import { Ref } from "@solid-primitives/refs"

export type PopupTriggerProps = {
    children: ((state: () => PopupContextValue["state"]) => JSX.Element) | JSX.Element
}

export function PopupTrigger(props: PopupTriggerProps) {
    const popupCtx = usePopup()
    return (
        <Ref ref={popupCtx.setTrigger}>
            {typeof props.children == "function"
                ? props.children(() => popupCtx.state)
                : props.children}
        </Ref>
    )
}
