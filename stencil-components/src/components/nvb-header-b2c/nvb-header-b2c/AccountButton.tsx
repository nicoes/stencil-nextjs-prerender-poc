import AnalyticsDataAttributes from "./AnalyticsDataAttributes";
import Icons from "./Icons";
import {h} from "@stencil/core";

const AccountButton = () => <a class={"account-button"} href={"/account"}
                         aria-label="Naar account" {...AnalyticsDataAttributes({
  action: 'ClickOnHeaderLink',
  label: 'Account'
})}>
  <Icons.person className={'mobile-menu__header-icon'}/></a>

export default AccountButton
