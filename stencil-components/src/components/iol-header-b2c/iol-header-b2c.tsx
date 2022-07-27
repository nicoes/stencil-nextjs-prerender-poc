import { Component, h } from '@stencil/core';
import Icons from './iol-header-b2c/Icons';
import TopBar from "./iol-header-b2c/TopBar";
import createActiveClassExtender from "../../utils/createActiveClassExtender";
import DropdownContainer from "./iol-header-b2c/DropdownContainer";
import {topicsListItems} from "./config/topicsListItems";
import mainMenuLinks from "./config/mainMenuLinks";
import MainMenuLink from "./iol-header-b2c/MainMenuLink";
import DropdownContainerJobs from "./iol-header-b2c/DropdownContainerJobs";
import {educationItems} from "./config/educationItems";
import Logo from "./iol-header-b2c/Logo";

@Component({
  tag: 'iol-header-b2c',
  styleUrl: 'iol-header-b2c.scss',
  shadow: true,
})
export class IolHeaderB2c {

  handleOpenMenu() {}

  render() {
    const dropdownActiveClassExtender = createActiveClassExtender('dropdown-wrapper', 'dropdown-wrapper--active', document);

    return (
      <header>
        <div class="container container--top">
          <TopBar />
        </div>
        <nav class={'main'}>
          <div class="container">
            <div class="main-inner">
              <div class="mobile-menu-button-container">
                <button class={"mobile-menu-button"} onClick={() => this.handleOpenMenu()} aria-label="Open menu">
                  <Icons.menu className={'mobile-menu__header-icon'}/>
                </button>
              </div>
              <Logo />
              <div class={'menu'}>
                <div class={dropdownActiveClassExtender(topicsListItems.map(item => item.value))}>
                  <MainMenuLink item={mainMenuLinks.TOPICS} withDropdown />
                  <DropdownContainer listItems={topicsListItems} analyticsAction={'ClickOnHeaderTopicsLink'}/>
                </div>
                <MainMenuLink item={mainMenuLinks.TESTEN_EN_TOOLS} />
                <div class={dropdownActiveClassExtender(topicsListItems.map(item => item.value))}>
                  <MainMenuLink item={mainMenuLinks.OPLEIDINGEN} withDropdown />
                  <DropdownContainer listItems={educationItems} analyticsAction={'ClickOnHeaderOpleidingenLink'}/>
                </div>
                <div class={dropdownActiveClassExtender('/vacature')}>
                  <MainMenuLink item={mainMenuLinks.VACATURES} withDropdown />
                  <DropdownContainerJobs/>
                </div>
                <MainMenuLink item={mainMenuLinks.JOUW_PROFIEL} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}
