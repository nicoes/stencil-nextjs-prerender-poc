/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { VisibilityChangedEvent } from "./components/modal-window/modal-window";
export namespace Components {
    interface FooterB2c {
        "userName": string;
    }
    interface ModalWindow {
        "isVisible": boolean;
        "modalText": string;
        "modalTitle": string;
    }
    interface MyComponent {
    }
    interface NvbHeaderB2c {
    }
}
declare global {
    interface HTMLFooterB2cElement extends Components.FooterB2c, HTMLStencilElement {
    }
    var HTMLFooterB2cElement: {
        prototype: HTMLFooterB2cElement;
        new (): HTMLFooterB2cElement;
    };
    interface HTMLModalWindowElement extends Components.ModalWindow, HTMLStencilElement {
    }
    var HTMLModalWindowElement: {
        prototype: HTMLModalWindowElement;
        new (): HTMLModalWindowElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNvbHeaderB2cElement extends Components.NvbHeaderB2c, HTMLStencilElement {
    }
    var HTMLNvbHeaderB2cElement: {
        prototype: HTMLNvbHeaderB2cElement;
        new (): HTMLNvbHeaderB2cElement;
    };
    interface HTMLElementTagNameMap {
        "footer-b2c": HTMLFooterB2cElement;
        "modal-window": HTMLModalWindowElement;
        "my-component": HTMLMyComponentElement;
        "nvb-header-b2c": HTMLNvbHeaderB2cElement;
    }
}
declare namespace LocalJSX {
    interface FooterB2c {
        "userName"?: string;
    }
    interface ModalWindow {
        "isVisible"?: boolean;
        "modalText"?: string;
        "modalTitle"?: string;
        "onVisibilityChanged"?: (event: CustomEvent<VisibilityChangedEvent>) => void;
    }
    interface MyComponent {
    }
    interface NvbHeaderB2c {
    }
    interface IntrinsicElements {
        "footer-b2c": FooterB2c;
        "modal-window": ModalWindow;
        "my-component": MyComponent;
        "nvb-header-b2c": NvbHeaderB2c;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "footer-b2c": LocalJSX.FooterB2c & JSXBase.HTMLAttributes<HTMLFooterB2cElement>;
            "modal-window": LocalJSX.ModalWindow & JSXBase.HTMLAttributes<HTMLModalWindowElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nvb-header-b2c": LocalJSX.NvbHeaderB2c & JSXBase.HTMLAttributes<HTMLNvbHeaderB2cElement>;
        }
    }
}