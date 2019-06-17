import React, { Fragment } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'


function App() {

  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
        titulo='Tienda virtual'
      />  
      <Productos />
      <Footer 
        fecha={fecha}/>
    </Fragment>
  );
}

export default App;
