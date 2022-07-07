import { newSpecPage } from '@stencil/core/testing';
import { FooterB2c } from '../footer-b2c';

describe('footer-b2c', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FooterB2c],
      html: `<footer-b2c></footer-b2c>`,
    });
    expect(page.root).toEqualHtml(`
      <footer-b2c>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </footer-b2c>
    `);
  });
});
