import { Link } from "react-router-dom";
import { useDynamicRouter } from "../hooks/useDynamicRouter";
import { BsPlus } from "react-icons/bs";
import AllTaskList from "../components/home-page/AllTaskList";

const HomePage = () => {
  useDynamicRouter("Home - Task Management App");

  return (
    <main className="container max-w-3xl mx-auto space-y-5">
      <section>
        <Link
          to="/add-task"
          className="inline-block p-4 transition-all border border-gray-500 rounded hover:text-white hover:bg-black"
        >
          <BsPlus className="inline-block text-2xl" />
          <span className="inline-block">Add Task</span>
        </Link>
      </section>

      <AllTaskList />
    </main>
  );
};

export default HomePage;
