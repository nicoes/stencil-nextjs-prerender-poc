import { Html, Head, Main, NextScript } from 'next/document'
import {flushSsrStyles} from "../utils/StencilStyleRepository";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap" rel="stylesheet" />
                <style dangerouslySetInnerHTML={{ __html: flushSsrStyles()}} />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
