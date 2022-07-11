import {Component, h, State} from '@stencil/core';
import Logo from "./nvb-header-b2c/Logo";
import DropdownContainerJobs from "./nvb-header-b2c/DropdownContainerJobs";
import DropdownContainerCareer from "./nvb-header-b2c/DropdownContainerCareer";

type SubMenuType = 'industry' | 'city'
type DropdownType = 'jobs' | 'career'

@Component({
  tag: 'nvb-header-b2c',
  styleUrl: 'nvb-header-b2c.scss',
  shadow: true,
})
export class NvbHeaderB2c {
  @State() activeSubMenu: SubMenuType | null = null
  @State() activeDropdown: DropdownType | null = null

  render() {
    return (
      <header>
        <div class={'top'}><a href="#">Werkgevers / Plaats vacature</a></div>
        <nav class={'main'} onMouseOut={() => {
          this.activeSubMenu = null
        }}>
          <a href="#"><Logo /></a>
          <div class={'menu'}>
            <div class="dropdown-wrapper">
              <button class='menu-link menu-link-dropdown' onMouseOver={() => this.activeDropdown = 'jobs'}>Vacatures</button>
              <DropdownContainerJobs activeSubMenu={this.activeSubMenu} />
            </div>
            <div class={'dropdown-wrapper'}>
              <button class='menu-link menu-link-dropdown'
                      onMouseOver={() => this.activeDropdown = 'career'}>Carrieretips
              </button>
              <DropdownContainerCareer/>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}
