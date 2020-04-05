import React, { Component } from 'react';
import Meta from '../components/metatag';
import Layout from '../components/Layout';
class App extends Component {
  render() {
    const greeting = {
      subject: 'React',
      description: 'Your component library for ...',
    };
  return (
    <Layout title="About Page">
	    <div>

        <p>This is an about page</p>

      </div>
	  </Layout>
  );
  }
}
export default App
