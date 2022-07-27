import {LinkItem} from "./AnchorList";
import AnalyticsDataAttributes from "./AnalyticsDataAttributes";
import {h} from "@stencil/core";

type Props = {
  item: LinkItem
  withDropdown?: boolean
}

const MainMenuLink = ({item, withDropdown}: Props) =>
  <a href={item.value}
{...AnalyticsDataAttributes({ action: 'ClickOnHeaderLink', label: item.analyticsLabel || item.label })}
class={'menu-link' + (withDropdown ? ' menu-link--dropdown' : '')}>{item.label}</a>

export default MainMenuLink
