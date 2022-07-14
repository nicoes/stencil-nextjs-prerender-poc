import {h} from "@stencil/core";

const MobileMenu = ({ isVisible, handleModalClose }) =>
  <div class={isVisible ? 'mobile-menu__wrapper mobile-menu__wrapper--visible' : 'mobile-menu__wrapper'}>
    <div class='mobile-menu__backdrop' onClick={() => handleModalClose()}/>
    <div class="mobile-menu">
      <header>
        Mobile menu
        <button onClick={() => handleModalClose()}>X</button>
      </header>
    </div>
  </div>

export default MobileMenu
