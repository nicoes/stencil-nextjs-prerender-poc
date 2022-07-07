import React from "react";
import { defineCustomElement } from 'header-b2c/dist/components/my-component';

defineCustomElement()

const HeaderB2c = () => {
    const component = React.createElement("my-component", {}, null)

    return {
        ...component,
        props: {
            ...component.props,
            className: 'sc-my-component-h hydrated',
            dangerouslySetInnerHTML: {
                __html: "<style sty-id=\"sc-my-component\">/*!@:host*/.sc-my-component-h{display:block}/*!@button*/button.sc-my-component{color:#AA00CC}</style><!--r.1--><button c-id=\"1.0.0.0\"><!--t.1.1.1.0-->0</button>"
            }
        }
    }
}

export default HeaderB2c
