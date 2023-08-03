import { useForm } from "react-hook-form";
import api from "../utils/axios-instance";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTaskPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onFormSubmit = (data) => {
    console.log(data);

    api
      .post("/tasks", data)
      .then((res) => {
        console.log(res.data);
        toast.success(`"${data.title}" task is add`);
        navigate("/");
      })
      .catch((err) => {
        toast.error(`Failed to add "${data.title}" task`);
        console.log(err);
      });
  };

  return (
    <main className="container max-w-5xl mx-auto">
      <form
        className="max-w-2xl mx-auto space-y-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Your Task..."
            className="w-full p-3 transition-all border rounded outline-none focus:border focus:border-gray-600"
          />
          {errors.title && (
            <span className="text-red-500">Task title is required</span>
          )}
        </div>

        <div>
          <textarea
            type="text"
            {...register("description")}
            placeholder="Task Description"
            id=""
            rows="10"
            className="w-full p-3 transition-all border rounded outline-none focus:border focus:border-gray-600"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-4 transition-all border border-gray-500 rounded hover:text-white hover:bg-black"
          >
            Add Task
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTaskPage;
