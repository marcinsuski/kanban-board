import { Fragment, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

export interface TaskList {
    projectName: string;
    taskDescription: string;
}

// export interface ToDo {
//     key: number;
//     task: object;
// }

export interface TaskType {
    taskList: TaskList[];
    setTaskList: React.Dispatch<React.SetStateAction<any>>;
}

function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <Fragment>
            <h1 className="text-2xl font-bold py-4 pl-6">Kanban Board</h1>
            <p className="text-xl pl-6">Hi there!</p>
            <div className="flex flex-row items-center">
                <p className="text-xl pl-6">Click</p>
                <AddTask taskList={taskList} setTaskList={setTaskList} />
                <p className="text-xl my-2"> to add a new task</p>
            </div>
            <div>
                <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-2 py-1 px-2 bg-gray-300">
                    ToDo:{" "}
                </h2>
                {taskList.map((task, i) => (
                    <>
                        <ToDo key={i} task={task} />
                    </>
                ))}
            </div>
        </Fragment>
    );
}

export default App;
