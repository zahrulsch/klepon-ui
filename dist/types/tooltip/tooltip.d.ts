import { JSX } from 'solid-js';
import { Placement } from '../lib.types';
export type TooltipProps = {
    children?: JSX.Element;
    placement?: Placement;
    hideDelayInMs?: number;
};
export declare function Tooltip(props: TooltipProps): JSX.Element;
