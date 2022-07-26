import {Component, h, Prop, State, Watch} from '@stencil/core';
import Logo from "./nvb-header-b2c/Logo";
import DropdownContainerJobs from "./nvb-header-b2c/DropdownContainerJobs";
import DropdownContainerCareer from "./nvb-header-b2c/DropdownContainerCareer";
import DropdownContainerAccountAuthenticated from "./nvb-header-b2c/DropdownContainerAccountAuthenticated";
import MobileMenu, {ActiveMobileMenuLevel} from "./nvb-header-b2c/MobileMenu";
import Icons from "./nvb-header-b2c/Icons";
import createActiveClassExtender from "../../utils/createActiveClassExtender";
import AnalyticsDataAttributes from "../../utils/AnalyticsDataAttributes";
import DropdownContainerAccountUnauthenticated from "./nvb-header-b2c/DropdownContainerAccountUnauthenticated";
import AccountButton from "./nvb-header-b2c/AccountButton";

@Component({
  tag: 'nvb-header-b2c',
  styleUrl: 'nvb-header-b2c.scss',
  shadow: true,
})
export class NvbHeaderB2c {
  @State() isActiveMobileMenu: boolean = false
  @Prop() isAuthenticated: boolean
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
             <Logo />
              <div class={'menu'}>
                <div class={dropdownActiveClassExtender('/vacature')}>
                  <button class='menu-link menu-link--dropdown'>Vacatures</button>
                  <DropdownContainerJobs />
                </div>
                <div class={dropdownActiveClassExtender('/carriere')}>
                  <button class='menu-link menu-link--dropdown'>Carrièretips</button>
                  <DropdownContainerCareer/>
                </div>
                <a href={"/salariswijzer"} class={linkActiveClassExtender('/salariswijzer')} {...AnalyticsDataAttributes({
                  action: 'ClickOnHeaderWerkZoekendenLink',
                  label: 'Salariswijzer'
                })}>Salariswijzer</a>
                <hr class={'menu-separator'} />
                <div class={dropdownActiveClassExtender(['/account', '/profiel'])}>
                  <button class='menu-link menu-link--dropdown'>Account</button>
                  {this.isAuthenticated && <DropdownContainerAccountAuthenticated/>}
                  {!this.isAuthenticated && <DropdownContainerAccountUnauthenticated/>}
                </div>
                <div class={"dropdown-backdrop"}/>
              </div>
              <div class={'account-button-container'}>
                <AccountButton />
              </div>
            </div>
          </div>
        </nav>
        <MobileMenu
          isAuthenticated={this.isAuthenticated}
          isVisible={this.isActiveMobileMenu}
          handleModalClose={() => this.handleClose()}
          activeMobileMenuLevel={this.activeMobileMenuLevel}
          setActiveMobileMenuLevel={level => this.setActiveMobileMenuLevel(level)}
        />
      </header>
    );
  }

}
