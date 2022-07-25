import {h} from "@stencil/core";
import renderFunctionalComponentInPage from "../../../../../test-helpers/renderFunctionalComponentInPage";
import MobileCitiesMenu from "./MobileCitiesMenu";
import {cityListItems} from "../../config/cityListItems";

describe("MobileCitiesMenu", () => {
  it.each(cityListItems)('should have the data attributes defined', async (item) => {
    const page = await renderFunctionalComponentInPage(() => <MobileCitiesMenu />);
    const labelToAssert = item.analyticsLabel || item.label;
    const element = page.root.querySelectorAll(`[href='${item.value}']`)[0];
    expect(element).toBeDefined();
    expect(element.getAttribute('data-analytics-action')).toEqual('ClickOnHeaderWerkZoekendenLink')
    expect(element.getAttribute('data-analytics-label')).toEqual(labelToAssert)
  })
})
