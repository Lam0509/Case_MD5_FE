import { Html, Head, Main, NextScript } from 'next/document'
import store from "../store/store";
import {Provider} from "react-redux";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Provider store={store}>
      <Main />
      </Provider>
      <NextScript />
      </body>
    </Html>
  )
}
