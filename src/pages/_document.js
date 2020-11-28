import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          ></link>
          <title>Tecnology Ecommerce Website</title>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
