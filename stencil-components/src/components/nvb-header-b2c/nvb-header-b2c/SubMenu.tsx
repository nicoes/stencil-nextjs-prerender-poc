import {h} from "@stencil/core";
import {AnalyticsAction} from "../../../utils/AnalyticsDataAttributes";
import AnchorList from "./AnchorList";

export type AnchorListItem = {
  label: string,
  value: string,
  analyticsLabel?: string
}

type SubMenuProps = {subMenuTitle: string, listItems: AnchorListItem[], isCapitalized? :boolean}

const SubMenu = (analyticsAction: AnalyticsAction) => ({listItems, subMenuTitle, isCapitalized }: SubMenuProps) =>
  <div class={'sub-menu'}>
    <div class={'sub-menu__inner'}>
      <strong class={'sub-menu__title'}>{subMenuTitle}</strong>
      <ul class={'sub-menu__list'}>
        <AnchorList listItems={listItems} analyticsAction={analyticsAction} className={isCapitalized ? 'sub-menu__list-item--capitalized' : ''} />
      </ul>
    </div>
</div>

export default SubMenu
