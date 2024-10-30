import { Tooltip } from "../tooltip/tooltip"
import { TbBulb } from "solid-icons/tb"

export default function TooltipPreview() {
    return (
        <>
            <h4 class="font-semibold text-lg">Tooltip Preview</h4>
            <Tooltip placement="top-start">
                <button
                    data-tips="Ekstra information to show"
                    class="flex items-center gap-1.5 px-2 pr-3 py-1 font-medium rounded-md w-max text-slate-600 border border-slate-200"
                >
                    <TbBulb />
                    <span>Show Tooltip</span>
                </button>
            </Tooltip>
        </>
    )
}
