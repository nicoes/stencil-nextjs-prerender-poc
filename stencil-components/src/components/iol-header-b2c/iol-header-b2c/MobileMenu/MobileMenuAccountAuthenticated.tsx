import AnalyticsDataAttributes from "../AnalyticsDataAttributes";
import {h} from "@stencil/core";
import {accountAuthenticatedMobileListItems} from "../../config/accountAuthenticatedMobileListItems";

const MobileMenuAccountAuthenticated = () => <ul class={'mobile-menu__link-list mobile-menu__link-list--account'}>
  {accountAuthenticatedMobileListItems.map(item => {
    return <li>
      <a href={item.value}
         {...AnalyticsDataAttributes({action: 'ClickOnHeaderAccountLink', label: item.analyticsLabel || item.label})}>
        {item.label}</a>
    </li>
  })}
</ul>

export default MobileMenuAccountAuthenticated
