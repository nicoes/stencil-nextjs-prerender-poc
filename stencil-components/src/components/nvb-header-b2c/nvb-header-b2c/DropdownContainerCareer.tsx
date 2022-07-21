import {h} from "@stencil/core";
import AnchorList from "./AnchorList";
import {careerListItems} from "../config/careerListItems";

const DropdownContainerCareer = () =>
  <div class="dropdown-container">
    <div class="container">
        <ul class={'dropdown-list'}>
          <AnchorList listItems={careerListItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
        </ul>
    </div>
  </div>

export default DropdownContainerCareer
