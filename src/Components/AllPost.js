import React, { Component } from "react";
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Lista de Post</h4>
                    </div>
                    {this.props.posts.map((post) =>
                        <div key={post.id}>
                            {post.editing ? <EditComponent post={post} key={post.id} /> :
                                <Post key={post.id} post={post} />}
                        </div>
                    
                        )}
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);