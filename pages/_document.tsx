/* eslint-disable react/jsx-key */
import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {sheets.getStyleElement()}
            </>
        ),
        head: [
            <title>Rule Logic</title>,
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />,
            <meta name='description' content='Fuse React - Material design admin template with pre-built apps and pages' />,
            <meta name='keywords' content='RuleLogic,Rule Logic,React,Redux,Material UI Next,Material,Material Design,Google Material Design,HTML,CSS,Firebase,Authentication,Material Redux Theme,Material Redux Template' />,
            <meta name='author' content='Marcus Marshall,marcusmrshall' />,
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />,
            <meta name='theme-color' content='#000000' />,
            <link rel="stylesheet" href="/assets/tailwind-base.css" />,
        ],
    };
};