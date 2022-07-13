import {Component, EventEmitter, h, Prop, Event, Watch} from '@stencil/core';

export interface VisibilityChangedEvent {
  isVisible: boolean
}

@Component({
  tag: 'mobile-menu',
  styleUrl: 'mobile-menu.scss',
  shadow: true,
})
export class MobileMenu {
  @Prop() public isVisible: boolean;
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
          <div class="mobile-menu">
            <header>
              Mobile menu
              <button onClick={() => this.handleModalClose()}>X</button>
            </header>
          </div>
        </div>
    );
  }

}
