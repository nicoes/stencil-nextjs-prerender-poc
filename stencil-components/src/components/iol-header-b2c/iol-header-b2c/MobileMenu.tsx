import {h} from "@stencil/core";
import MobileLogo from "./MobileMenu/MobileLogo";
import Icons from "./Icons";
import CollapsibleMenu from "./MobileMenu/CollapsibleMenu";
import mainMenuLinks from "../config/mainMenuLinks";
import {jobsListItems} from "../config/jobsListItems";
import MobileMenuAccountAuthenticated from "./MobileMenu/MobileMenuAccountAuthenticated";
import MobileMenuAccountUnauthenticated from "./MobileMenu/MobileMenuAccountUnauthenticated";
import {educationItems} from "../config/educationItems";
import {topicsListItems} from "../config/topicsListItems";
import MobileMainMenuLink from "./MobileMenu/MobileMainMenuLink";
import AnalyticsDataAttributes from "../../nvb-header-b2c/nvb-header-b2c/AnalyticsDataAttributes";

export enum CollapsibleId {
  JOBS,
  TOPICS,
  EDUCATION
}

type Props = {
  isVisible: boolean
  handleModalClose: () => void,
  handleToggleCollapsible: (collapsibleId: CollapsibleId) => void,
  isAuthenticated: boolean
  isOpenTopicsMenu: boolean
  isOpenEducationMenu: boolean
  isOpenJobsMenu: boolean
}

const MobileMenu = ({ isVisible, handleModalClose, isAuthenticated, isOpenTopicsMenu, isOpenEducationMenu, isOpenJobsMenu, handleToggleCollapsible }: Props) => {
  return <div class={isVisible ? 'mobile-menu__wrapper mobile-menu__wrapper--visible' : 'mobile-menu__wrapper'}>
    <div class='mobile-menu__backdrop' onClick={() => handleModalClose()}/>
    <nav class="mobile-menu">
      <div class="mobile-menu__header">
        <MobileLogo />
        <div class="mobile-menu__header-button mobile-menu__header-button--close">
          <button onClick={() => handleModalClose()} class={"mobile-menu__close-button"}>
            <Icons.close className={'mobile-menu__close-button-icon'} />
          </button>
        </div>
      </div>
      <div class={'mobile-menu__main'}>
        <ul class={'mobile-menu__link-list'}>
          <li>
            <CollapsibleMenu isOpen={isOpenTopicsMenu} onClickToggle={() => handleToggleCollapsible(CollapsibleId.TOPICS)} analyticsAction={'ClickOnHeaderTopicsLink'} topLinkItem={mainMenuLinks.TOPICS}
                             linkList={topicsListItems}/>
          </li>
          <li>
            <MobileMainMenuLink item={mainMenuLinks.TESTEN_EN_TOOLS} />
          </li>
          <li>
            <CollapsibleMenu isOpen={isOpenEducationMenu} onClickToggle={() => handleToggleCollapsible(CollapsibleId.EDUCATION)} analyticsAction={'ClickOnHeaderOpleidingenLink'} topLinkItem={mainMenuLinks.OPLEIDINGEN}
                             linkList={educationItems}/>
          </li>
          <li>
            <CollapsibleMenu isOpen={isOpenJobsMenu} onClickToggle={() => handleToggleCollapsible(CollapsibleId.JOBS)} analyticsAction={'ClickOnHeaderWerkZoekendenLink'} topLinkItem={mainMenuLinks.VACATURES}
                             linkList={jobsListItems}/>
          </li>
        </ul>
        {isAuthenticated && <MobileMenuAccountAuthenticated/>}
        {!isAuthenticated && <MobileMenuAccountUnauthenticated/>}
      </div>
      {!isAuthenticated && <div class={"mobile-menu__employer-button"}><a href="/werkgever"
         {...AnalyticsDataAttributes({action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
      >Voor werkgevers</a></div>}
    </nav>
  </div>
}

export default MobileMenu
