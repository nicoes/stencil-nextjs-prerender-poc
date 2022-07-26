import AnalyticsDataAttributes from "../../../utils/AnalyticsDataAttributes";
import {h} from "@stencil/core";

const TopBar = () => <div class={'top'}>
  <a href="/werkgever"
     {...AnalyticsDataAttributes({action: 'ClickOnHeaderWerkgeversLink', label: 'VoorWerkgevers'})}
  >Voor werkgevers</a></div>

export default TopBar
