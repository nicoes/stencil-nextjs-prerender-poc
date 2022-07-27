import AnalyticsDataAttributes from "../../nvb-header-b2c/nvb-header-b2c/AnalyticsDataAttributes";
import {h} from "@stencil/core";
import ProfileIcon from "./ProfileIcon";

const TopBar = () => <div class={'top'}>
  <ul class={'top-list'}>
    <li>
      <a href="/werkgever"
       {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: 'Inloggen'})}><ProfileIcon className={'profile-icon'} />Inloggen</a>
    </li>
    <li>
      <a href="/werkgever"
       {...AnalyticsDataAttributes({action: 'ClickOnHeaderProfileLink', label: 'Adverteren'})}>Profiel maken</a>
    </li>
    <li>
      <a href="/werkgever"
       {...AnalyticsDataAttributes({action: 'ClickOnHeaderLink', label: 'Registreren'})}>Adverteren</a>
    </li>
  </ul>
  <a href="/werkgever"
     class={"top__employer-button"}
     {...AnalyticsDataAttributes({action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
  >Voor werkgevers</a>
</div>

export default TopBar
