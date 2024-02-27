import React, { Fragment, useEffect, useState } from "react";

const ListUsernames = () => {

    const [usernames, setUsernames] = useState([]);

    const getUsernames = async () => {
        try {
            
            const response = await fetch("http://localhost:4000/users");
            const jsonData = await response.json();

            setUsernames(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUsernames();
    });

    console.log(usernames);
    return (
    <Fragment>
          <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {/*                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}

            </tbody>
        </table>
    </Fragment>
)};

export default ListUsernames;