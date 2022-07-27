import { Component, h } from '@stencil/core';
import Icons from './iol-header-b2c/Icons';
import TopBar from "./iol-header-b2c/TopBar";
import createActiveClassExtender from "../../utils/createActiveClassExtender";
import DropdownContainer from "./iol-header-b2c/DropdownContainer";
import {topicsListItems} from "./config/topicsListItems";
import mainMenuLinks from "./config/mainMenuLinks";
import MainMenuLink from "./iol-header-b2c/MainMenuLink";
import DropdownContainerJobs from "./iol-header-b2c/DropdownContainerJobs";

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
              <div class={'menu'}>
                <div class={dropdownActiveClassExtender('/vacature')}>
                  <MainMenuLink item={mainMenuLinks.VACATURES} />
                  <DropdownContainerJobs />
                </div>
                <div class={dropdownActiveClassExtender(topicsListItems.map(item => item.value))}>
                  <MainMenuLink item={mainMenuLinks.TOPICS} />
                  <DropdownContainer listItems={topicsListItems} analyticsAction={'ClickOnHeaderTopicsLink'}/>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}
