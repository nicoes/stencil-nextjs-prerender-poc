import {Component, EventEmitter, h, Prop, Event, Watch} from '@stencil/core';

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

  componentDidLoad() {
    this.adjustDocument(this.isVisible)
  }

  @Watch('isVisible')
  onNameChanged(isVisible: boolean) {
    this.adjustDocument(isVisible)
  }

  adjustDocument(isVisible: boolean) {
    if(isVisible) {
      document.body.style.overflow  = 'hidden'
    } else {
      document.body.style.overflow  = 'visible'
    }
  }

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
