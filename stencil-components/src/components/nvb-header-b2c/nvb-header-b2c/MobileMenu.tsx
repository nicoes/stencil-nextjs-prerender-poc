import {h} from "@stencil/core";
import LogoInverse from "./LogoInverse";

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
    <div class="mobile-menu">
      <div class="mobile-menu__header">
        <div class="mobile-menu__header-button">
          {previousLevel && <button onClick={() => setActiveMobileMenuLevel(previousLevel)} class={"mobile-menu__back-button"}/>}
        </div>
        <div class="mobile-menu__logo">
          <LogoInverse/>
        </div>
        <div class="mobile-menu__header-button">
          <button onClick={() => handleModalClose()} class={"mobile-menu__close-button"}/>
        </div>
      </div>
      <div class="mobile-menu__stack">
        <div class={"mobile-menu__stack-inner" + stackInnerModifier}>
          <section class="mobile-menu__stack-screen">
            <ul>
              <li>
                <button onClick={() => setActiveMobileMenuLevel('jobs')}>Vacatures</button>
              </li>
              <li>
                <button onClick={() => setActiveMobileMenuLevel('career')}>Carrieretips</button>
              </li>
            </ul>
          </section>
          <section class="mobile-menu__stack-screen">
            {activeMobileMenuLevel === 'jobs' && <div>
              <ul>
                <li>
                  <button onClick={() => setActiveMobileMenuLevel('cities')}>Per plaats</button>
                </li>
                <li>
                  <button onClick={() => setActiveMobileMenuLevel('industries')}>Per branche</button>
                </li>
              </ul>
            </div>}
            {activeMobileMenuLevel === 'career' && <div>
              <ul>
                <li>
                  <a href={""}>Carrieretips</a>
                </li>
                <li>
                  <a href={""}>Actueel</a>
                </li>
              </ul>
            </div>}
          </section>
          <section class="mobile-menu__stack-screen">
            {activeMobileMenuLevel === 'cities' && <div>
              <ul>
                <li>
                  <a href={""}>Amsterdam</a>
                </li>
                <li>
                  <a href={""}>Utrecht</a>
                </li>
              </ul>
            </div>}
            {activeMobileMenuLevel === 'industries' && <div>
              <ul>
                <li>
                  <a href={""}>Bouw</a>
                </li>
                <li>
                  <a href={""}>Onderwijs</a>
                </li>
              </ul>
            </div>}
          </section>
        </div>
      </div>
    </div>
  </div>
}

export default MobileMenu
