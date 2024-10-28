export type Rc = Record<string, boolean | undefined | null>
export type Cn = string | undefined | boolean | null | Rc | Array<string> | Array<Rc>

export const cn = (...classess: Cn[]): string => {
    const globalCs = classess.map((classes) => {
        if (classes === null) return ""
        if (typeof classes === "string") return classes

        if (Array.isArray(classes)) {
            const cs = classes.map((it) => {
                if (typeof it === "string") return it

                if (typeof it === "object" && it !== null) {
                    return Object.keys(it)
                        .map((key) => {
                            const value = it[key]
                            if (value) return key
                            return null
                        })
                        .filter(Boolean)
                        .join(" ")
                }

                return null
            })

            return cs.join(" ")
        }

        if (typeof classes === "object" && classes !== null) {
            return Object.keys(classes)
                .map((key) => {
                    const value = classes[key]
                    if (value) return key
                    return null
                })
                .filter(Boolean)
                .join(" ")
        }

        return ""
    })

    return globalCs.filter(Boolean).join(" ")
}
