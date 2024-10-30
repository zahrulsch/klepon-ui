import { JSX, createContext, useContext } from "solid-js"
import { Placement } from "../lib.types"

export type TooltipContextValue = {
    WrapperElement?: (props: { children?: JSX.Element }) => JSX.Element
    hideDelayInMs: number
    placement: Placement
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

export function useTooltip() {
    const ctx = useContext(TooltipContext)
    if (!ctx) throw new Error("useTooltip must be called inside TooltipProvider")
    return ctx
}

export type TooltipProviderProps = {
    children?: JSX.Element
    config?: Partial<TooltipContextValue>
}

export function TooltipProvider(props: TooltipProviderProps) {
    const contextValue: TooltipContextValue = {
        WrapperElement: props.config?.WrapperElement,
        hideDelayInMs: props.config?.hideDelayInMs ?? 0,
        placement: props.config?.placement ?? "top",
    }

    return <TooltipContext.Provider value={contextValue}>{props.children}</TooltipContext.Provider>
}
