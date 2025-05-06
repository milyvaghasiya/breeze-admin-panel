import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../views/layout";
import Login from "../views/auth/Login";
import Dashboard from "../views/dashboard/Dashboard";
import Student from "../views/dashboard/Student";
import Payment from "../views/dashboard/Payment";
import Chat from "../views/dashboard/Chat";
import Pricing from "../views/dashboard/Pricing";

/*============================================== NEW METHOD ROUTER ==============================================*/

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default Router;

/*============================================== OLD METHOD ROUTER ==============================================*/

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Navigate to="/dashboard" replace />} />
//           <Route path="dashboard" element={<Dashboard />} />
//         </Route>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
