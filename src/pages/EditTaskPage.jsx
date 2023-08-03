import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/axios-instance";
import { useEffect } from "react";
import useDynamicTitle from "../hooks/useDynamicTitle";

const EditTaskPage = () => {
  useDynamicTitle("Edit Task - Task Management App");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  console.log(params);
  useEffect(() => {
    api.get(`/tasks/${params.id}`).then((res) => {
      reset({
        title: res.data.title,
        description: res.data.description,
      });
    });
  }, [params.id, reset]);

  const onFormSubmit = (data) => {
    console.log(data);

    api
      .put(`/tasks/${params.id}`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Task updated!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(`Failed to update "${data.title}" task!`);
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
            Update Task
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditTaskPage;
