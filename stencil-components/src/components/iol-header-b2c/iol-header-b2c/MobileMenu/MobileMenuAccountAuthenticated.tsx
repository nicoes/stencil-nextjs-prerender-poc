import AnalyticsDataAttributes from "../AnalyticsDataAttributes";
import {h} from "@stencil/core";

const MobileMenuAccountAuthenticated = () => <ul class={'mobile-menu__link-list'}>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderProfileLink', label: 'JouwProfiel'})}
       class={'mobile-menu__link--with-icon'} href={'/profiel/overzicht'}>
      Profiel
    </a>
  </li>
</ul>

export default MobileMenuAccountAuthenticated
