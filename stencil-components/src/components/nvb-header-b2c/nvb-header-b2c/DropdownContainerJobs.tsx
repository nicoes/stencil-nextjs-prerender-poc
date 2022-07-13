import {h} from "@stencil/core";
import SubMenu, {SubMenuItem} from "./SubMenu";

const cityListItems: SubMenuItem[] =[
  {
    label: 'Amsterdam',
    value: '/vacatures/plaats/amsterdam'
  },
  {
    label: 'Den Haag',
    value: '/vacatures/plaats/den-haag'
  },
  {
    label: 'Amsterdam',
    value: '/vacatures/plaats/amsterdam'
  },
  {
    label: 'Den Haag',
    value: '/vacatures/plaats/den-haag'
  },
  {
    label: 'Amsterdam',
    value: '/vacatures/plaats/amsterdam'
  },
  {
    label: 'Den Haag',
    value: '/vacatures/plaats/den-haag'
  },
  {
    label: 'Amsterdam',
    value: '/vacatures/plaats/amsterdam'
  },
  {
    label: 'Den Haag',
    value: '/vacatures/plaats/den-haag'
  }
]

const industryListItems: SubMenuItem[] = [
  {
      label: 'Bouw',
      value: '/vacatures/branche/bouw'
  },
  {
    label: 'Onderwijs',
    value: '/vacatures/branche/onderwijs'
  }
]

const DropdownContainerJobs = () =>
  <div class="dropdown-container">
    <ul class={'dropdown-list'}>
      <li>
        <a href="/vacature/zoeken">Zoeken</a>
      </li>
      <li class={'sub-menu-container'}>
        <button class={'sub-menu-link'}>per branche</button>
        <SubMenu listItems={industryListItems} />
      </li>
      <li class={'sub-menu-container'}>
        <button class={'sub-menu-link'}>per plaats</button>
        <SubMenu listItems={cityListItems} />
      </li>
    </ul>
  </div>

export default DropdownContainerJobs
