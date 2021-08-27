import { Button } from "components/button";
import React from "react";

export function Main() {
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
          <Button variant="btn-primary">Add New Shipment</Button>
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
                      Shipment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Lisence
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Driver's Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Origin
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Loading Date
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
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            DO-123
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">B 2222 UU</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className=" inline-flex text-xs leading-5 font-semibold rounded-full">
                        Budi
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className=" inline-flex text-xs leading-5 font-semibold rounded-full">
                        Jakarta
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className=" inline-flex text-xs leading-5 font-semibold rounded-full">
                        Surabaya
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className=" inline-flex text-xs leading-5 font-semibold rounded-full">
                        21 Agustus
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
