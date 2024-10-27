import { createContext, useContext } from "solid-js"

export type DialogInternalContextValue = {
    onClose: VoidFunction
    closeOnScrimClick?: boolean
}

export const DialogInternalContext = createContext<DialogInternalContextValue | null>(null)

export function useDialog() {
    const ctx = useContext(DialogInternalContext)
    if (!ctx) throw new Error("useDialog must be used within a DialogInternalProvider")
    return ctx
}
