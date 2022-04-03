import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailUser = () => {
    const [user, setUser] = useState(0);
    const params = useParams();

    async function fetchData() {
        console.log(">> Detail user with id :", params.id);
        let res = await axios.get(`https://reqres.in/api/users/${params.id}`);
        return res;
    }

    useEffect(() => {
        fetchData()
            .then((res) => {
                console.log(">> Check res : ", res);
                if (res && res.data && res.data.data) {
                    setUser(res.data.data);

                }

            })
            .catch((err) => console.log(">> Not found"))
    }, []);

    console.log(">> Check state : ", user);

    return (<>
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
    </>)
}


export default DetailUser; 