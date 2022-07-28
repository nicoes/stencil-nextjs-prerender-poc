import {h} from "@stencil/core";
import {LinkItem} from "../AnchorList";
import AnalyticsDataAttributes from "../AnalyticsDataAttributes";

type Props = {
  item: LinkItem
  withDropdown?: boolean
}

const MobileMainMenuLink = ({item, withDropdown}: Props) =>
  <a href={item.value}
{...AnalyticsDataAttributes({ action: 'ClickOnHeaderLink', label: item.analyticsLabel || item.label })}
class={'mobile-menu__link' + (withDropdown ? ' mobile-menu__link--dropdown' : '')}>{item.label}</a>

export default MobileMainMenuLink
