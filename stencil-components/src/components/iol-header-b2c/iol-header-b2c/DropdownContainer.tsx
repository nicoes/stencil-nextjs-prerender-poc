import {h} from "@stencil/core";
import AnchorList, {AnchorListItem} from "./AnchorList";
import {AnalyticsAction} from "./AnalyticsDataAttributes";

const DropdownContainer = ({listItems, analyticsAction}:{listItems: AnchorListItem[], analyticsAction: AnalyticsAction}) =>
      <menu class={'dropdown-list'}>
        <AnchorList listItems={listItems} analyticsAction={analyticsAction} />
      </menu>

export default DropdownContainer
