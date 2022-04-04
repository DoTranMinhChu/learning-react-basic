import React from "react";
import axios from "axios";
import "./ListUser.scss";
import withRouter from "./withRouter";
class ListUser extends React.Component {

    state = {
        ListUser: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        console.log('>>> Check res: ', res)
        console.log('>>> Check res data: ', res.data.data)
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }


    handleViewDetailUser = (user) => {
        console.log(">> Check props : ", this.props);
        const navigate = this.props.router.navigate;
        console.log(">> Check user : ", user);
        navigate(`/users/${user.id}`);
    }
    
    render() {
        const { ListUser } = this.state;
        return (
            <>

                <div className="list-user-container">
                    <table>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>ID</th>
                                <th>email</th>
                                <th>FullName</th>
                                <th>avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ListUser.map((user, index) => {
                                    return (
                                        <tr key={user.id} onClick={() => this.handleViewDetailUser(user)}>
                                            <td>
                                                {index}
                                            </td>
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

                                    );
                                })

                            }

                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default withRouter(ListUser);