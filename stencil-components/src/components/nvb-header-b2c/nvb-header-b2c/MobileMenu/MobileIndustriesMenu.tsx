import {h} from "@stencil/core";
import MobileSubMenu from "./MobileSubMenu";
import {industryListItems} from "../../config/industryListItems";

const MobileIndustriesMenu = () => <MobileSubMenu subMenuTitle={'Per branche'} listItems={industryListItems} />

export default MobileIndustriesMenu
