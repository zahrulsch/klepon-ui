import DialogPreview from "./preview/dialog-preview"
import PopupPreview from "./preview/popup-preview"
import TooltipPreview from "./preview/tooltip-preview"

import { KleponProvider } from "./provider/klepon-provider"

import "./preview.scss"

export default function Preview() {
    return (
        // Panggil KleponProvider sekali di root App Element
        <KleponProvider
            tooltipConfig={{
                WrapperElement(props) {
                    return (
                        <div class="shadow bg-purple-600 text-sm text-white px-2 py-0.5 rounded-md">
                            {props.children}
                        </div>
                    )
                },
            }}
            dialogConfig={{ initialZIndex: 999 }}
        >
            <div class="flex flex-col w-full py-4 px-3 gap-2 container mx-auto">
                <DialogPreview />
                <PopupPreview />
                <TooltipPreview />
            </div>
        </KleponProvider>
    )
}
