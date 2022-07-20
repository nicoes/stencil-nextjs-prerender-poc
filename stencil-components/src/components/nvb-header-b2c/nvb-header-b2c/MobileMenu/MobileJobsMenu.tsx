import {h} from "@stencil/core";

const MobileJobsMenu = ({ setActiveMobileMenuLevel }) => <div>
  <div class={'mobile-menu__link-list-title'}>Vacatures</div>
  <ul class={'mobile-menu__link-list'}>
    <li>
      <button class={"mobile-menu__link--no-icon"} onClick={() => setActiveMobileMenuLevel('cities')}>Per plaats
      </button>
    </li>
    <li>
      <button class={"mobile-menu__link--no-icon"} onClick={() => setActiveMobileMenuLevel('industries')}>Per
        branche
      </button>
    </li>
  </ul>
</div>

export default MobileJobsMenu
