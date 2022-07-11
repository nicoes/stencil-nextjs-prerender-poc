import { newSpecPage } from '@stencil/core/testing';
import { NvbHeaderB2c } from '../nvb-header-b2c';

describe('nvb-header-b2c', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NvbHeaderB2c],
      html: `<nvb-header-b2c></nvb-header-b2c>`,
    });
    expect(page.root).toEqualHtml(`
      <nvb-header-b2c>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nvb-header-b2c>
    `);
  });
});
