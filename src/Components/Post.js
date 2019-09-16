import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    deletePost = () =>{
        this.props.dispatch({type:'DELETE_POST', id:this.props.post.id});
    }

    updatePost = () =>{
        this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id});
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h2>{this.props.post.title}</h2>
                        <p>{this.props.post.message}</p>
                        <div>
                            <button onClick ={this.updatePost} className="btn btn-info" style={{ marginRight: 20 + 'px', marginLeft: 20 + 'px', float: "right"}}>Editar</button>
                            <button onClick ={this.deletePost} className="btn btn-danger" style={{float: "right"}}>Eliminar</button>
                        </div>
                    </li>

                </ul>
            </div >
        );
    }
}
export default connect()(Post);