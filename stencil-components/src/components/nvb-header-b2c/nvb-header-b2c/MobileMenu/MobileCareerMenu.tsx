import {h} from "@stencil/core";

const MobileCareerMenu = () => <div>
  <div class={'mobile-menu__link-list-title'}>Carrièretips</div>
  <ul class={'mobile-menu__link-list'}>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere"}>Alle</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/actueel"}>Actueel</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/motivatiebrief"}>Motivatiebrief</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/salaris"}>Salaris</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/sollicitatiegesprek"}>Sollicitatiegesprek</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/curriculum-vitae"}>Curriculum Vitae</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/carriere-ontwikkeling"}>Carrière ontwikkeling</a>
    </li>
    <li>
      <a class={"mobile-menu__link--no-icon"} href={"/carriere/personal-branding"}>Personal branding</a>
    </li>
  </ul>
</div>


export default MobileCareerMenu
