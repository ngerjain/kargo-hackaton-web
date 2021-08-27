import { Button } from "components/button";
import React, { useState } from "react";
import ModalEdit from "../modals/ModalEdit";

export default function TableContent({ key, driver }) {
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <>
      <tr key={key}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {driver.driverName}
              </div>
            </div>
          </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <span className=" inline-flex text-xs leading-5 font-semibold rounded-full">
            {driver.phoneNumber}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ">
            {driver.createdAt}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              driver.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } `}
          >
            {driver.status}
          </span>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <Button onClick={() => setShowModalEdit(true)} variant="btn-success">
            Edit
          </Button>
        </td>
      </tr>

      <ModalEdit
        data={driver}
        isShowing={showModalEdit}
        onClose={() => setShowModalEdit(false)}
      />
    </>
  );
}
