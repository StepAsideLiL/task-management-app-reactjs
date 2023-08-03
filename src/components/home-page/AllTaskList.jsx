import useGetAllTasks from "../../utils/get-all-task.js";
import TaskCard from "../TaskCard";

const AllTaskList = () => {
  const { isAllTaskLoading, refetch, allTask } = useGetAllTasks();

  if (isAllTaskLoading) {
    return <h1>Loading</h1>;
  }

  if (!allTask.length) {
    return <h1>No Task Added!</h1>;
  }

  return (
    <section className="space-y-3">
      {allTask.map((task) => (
        <TaskCard key={task._id} task={task} refetch={refetch} />
      ))}
    </section>
  );
};

export default AllTaskList;
