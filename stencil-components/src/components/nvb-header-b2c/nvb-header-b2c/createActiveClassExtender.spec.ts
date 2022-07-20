import createActiveClassExtender from "./createActiveClassExtender";

describe('createActiveClassExtender', () => {

  it('should extend a class when document pathname starts with provided value', () => {
    const activeClassExtender = createActiveClassExtender('base', 'active', { location: { pathname: '/vacature/zoeken' }})
    expect(activeClassExtender('/vacature')).toEqual('base active')
  })

  it('should not extend a class when document pathname does not start with provided value', () => {
    const activeClassExtender = createActiveClassExtender('base', 'active', { location: { pathname: '/salariswijzer' }})
    expect(activeClassExtender('/vacature')).toEqual('base')
  })

})
