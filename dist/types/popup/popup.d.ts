import { JSX } from 'solid-js';
import { Placement } from '../lib.types';
export type PopupProps = {
    children: JSX.Element;
    defaultOpen?: boolean;
    placement?: Placement;
    animationDurationInMs?: number;
    trigger?: "click" | "hover";
    offset?: [number, number];
    unHoverHideToleranceInMs?: number;
    keepContentOnHover?: boolean;
};
export declare function Popup(props: PopupProps): JSX.Element;
