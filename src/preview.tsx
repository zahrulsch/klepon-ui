import { DialogProvider } from "./dialog/dialog-provider"
import DialogPreview from "./preview/dialog-preview"
import "./preview.scss"
import { Popup } from "./popup/popup"
import { PopupTrigger } from "./popup/popup-trigger"
import { FaSolidChevronDown } from "solid-icons/fa"
import { cn } from "./utils/classname"
import { PopupBody } from "./popup/popup-body"

export default function Preview() {
    return (
        // Panggil DialogProvider sekali di root App Element
        <DialogProvider>
            <div class="flex flex-col w-full py-4 gap-3">
                <DialogPreview />
                <div class="px-4 flex justify-center">
                    <Popup animationDurationInMs={100}>
                        <PopupTrigger>
                            {(state) => (
                                <button class="flex gap-3 items-center border rounded-md px-3 py-1">
                                    <span>Dapatkan Info</span>
                                    <FaSolidChevronDown
                                        class={cn(
                                            "text-xs transition opacity-50",
                                            state().isOpen && "-rotate-90 !opacity-35"
                                        )}
                                    />
                                </button>
                            )}
                        </PopupTrigger>
                        <PopupBody>
                            <div class="px-3 max-w-[300px] py-1 border rounded-md bg-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                dolores ratione laboriosam? Ipsam, aperiam labore. Dolorum quod
                                corporis ipsa iusto aspernatur voluptatem officiis fugiat totam est.
                                Commodi distinctio laudantium deleniti.
                            </div>
                        </PopupBody>
                    </Popup>
                </div>
            </div>
        </DialogProvider>
    )
}
