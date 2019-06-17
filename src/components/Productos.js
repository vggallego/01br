import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class Productos extends Component {

    state = {
        productos: [
            { id: 1, name: 'Camisa ReactJS', precio: 30},
            { id: 2, name: 'Camisa VueJS', precio: 50},
            { id: 3, name: 'Camisa Angular', precio: 10},
            { id: 4, name: 'Camisa Node.js', precio: 30}
        ]
    };

    render() { 
        const {productos} = this.state;
        console.log(productos);

        return ( 
            <Fragment>
                <h1> Lista de productos </h1>  {
                    productos.map(producto => (
                        <Producto />
                    ))
                }
            </Fragment>

         );
    }
}
 
export default Productos;