import {h} from "@stencil/core";
import SubMenu, {SubMenuItem} from "./SubMenu";

const cityListItems: SubMenuItem[] =[
  {
    label: 'Amsterdam',
    value: '/vacatures/plaats/amsterdam'
  },
  {
    label: 'Rotterdam',
    value: '/vacatures/plaats/rotterdam'
  },
  {
    label: 'Den Haag',
    value: '/vacatures/plaats/s-gravenhage'
  },
  {
    label: 'Utrecht',
    value: '/vacatures/plaats/utrecht'
  },
  {
    label: 'Eindhoven',
    value: '/vacatures/plaats/eindhoven'
  },
  {
    label: 'Groningen',
    value: '/vacatures/plaats/groningen'
  },
  {
    label: 'Tilburg',
    value: '/vacatures/plaats/tilburg'
  }
]

const industryListItems: SubMenuItem[] = [
  {
      label: 'Bouw',
      value: '/werken-in-de-bouw'
  },
  {
    label: 'Onderwijs',
    value: '/werken-in-het-onderwijs'
  },
  {
    label: 'Zorg',
    value: '/werken-in-de-zorg'
  },
  {
    label: 'Horeca',
    value: '/werken-in-de-horeca'
  },
  {
    label: 'Logistiek',
    value: '/werken-in-de-logistiek'
  },
  {
    label: 'Techniek',
    value: '/werken-in-de-techniek'
  },
  {
    label: 'Sales',
    value: '/werken-in-de-sales'
  }
]

const DropdownContainerJobs = () =>
  <div class="dropdown-container">
    <div class="container">
        <ul class={'dropdown-list'}>
          <li>
            <a href="/vacature/zoeken">Zoeken</a>
          </li>
          <li>
            <a href="/vacature/zoeken/zoekopdrachten-beheren">Zoekopdrachten</a>
          </li>
          <li>
            <a href="/vacature/zoeken/favorieten">Favorieten</a>
          </li>
          <li class={'sub-menu-container'}>
            <button class={'sub-menu-link'}>Per branche</button>
            <SubMenu listItems={industryListItems} subMenuTitle={'Per branche'} />
          </li>
          <li class={'sub-menu-container'}>
            <button class={'sub-menu-link'}>Per plaats</button>
            <SubMenu listItems={cityListItems} subMenuTitle={'Per plaats'} />
          </li>
          <li class={'dropdown-list-expander dropdown-list-expander--jobs'} />
        </ul>
    </div>
  </div>

export default DropdownContainerJobs
