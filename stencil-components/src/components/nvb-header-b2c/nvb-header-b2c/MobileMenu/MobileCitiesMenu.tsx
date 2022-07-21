import {h} from "@stencil/core";
import MobileSubMenu from "./MobileSubMenu";
import {cityListItems} from "../DropdownContainerJobs";

const MobileCitiesMenu = () => <MobileSubMenu subMenuTitle={'Per plaats'} listItems={cityListItems} capitalizeLabels={true} />

export default MobileCitiesMenu
