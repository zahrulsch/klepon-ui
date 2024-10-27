/// <reference path="gsap" />

import { JSX } from "solid-js"
export declare type ref = "need gsap reference"
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
export declare function useDialogForInternal(): DialogProviderContextValue
export type DialogProviderProps = {
    children: JSX.Element
    config?: Partial<
        DialogProviderContextValue["config"] & {
            animationInSecond: number
        }
    >
}
export declare function DialogProvider(props: DialogProviderProps): JSX.Element
