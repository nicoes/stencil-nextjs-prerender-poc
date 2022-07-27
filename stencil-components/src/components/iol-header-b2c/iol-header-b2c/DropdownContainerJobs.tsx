import {h} from "@stencil/core";
import AnchorList from "./AnchorList";
import {jobsListItems} from "../config/jobsListItems";
import SubMenu from "./SubMenu";
import {cityListItems} from "../config/cityListItems";

const DropdownContainer = () =>
      <ul class={'dropdown-list'}>
        <AnchorList listItems={jobsListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
        <li class={'sub-menu-container'}>
          <button class={'sub-menu-button'}>Vacatures in</button>
          <SubMenu listItems={cityListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
        </li>
      </ul>

export default DropdownContainer
