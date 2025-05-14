import { Link, Route, Routes } from "react-router-dom";

import Signup from "../src/pages/Signup";
import Signin from "../src/pages/Signin";
import Dashboard from "../src/pages/Dashboard";
import Sendmoney from "../src/pages/Sendmoney";
import Error404 from "./pages/Error404";


const App = () => {
  return (
    <>
     

      <Routes>


        <Route path="/" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />


        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/send" element={<Sendmoney />}>
          {/* <Route path="/send:id" element={<Sendmoney/>}/> */}
        </Route>

         <Route path="*" element={<Error404/>} />
      </Routes>
    </>
  );
};

export default App;


// route protected 

// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};




