/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FooterB2c {
        "userName": string;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLFooterB2cElement extends Components.FooterB2c, HTMLStencilElement {
    }
    var HTMLFooterB2cElement: {
        prototype: HTMLFooterB2cElement;
        new (): HTMLFooterB2cElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "footer-b2c": HTMLFooterB2cElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FooterB2c {
        "userName"?: string;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "footer-b2c": FooterB2c;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "footer-b2c": LocalJSX.FooterB2c & JSXBase.HTMLAttributes<HTMLFooterB2cElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
