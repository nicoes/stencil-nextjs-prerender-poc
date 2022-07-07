import { newE2EPage } from '@stencil/core/testing';

describe('footer-b2c', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<footer-b2c></footer-b2c>');

    const element = await page.find('footer-b2c');
    expect(element).toHaveClass('hydrated');
  });
});
