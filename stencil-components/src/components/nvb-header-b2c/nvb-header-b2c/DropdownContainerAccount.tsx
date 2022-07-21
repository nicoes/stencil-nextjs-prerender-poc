import {h} from "@stencil/core";
import AnalyticsDataAttributes from "./AnalyticsDataAttributes";

const DropdownContainerCareer = () =>
  <div class="dropdown-container">
    <div class="container">
          <ul class={'dropdown-list'}>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: "Zoekopdrachten" })}
                href="/vacature/zoeken/zoekopdrachten-beheren">Zoekopdrachten</a>
            </li>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: "Favorieten" })}
                href="/vacature/zoeken/favorieten">Favorieten</a>
            </li>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: "Jouw profiel" })}
                href="/profiel/overzicht">Jouw profiel</a>
            </li>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: "JouwEmailInstellingen" })}
                href="/account/e-mailinstellingen">E-mailinstellingen</a>
            </li>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: "JouwAccount" })}
                href="/account">Jouw account</a>
            </li>
            <li>
              <a
                { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: "Uitloggen" })}
                href="/account/uitloggen">Uitloggen</a>
            </li>
          </ul>
      </div>
    </div>

export default DropdownContainerCareer
