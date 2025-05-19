import { useEffect, useState } from "react";

import DisplayData from "../components/Displaydata";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Users = () => {

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // sirft input ke liye
  const [search, setSearch] = useState("");



  async function getAllUsers() {
    try {
      const response = await axios.get(
        `${BACKEND_URL}api/v1/user/bulk`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setAllUsers(response.data.user);
      setFilteredUsers(response.data.user); // initially show all
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  // fetch on mount
  useEffect(() => {
    getAllUsers();
  }, []);



useEffect(() => {
  if (search.trim() === '') {
    setFilteredUsers(allUsers);
  } else {
    const lowerSearch = search.toLowerCase();
    const filtered = allUsers.filter(user =>
      user.firstName.toLowerCase() === lowerSearch ||
      user.lastName.toLowerCase() === lowerSearch ||
      user.username.toLowerCase() === lowerSearch
    );
    setFilteredUsers(filtered);
  }
}, [search, allUsers]);



  return (
    <>
      <div className="mx-4 p-2">
        <h5 className="font-bold">Users</h5>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-zinc-200 w-full mt-2 p-1 rounded-md"
          type="text"
          placeholder="search users..."
        />
      </div>

      {/* ----------------------------------------- */}
      {/* all data here  */}
      {filteredUsers.map((u) => (
        <DisplayData
          key={u._id} user={u}
        />
      ))}
    </>
  );
};

export default Users;





// this logic for only client side 
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import DisplayData from "../components/Displaydata";
// import axios from "axios";

// const Users = () => {
//   const navigate = useNavigate();
//   const [allUsers, setAllUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   // sirft input ke liye
//   const [search, setSearch] = useState("");

//   function onClick() {
//     navigate("/send");
//   }

//   async function getAllUsers() {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/api/v1/user/bulk",
//         {
//           headers: {
//             token: localStorage.getItem("token"),
//           },
//         }
//       );
//       setAllUsers(response.data.user);
//       setFilteredUsers(response.data.user); // initially show all
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   }
//   // fetch on mount
//   useEffect(() => {
//     getAllUsers();
//   }, []);



// useEffect(() => {
//   if (search.trim() === '') {
//     setFilteredUsers(allUsers);
//   } else {
//     const lowerSearch = search.toLowerCase();
//     const filtered = allUsers.filter(user =>
//       user.firstName.toLowerCase() === lowerSearch ||
//       user.lastName.toLowerCase() === lowerSearch ||
//       user.username.toLowerCase() === lowerSearch
//     );
//     setFilteredUsers(filtered);
//   }
// }, [search, allUsers]);



//   return (
//     <>
//       <div className="mx-4 p-2">
//         <h5 className="font-bold">Users</h5>
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className=" border-zinc-200 w-full mt-2 p-1 rounded-md"
//           type="text"
//           placeholder="search users..."
//         />
//       </div>

//       {/* ----------------------------------------- */}
//       {/* all data here  */}
//       {filteredUsers.map((u) => (
//         <DisplayData
//           key={u._id}
//           letter={u.firstName.slice(0, 1).toUpperCase()}
//           text={u.username}
//           onClick={onClick}
//         />
//       ))}
//     </>
//   );
// };

// export default Users;
