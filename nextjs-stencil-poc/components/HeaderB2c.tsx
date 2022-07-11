import React from "react";
import { defineCustomElement } from 'stencil-components/dist/components/my-component';

defineCustomElement()

const HeaderB2c = () => {
    const component = React.createElement("my-component", {}, null)
    const DecoratedComponent = {
        ...component,
        props: {
            ...component.props,
            className: 'sc-my-component-h hydrated',
            dangerouslySetInnerHTML: {
                __html: "<!--r.1--><div class=\"sc-my-component\" c-id=\"1.0.0.0\"><button class=\"sc-my-component\" c-id=\"1.1.1.0\"><!--t.1.2.2.0-->0</button></div>"
            }
        }
    }
    return <React.Fragment>
            <style dangerouslySetInnerHTML={{ __html: '/*!@div*/div.sc-my-component{display:block}/*!@button*/button.sc-my-component{color:#AA00CC}'}} />
        {DecoratedComponent}
    </React.Fragment>
}

export default HeaderB2c
