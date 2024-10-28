import { JSX } from 'solid-js';
import { Placement } from './popup';
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
};
export declare function PopupProvider(props: PopupProviderProps): JSX.Element;
