import MobileMenuAccountAuthenticated from "./MobileMenuAccountAuthenticated";
import {h} from "@stencil/core";
import renderFunctionalComponentInPage from "../../../../../test-helpers/renderFunctionalComponentInPage";
import {accountAuthenticatedListItems} from "../../config/accountAuthenticatedListItems";

describe("MobileMenuAccountAuthenticated", () => {
  it.each(accountAuthenticatedListItems)('should have the data attributes defined', async (item) => {
    const page = await renderFunctionalComponentInPage(() => <MobileMenuAccountAuthenticated />);
    const labelToAssert = item.analyticsLabel || item.label;
    const element = page.root.querySelectorAll(`[href='${item.value}']`)[0];
    expect(element).toBeDefined();
    expect(element.getAttribute('data-analytics-action')).toEqual('ClickOnHeaderAccountLink')
    expect(element.getAttribute('data-analytics-label')).toEqual(labelToAssert)
  })
})
