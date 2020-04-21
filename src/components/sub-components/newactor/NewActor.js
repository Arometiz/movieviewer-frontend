import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class NewActor extends Component {
    render() {
        return (
            <div>
            <li className="newActor">
                <input className="actorName"></input>
                <input className="actorRole"></input>
            </li>
        </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(NewActor);