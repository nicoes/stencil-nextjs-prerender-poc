import {h} from "@stencil/core";
import AnchorList from "./AnchorList";
import {jobsListItems} from "../config/jobsListItems";

const DropdownContainerJobs = () =>
  <div class="dropdown-container">
    <div class="container">
        <ul class={'dropdown-list'}>
          <AnchorList listItems={jobsListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
        </ul>
    </div>
  </div>

export default DropdownContainerJobs
