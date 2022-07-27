import AnalyticsDataAttributes, {AnalyticsAction} from "./AnalyticsDataAttributes";
import {h} from "@stencil/core";

export type LinkItem = {
  label: string,
  value: string,
  analyticsLabel?: string
}

type AnchorListProps = { listItems: LinkItem[], analyticsAction: AnalyticsAction, className?: string }

const AnchorList = ({ listItems, analyticsAction, className }: AnchorListProps) => listItems.map(item => <li>
  <a
    class={className || ''}
    { ...AnalyticsDataAttributes({ action: analyticsAction, label: item.analyticsLabel || item.label })}
    href={item.value}>{item.label}</a></li>)

export default AnchorList
