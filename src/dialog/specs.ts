import { DialogProviderContextValue } from "./dialog-provider"

export const contentSpec: DialogProviderContextValue["config"]["contentSpec"] = {
    enterFrom: { opacity: 0, y: -30, filter: "blur(2px)" },
    enterTo: { opacity: 1, y: 0, filter: "blur(0px)" },
    leaveFrom: { opacity: 1, y: 0, filter: "blur(0px)" },
    leaveTo: { opacity: 0, y: 30, filter: "blur(2px)" },
}

export const scrimSpec: DialogProviderContextValue["config"]["scrimSpec"] = {
    enterFrom: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
    enterTo: {
        backgroundColor: "rgba(0, 0, 0, 0.125)",
        backdropFilter: "blur(3px)",
    },
    leaveFrom: { backgroundColor: "rgba(0, 0, 0, 0.125)", backdropFilter: "blur(3px)" },
    leaveTo: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
}
