import React from "react";
import { defineCustomElement } from 'header-b2c/dist/components/my-component';

defineCustomElement()

const HeaderB2c = () => {
    const component = React.createElement("my-component", {}, null)

    return {
        ...component,
        props: {
            ...component.props,
            dangerouslySetInnerHTML: {
                __html: "<!--r.1--><button c-id=\"1.0.0.0\"><!--t.1.1.1.0-->0</button>"
            }
        }
    }
}

export default HeaderB2c
