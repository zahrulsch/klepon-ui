import { JSX } from 'solid-js';
import { Placement } from '../lib.types';
export type PopupContextValue = {
    state: {
        isOpen: boolean;
        placement: Placement;
        animationDurationInMs: number;
        triggerRef?: Element;
        contentRef?: Element;
    };
    setTrigger: (element?: Element) => void;
    setContent: (element?: Element) => void;
};
export declare function usePopup(): PopupContextValue;
export type PopupProviderProps = {
    children: JSX.Element;
    defaultOpen?: boolean;
    placement?: Placement;
    animationDurationInMs?: number;
    offset?: [number, number];
    trigger?: "click" | "hover";
    unHoverHideToleranceInMs?: number;
    keepContentOnHover?: boolean;
};
export declare function PopupProvider(props: PopupProviderProps): JSX.Element;
