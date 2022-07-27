import {LinkItem} from "./AnchorList";
import AnalyticsDataAttributes from "./AnalyticsDataAttributes";
import {h} from "@stencil/core";

const MainMenuLink = ({item}: {item: LinkItem}) =>
  <a href={item.value}
{...AnalyticsDataAttributes({ action: 'ClickOnHeaderLink', label: item.analyticsLabel || item.label })}
class='menu-link menu-link--dropdown'>{item.label}</a>

export default MainMenuLink
