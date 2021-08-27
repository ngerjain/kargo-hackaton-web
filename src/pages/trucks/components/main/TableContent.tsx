import { Button } from "components/button";
import React, { useState } from "react";
import ModalEdit from "../modals/ModalEdit";

export default function TableContent({ key, truck }) {
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <>
      <tr key={key}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {truck.licenseNumber}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{truck.truckType}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
            {truck.plateType}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              truck.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } `}
          >
            {truck.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {truck.productionYear}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <Button onClick={() => setShowModalEdit(true)} variant="btn-success">
            Edit
          </Button>
        </td>
      </tr>

      <ModalEdit
        data={truck}
        isShowing={showModalEdit}
        onClose={() => setShowModalEdit(false)}
      />
    </>
  );
}
