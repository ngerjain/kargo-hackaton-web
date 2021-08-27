import { axios } from "services";

export const getAllTrucks = async () => {
  const { data } = await axios.get("/truck");
  return data;
};

export const createTruck = async (data: any) => {
  const response = await axios.post("/truck", data);
  console.log(response);
  return response;
};

export const editTruck = async ({ id, data }: any) => {
  const response = await axios.patch(`/truck/${id}`, data);
  console.log(response);
  return response;
};

export const deleteTruck = async (id: string) => {
  const response = await axios.delete(`/truck/${id}`);
  return response;
};
