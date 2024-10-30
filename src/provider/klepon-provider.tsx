import { DialogProvider, DialogProviderProps } from "../dialog/dialog-provider"
import { JSX } from "solid-js"
import { TooltipProvider, TooltipProviderProps } from "../tooltip/tooltip-provider"

export type KleponProviderProps = {
    children: JSX.Element
    dialogConfig?: DialogProviderProps["config"]
    tooltipConfig?: TooltipProviderProps["config"]
}

export function KleponProvider(props: KleponProviderProps) {
    return (
        <DialogProvider config={props.dialogConfig}>
            <TooltipProvider config={props.tooltipConfig}>{props.children}</TooltipProvider>
        </DialogProvider>
    )
}
