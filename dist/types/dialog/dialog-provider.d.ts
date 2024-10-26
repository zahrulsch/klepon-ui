import { JSX } from 'solid-js';
export type DialogProviderContextValue = {
    config: {
        contentSpec: {
            enterFrom: gsap.TweenVars;
            enterTo: gsap.TweenVars;
            leaveFrom: gsap.TweenVars;
            leaveTo: gsap.TweenVars;
        };
        scrimSpec: {
            enterFrom: gsap.TweenVars;
            enterTo: gsap.TweenVars;
            leaveFrom: gsap.TweenVars;
            leaveTo: gsap.TweenVars;
        };
    };
    state: {
        latestZIndex: number;
    };
    requestRender: VoidFunction;
};
export declare function useDialogForInternal(): DialogProviderContextValue;
export type DialogProviderProps = {
    children: JSX.Element;
    config?: Partial<DialogProviderContextValue["config"] & {
        animationInSecond: number;
    }>;
};
export declare function DialogProvider(props: DialogProviderProps): JSX.Element;
