import { createSignal } from "solid-js"
import { Dialog } from "../dialog/dialog"
import { DialogCloseButton } from "../dialog/dialog-close-button"
import { Popup } from "../popup/popup"
import { PopupTrigger } from "../popup/popup-trigger"
import { PopupBody } from "../popup/popup-body"

export default function DialogPreview() {
    const [openDialog, setOpenDialog] = createSignal(false)
    const [openDialog2, setOpenDialog2] = createSignal(false)

    return (
        <>
            <h4 class="font-semibold text-lg">Dialog Preview</h4>

            {/* Dialog biasa */}
            <Dialog closeOnScrimClick onClose={() => setOpenDialog2(false)} show={openDialog2()}>
                <div class="p-4 bg-white max-w-[400px] mx-auto shadow-lg rounded-xl flex flex-col items-center gap-0.5">
                    <p class="">
                        Kotlin adalah bahasa pemrograman modern yang dikembangkan oleh JetBrains,
                        dirancang untuk interoperabilitas penuh dengan Java, sehingga memudahkan
                        pengembang Java untuk beralih. Kotlin terkenal karena sintaksisnya yang
                        ringkas, sistem tipe yang aman dari null, dan dukungan untuk pemrograman
                        asinkron melalui coroutine. Bahasa ini banyak digunakan dalam pengembangan
                        aplikasi Android, di mana Kotlin diakui sebagai bahasa pilihan oleh Google,
                        serta dalam pengembangan aplikasi server dan web. Fitur menarik lainnya
                        termasuk fungsi ekstensi dan kemampuan pengembangan multiplatform, yang
                        memungkinkan berbagi kode di berbagai platform seperti iOS dan web. Dengan
                        dokumentasi resmi yang lengkap dan komunitas yang aktif, Kotlin menjadi
                        pilihan yang semakin populer di kalangan pengembang.
                    </p>
                </div>
            </Dialog>

            {/* Dialog nested */}
            <Dialog closeOnScrimClick show={openDialog()} onClose={() => setOpenDialog(false)}>
                <div class="p-4 bg-white max-w-[360px] mx-auto shadow-lg rounded-xl flex flex-col items-center gap-0.5">
                    <p class="">
                        <strong>Pramugari</strong> adalah anggota awak kabin pesawat yang bertugas
                        untuk memastikan keselamatan dan kenyamanan penumpang selama penerbangan.
                        Dalam konteks ini, pramugari merujuk pada wanita, sedangkan pramugara
                        merujuk pada pria.
                    </p>

                    <div class="flex gap-3 w-full justify-end mt-2">
                        <Popup placement="bottom-end">
                            <PopupTrigger>
                                <button class="font-semibold">Local Popup</button>
                            </PopupTrigger>
                            <PopupBody>
                                <div class="p-4 border bg-white max-w-[400px] mx-auto shadow-lg rounded-xl flex flex-col items-center gap-0.5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                                    saepe quam, magni vitae natus illum ullam dolores rerum vel
                                    perspiciatis porro quia recusandae veniam? Reiciendis debitis
                                    nulla voluptates ut nam.
                                </div>
                            </PopupBody>
                        </Popup>

                        <button
                            onClick={() => setOpenDialog2(true)}
                            class="text-sky-500 font-semibold w-max"
                        >
                            Second Dialog
                        </button>

                        <DialogCloseButton>
                            <button class="text-rose-500 font-semibold w-max">Close</button>
                        </DialogCloseButton>
                    </div>
                </div>
            </Dialog>
            <div class="flex gap-2">
                <button
                    onClick={() => setOpenDialog2((d) => !d)}
                    class="px-2 py-1 font-medium rounded-md w-max bg-slate-600 text-white border border-transparent"
                >
                    Show Dialog
                </button>

                <button
                    onClick={() => setOpenDialog((d) => !d)}
                    class="px-2 py-1 font-medium rounded-md w-max text-slate-600 border"
                >
                    Show Nested Dialog
                </button>
            </div>
        </>
    )
}
