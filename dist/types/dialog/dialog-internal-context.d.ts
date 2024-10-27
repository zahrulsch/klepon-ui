export type DialogInternalContextValue = {
    onClose: VoidFunction;
    closeOnScrimClick?: boolean;
};
export declare const DialogInternalContext: import('solid-js').Context<DialogInternalContextValue | null>;
export declare function useDialog(): DialogInternalContextValue;
