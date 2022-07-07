import React from "react";
import { defineCustomElement } from 'header-b2c/dist/components/my-component';

defineCustomElement()

const HeaderB2c = () => {
    const component = React.createElement("my-component", {}, null)
    const DecoratedComponent = {
        ...component,
        props: {
            ...component.props,
            className: 'sc-my-component-h hydrated',
            dangerouslySetInnerHTML: {
                __html: "<!--r.1--><button class=\"sc-my-component\" c-id=\"1.0.0.0\"><!--t.1.1.1.0-->0</button>"
            }
        }
    }
    return <React.Fragment key={'header-b2c'}>
        <style dangerouslySetInnerHTML={{ __html: '/*!@:host*/.sc-my-component-h{display:block}/*!@button*/button.sc-my-component{color:#AA00CC}'}} />
        {DecoratedComponent}
    </React.Fragment>
}

export default HeaderB2c
