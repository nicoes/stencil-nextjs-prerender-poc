const createActiveClassExtender = (baseClass, activeClass, document) => (startMatch) => document?.location?.pathname.startsWith(startMatch) ? baseClass + ' ' + activeClass : baseClass

export default createActiveClassExtender
