import {h} from "@stencil/core";
import LogoInverse from "./LogoInverse";
import MobileCitiesMenu from "./MobileMenu/MobileCitiesMenu";
import MobileIndustriesMenu from "./MobileMenu/MobileIndustriesMenu";
import MobileCareerMenu from "./MobileMenu/MobileCareerMenu";
import MobileJobsMenu from "./MobileMenu/MobileJobsMenu";
import MobileMainMenu from "./MobileMenu/MobileMainMenu";

type SecondMobileMenuLevel = 'jobs' | 'career'
type ThirdMobileMenuLevel = 'cities' | 'industries'
export type ActiveMobileMenuLevel = 'main' | SecondMobileMenuLevel | ThirdMobileMenuLevel

const secondLevelIds: SecondMobileMenuLevel[] = ['jobs', 'career']
const thirdLevelIds: ThirdMobileMenuLevel[] = ['cities', 'industries']

type Props = {
  isVisible: boolean
  handleModalClose: () => void
  activeMobileMenuLevel: ActiveMobileMenuLevel,
  setActiveMobileMenuLevel: (level: ActiveMobileMenuLevel) => void,
}

const MobileMenu = ({ isVisible, handleModalClose, activeMobileMenuLevel, setActiveMobileMenuLevel }: Props) => {

  let stackInnerModifier = '';
  let previousLevel: ActiveMobileMenuLevel;
  if(secondLevelIds.indexOf(activeMobileMenuLevel as SecondMobileMenuLevel) > -1) {
    stackInnerModifier = ' mobile-menu__stack-inner--screen2';
    previousLevel = 'main'
  } else if (thirdLevelIds.indexOf(activeMobileMenuLevel as ThirdMobileMenuLevel) > -1) {
    stackInnerModifier = ' mobile-menu__stack-inner--screen3';
    previousLevel = 'jobs'
  }

  return <div class={isVisible ? 'mobile-menu__wrapper mobile-menu__wrapper--visible' : 'mobile-menu__wrapper'}>
    <div class='mobile-menu__backdrop' onClick={() => handleModalClose()}/>
    <nav class="mobile-menu">
      <div class="mobile-menu__header">
        <div class="mobile-menu__header-button mobile-menu__header-button--back">
          {previousLevel && <button onClick={() => setActiveMobileMenuLevel(previousLevel)} class={"mobile-menu__back-button"}>Terug</button>}
        </div>
        <a class="mobile-menu__logo" href="/">
          <LogoInverse/>
        </a>
        <div class="mobile-menu__header-button mobile-menu__header-button--close">
          <button onClick={() => handleModalClose()} class={"mobile-menu__close-button"}/>
        </div>
      </div>
      <div class="mobile-menu__stack">
        <div class={"mobile-menu__stack-inner" + stackInnerModifier}>
          <section class="mobile-menu__stack-screen">
            <MobileMainMenu setActiveMobileMenuLevel={setActiveMobileMenuLevel} />
          </section>
          <section class="mobile-menu__stack-screen">
            {activeMobileMenuLevel === 'jobs' && <MobileJobsMenu setActiveMobileMenuLevel={setActiveMobileMenuLevel} />}
            {activeMobileMenuLevel === 'career' && <MobileCareerMenu />}
          </section>
          <section class="mobile-menu__stack-screen">
            {activeMobileMenuLevel === 'cities' && <MobileCitiesMenu />}
            {activeMobileMenuLevel === 'industries' && <MobileIndustriesMenu />}
          </section>
        </div>
      </div>
    </nav>
  </div>
}

export default MobileMenu
