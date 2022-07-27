import {h} from "@stencil/core";
import AnchorList, {LinkItem} from "./AnchorList";
import {AnalyticsAction} from "./AnalyticsDataAttributes";

const DropdownContainer = ({listItems, analyticsAction}:{listItems: LinkItem[], analyticsAction: AnalyticsAction}) =>
      <ul class={'dropdown-list'}>
        <AnchorList listItems={listItems} analyticsAction={analyticsAction} />
      </ul>

export default DropdownContainer
