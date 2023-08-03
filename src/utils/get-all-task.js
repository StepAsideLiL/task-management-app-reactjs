import { useQuery } from "react-query";
import api from "./axios-instance";

const useGetAllTasks = () => {
  const {
    isLoading: isAllTaskLoading,
    refetch,
    data: allTask = [],
  } = useQuery({
    queryKey: ["getAllTasks"],
    queryFn: async () => {
      const res = await api.get("/tasks");
      return res.data;
    },
  });

  return { isAllTaskLoading, refetch, allTask };
};

export default useGetAllTasks;
