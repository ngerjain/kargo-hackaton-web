import { Button } from "components/button";
import ModalCreate from "../modals/ModalCreate";
import React, { useState } from "react";
import TableContent from "./TableContent";

export function Main() {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const driverList = [
    {
      driverName: "E",
      phoneNumber: "+666",
      createdAt: "2 August 2021",
      status: "Active",
    },
    {
      driverName: "D",
      phoneNumber: "+666",
      createdAt: "2 August 2021",
      status: "Active",
    },
    {
      driverName: "C",
      phoneNumber: "+666",
      createdAt: "2 August 2021",
      status: "Active",
    },
    {
      driverName: "BX",
      phoneNumber: "+666",
      createdAt: "2 August 2021",
      status: "Active",
    },
    {
      driverName: "A",
      phoneNumber: "+666",
      createdAt: "2 August 2021",
      status: "Active",
    },
  ];

  return (
    <div className="px-7 mt-10">
      <div className="flex w-full justify-between mb-5 ">
        <div className="">
          <div>
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
        <div className="flex items-end ">
          <Button
            onClick={() => setShowModalCreate(true)}
            variant="btn-primary"
          >
            Add New Driver
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
                      Driver Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {driverList.map((driver, key) => {
                    return <TableContent key={key} driver={driver} />;
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
