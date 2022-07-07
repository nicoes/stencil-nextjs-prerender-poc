import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {

  timer: number;

  @State() time: number = 0

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = this.time + 1
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  onTimerClick() {
    console.log('Timer clicked upon')
    this.time = this.time + 100
  }

  render() {
    return (
      <button onClick={() => this.onTimerClick()}>{ this.time }</button>
    );
  }
}
