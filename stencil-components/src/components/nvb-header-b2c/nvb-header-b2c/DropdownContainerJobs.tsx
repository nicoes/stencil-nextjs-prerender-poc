import {h} from "@stencil/core";
import SubMenuIndustry from "./SubMenuIndustry";
import SubMenuCity from "./SubMenuCity";

const DropdownContainerJobs = () =>
  <div class="dropdown-container">
    <ul class={'dropdown-list'}>
      <li>
        <a href="/vacature/zoeken">Zoeken</a>
      </li>
      <li class={'sub-menu-container'}>
        <button class={'sub-menu-link'}>per branche</button>
        <SubMenuIndustry />
      </li>
      <li class={'sub-menu-container'}>
        <button class={'sub-menu-link'}>per plaats</button>
        <SubMenuCity />
      </li>
    </ul>
  </div>

export default DropdownContainerJobs
