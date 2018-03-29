import React from 'react'
import { connect } from "react-redux";

import {getContacts} from '../../actions'

class MyFriend extends React.Component {

    componentDidMount() {
        this.props.getContacts()
    }

    render() {
        console.log(this.props.friends)
        return (
            <div>
                <div>My Friends</div>
                <ul>{this.props.friends.map((friend, i) => {
                    return <li key={i}>{friend.name}</li>
                })}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friend
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => {
            dispatch(getContacts())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyFriend);