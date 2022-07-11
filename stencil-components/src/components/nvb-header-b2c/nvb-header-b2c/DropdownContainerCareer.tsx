import {h} from "@stencil/core";

const DropdownContainerCareer = () =>
  <div class="dropdown-container">
    <ul class={'dropdown-list'}>
      <li>
        <a href="/carriere/actueel">Actueel</a>
      </li>
      <li>
        <a href="/carriere/personal-branding">Personal branding</a>
      </li>
    </ul>
  </div>

export default DropdownContainerCareer
