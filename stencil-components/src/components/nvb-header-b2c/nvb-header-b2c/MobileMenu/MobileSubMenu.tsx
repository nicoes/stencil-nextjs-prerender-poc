import {h} from "@stencil/core";
import AnalyticsDataAttributes from "../AnalyticsDataAttributes";

export type MobileSubMenuItem = {
  label: string,
  value: string
}

const MobileSubMenu = ({listItems, subMenuTitle, capitalizeLabels}: {subMenuTitle: string, listItems: MobileSubMenuItem[], capitalizeLabels?: boolean}) =>
  <div>
    <div class={'mobile-menu__link-list-title'}>{subMenuTitle}</div>
    <ul class={'mobile-menu__link-list' + (capitalizeLabels ? ' mobile-menu__link-list--capitalize' : '')}>
      {listItems.map(item => <li>
        <a
          class={"mobile-menu__link--no-icon"}
          { ...AnalyticsDataAttributes({ action: 'ClickOnHeaderWerkZoekendenLink', label: item.label })}
          href={item.value}>{item.label}</a></li>)}
    </ul>
  </div>

export default MobileSubMenu
