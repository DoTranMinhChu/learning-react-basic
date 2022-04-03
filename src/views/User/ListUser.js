import React from "react";
import axios from "axios";
import "./ListUser.scss";
class ListUser extends React.Component {

    state = {
        ListUser: []
    }

    //ES7 (using async/await)
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        console.log('>>> Check res: ', res)
        console.log('>>> Check res data: ', res.data.data)
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    // ES6 (using promise)
    // componentDidMount(){
    //     axios.get('https://reqres.in/api/users?page=2').then(res=>{
    //         console.log('>>> Check res: ',res)
    //         console.log('>>> Check res data: ',res.data.data)
    //     })
    // }


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
                                        <tr key={user.id}>
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

export default ListUser;