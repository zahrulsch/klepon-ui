import { JSX } from 'solid-js/jsx-runtime';
export type DialogProps = {
    show?: boolean;
    closeOnScrimClick?: boolean;
    children?: JSX.Element;
    onClose: () => void;
};
export declare function Dialog(props: DialogProps): JSX.Element;
