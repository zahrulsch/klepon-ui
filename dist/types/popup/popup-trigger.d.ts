import { JSX } from 'solid-js';
import { PopupContextValue } from './popup-provider';
export type PopupTriggerProps = {
    children: ((state: () => PopupContextValue["state"]) => JSX.Element) | JSX.Element;
};
export declare function PopupTrigger(props: PopupTriggerProps): JSX.Element;
