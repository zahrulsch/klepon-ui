import { JSX } from 'solid-js';
export type DialogInternalProviderProps = {
    onClose: VoidFunction;
    children?: JSX.Element;
    closeOnScrimClick?: boolean;
};
export declare function DialogInternalProvider(props: DialogInternalProviderProps): JSX.Element;
