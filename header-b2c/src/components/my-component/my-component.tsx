import { Component, Prop, h } from '@stencil/core';

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

  componentDidRender() {
    console.log("I did render on the client side")
    setTimeout(() => {
      alert('Look at this alert from stencil')
    }, 100)

  }

  render() {
    return <div>Hello, World! I'm coming from Stencil</div>;
  }
}
