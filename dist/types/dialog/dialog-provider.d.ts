import { JSX } from 'solid-js';
import { AnimationVars } from '../lib.types';
export type DialogProviderContextValue = {
    config: {
        contentSpec: {
            enterFrom: AnimationVars;
            enterTo: AnimationVars;
            leaveFrom: AnimationVars;
            leaveTo: AnimationVars;
        };
        scrimSpec: {
            enterFrom: AnimationVars;
            enterTo: AnimationVars;
            leaveFrom: AnimationVars;
            leaveTo: AnimationVars;
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
