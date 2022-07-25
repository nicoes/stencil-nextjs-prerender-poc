import {Component, FunctionalComponent} from "@stencil/core";
import {newSpecPage, SpecPage} from "@stencil/core/testing";

function renderFunctionalComponentInPage<T extends {}>(
  componentConstructor: () => FunctionalComponent<T>,
): Promise<SpecPage> {
  @Component({ tag: "test-component" })
  class TestComponent { }

  return newSpecPage({
    components: [TestComponent],
    template: componentConstructor,
  });
}

export default renderFunctionalComponentInPage
