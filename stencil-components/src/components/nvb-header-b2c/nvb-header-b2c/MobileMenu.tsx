import {h} from "@stencil/core";
import LogoInverse from "./LogoInverse";
import Icons from "./Icons";

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
        <div class="mobile-menu__header-button mobile-menu__header-button--back">
          {previousLevel && <button onClick={() => setActiveMobileMenuLevel(previousLevel)} class={"mobile-menu__back-button"}>Terug</button>}
        </div>
        <div class="mobile-menu__logo">
          <LogoInverse/>
        </div>
        <div class="mobile-menu__header-button mobile-menu__header-button--close">
          <button onClick={() => handleModalClose()} class={"mobile-menu__close-button"}/>
        </div>
      </div>
      <div class="mobile-menu__stack">
        <div class={"mobile-menu__stack-inner" + stackInnerModifier}>
          <section class="mobile-menu__stack-screen">
            <div class={'mobile-menu__link-list-title'}>Carriere</div>
            <ul class={'mobile-menu__link-list'}>
              <li>
                <a class={'mobile-menu__link--with-icon'} href={"/vacature/zoeken"}>
                  <Icons.search className={'mobile-menu__link-icon'}/>Vacature zoeken
                </a>
              </li>
              <li>
                <button class={'mobile-menu__link--with-icon'} onClick={() => setActiveMobileMenuLevel('jobs')}><Icons.campaign className={'mobile-menu__link-icon'} />Vacatures</button>
              </li>
              <li>
                <button class={'mobile-menu__link--with-icon'} onClick={() => setActiveMobileMenuLevel('career')}><Icons.lightbulb className={'mobile-menu__link-icon'} />Carrièretips</button>
              </li>
              <li>
                <a class={'mobile-menu__link--with-icon'} href={"/salariswijzer"}>
                  <Icons.euro className={'mobile-menu__link-icon'}/>Salariswijzer
                </a>
              </li>
            </ul>
            <div class={'mobile-menu__link-list-title'}>Account</div>
            <ul class={'mobile-menu__link-list'}>
              <li>
                <a class={'mobile-menu__link--with-icon'} href={'/profiel/overzicht'}>
                  <Icons.person className={'mobile-menu__link-icon'}/>Profiel
                </a>
              </li>
              <li>
                <a class={'mobile-menu__link--with-icon'} href={'/vacature/zoeken/favorieten'}>
                  <Icons.favorite className={'mobile-menu__link-icon'}/>Favorieten
                </a>
              </li>
              <li>
                <a class={'mobile-menu__link--with-icon'} href={'/vacature/zoeken/zoekopdrachten-beheren'}>
                  <Icons.mail className={'mobile-menu__link-icon'}/>Zoekopdrachten
                </a>
              </li>
              <li>
                <a class={'mobile-menu__link--with-icon'} href={'/account'}>
                  <Icons.settings className={'mobile-menu__link-icon'}/>Instellingen
                </a>
              </li>
              <li>
                <a class={'mobile-menu__link--no-icon'} href={'/account/uitloggen'}>
                  Uitloggen
                </a>
              </li>
            </ul>
            <a class={'mobile-menu__bottom-link'} href={'/werkgever'}>
              Werkgevers / plaats vacature
            </a>
          </section>
          <section class="mobile-menu__stack-screen">
            {activeMobileMenuLevel === 'jobs' && <div>
              <div class={'mobile-menu__link-list-title'}>Vacactures</div>
              <ul class={'mobile-menu__link-list'}>
                <li>
                  <button class={"mobile-menu__link--no-icon"} onClick={() => setActiveMobileMenuLevel('cities')}>Per plaats</button>
                </li>
                <li>
                  <button class={"mobile-menu__link--no-icon"} onClick={() => setActiveMobileMenuLevel('industries')}>Per branche</button>
                </li>
              </ul>
            </div>}
            {activeMobileMenuLevel === 'career' && <div>
              <div class={'mobile-menu__link-list-title'}>Carrièretips</div>
              <ul class={'mobile-menu__link-list'}>
                <li>
                  <a class={"mobile-menu__link--no-icon"} href={""}>Alle</a>
                </li>
                <li>
                  <a class={"mobile-menu__link--no-icon"} href={""}>Actueel</a>
                </li>
              </ul>
            </div>}
          </section>
          <section class="mobile-menu__stack-screen">
            {activeMobileMenuLevel === 'cities' && <div>
              <div class={'mobile-menu__link-list-title'}>Per plaats</div>
              <ul class={'mobile-menu__link-list mobile-menu__link-list--capitalize'}>
                <li>
                  <a class={"mobile-menu__link--no-icon"} href={""}>Amsterdam</a>
                </li>
                <li>
                  <a class={"mobile-menu__link--no-icon"} href={""}>Utrecht</a>
                </li>
              </ul>
            </div>}
            {activeMobileMenuLevel === 'industries' && <div>
              <div class={'mobile-menu__link-list-title'}>Per branche</div>
              <ul class={'mobile-menu__link-list'}>
                <li>
                  <a class={"mobile-menu__link--no-icon"} href={""}>Bouw</a>
                </li>
                <li>
                  <a class={"mobile-menu__link--no-icon"} href={""}>Onderwijs</a>
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
