import React, {useCallback} from "react";
import { defineCustomElement } from 'stencil-components/dist/components/modal-window';
import {VisibilityChangedEvent} from "stencil-components/dist/types/components/modal-window/modal-window";
import {registerSsrStyle} from "../utils/StencilStyleRepository";

const serverHtml = '<!--r.1--><div class="wrapper sc-modal-window" c-id="1.0.0.0"><div class="backdrop sc-modal-window" c-id="1.1.1.0"></div><div class="modal sc-modal-window" c-id="1.2.1.1"><header class="sc-modal-window" c-id="1.3.2.0"><h1 class="sc-modal-window" c-id="1.4.3.0"></h1><button class="sc-modal-window" c-id="1.5.3.1"><!--t.1.6.4.0-->X</button></header><main class="sc-modal-window" c-id="1.7.2.1"></main></div></div>'
const serverStyles = '/*!@.wrapper*/.wrapper.sc-modal-window{position:fixed;left:0;top:0;width:100%;height:100%;visibility:hidden;z-index:2000}/*!@.backdrop*/.backdrop.sc-modal-window{position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.8);opacity:0;transition:visibility 0s linear 0.1s, opacity 0.1s 0s, transform 0.1s;transform:scale(1.1);z-index:1}/*!@.visible*/.visible.sc-modal-window{visibility:visible}/*!@.visible .backdrop*/.visible.sc-modal-window .backdrop.sc-modal-window{opacity:1;transform:scale(1)}/*!@.modal*/.modal.sc-modal-window{font-size:14px;padding:10px 10px 5px 10px;background-color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:2px;min-width:300px;z-index:2}/*!@h1*/h1.sc-modal-window{font-size:18px}/*!@header*/header.sc-modal-window{display:flex;justify-content:space-between}/*!@button*/button.sc-modal-window{margin-left:5px;min-width:80px;background-color:#848e97;border-color:#848e97;border-style:solid;border-radius:2px;padding:3px;color:white;cursor:pointer}/*!@button:hover*/button.sc-modal-window:hover{background-color:#6c757d;border-color:#6c757d}'

registerSsrStyle('modal-window', serverStyles)
defineCustomElement()

const ModalWindow = ({ title, isVisible, setIsVisible, text }: { title: string, isVisible: boolean, setIsVisible: (isVisible: boolean) => void, text: string}) => {

    const trackedRef = useCallback((node: Element) => {
        if (node !== null) {
            console.log('add modal ref')
            node.addEventListener('visibilityChanged', (evt) => setIsVisible((evt as CustomEvent<VisibilityChangedEvent>).detail.isVisible))
        } else {
            console.log('remove modal ref')
        }
    }, []);
    const component = React.createElement("modal-window", {}, null)
    return {
        ...component,
        props: {
            ...component.props,
            className: 'sc-modal-window-h hydrated',
            ['modal-title']: title,
            ['is-visible']: isVisible,
            ['modal-text']: text,
            dangerouslySetInnerHTML: {
                __html: serverHtml
            }
        },
        ref: trackedRef
    }
}

export default ModalWindow
