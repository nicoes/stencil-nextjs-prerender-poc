import {h} from "@stencil/core";
import MobileMainMenu from "./MobileMenu/MobileMainMenu";

type Props = {
  isVisible: boolean
  handleModalClose: () => void
  isAuthenticated: boolean
}

const MobileMenu = ({ isVisible, handleModalClose,isAuthenticated }: Props) => {
  return <div class={isVisible ? 'mobile-menu__wrapper mobile-menu__wrapper--visible' : 'mobile-menu__wrapper'}>
    <div class='mobile-menu__backdrop' onClick={() => handleModalClose()}/>
    <nav class="mobile-menu">
      <div class="mobile-menu__header">
        <div class="mobile-menu__header-button mobile-menu__header-button--close">
          <button onClick={() => handleModalClose()} class={"mobile-menu__close-button"}/>
        </div>
      </div>
      <MobileMainMenu isAuthenticated={isAuthenticated} />
    </nav>
  </div>
}

export default MobileMenu
