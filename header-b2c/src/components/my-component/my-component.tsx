import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentDidRender() {
    console.log("I did render on the client side")
    setTimeout(() => {
      alert('Look at this alert from stencil')
    }, 100)

  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
