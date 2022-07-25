import {h} from "@stencil/core";
import renderFunctionalComponentInPage from "../../../../test-helpers/renderFunctionalComponentInPage";
import DropdownContainerJobs from "./DropdownContainerJobs";
import {jobsListItems} from "../config/jobsListItems";
import {cityListItems} from "../config/cityListItems";
import {industryListItems} from "../config/industryListItems";

describe("DropdownContainerJobs", () => {
  it.each([
    ...jobsListItems,
    ...cityListItems,
    ...industryListItems
  ])('should have the data attributes defined', async (item) => {
    const page = await renderFunctionalComponentInPage(() => <DropdownContainerJobs />);
    const labelToAssert = item.analyticsLabel || item.label;
    const element = page.root.querySelectorAll(`[href='${item.value}']`)[0];
    expect(element).toBeDefined()
    expect(element.getAttribute('data-analytics-action')).toEqual('ClickOnHeaderWerkZoekendenLink')
    expect(element.getAttribute('data-analytics-label')).toEqual(labelToAssert)
  })
})
