import { createSignal } from "solid-js"
import { Dialog } from "./dialog/dialog"
import { DialogProvider } from "./dialog/dialog-provider"
import { DialogCloseButton } from "./dialog/dialog-close-button"
import "./preview.scss"

export default function Preview() {
    const [openDialog, setOpenDialog] = createSignal(false)
    const [openDialog2, setOpenDialog2] = createSignal(false)

    return (
        // Panggil DialogProvider sekali di root App Element
        <DialogProvider
            config={{
                animationInSecond: 0.3,
            }}
        >
            <div class="flex flex-col w-full justify-center mt-4 items-center gap-2">
                <div>{openDialog() ? "Show" : "Hide"}</div>
                <button
                    onClick={() => setOpenDialog((d) => !d)}
                    class="px-2 py-1 rounded-md w-max bg-slate-500 text-white"
                >
                    Show Modal
                </button>
                <Dialog show={openDialog()} onClose={() => setOpenDialog(false)}>
                    <div class="p-3 bg-white max-w-[400px] mx-auto shadow-lg rounded-xl flex flex-col items-center gap-0.5">
                        <Dialog onClose={() => setOpenDialog2(false)} show={openDialog2()}>
                            <div class="p-3 bg-white max-w-[400px] mx-auto shadow-lg rounded-xl flex flex-col items-center gap-0.5">
                                <p>Second dialog content</p>
                                <DialogCloseButton>
                                    <button class="text-rose-500 py-1 px-2 border-b border-transparent hover:border-rose-400 w-max">
                                        Close
                                    </button>
                                </DialogCloseButton>
                            </div>
                        </Dialog>

                        <p>
                            Pramugari adalah anggota awak kabin pesawat yang bertugas untuk
                            memastikan keselamatan dan kenyamanan penumpang selama penerbangan.
                            Dalam konteks ini, pramugari merujuk pada wanita, sedangkan pramugara
                            merujuk pada pria.
                        </p>
                        <div class="flex gap-2">
                            <button
                                onClick={() => setOpenDialog2(true)}
                                class="text-sky-500 py-1 px-2 border-b border-transparent hover:border-sky-400 w-max"
                            >
                                Open Second Dialog
                            </button>
                            <DialogCloseButton>
                                <button class="text-rose-500 py-1 px-2 border-b border-transparent hover:border-rose-400 w-max">
                                    Close
                                </button>
                            </DialogCloseButton>
                        </div>
                    </div>
                </Dialog>
            </div>
        </DialogProvider>
    )
}
