const createActiveClassExtender = (baseClass, activeClass, document) => (startMatch: string | string[]) => {
  const pathname = document?.location?.pathname;
  if (pathname) {
    if(Array.isArray(startMatch)) {
      const isStartMatch = startMatch.find(startString => pathname.startsWith(startString));
      if(isStartMatch) {
        return baseClass + ' ' + activeClass;
      }
    } else if(pathname.startsWith(startMatch)) {
      return baseClass + ' ' + activeClass;
    }
  }
  return baseClass
}

export default createActiveClassExtender
