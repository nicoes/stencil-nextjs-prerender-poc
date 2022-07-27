import { Component, h } from '@stencil/core';
import Icons from './iol-header-b2c/Icons';
import TopBar from "./iol-header-b2c/TopBar";
import createActiveClassExtender from "../../utils/createActiveClassExtender";
import DropdownContainer from "./iol-header-b2c/DropdownContainer";
import {jobsListItems} from "./config/jobsListItems";
import {topicsListItems} from "./config/topicsListItems";

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
                  <button class='menu-link menu-link--dropdown'>Vacatures</button>
                  <DropdownContainer listItems={jobsListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'}/>
                </div>
                <div class={dropdownActiveClassExtender('/werk-en-carriere')}>
                  <button class='menu-link menu-link--dropdown'>Topics</button>
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
