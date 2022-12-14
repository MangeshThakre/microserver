import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function UserCard({ user, users, setUsers }) {
  const [Suser, setSuser] = useState(user);

  const [isEdit, setIsEdit] = useState(false);
  const [loading, setloading] = useState(false);

  async function updateUser(e) {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios({
        method: "put",
        url: "http://localhost:8082/api/user/" + user._id,
        data: {
          name: Suser.name,
          email: Suser.email,
          status: Suser.status,
          gender: Suser.gender
        }
      });
      const data = response.data;
      if (data.success) {
        alert("successfuly Updated");
        const newUserDate = users.map((user) => {
          return user._id !== Suser._id ? user : data.data;
        });
        // console.log(setUsers);
        setUsers(newUserDate);
        setloading(false);
        setIsEdit(false);
      }
    } catch (error) {
      setloading(false);
      const message = error.message;
      alert(message);
    }
  }

  return (
    <form
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      onSubmit={(e) => updateUser(e)}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Name :
        <input
          type="text"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          value={Suser.name}
          disabled={!isEdit}
          onChange={(e) => setSuser({ ...Suser, name: e.target.value })}
        />
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        email :{" "}
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          value={Suser.email}
          disabled={!isEdit}
          onChange={(e) => setSuser({ ...Suser, email: e.target.value })}
        />
      </p>{" "}
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        gender :{" "}
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          value={Suser.gender}
          disabled={!isEdit}
          onChange={(e) => setSuser({ ...Suser, gender: e.target.value })}
        />
      </p>{" "}
      <div className="flex items-center  gap-3 text-white mb-7 ">
        Status
        <label className="inline-flex relative items-center cursor-pointer ">
          <input
            type="checkbox"
            value=""
            disabled={!isEdit}
            className="sr-only peer"
            checked={Suser.status == "active" ? true : false}
            onChange={(e) =>
              setSuser({
                ...Suser,
                status: Suser.status == "active" ? "inactive" : "active"
              })
            }
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      {!isEdit ? (
        <button
          className="inline-flex  cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : null}{" "}
      {isEdit ? (
        <button
          className="inline-flex  cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => {
            setIsEdit(false);
            setSuser(user);
          }}
        >
          Cancle
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : null}{" "}
      {isEdit ? (
        <button
          className="inline-flex  ml-6  cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          {loading ? "loading" : "Update user"}

          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : null}
    </form>
  );
}

export default UserCard;
