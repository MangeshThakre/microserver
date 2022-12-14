import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import UserCard from "./UserCard.js";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setloading(true);
    try {
      const response = await axios.get("http://localhost:8082/api/users");
      const data = response.data.data;
      setUsers(data);
      setloading(false);
    } catch (error) {
      setloading(false);

      alert(error.message);
    }
  }

  return (
    <div className="  relative pt-16  px-6   flex items-center justify-center ">
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          {users.length >= 1 ? (
            <a
              href="http://localhost:8083/api/getCsv"
              download
              className="flex absolute top-5 right-5  cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" //localhost:8083/api/getCsv""
            >
              download csv
            </a>
          ) : null}
          <div className=" flex items-center justify-center flex-wrap  gap-8">
            {users.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Users;
