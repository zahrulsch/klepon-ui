import { Ref } from "@solid-primitives/refs"
import { JSX, Show } from "solid-js"
import { usePopup } from "./popup-provider"

export type PopupBodyProps = {
    children: JSX.Element
}

export function PopupBody(props: PopupBodyProps) {
    const popupCtx = usePopup()
    return (
        <Show when={popupCtx.state.isOpen}>
            <Ref ref={popupCtx.setContent}>{props.children}</Ref>
        </Show>
    )
}
