import axios from "axios";
import React from "react";
import withRouter from "./withRouter";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        const params = this.props.router.params;
        console.log(">> Detail user with id :", params.id);
        let res = await axios.get(`https://reqres.in/api/users/${params.id}`);
        console.log(">> Check res : ", res);
        if (res && res.data && res.data.data) {
            this.setState({
                user: res.data.data
            })

        }
    }
    
    handleBackButton = () => {
        console.log("check")
        const navigate = this.props.router.navigate;
        navigate('/users');
    }

    render() {
        const { user } = this.state;
        return (
            <>
                <div className="list-user-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>email</th>
                                <th>FullName</th>
                                <th>avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.first_name + " " + user.last_name}
                                </td>
                                <td>
                                    <img src={user.avatar} alt="avatar"></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <button onClick={() => this.handleBackButton()}>Back List Users</button>
            </>
        )

    }
}

export default withRouter(DetailUser); 