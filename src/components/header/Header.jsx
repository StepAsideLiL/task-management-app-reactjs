import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <header className="container flex items-center justify-between max-w-5xl py-10 mx-auto">
      <div>
        <h1 className="text-2xl">
          <Link to="/">Task Management App</Link>
        </h1>
      </div>

      <div>
        <Link
          to="https://github.com/StepAsideLiL/task-management-app-reactjs"
          target="_blank"
        >
          <BsGithub className="text-4xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
