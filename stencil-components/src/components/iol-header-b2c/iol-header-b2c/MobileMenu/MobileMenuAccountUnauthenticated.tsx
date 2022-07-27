import AnalyticsDataAttributes from "../AnalyticsDataAttributes";
import {h} from "@stencil/core";

const MobileMenuAccountAuthenticated = () => <ul class={'mobile-menu__link-list'}>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Inloggen'})} href={'/account/inloggen'}>
      Inloggen
    </a>
  </li>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderProfileLink', label: 'ProfielMaken'})} href={'/profiel/registreren'}>
      Profiel maken
    </a>
  </li>
</ul>

export default MobileMenuAccountAuthenticated
