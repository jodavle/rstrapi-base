import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Meta from './metatag';

class Layout extends React.Component{
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
	render(){
    const { children } = this.props;
    return (
      <>
        <Meta title={this.props.title} />
        <Link href="/">
          <a>LINK</a>
        </Link>
        <Link href="/about">
          <a>LOL</a>
        </Link>
        <div>{children}</div>
      </>
    );
  }
}

export default Layout
