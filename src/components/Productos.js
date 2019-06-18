import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class Productos extends Component {

    state = {
        productos: []
    }

    componentDidMount() {
        console.log(1);
        this.setState({
            productos: [
                { id: 1, nombre: 'Camisa ReactJS', precio: 30},
                { id: 2, nombre: 'Camisa VueJS', precio: 50},
                { id: 3, nombre: 'Camisa Angular', precio: 10},
                { id: 4, nombre: 'Camisa Node.js', precio: 30}
            ]
        })
    }

    componentWillMount() {
        console.log(2)
    }

    componentWillUpdate() {
        console.log(3)
    }

    componentWillUnmount() {
        console.log(4)
    }

    render() { 
        console.log(5)
        const {productos} = this.state;

        return ( 
            <Fragment>
                <h1> Lista de productos </h1>  {
                    productos.map(producto => (
                        <Producto
                            key={producto.id} 
                            producto={producto}
                        />
                    ))
                }
            </Fragment>

         );
    }
}
 
export default Productos;