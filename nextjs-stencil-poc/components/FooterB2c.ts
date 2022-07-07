import React from "react";
import { defineCustomElement } from 'header-b2c/dist/components/footer-b2c';

defineCustomElement()

const FooterB2c = ({ userName }) => {
    const component = React.createElement("footer-b2c", {}, null)

    return {
        ...component,
        props: {
            ...component.props,
            ['user-name']: userName,
            dangerouslySetInnerHTML: {
                __html: `<!--r.1--><footer class=\"sc-footer-b2c\" c-id=\"1.0.0.0\"><section class=\"sc-footer-b2c\" c-id=\"1.1.1.0\"><!--t.1.2.2.0-->This is the footer</section></footer>`
            }
        }
    }
}

export default FooterB2c
