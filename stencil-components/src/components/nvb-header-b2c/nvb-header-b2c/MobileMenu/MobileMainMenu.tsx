import Icons from "../Icons";
import {h} from "@stencil/core";
import AnalyticsDataAttributes from "../../../../utils/AnalyticsDataAttributes";
import MobileMenuAccountAuthenticated from "./MobileMenuAccountAuthenticated";
import MobileMenuAccountUnauthenticated from "./MobileMenuAccountUnauthenticated";

const MobileMainMenu = ({ setActiveMobileMenuLevel, isAuthenticated }) => <div>
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
  {isAuthenticated && <MobileMenuAccountAuthenticated />}
  {!isAuthenticated && <MobileMenuAccountUnauthenticated />}
  <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
     class={'mobile-menu__bottom-link'} href={'/werkgever'}>
    Werkgevers / plaats vacature
  </a>
</div>

export default MobileMainMenu
