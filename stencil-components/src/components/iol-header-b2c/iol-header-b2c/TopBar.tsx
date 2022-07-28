import AnalyticsDataAttributes from "../../nvb-header-b2c/nvb-header-b2c/AnalyticsDataAttributes";
import {h} from "@stencil/core";
import ProfileIcon from "./ProfileIcon";
import {accountUnauthenticatedListItems} from "../config/accountUnauthenticatedListItems";
import {accountAuthenticatedListItems} from "../config/accountAuthenticatedListItems";

const getIconForLabel = (label: string) => {
  if(label === 'Inloggen') {
    return <ProfileIcon className={'profile-icon'} />
  } else if (label === 'Account') {
    return <ProfileIcon className={'profile-icon'} withFill />
  }
}

const TopBar = ({ emailAddress }: { emailAddress?: string}) => <div class={'top'}>
  <ul class={'top-list'}>
    {!!emailAddress && accountAuthenticatedListItems.map(item => {
      return <li>
        <a href={item.value}
           {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: item.analyticsLabel || item.label})}>
          {getIconForLabel(item.label)}{item.label === 'Account' ? emailAddress : item.label}</a>
      </li>
    })}
    {!emailAddress && accountUnauthenticatedListItems.map(item => {
      return <li>
        <a href={item.value}
           {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: item.analyticsLabel || item.label})}>
            {getIconForLabel(item.label)}{item.label}</a>
      </li>
    })}
  </ul>
  <a href="/werkgever"
     class={"top__employer-button"}
     {...AnalyticsDataAttributes({action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
  >Voor werkgevers</a>
</div>

export default TopBar
