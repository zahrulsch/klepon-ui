import { DialogProviderProps } from '../dialog/dialog-provider';
import { JSX } from 'solid-js';
import { TooltipProviderProps } from '../tooltip/tooltip-provider';
export type KleponProviderProps = {
    children: JSX.Element;
    dialogConfig?: DialogProviderProps["config"];
    tooltipConfig?: TooltipProviderProps["config"];
};
export declare function KleponProvider(props: KleponProviderProps): JSX.Element;
