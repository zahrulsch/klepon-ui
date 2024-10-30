import { FaSolidChevronDown } from "solid-icons/fa"
import { Popup } from "../popup/popup"
import { PopupTrigger } from "../popup/popup-trigger"
import { PopupBody } from "../popup/popup-body"
import { cn } from "../utils/classname"

export default function PopupPreview() {
    return (
        <>
            <h4 class="font-semibold text-lg">Popup Preview</h4>
            <div class="flex gap-2 items-start">
                <Popup trigger="click" animationDurationInMs={100}>
                    <PopupTrigger>
                        {(state) => (
                            <button class="flex gap-3 items-center border rounded-md px-3 py-1">
                                <span>Klik Untuk Dapatkan Info</span>
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
                        {() => (
                            <div class="px-3 max-w-[300px] py-1 border rounded-md bg-white">
                                Kopi adalah minuman yang dihasilkan dari biji tanaman kopi yang
                                telah dipanggang dan diseduh. Dikenal karena cita rasanya yang khas
                                dan efek stimulan, kopi berasal dari buah kopi yang tumbuh di daerah
                                tropis. Proses pembuatan kopi meliputi pemanenan, pengolahan, dan
                                pemanggangan biji, yang mempengaruhi aroma dan rasa. Selain menjadi
                                minuman populer, kopi juga memiliki peran penting dalam budaya dan
                                tradisi di berbagai negara.
                            </div>
                        )}
                    </PopupBody>
                </Popup>
                <Popup trigger="hover" animationDurationInMs={100}>
                    <PopupTrigger>
                        {(state) => (
                            <button class="flex gap-3 items-center border rounded-md px-3 py-1">
                                <span>Hover Untuk Dapatkan Info</span>
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
                            Kopi adalah minuman yang dihasilkan dari biji tanaman kopi yang telah
                            dipanggang dan diseduh. Dikenal karena cita rasanya yang khas dan efek
                            stimulan, kopi berasal dari buah kopi yang tumbuh di daerah tropis.
                            Proses pembuatan kopi meliputi pemanenan, pengolahan, dan pemanggangan
                            biji, yang mempengaruhi aroma dan rasa. Selain menjadi minuman populer,
                            kopi juga memiliki peran penting dalam budaya dan tradisi di berbagai
                            negara.
                        </div>
                    </PopupBody>
                </Popup>
                <Popup
                    trigger="hover"
                    keepContentOnHover
                    unHoverHideToleranceInMs={25}
                    animationDurationInMs={100}
                >
                    <PopupTrigger>
                        {(state) => (
                            <button class="flex gap-3 items-center border rounded-md px-3 py-1">
                                <div class="flex flex-col items-start">
                                    <span>Hover Untuk Dapatkan Info</span>
                                    <span class="text-sm text-blue-400">Keep content on hover</span>
                                </div>
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
                            Kopi adalah minuman yang dihasilkan dari biji tanaman kopi yang telah
                            dipanggang dan diseduh. Dikenal karena cita rasanya yang khas dan efek
                            stimulan, kopi berasal dari buah kopi yang tumbuh di daerah tropis.
                            Proses pembuatan kopi meliputi pemanenan, pengolahan, dan pemanggangan
                            biji, yang mempengaruhi aroma dan rasa. Selain menjadi minuman populer,
                            kopi juga memiliki peran penting dalam budaya dan tradisi di berbagai
                            negara.
                        </div>
                    </PopupBody>
                </Popup>
            </div>
        </>
    )
}
