import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AddTaskPage from "../pages/AddTaskPage";
import EditTaskPage from "../pages/EditTaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-task",
        element: <AddTaskPage />,
      },
      {
        path: "/edit-task/:id",
        element: <EditTaskPage />,
      },
    ],
  },
]);

export default router;
