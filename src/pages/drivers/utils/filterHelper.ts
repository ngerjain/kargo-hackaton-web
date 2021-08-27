
import { IDrivers } from "pages/drivers/interfaces/drivers";

//filter helper
export const filterData = (data: IDrivers[], keyword: string) => {
  let key = keyword.toLowerCase();
  return data.filter(
    (drivers) =>
      drivers.driverName.toLowerCase().includes(key) ||
      drivers.phoneNumber.toLowerCase().includes(key) ||
      drivers.status.toLowerCase().includes(key)
  );
};