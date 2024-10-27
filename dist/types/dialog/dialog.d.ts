import { JSX } from 'solid-js';
export type DialogProps = {
    show?: boolean;
    closeOnScrimClick?: boolean;
    children?: JSX.Element;
    onClose: () => void;
};
export declare function Dialog(props: DialogProps): JSX.Element;
