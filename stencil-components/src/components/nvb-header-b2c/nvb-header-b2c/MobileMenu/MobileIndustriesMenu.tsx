import {h} from "@stencil/core";
import {industryListItems} from "../DropdownContainerJobs";
import MobileSubMenu from "./MobileSubMenu";

const MobileIndustriesMenu = () => <MobileSubMenu subMenuTitle={'Per branche'} listItems={industryListItems} />

export default MobileIndustriesMenu
