import {h} from "@stencil/core";
import AnalyticsDataAttributes from "./AnalyticsDataAttributes";

const DropdownContainerAccountAuthenticated = () =>
  <div class="dropdown-container">
    <div class="container">
          <ul class={'dropdown-list'}>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: "Inloggen" })}
                href="/account/inloggen">Inloggen</a>
            </li>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: "Registreren" })}
                href="/profiel/registreren">Registreren</a>
            </li>
          </ul>
      </div>
    </div>

export default DropdownContainerAccountAuthenticated
