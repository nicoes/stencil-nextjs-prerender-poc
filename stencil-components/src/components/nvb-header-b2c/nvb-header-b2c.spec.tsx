import { newSpecPage } from '@stencil/core/testing';
import { NvbHeaderB2c } from './nvb-header-b2c';

describe('nvb-header-b2c', () => {
  it('renders on page load', async () => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`
    });
    expect(page.root).toMatchSnapshot()
  });
  it('renders with mobile menu open', async () => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`
    });
    expect(page.body.style.overflow).toBe("")
    const mobileMenuButton = page.root.shadowRoot.querySelector('.mobile-menu-button') as HTMLButtonElement
    mobileMenuButton.click()
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot()
  });
  it.each([['jobs'], ['career'], ['cities'], ['industries']])('renders with mobile menu open at level %s', async (level) => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`
    });
    expect(page.body.style.overflow).toBe("")
    const mobileMenuButton = page.root.shadowRoot.querySelector('.mobile-menu-button') as HTMLButtonElement
    mobileMenuButton.click()
    page.rootInstance.setActiveMobileMenuLevel(level)
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot()
  });
  it('should open and close the menu properly', async () => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`
    });
    expect(page.body.style.overflow).toBe("")
    const mobileMenuButton = page.root.shadowRoot.querySelector('.mobile-menu-button') as HTMLButtonElement
    mobileMenuButton.click()
    await page.waitForChanges();
    expect(page.body.style.overflow).toBe("hidden")
    expect(page.root.shadowRoot.querySelector('.mobile-menu__wrapper').className).toContain("mobile-menu__wrapper--visible")
    const mobileMenuButtonClose = page.root.shadowRoot.querySelector('.mobile-menu__close-button') as HTMLButtonElement
    mobileMenuButtonClose.click()
    await page.waitForChanges();
    expect(page.body.style.overflow).toBe("")
    expect(page.root.shadowRoot.querySelector('.mobile-menu__wrapper').className).not.toContain("mobile-menu__wrapper--visible")
  });
  it.each([['jobs', 'main'], ['career', 'main'], ['cities', 'jobs'], ['industries', 'jobs']])('should be able to navigate back from sub level %s to %s', async (level, previousLevel) => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`
    });
    expect(page.body.style.overflow).toBe("")
    const mobileMenuButton = page.root.shadowRoot.querySelector('.mobile-menu-button') as HTMLButtonElement
    mobileMenuButton.click()
    page.rootInstance.setActiveMobileMenuLevel(level)
    await page.waitForChanges();
    const mobileMenuButtonBack = page.root.shadowRoot.querySelector('.mobile-menu__back-button') as HTMLButtonElement
    mobileMenuButtonBack.click()
    await page.waitForChanges();
    expect(page.rootInstance.activeMobileMenuLevel).toBe(previousLevel)
  })
  it('close the mobile menu when clicking outside the mobile menu', async () => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`
    });
    expect(page.body.style.overflow).toBe("")
    const mobileMenuButton = page.root.shadowRoot.querySelector('.mobile-menu-button') as HTMLButtonElement
    mobileMenuButton.click()
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.mobile-menu__wrapper').className).toContain("mobile-menu__wrapper--visible")
    const mobileMenuBackdrop = page.root.shadowRoot.querySelector('.mobile-menu__backdrop') as HTMLButtonElement
    mobileMenuBackdrop.click()
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('.mobile-menu__wrapper').className).not.toContain("mobile-menu__wrapper--visible")
  });
  it('should reset the mobile menu level when closed', async () => {
    const component = new NvbHeaderB2c();
    expect(component.activeMobileMenuLevel).toBe('main');
    component.setActiveMobileMenuLevel('jobs');
    expect(component.activeMobileMenuLevel).toBe('jobs');
    component.handleClose();
    expect(component.activeMobileMenuLevel).toBe('main');
  });
});
