import AnalyticsDataAttributes, {AnalyticsAction} from "./AnalyticsDataAttributes";
import {h} from "@stencil/core";
import {AnchorListItem} from "./SubMenu";

const AnchorList = ({ listItems, analyticsAction }: { listItems: AnchorListItem[], analyticsAction: AnalyticsAction }) => listItems.map(item => <li>
  <a
    { ...AnalyticsDataAttributes({ action: analyticsAction, label: item.analyticsLabel || item.label })}
    href={item.value}>{item.label}</a></li>)

export default AnchorList
