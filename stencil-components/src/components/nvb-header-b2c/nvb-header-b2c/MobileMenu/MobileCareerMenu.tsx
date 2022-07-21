import {h} from "@stencil/core";
import MobileSubMenu from "./MobileSubMenu";
import {careerListItems} from "../DropdownContainerCareer";

const MobileCareerMenu = () => <MobileSubMenu subMenuTitle={'Carrièretips'} listItems={careerListItems} />

export default MobileCareerMenu
