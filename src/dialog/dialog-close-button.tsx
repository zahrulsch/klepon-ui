import { Ref } from "@solid-primitives/refs"
import { onMount } from "solid-js"
import { JSX } from "solid-js"
import { useDialog } from "./dialog-internal-provider"

export type DialogCloseButtonProps = {
    children: JSX.Element
}

export function DialogCloseButton(props: DialogCloseButtonProps) {
    let trigger: HTMLElement
    const dialog = useDialog()

    onMount(() => {
        trigger.onclick = function () {
            dialog.onClose()
        }
    })

    return <Ref ref={trigger!}>{props.children}</Ref>
}
