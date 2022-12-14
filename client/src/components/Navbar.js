import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [isuserPage, setIsUserPage] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/user")) {
      setIsUserPage(true);
    }
  }, []);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          User app
        </span>
        <div className="flex items-center">
          {isuserPage ? (
            <>
              <Link
                to="/"
                className="flex  cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setIsUserPage(false)}
              >
                home
              </Link>
            </>
          ) : (
            <Link
              to="/user"
              className="flex  cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => setIsUserPage(true)}
            >
              user
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
