import React from "react";
import { MyComponent } from 'header-b2c/dist/components/my-component';

if(typeof window !== "undefined") {
    customElements.define('my-component', MyComponent);
}

const HeaderB2c = () => {
    const component = React.createElement("my-component", {}, null)

    return {
        ...component,
        props: {
            ...component.props,
            className: 'sc-my-component-h hydrated',
            ['s-id']: 1,
            dangerouslySetInnerHTML: {
                __html: "<!--r.1--><div class=\"sc-my-component\" c-id=\"1.0.0.0\"><!--t.1.1.1.0-->Hello, World! I'm </div>"
            }
        }
    }
}

export default HeaderB2c
