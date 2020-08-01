import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurderBuilder';

function App() {
  return (
    <div>
      <p>Hello!</p>
      <Layout>
        <p>Test</p>
        <BurgerBuilder />

      </Layout>
    </div>
  );
}

export default App;
