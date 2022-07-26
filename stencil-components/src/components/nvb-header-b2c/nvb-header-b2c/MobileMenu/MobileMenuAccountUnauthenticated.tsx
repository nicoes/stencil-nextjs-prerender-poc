import AnalyticsDataAttributes from "../../../../utils/AnalyticsDataAttributes";
import Icons from "../Icons";
import {h} from "@stencil/core";

const MobileMenuAccountAuthenticated = () => <ul class={'mobile-menu__link-list'}>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Inloggen'})}
       class={'mobile-menu__link--with-icon'} href={'/account/inloggen'}>
      <Icons.person className={'mobile-menu__link-icon'}/>Inloggen
    </a>
  </li>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Registreren'})}
       class={'mobile-menu__link--with-icon'} href={'/profiel/registreren'}>
      <Icons.pencil className={'mobile-menu__link-icon'}/>Registreren
    </a>
  </li>
</ul>

export default MobileMenuAccountAuthenticated
