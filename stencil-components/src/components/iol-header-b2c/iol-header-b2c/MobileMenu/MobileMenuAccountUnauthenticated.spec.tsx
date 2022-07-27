// import MobileMenuAccountUnauthenticated from "./MobileMenuAccountUnauthenticated";
// import {h} from "@stencil/core";
// import renderFunctionalComponentInPage from "../../../../../test-helpers/renderFunctionalComponentInPage";
// import {accountUnauthenticatedListItems} from "../../config/accountUnauthenticatedListItems";
//
// describe("MobileMenuAccountUnauthenticated", () => {
//   it.each(accountUnauthenticatedListItems)('should have the data attributes defined', async (item) => {
//     const page = await renderFunctionalComponentInPage(() => <MobileMenuAccountUnauthenticated />);
//     const labelToAssert = item.analyticsLabel || item.label;
//     const element = page.root.querySelectorAll(`[href='${item.value}']`)[0];
//     expect(element).toBeDefined()
//     expect(element.getAttribute('data-analytics-action')).toEqual('ClickOnHeaderAccountLink')
//     expect(element.getAttribute('data-analytics-label')).toEqual(labelToAssert)
//   })
// })
