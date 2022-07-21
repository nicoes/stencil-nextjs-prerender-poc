import {h} from "@stencil/core";
import AnchorList from "../AnchorList";

export type MobileSubMenuItem = {
  label: string,
  value: string
}

type MobileSubMenuProps = {subMenuTitle: string, listItems: MobileSubMenuItem[], capitalizeLabels?: boolean}

const MobileSubMenu = ({listItems, subMenuTitle, capitalizeLabels}: MobileSubMenuProps) =>
  <div>
    <div class={'mobile-menu__link-list-title'}>{subMenuTitle}</div>
    <ul class={'mobile-menu__link-list' + (capitalizeLabels ? ' mobile-menu__link-list--capitalize' : '')}>
      <AnchorList className={"mobile-menu__link--no-icon"} listItems={listItems} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} />
    </ul>
  </div>

export default MobileSubMenu
