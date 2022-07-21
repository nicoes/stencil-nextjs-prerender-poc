import {h} from "@stencil/core";
import SubMenu from "./SubMenu";
import AnchorList from "./AnchorList";
import {cityListItems} from "../config/cityListItems";
import {industryListItems} from "../config/industryListItems";
import {jobsListItems} from "../config/jobsListItems";

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
            <JobSeekerSubMenu listItems={cityListItems} subMenuTitle={'Per plaats'} isCapitalized={true} />
          </li>
          <li class={'dropdown-list-expander dropdown-list-expander--jobs'} />
        </ul>
    </div>
  </div>

export default DropdownContainerJobs
