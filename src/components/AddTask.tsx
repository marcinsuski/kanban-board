import { useState } from "react";

const AddTask = () => {
    const [addModal, setAddModal] = useState<boolean>(false);

    return (
        <>
            <button
                className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 p-2 pr-2.5 rounded hover:opacity-70"
                type="button"
                title="openModal"
                onClick={() => {
                    setAddModal(true);
                }}
            >
                +New
            </button>
            {addModal ? (
                <>
                    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                        <div className=" w-9/12 flex flex-row justify-between p-5 border bg-white">
                            <h3 className="text-3xl font-semibold">
                                Add New Task
                            </h3>
                            <button
                                className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                                onClick={() => setAddModal(false)}
                            >
                                x
                            </button>

                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default AddTask;
