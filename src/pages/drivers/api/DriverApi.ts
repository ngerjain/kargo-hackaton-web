import { axios } from "../../../services/";
import {
  IDrivers,
  IPayloadDrivers,
  IPayloadEditDrivers,
} from "pages/drivers/interfaces/drivers";

//api call for get all carrot
export const getAllDrivers = async (): Promise<IDrivers[]> => {
  const { data } = await axios.get(`/drivers`);
  const response: IDrivers[] = data.map(
    (val) =>
      new IDrivers(
        val._id,
        val.nameTag,
        val.isActive, //adjust data from BE
        val.totalBalance,
        val.onHandBalance,
        val.onMarketBalance,
        val.usedBalance,
        val.expiryDate,
        val.createdAt,
        val.updatedAt
      )
  );
  return response.sort((a, b) => {
    return a.isActive === b.isActive ? 0 : a.isActive ? -1 : 1;
  });
};

//api call for create carrot by id
export const createDriver = async (
  payload: IPayloadDrivers
): Promise<IDrivers> => {
  const response = await axios.post(`/drivers`, payload);
  return new IDrivers(
    response.data._id,
    response.data.nameTag,
    response.data.isActive,
    response.data.totalBalance,
    response.data.onHandBalance,
    response.data.onMarketBalance,
    response.data.usedBalance,
    response.data.expiryDate,
    response.data.createdAt,
    response.data.updatedAt
  );
};

//api call for update carrot by id
export const updateDriverById = async (
  payload: IPayloadEditDrivers
): Promise<IDrivers> => {
  // if isActive already same, skip update it
  let newPayload = payload.removeIsActive
    ? {
        nameTag: payload.nameTag,
        totalBalance: payload.totalBalance,
        expiryDate: payload.expiryDate,
      }
    : {
        nameTag: payload.nameTag,
        totalBalance: payload.totalBalance,
        isActive: payload.isActive,
        expiryDate: payload.expiryDate,
      };
  const response = await axios.patch(`/driver/${payload.id}`, newPayload);
  return new IDrivers(
    response.data._id,
    response.data.nameTag,
    response.data.isActive,
    response.data.totalBalance,
    response.data.onHandBalance,
    response.data.onMarketBalance,
    response.data.usedBalance,
    response.data.expiryDate,
    response.data.createdAt,
    response.data.updatedAt
  );
};