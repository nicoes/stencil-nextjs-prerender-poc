import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-b2c',
  styleUrl: 'footer-b2c.css',
  shadow: true,
})
export class FooterB2c {
  @Prop() userName: string;

  render() {
    return (
      <footer>
        <section>This is the footer</section>
        {this.userName && <div>You are logged in {this.userName}</div>}
      </footer>
    );
  }

}
