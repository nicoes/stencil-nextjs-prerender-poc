import {h} from "@stencil/core";

const DropdownContainerCareer = () =>
  <div class="dropdown-container">
    <div class="container">
          <ul class={'dropdown-list'}>
            <li>
              <a href="/profiel/overzicht">Jouw profiel</a>
            </li>
            <li>
              <a href="/account/e-mailinstellingen">E-mailinstellingen</a>
            </li>
            <li>
              <a href="/account">Jouw account</a>
            </li>
            <li>
              <a href="/account/uitloggen">Uitloggen</a>
            </li>
          </ul>
      </div>
    </div>

export default DropdownContainerCareer
