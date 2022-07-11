import { Html, Head, Main, NextScript } from 'next/document'
import {flushSsrStyles} from "../utils/StencilStyleRepository";

export default function Document() {
    return (
        <Html>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: flushSsrStyles()}} />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
