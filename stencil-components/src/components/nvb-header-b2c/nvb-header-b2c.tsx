import {Component, h, State} from '@stencil/core';
import Logo from "./nvb-header-b2c/Logo";
import DropdownContainerJobs from "./nvb-header-b2c/DropdownContainerJobs";
import DropdownContainerCareer from "./nvb-header-b2c/DropdownContainerCareer";
import {VisibilityChangedEvent} from "../modal-window/modal-window";
import DropdownContainerAccount from "./nvb-header-b2c/DropdownContainerAccount";

@Component({
  tag: 'nvb-header-b2c',
  styleUrl: 'nvb-header-b2c.scss',
  shadow: true,
})
export class NvbHeaderB2c {
  @State() isActiveMobileMenu: boolean = false

  onVisibilityChanged(evt: CustomEvent<VisibilityChangedEvent>) {
    this.isActiveMobileMenu = evt.detail.isVisible
  }

  render() {
    return (
      <header>
        <div class="container">
          <div class={'top'}><a href="#">Werkgevers / Plaats vacature</a></div>
        </div>
        <nav class={'main'}>
          <div class="container">
            <div class="main-inner">
          <a href="#" class={'logo-link'}><Logo /></a>
          <div class={'menu'}>
            <div class="dropdown-wrapper">
              <button class='menu-link menu-link--dropdown'>Vacatures</button>
              <DropdownContainerJobs />
            </div>
            <div class={'dropdown-wrapper'}>
              <button class='menu-link menu-link--dropdown'>Carrièretips</button>
              <DropdownContainerCareer/>
            </div>
            <a href={"/salariswijzer"} class={'menu-link'}>Salariswijzer</a>
            <hr class={'menu-separator'} />
            <div class={'dropdown-wrapper'}>
              <button class='menu-link menu-link--dropdown'>Account</button>
              <DropdownContainerAccount/>
            </div>
            <div class={"dropdown-backdrop"}/>
          </div>
          <div class={'mobile-menu'}>
            <button onClick={() => this.isActiveMobileMenu = !this.isActiveMobileMenu}>Mobile menu</button>
            <modal-window onVisibilityChanged={ev => this.onVisibilityChanged(ev)} is-visible={this.isActiveMobileMenu} modalTitle={'This is the mobile menu'} modalText={'This is the content'} />
          </div>
          </div>
          </div>
        </nav>
      </header>
    );
  }

}
