import {Component, h, State, Watch} from '@stencil/core';
import Logo from "./nvb-header-b2c/Logo";
import DropdownContainerJobs from "./nvb-header-b2c/DropdownContainerJobs";
import DropdownContainerCareer from "./nvb-header-b2c/DropdownContainerCareer";
import DropdownContainerAccount from "./nvb-header-b2c/DropdownContainerAccount";
import MobileMenu, {ActiveMobileMenuLevel} from "./nvb-header-b2c/MobileMenu";
import Icons from "./nvb-header-b2c/Icons";
import createActiveClassExtender from "./nvb-header-b2c/createActiveClassExtender";
import AnalyticsDataAttributes from "./nvb-header-b2c/AnalyticsDataAttributes";

@Component({
  tag: 'nvb-header-b2c',
  styleUrl: 'nvb-header-b2c.scss',
  shadow: true,
})
export class NvbHeaderB2c {
  @State() isActiveMobileMenu: boolean = false
  @State() activeMobileMenuLevel: ActiveMobileMenuLevel = 'main'

  @Watch('isActiveMobileMenu')
  adjustDocument(isActiveMobileMenu: boolean) {
    if(isActiveMobileMenu) {
      document.body.style.overflow  = 'hidden'
    } else {
      document.body.style.overflow  = ''
    }
  }

  handleOpenMenu() {
    this.isActiveMobileMenu = true
  }

  setActiveMobileMenuLevel(level: ActiveMobileMenuLevel) {
    this.activeMobileMenuLevel = level
  }

  handleClose() {
    this.isActiveMobileMenu = false
    this.activeMobileMenuLevel = "main"
  }

  render() {
    const dropdownActiveClassExtender = createActiveClassExtender('dropdown-wrapper', 'dropdown-wrapper--active', document);
    const linkActiveClassExtender = createActiveClassExtender('menu-link', 'menu-link--active', document);
    return (
      <header>
        <div class="container container--top">
          <div class={'top'}>
            <a href="/werkgever"
               {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers' })}
          >Werkgevers / Plaats vacature</a></div>
        </div>
        <nav class={'main'}>
          <div class="container">
            <div class="main-inner">
              <div class="mobile-menu-button-container">
                <button class={"mobile-menu-button"} onClick={() => this.handleOpenMenu()} aria-label="Open menu">
                  <Icons.menu className={'mobile-menu__header-icon'} />
                </button>
              </div>
              <a href="/" class={'logo-link'}
                 {...AnalyticsDataAttributes({ action: 'ClickOnHeaderLink', label: 'Home'})}><Logo />
              </a>
              <div class={'menu'}>
                <div class={dropdownActiveClassExtender('/vacature')}>
                  <button class='menu-link menu-link--dropdown'>Vacatures</button>
                  <DropdownContainerJobs />
                </div>
                <div class={dropdownActiveClassExtender('/carriere')}>
                  <button class='menu-link menu-link--dropdown'>Carrièretips</button>
                  <DropdownContainerCareer/>
                </div>
                <a href={"/salariswijzer"} class={linkActiveClassExtender('/salariswijzer')}>Salariswijzer</a>
                <hr class={'menu-separator'} />
                <div class={dropdownActiveClassExtender(['/account', '/profiel'])}>
                  <button class='menu-link menu-link--dropdown'>Account</button>
                  <DropdownContainerAccount/>
                </div>
                <div class={"dropdown-backdrop"}/>
              </div>
              <div class={'account-button-container'}>
                <a class={"account-button"} href={"/account"} aria-label="Naar account" {...AnalyticsDataAttributes({ action: 'ClickOnHeaderLink', label: 'Account'})}>
                  <Icons.person className={'mobile-menu__header-icon'} /></a>
              </div>
            </div>
          </div>
        </nav>
        <MobileMenu
          isVisible={this.isActiveMobileMenu}
          handleModalClose={() => this.handleClose()}
          activeMobileMenuLevel={this.activeMobileMenuLevel}
          setActiveMobileMenuLevel={level => this.setActiveMobileMenuLevel(level)}
        />
      </header>
    );
  }

}
