import { Button } from "components/button";
import React, { useState } from "react";
import ModalCreate from "../modals/ModalCreate";
import TableContent from "./TableContent";

export function Main() {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const truckList = [
    {
      licenseNumber: "L 5213 BX",
      truckType: "Container",
      plateType: "Black",
      status: "Active",
      productionYear: "2019",
    },
    {
      licenseNumber: "B 1999 BX",
      truckType: "Tronton",
      plateType: "White",
      status: "Inactive",
      productionYear: "2019",
    },
    {
      licenseNumber: "AB 2021 BX",
      truckType: "CDE",
      plateType: "Yellow",
      status: "Active",
      productionYear: "2019",
    },
    {
      licenseNumber: "AE 2837 BX",
      truckType: "CDE",
      plateType: "Black",
      status: "Inactive",
      productionYear: "2019",
    },
    {
      licenseNumber: "AD 1111 BX",
      truckType: "Tronton",
      plateType: "Yellow",
      status: "Active",
      productionYear: "2019",
    },
  ];

  return (
    <div className="px-7 mt-10">
      <div className="flex w-full justify-between mb-5">
        <div className="">
          <div>
            <div>
              <label htmlFor="truck-type">Truck Type:</label>
            </div>
            <select
              name="truck-type"
              id="truck-type"
              className="w-60  rounded p-2 bg-gray-200 text-black"
            >
              <option value="container">Container</option>
              <option value="tronton">Tronton</option>
              <option value="cde">CDE</option>
            </select>

            <input
              id="search"
              type="text"
              className="ml-7 rounded-lg border-2 border-gray-400 p-1"
              placeholder="Filter by keyword..."
              //   value={filterKeyword}
              //   onPaste={(e) => {
              //     e.preventDefault();
              //     handleOnKeywordEntered(e.clipboardData.getData("text/plain"));
              //   }}
              //   onChange={(e) => handleOnKeywordEntered(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-end">
          <Button
            onClick={() => setShowModalCreate(true)}
            variant="btn-primary"
          >
            Add New Truck
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      License Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Truck Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Plate Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Production Year
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {truckList.map((truck, key) => {
                    return <TableContent key={key} truck={truck} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ModalCreate
        isShowing={showModalCreate}
        onClose={() => setShowModalCreate(false)}
      />
    </div>
  );
}
