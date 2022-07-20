import {h} from "@stencil/core";

const MobileIndustriesMenu = () => <div>
  <div class={'mobile-menu__link-list-title'}>Per branche</div>
  <ul class={'mobile-menu__link-list'}>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-de-bouw"}>Bouw</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-de-zorg"}>Zorg</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-het-onderwijs"}>Onderwijs</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-de-horeca"}>Horeca</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-de-logistiek"}>Logistiek</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-de-techniek"}>Techniek</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/werken-in-de-sales"}>Sales</a>
    </li>
  </ul>
</div>

export default MobileIndustriesMenu
