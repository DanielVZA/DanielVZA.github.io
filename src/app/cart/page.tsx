'use client';
import {useContext} from "react";
import {AppContext} from "@/context/AppContext";

const Cart = () => {
    const {cart, buy} = useContext(AppContext) ?? {cart: [], buy: 0};
    return (
        <div className="container-fluid" id="cart">
            <div className="card m-3">
                <div className="card-header bg-info fondo-banner">
                    <h3 className="banger">Productos en el carro</h3>
                </div>
                <div className="card-body fondo-brushed bg-info banger">
                    {
                        cart.length < 1
                            ? (
                                <div>
                                    <h5>No se han agregado productos</h5>
                                </div>
                            )
                            : (
                                <div>
                                    <table className="table table-borderless text-white">
                                        <thead>
                                        <tr>
                                            <th scope="col">Comic</th>
                                            <th scope="col">Titulo</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">SubTotal</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            cart.map(item => (
                                                <tr key={item.comicId}>
                                                    <td>
                                                        <img src={item.comic.image} width="100" alt="100"/>
                                                    </td>
                                                    <td>{item.comic.title}</td>
                                                    <td>${item.comic.price}</td>
                                                    <td>
                                                        {item.quantity}
                                                        <button className="btn btn-sm btn-success" disabled={item.comic.stock < 1}
                                                                onClick={() => console.log("addCantidad(item,index)")}>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-danger"
                                                                onClick={() => console.log("removeProducto(item)")}>
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                    </td>
                                                    <td>${item.subTotal}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            )
                    }
                </div>
                <div className="card-footer fondo-banner bg-info">
                    <h3 className="banger">Total a pagar: ${buy}</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;