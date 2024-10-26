import { Show } from "solid-js"
import { JSX } from "solid-js/jsx-runtime"
import { Portal } from "solid-js/web"
import { DialogInternalProvider } from "./dialog-internal-provider"

export type DialogProps = {
    show?: boolean
    closeOnScrimClick?: boolean
    children?: JSX.Element
    onClose: () => void
}

export function Dialog(props: DialogProps) {
    return (
        <Show when={props.show}>
            <Portal mount={document.body}>
                <DialogInternalProvider
                    onClose={props.onClose}
                    closeOnScrimClick={props.closeOnScrimClick}
                >
                    <div
                        style={{
                            "margin-inline": "auto",
                            width: "max-content",
                        }}
                    >
                        {props.children}
                    </div>
                </DialogInternalProvider>
            </Portal>
        </Show>
    )
}
