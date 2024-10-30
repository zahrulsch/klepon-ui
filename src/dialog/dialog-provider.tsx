import { JSX, createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import { contentSpec, scrimSpec } from "./specs"

import { type AnimationVars } from "../lib.types"

export type DialogProviderContextValue = {
    config: {
        contentSpec: {
            enterFrom: AnimationVars
            enterTo: AnimationVars
            leaveFrom: AnimationVars
            leaveTo: AnimationVars
        }
        scrimSpec: {
            enterFrom: AnimationVars
            enterTo: AnimationVars
            leaveFrom: AnimationVars
            leaveTo: AnimationVars
        }
    }
    state: {
        latestZIndex: number
    }
    requestRender: VoidFunction
}

const DialogContext = createContext<DialogProviderContextValue | null>(null)

export function useDialogForInternal() {
    const context = useContext(DialogContext)
    if (context === null)
        throw new Error("useDialogForInternal must be used within a DialogProvider")
    return context
}

export type DialogProviderProps = {
    children: JSX.Element
    config?: Partial<
        DialogProviderContextValue["config"] & {
            animationInMs: number
            initialZIndex: number
        }
    >
}

export function DialogProvider(props: DialogProviderProps) {
    const [dialogState, setDialogState] = createStore<DialogProviderContextValue["state"]>({
        latestZIndex: props.config?.initialZIndex ?? 99,
    })

    function addDuration(vars: AnimationVars): AnimationVars {
        const durationInMs = props.config?.animationInMs ?? 150
        return { ...vars, duration: durationInMs / 1000 }
    }

    const ctxValue: DialogProviderContextValue = {
        state: dialogState,
        config: {
            contentSpec: {
                enterFrom: props.config?.contentSpec?.enterFrom ?? contentSpec.enterFrom,
                enterTo: addDuration(props.config?.contentSpec?.enterTo ?? contentSpec.enterTo),
                leaveFrom: props.config?.contentSpec?.leaveFrom ?? contentSpec.leaveFrom,
                leaveTo: addDuration(props.config?.contentSpec?.leaveTo ?? contentSpec.leaveTo),
            },
            scrimSpec: {
                enterFrom: props.config?.scrimSpec?.enterFrom ?? scrimSpec.enterFrom,
                enterTo: addDuration(props.config?.scrimSpec?.enterTo ?? scrimSpec.enterTo),
                leaveFrom: props.config?.scrimSpec?.leaveFrom ?? scrimSpec.leaveFrom,
                leaveTo: addDuration(props.config?.scrimSpec?.leaveTo ?? scrimSpec.leaveTo),
            },
        },
        requestRender() {
            setDialogState("latestZIndex", (prev) => prev + 1)
        },
    }

    return <DialogContext.Provider value={ctxValue}>{props.children}</DialogContext.Provider>
}
