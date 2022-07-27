import AnalyticsDataAttributes from "../../nvb-header-b2c/nvb-header-b2c/AnalyticsDataAttributes";
import {h} from "@stencil/core";

const TopBar = () => <div class={'top'}>
  <a href="/werkgever"
     {...AnalyticsDataAttributes({action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
  >Voor werkgevers</a></div>

export default TopBar
