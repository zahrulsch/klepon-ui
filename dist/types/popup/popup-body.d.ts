import { JSX } from 'solid-js';
import { PopupContextValue } from './popup-provider';
export type PopupBodyProps = {
    children: JSX.Element | ((state: () => PopupContextValue["state"]) => JSX.Element);
};
export declare function PopupBody(props: PopupBodyProps): JSX.Element;
