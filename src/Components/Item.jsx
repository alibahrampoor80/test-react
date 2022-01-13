import React, {Component} from "react";


class Item extends Component {
    render() {
        return (
            <>
                <li  className='list-group-item'>
                    {this.props.computer}
                    <button onClick={() =>this.props.delete(this.props.computer)} className='btn btn-danger btn-sm'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </li >
            </>
        )
    }
}
export default Item;