import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import UserCard from "./UserCard.js";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setloading(true);
    try {
      const response = await axios.get("https://gorest.co.in/public-api/users");
      const data = response.data.data;
      setUsers(data);
      setloading(false);
    } catch (error) {
      setloading(false);

      alert(error.message);
    }
  }

  return (
    <div className="  pt-16  px-6   flex items-center justify-center ">
      {loading ? (
        <div>loading</div>
      ) : (
        <div className=" flex items-center justify-center flex-wrap  gap-8">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
