import {h} from "@stencil/core";

const MobileCitiesMenu = () =>
  <div>
    <div class={'mobile-menu__link-list-title'}>Per plaats</div>
    <ul class={'mobile-menu__link-list mobile-menu__link-list--capitalize'}>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/amsterdam"}>Amsterdam</a>
      </li>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/rotterdam"}>Rotterdam</a>
      </li>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/s-gravenhage"}>Den Haag</a>
      </li>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/utrecht"}>Utrecht</a>
      </li>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/groningen"}>Groningen</a>
      </li>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/eindhoven"}>Eindhoven</a>
      </li>
      <li>
        <a class={"mobile-menu__link--no-icon"} href={"/vacatures/plaats/tilburg"}>Tilburg</a>
      </li>
    </ul>
  </div>

export default MobileCitiesMenu
