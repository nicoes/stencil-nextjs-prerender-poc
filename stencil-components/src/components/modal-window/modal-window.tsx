import {Component, EventEmitter, h, Prop, Event} from '@stencil/core';

export interface VisibilityChangedEvent {
  isVisible: boolean
}

@Component({
  tag: 'modal-window',
  styleUrl: 'modal-window.scss',
  shadow: true,
})
export class ModalWindow {
  @Prop() public isVisible: boolean;
  @Prop() public modalTitle: string;
  @Prop() public modalText: string;
  @Event() public visibilityChanged: EventEmitter<VisibilityChangedEvent>;

  private handleModalClose = () => {
    this.visibilityChanged.emit({
      isVisible: false
    });
  };

  render() {
    return (
        <div class={this.isVisible ? 'wrapper visible' : 'wrapper'}>
          <div class='backdrop' onClick={() => this.handleModalClose()} />
          <div class="modal">
            <header>
              <h1>{this.modalTitle}</h1>
              <button onClick={() => this.handleModalClose()}>X</button>
            </header>
            <main>
              {this.modalText}
            </main>
          </div>
        </div>
    );
  }

}
