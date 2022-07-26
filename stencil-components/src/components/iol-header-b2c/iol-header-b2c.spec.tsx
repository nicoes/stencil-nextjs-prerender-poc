import { newSpecPage } from '@stencil/core/testing';
import { IolHeaderB2c } from './iol-header-b2c';

describe('iol-header-b2c', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IolHeaderB2c],
      html: `<iol-header-b2c></iol-header-b2c>`,
    });
    expect(page.root).toEqualHtml(`
      <iol-header-b2c>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </iol-header-b2c>
    `);
  });
});
