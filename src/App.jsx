import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const App = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default App;

