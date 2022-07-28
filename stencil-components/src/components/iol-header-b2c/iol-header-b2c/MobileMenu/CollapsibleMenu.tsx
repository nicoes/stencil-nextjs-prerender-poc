import {h} from "@stencil/core";
import AnalyticsDataAttributes, {AnalyticsAction} from "../AnalyticsDataAttributes";
import AnchorList, {LinkItem} from "../AnchorList";

type Props = {
  analyticsAction: AnalyticsAction,
  topLinkItem: LinkItem,
  linkList: LinkItem[],
  onClickToggle: () => void,
  isOpen: boolean
}

const CollapsibleMenu = ({ analyticsAction, topLinkItem, linkList, onClickToggle, isOpen }: Props) => {
  return <div class={'collapsible-menu'}>
    <summary class={'collapsible-menu__toggle' + (isOpen ? ' collapsible-menu__toggle--open' : '')} onClick={() => onClickToggle()}>
      <a class={'collapsible-menu__top-link'} {...AnalyticsDataAttributes({action: analyticsAction, label: topLinkItem.analyticsLabel || topLinkItem.label})}
         href={topLinkItem.value}>
        {topLinkItem.label}
      </a>
    </summary>
    {isOpen && <ul class={'collapsible-menu__list'}>
      <AnchorList listItems={linkList} analyticsAction={analyticsAction} className={'collapsible-menu__list-item'}/>
    </ul>}
  </div>
}

export default CollapsibleMenu
