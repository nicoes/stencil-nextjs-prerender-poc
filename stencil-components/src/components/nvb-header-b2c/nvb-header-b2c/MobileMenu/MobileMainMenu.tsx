import Icons from "../Icons";
import {h} from "@stencil/core";
import AnalyticsDataAttributes from "../AnalyticsDataAttributes";

const MobileMainMenu = ({ setActiveMobileMenuLevel }) => <div>
  <div class={'mobile-menu__link-list-title'}>Carrière</div>
  <ul class={'mobile-menu__link-list'}>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: 'Vacatures'})}
         class={'mobile-menu__link--with-icon'} href={"/vacature/zoeken"}>
        <Icons.search className={'mobile-menu__link-icon'}/>Vacature zoeken
      </a>
    </li>
    <li>
      <button class={'mobile-menu__link--with-icon'} onClick={() => setActiveMobileMenuLevel('jobs')}>
        <Icons.campaign className={'mobile-menu__link-icon'}/>Vacatures
      </button>
    </li>
    <li>
      <button class={'mobile-menu__link--with-icon'} onClick={() => setActiveMobileMenuLevel('career')}>
        <Icons.lightbulb className={'mobile-menu__link-icon'}/>Carrièretips
      </button>
    </li>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: 'Salariswijzer'})}
         class={'mobile-menu__link--with-icon'} href={"/salariswijzer"}>
        <Icons.euro className={'mobile-menu__link-icon'}/>Salariswijzer
      </a>
    </li>
  </ul>
  <div class={'mobile-menu__link-list-title'}>Account</div>
  <ul class={'mobile-menu__link-list'}>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: 'JouwProfiel'})}
         class={'mobile-menu__link--with-icon'} href={'/profiel/overzicht'}>
        <Icons.person className={'mobile-menu__link-icon'}/>Profiel
      </a>
    </li>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: 'Favorieten'})}
         class={'mobile-menu__link--with-icon'} href={'/vacature/zoeken/favorieten'}>
        <Icons.favorite className={'mobile-menu__link-icon'}/>Favorieten
      </a>
    </li>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: 'Zoekopdrachten'})}
         class={'mobile-menu__link--with-icon'} href={'/vacature/zoeken/zoekopdrachten-beheren'}>
        <Icons.mail className={'mobile-menu__link-icon'}/>Zoekopdrachten
      </a>
    </li>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: 'JouwEmailInstellingen'})}
         class={'mobile-menu__link--with-icon'} href={'/account/e-mailinstellingen'}>
        <Icons.settings className={'mobile-menu__link-icon'}/>E-mailinstellingen
      </a>
    </li>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderAccountLink', label: 'Uitloggen'})}
         class={'mobile-menu__link--no-icon'} href={'/account/uitloggen'}>
        Uitloggen
      </a>
    </li>
  </ul>
  <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
     class={'mobile-menu__bottom-link'} href={'/werkgever'}>
    Werkgevers / plaats vacature
  </a>
</div>

export default MobileMainMenu
