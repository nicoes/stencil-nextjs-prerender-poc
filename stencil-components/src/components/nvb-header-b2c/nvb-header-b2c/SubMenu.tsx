import {h} from "@stencil/core";
import {AnalyticsAction} from "./AnalyticsDataAttributes";
import AnchorList from "./AnchorList";

export type AnchorListItem = {
  label: string,
  value: string,
  analyticsLabel?: string
}

const SubMenu = (analyticsAction: AnalyticsAction) => ({listItems, subMenuTitle}: {subMenuTitle: string, listItems: AnchorListItem[]}) =>
  <div class={'sub-menu'}>
    <div class={'sub-menu-inner'}>
      <strong class={'sub-menu-title'}>{subMenuTitle}</strong>
      <ul class={'sub-menu-list'}>
        <AnchorList listItems={listItems} analyticsAction={analyticsAction} />
      </ul>
    </div>
</div>

export default SubMenu
