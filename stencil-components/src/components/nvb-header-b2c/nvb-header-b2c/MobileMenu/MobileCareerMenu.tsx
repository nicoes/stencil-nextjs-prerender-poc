import {h} from "@stencil/core";
import MobileSubMenu from "./MobileSubMenu";
import {careerListItems} from "../../config/careerListItems";

const MobileCareerMenu = () => <MobileSubMenu subMenuTitle={'Carrièretips'} listItems={careerListItems} />

export default MobileCareerMenu
