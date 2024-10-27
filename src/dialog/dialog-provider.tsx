// @ts-ignore
export declare type ref = "need gsap reference"

import { JSX, createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

export type DialogProviderContextValue = {
    config: {
        contentSpec: {
            enterFrom: GSAPTweenVars
            enterTo: GSAPTweenVars
            leaveFrom: GSAPTweenVars
            leaveTo: GSAPTweenVars
        }
        scrimSpec: {
            enterFrom: GSAPTweenVars
            enterTo: GSAPTweenVars
            leaveFrom: GSAPTweenVars
            leaveTo: GSAPTweenVars
        }
    }
    state: {
        latestZIndex: number
    }
    requestRender: VoidFunction
}

const contentSpec: DialogProviderContextValue["config"]["contentSpec"] = {
    enterFrom: { opacity: 0, y: -25, filter: "blur(5px)" },
    enterTo: { opacity: 1, y: 0, filter: "blur(0px)" },
    leaveFrom: { opacity: 1, y: 0, filter: "blur(0px)" },
    leaveTo: { opacity: 0, y: 25, filter: "blur(5px)" },
}

const scrimSpec: DialogProviderContextValue["config"]["scrimSpec"] = {
    enterFrom: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
    enterTo: {
        backgroundColor: "rgba(0, 0, 0, 0.125)",
        backdropFilter: "blur(2px)",
    },
    leaveFrom: { backgroundColor: "rgba(0, 0, 0, 0.125)", backdropFilter: "blur(2px)" },
    leaveTo: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
}

const DialogContext = createContext<DialogProviderContextValue | null>(null)

export function useDialogForInternal() {
    const context = useContext(DialogContext)
    if (context === null) {
        throw new Error("useDialogForInternal must be used within a DialogProvider")
    }
    return context
}

export type DialogProviderProps = {
    children: JSX.Element
    config?: Partial<
        DialogProviderContextValue["config"] & {
            animationInSecond: number
        }
    >
}

export function DialogProvider(props: DialogProviderProps) {
    const [dialogState, setDialogState] = createStore<DialogProviderContextValue["state"]>({
        latestZIndex: 99,
    })

    function addDuration(vars: gsap.TweenVars): gsap.TweenVars {
        return { ...vars, duration: props.config?.animationInSecond ?? 0.3 }
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
