import AnalyticsDataAttributes from "../../../../utils/AnalyticsDataAttributes";
import Icons from "../Icons";
import {h} from "@stencil/core";

const MobileMenuAccountAuthenticated = () => <ul class={'mobile-menu__link-list'}>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'JouwProfiel'})}
       class={'mobile-menu__link--with-icon'} href={'/profiel/overzicht'}>
      <Icons.person className={'mobile-menu__link-icon'}/>Profiel
    </a>
  </li>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Favorieten'})}
       class={'mobile-menu__link--with-icon'} href={'/vacature/zoeken/favorieten'}>
      <Icons.favorite className={'mobile-menu__link-icon'}/>Favorieten
    </a>
  </li>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Zoekopdrachten'})}
       class={'mobile-menu__link--with-icon'} href={'/vacature/zoeken/zoekopdrachten-beheren'}>
      <Icons.mail className={'mobile-menu__link-icon'}/>Zoekopdrachten
    </a>
  </li>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'JouwEmailInstellingen'})}
       class={'mobile-menu__link--with-icon'} href={'/account/e-mailinstellingen'}>
      <Icons.settings className={'mobile-menu__link-icon'}/>E-mailinstellingen
    </a>
  </li>
  <li>
    <a {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Uitloggen'})}
       class={'mobile-menu__link--no-icon'} href={'/account/uitloggen'}>
      Uitloggen
    </a>
  </li>
</ul>

export default MobileMenuAccountAuthenticated
