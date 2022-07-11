let stencilSsrStyles: Record<string, string> = {}

export const registerSsrStyle = (componentTag: string, ssrStyleString: string) => {
    if(typeof window === "undefined") {
        stencilSsrStyles[componentTag] = ssrStyleString
    }
}

export const flushSsrStyles = () => {
    if(typeof window === "undefined") {
        return Object.keys(stencilSsrStyles).reduce((acc, key) => {
            acc += ' ' + stencilSsrStyles[key]
            return acc;
        }, "")
    }
    return ''
}
