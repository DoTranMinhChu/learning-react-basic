import React from "react";
import { connect } from "react-redux";

class ReduxUsing extends React.Component {  
    state={
        userList : []
    }

    componentDidMount(){
        console.log(">>> Check props : ",this.props);
        this.setState({
            userList : this.props.dataRedux
        })
    }

    render() {
        const {userList} = this.state;
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
const mapStateToProps = (state) =>{
    return {
        dataRedux : state.users
    }
}
export default connect(mapStateToProps)(ReduxUsing)