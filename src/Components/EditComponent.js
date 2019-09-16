import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE_POST', id: this.props.post.id, data: data })
    }

    componentDidMount = () => {
        this.getTitle.value = this.props.post.title;
        this.getMessage.value = this.props.post.message;
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Modificar Post</h3>
                    <form onSubmit={this.handleEdit}>
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

        );

    }
}
export default connect()(EditComponent);