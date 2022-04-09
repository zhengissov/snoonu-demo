import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import rtlPlugin from 'stylis-plugin-rtl';
import { ServerStyles, createStylesServer, createGetInitialProps } from '@mantine/next';
import { getCookie } from 'cookies-next';
import { Direction } from 'contexts/Direction';

type Props = {
  direction: Direction;
};

export default class _Document extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await createGetInitialProps()(ctx);
    const direction = (await getCookie('mantine-direction', ctx)) || 'ltr';

    const stylesServer = createStylesServer({
      key: 'mantine-direction--rtl',
      stylisPlugins: [rtlPlugin],
    });

    return {
      ...initialProps,
      direction,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html dir={this.props.direction} lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
