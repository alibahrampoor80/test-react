import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Item from "./Item";

class Product extends Component {
    state = {
        newProduct: '',
        computer: ['ram', 'motherboard', 'cpu', 'card graphic', 'monitor', 'speaker']
    }
    inputProduct = (event) => {
        this.setState({newProduct: event.target.value})
        // console.log(this.state.newProduct)
    }
    clickBtnProduct = () => {
        const newProduct = this.state.newProduct;
        if (newProduct === undefined || newProduct.trim() === '')
            return;
        let productComputer = [...this.state.computer]
        productComputer.push(newProduct)
        this.setState({computer: productComputer})
    }
    delete = (c) => {
        // console.log('name',c)
        const product = [...this.state.computer];
        const filteredPro = product.filter(proNew => proNew !== c)
        this.setState({computer: filteredPro})
    }

    render() {
        return (
            <>
                <div className='container'>
                    <ul className="list-group">
                        <input
                            onChange={event => this.inputProduct(event)}
                            type="text"
                            className='form-control w-50 mt-2'/>
                        <button
                            onClick={() => this.clickBtnProduct()}
                            className='btn btn-success w-25'>New Product
                        </button>
                        {
                            this.state.computer.map(c => (
                                <Item key={c} computer={c}
                                      delete={()=>this.delete(c)}
                                />
                            ))
                        }

                    </ul>
                </div>
            </>
        )
    }
}

export default Product

