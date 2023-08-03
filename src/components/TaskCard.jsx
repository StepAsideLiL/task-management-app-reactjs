import PropTypes from "prop-types";
import { BsTrash, BsCheck, BsPencilSquare } from "react-icons/bs";
import { toast } from "react-hot-toast";
import api from "../utils/axios-instance";
import { Link } from "react-router-dom";

const TaskCard = ({ task, refetch }) => {
  const { _id, title, description, completed } = task;

  const handleCheckBox = () => {
    api
      .patch(`/tasks/toggle/${_id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteBtn = () => {
    api
      .delete(`/tasks/${_id}`)
      .then((res) => {
        toast.success(`"${res.data.title}" task is deleted!`);
        refetch();
      })
      .catch((err) => {
        toast.error("Failed to delete task");
        console.log(err);
      });
  };

  return (
    <section className="p-3 border border-gray-600 rounded">
      <div className="flex items-center gap-3">
        <div>
          <button
            className="inline-block w-6 h-6 border border-gray-950"
            onClick={handleCheckBox}
          >
            {completed && <BsCheck className="text-2xl" />}
          </button>
        </div>

        <div className="flex-grow">
          <h1 className="text-xl">{title}</h1>
          <p>{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/edit-task/${_id}`}
            className="inline-block p-2 transition-all bg-gray-100 rounded-full hover:bg-green-100 w-fit"
          >
            <BsPencilSquare className="text-2xl text-green-600" />
          </Link>
          <button
            className="inline-block p-2 transition-all bg-gray-100 rounded-full hover:bg-red-100 w-fit"
            onClick={handleDeleteBtn}
          >
            <BsTrash className="text-2xl text-red-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default TaskCard;
