import {h} from "@stencil/core";
import DropdownContainerAccountUnauthenticated from "./DropdownContainerAccountUnauthenticated";
import {accountUnauthenticatedListItems} from "../config/accountUnauthenticatedListItems";
import renderFunctionalComponentInPage from "../../../../test-helpers/renderFunctionalComponentInPage";

describe("DropdownContainerAccountUnauthenticated", () => {
  it.each(accountUnauthenticatedListItems)('should have the data attributes defined', async (item) => {
    const page = await renderFunctionalComponentInPage(() => <DropdownContainerAccountUnauthenticated />);
    const labelToAssert = item.analyticsLabel || item.label;
    const element = page.root.querySelectorAll(`[href='${item.value}']`)[0];
    expect(element).toBeDefined()
    expect(element.getAttribute('data-analytics-action')).toEqual('ClickOnHeaderAccountLink')
    expect(element.getAttribute('data-analytics-label')).toEqual(labelToAssert)
  })
})
