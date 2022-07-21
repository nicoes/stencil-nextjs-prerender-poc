import {h} from "@stencil/core";
import SubMenu, {AnchorListItem} from "./SubMenu";
import AnchorList from "./AnchorList";

export const cityListItems: AnchorListItem[] =[
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

export const industryListItems: AnchorListItem[] = [
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

const jobsListItems: AnchorListItem[] = [
  {
    label: 'Zoeken',
    value: "/vacature/zoeken",
    analyticsLabel: 'Vacatures'
  },
  {
    label: 'Zoekopdrachten',
    value: "/vacature/zoeken/zoekopdrachten-beheren"
  },
  {
    label: 'Favorieten',
    value: "/vacature/zoeken/favorieten"
  }
]

const JobSeekerSubMenu = SubMenu('ClickOnHeaderWerkZoekendenLink')

const DropdownContainerJobs = () =>
  <div class="dropdown-container">
    <div class="container">
        <ul class={'dropdown-list'}>
          <AnchorList listItems={jobsListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
          <li class={'sub-menu-container'}>
            <button class={'sub-menu-link'}>Per branche</button>
            <JobSeekerSubMenu listItems={industryListItems} subMenuTitle={'Per branche'} />
          </li>
          <li class={'sub-menu-container'}>
            <button class={'sub-menu-link'}>Per plaats</button>
            <JobSeekerSubMenu listItems={cityListItems} subMenuTitle={'Per plaats'} />
          </li>
          <li class={'dropdown-list-expander dropdown-list-expander--jobs'} />
        </ul>
    </div>
  </div>

export default DropdownContainerJobs
