import {AnalyticsAction} from "../../nvb-header-b2c/nvb-header-b2c/AnalyticsDataAttributes";
import AnchorList from "../../nvb-header-b2c/nvb-header-b2c/AnchorList";
import {h} from "@stencil/core";
import {LinkItem} from "./AnchorList";

type SubMenuProps = {
  listItems: LinkItem[],
  analyticsAction: AnalyticsAction
}

const SubMenu = ({listItems, analyticsAction }: SubMenuProps) => <div class={'sub-menu'}>
    <ul class={'sub-menu__inner'}>
      <AnchorList listItems={listItems} analyticsAction={analyticsAction} />
    </ul>
</div>

export default SubMenu
