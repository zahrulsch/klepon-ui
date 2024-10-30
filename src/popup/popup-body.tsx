import { Ref } from "@solid-primitives/refs"
import { JSX, Show } from "solid-js"
import { PopupContextValue, usePopup } from "./popup-provider"

export type PopupBodyProps = {
    children: JSX.Element | ((state: () => PopupContextValue["state"]) => JSX.Element)
}

export function PopupBody(props: PopupBodyProps) {
    const popupCtx = usePopup()

    return (
        <Show when={popupCtx.state.isOpen}>
            <Ref ref={popupCtx.setContent}>
                {typeof props.children == "function"
                    ? props.children(() => popupCtx.state)
                    : props.children}
            </Ref>
        </Show>
    )
}
