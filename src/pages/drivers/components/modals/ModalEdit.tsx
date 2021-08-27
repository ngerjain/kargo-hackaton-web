import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useAlert } from "react-alert";
import queryClient from "services/clientProvider";

// props for this modal
interface modalProps {
  data: any;
  isShowing: boolean;
  onClose: () => void;
}

export default function ModalEdit({ data, isShowing, onClose }: modalProps) {
  const alert = useAlert();
  console.log(data);
  const [showModal, setShowModal] = useState(false);
  //   const [data, setData] = useState<ITodo>({
  //     // id: "",
  //     description: "",
  //     deadline: new Date(),
  //     // done: false,
  //     snapshot: null,
  //   });

  //   // Create new todo
  //   const createNewTodo = useMutation(createTodo, {
  //     onError: (error: any) => {
  //       alert.error(error.response.data.message);
  //     },
  //     onSuccess: (data) => {
  //       alert.success("Success creating new data!");
  //       queryClient.invalidateQueries();
  //       onClose();
  //     },
  //   });

  //   const handleChangeDesc = (description: string) => {
  //     setData({ ...data, description });
  //     console.log(data);
  //   };
  //   const handleChangeDeadline = (deadline: Date) => {
  //     console.log(data);
  //     setData({ ...data, deadline });
  //   };
  //   const handleChangeSnapshot = (snapshot: any) => {
  //     console.log(data);
  //     setData({ ...data, snapshot: snapshot[0] });
  //   };

  //   const handleSubmit = () => {
  //     const todo = new FormData();
  //     todo.append("description", data.description);
  //     todo.append("deadline", String(data.deadline));
  //     todo.append("snapshot", data.snapshot);
  //     createNewTodo.mutate(todo);
  //     onClose();
  //   };

  useEffect(() => {
    setShowModal(isShowing);
  }, [isShowing]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Driver</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" encType="multipart/form-data">
                    <div>
                      <div>
                        <label htmlFor="description">Driver Name</label>
                      </div>
                      <input
                        // onChange={(e) => handleChangeDesc(e.target.value)}
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter description here..."
                        className="p-1 border-2 w-full rounded"
                        defaultValue={data.driverName}
                      />
                    </div>

                    <div className="mt-2">
                      <div>
                        <label htmlFor="productionYear">Phone Number</label>
                      </div>
                      <input
                        // onChange={(e) =>
                        // //   handleChangeDeadline(new Date(e.target.value))
                        // }
                        type="text"
                        name="productionYear"
                        id="productionYear"
                        className="p-1 border-2 w-full rounded"
                        defaultValue={data.phoneNumber}
                      />
                    </div>
                    <div className="mt-2">
                      <div>
                        <label htmlFor="stnk">ID Card</label>
                      </div>
                      <input
                        type="file"
                        name="stnk"
                        id="stnk"
                        // onChange={(e) => handleChangeSnapshot(e.target.files)}
                        // className="p-1 border-2 w-full"
                      />
                    </div>
                    <div className="mt-2">
                      <div>
                        <label htmlFor="kir">Driver License</label>
                      </div>
                      <input
                        type="file"
                        name="kir"
                        id="kir"
                        // onChange={(e) => handleChangeSnapshot(e.target.files)}
                        // className="p-1 border-2 w-full"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
