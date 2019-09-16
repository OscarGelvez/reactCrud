import React, { Component } from "react";
import { connect } from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        console.log(data)

        //para ejecutar la acción
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Crear Post</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input className="form-control" required type="text" ref={(input) => this.getTitle = input}
                            placeholder="Título" />
                        <br /><br />
                        <textarea className="form-control" required rows="5" ref={(input) => this.getMessage = input} cols="28"
                            placeholder="Contenido" />
                        <br /><br />
                        <button className="btn btn-primary" >Guardar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(PostForm);
