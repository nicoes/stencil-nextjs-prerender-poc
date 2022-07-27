import {h} from "@stencil/core";
import AnalyticsDataAttributes from "../AnalyticsDataAttributes";
import MobileMenuAccountAuthenticated from "./MobileMenuAccountAuthenticated";
import MobileMenuAccountUnauthenticated from "./MobileMenuAccountUnauthenticated";

const MobileMainMenu = ({ isAuthenticated }) => <div>
  <div class={'mobile-menu__link-list-title'}>Carrière</div>
  <ul class={'mobile-menu__link-list'}>
    <li>
      <a {...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: 'Vacatures'})}
         class={'mobile-menu__link--with-icon'} href={"/vacature/zoeken"}>
        Vacature zoeken
      </a>
    </li>
  </ul>
  {isAuthenticated && <MobileMenuAccountAuthenticated />}
  {!isAuthenticated && <MobileMenuAccountUnauthenticated />}
</div>

export default MobileMainMenu
