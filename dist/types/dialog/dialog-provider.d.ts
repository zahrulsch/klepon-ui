import { JSX } from 'solid-js';
import { default as gsap } from 'gsap';
type GSAP = typeof gsap;
type Vars = Parameters<GSAP["from"]>["2"];
export type DialogProviderContextValue = {
    config: {
        contentSpec: {
            enterFrom: Vars;
            enterTo: Vars;
            leaveFrom: Vars;
            leaveTo: Vars;
        };
        scrimSpec: {
            enterFrom: Vars;
            enterTo: Vars;
            leaveFrom: Vars;
            leaveTo: Vars;
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
export {};
