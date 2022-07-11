import { newE2EPage } from '@stencil/core/testing';

describe('nvb-header-b2c', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nvb-header-b2c></nvb-header-b2c>');

    const element = await page.find('nvb-header-b2c');
    expect(element).toHaveClass('hydrated');
  });
});
