import { JSX } from 'solid-js';
import { Placement } from '../lib.types';
export type TooltipContextValue = {
    WrapperElement?: (props: {
        children?: JSX.Element;
    }) => JSX.Element;
    hideDelayInMs: number;
    placement: Placement;
};
export declare function useTooltip(): TooltipContextValue;
export type TooltipProviderProps = {
    children?: JSX.Element;
    config?: Partial<TooltipContextValue>;
};
export declare function TooltipProvider(props: TooltipProviderProps): JSX.Element;
