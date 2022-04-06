import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { connect } from "react-redux";

class ReduxUsing extends React.Component {
    state = {
        userList: []
    }


    handleDeleteUser = (user) => {
        console.log(">>>Check props ", this.props);
        this.props.deleteUserRedux(user);
    }

    render() {
        const  userList  =  this.props.dataRedux;
        return (<>
            <h1>Redux Using</h1>
            <>
                <div className="list-user-container">
                    <table>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>ID</th>
                                <th>FullName</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((user, index) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>
                                                {index}
                                            </td>
                                            <td>
                                                {user.id}
                                            </td>
                                            <td>
                                                {user.name}
                                            </td>
                                            <td>
                                                <button onClick={() => this.handleDeleteUser(user)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })

                            }

                        </tbody>
                    </table>
                </div>
            </>
        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDetele) => dispatch({ type: 'DELETE_USER', payload: userDetele })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxUsing)