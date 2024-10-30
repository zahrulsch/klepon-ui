import { JSX } from 'solid-js';
import { Placement } from '../lib.types';
export type TooltipContentProps = {
    children: JSX.Element;
    trigger?: HTMLElement;
    placement?: Placement;
};
export default function TooltipContent(props: TooltipContentProps): JSX.Element;
