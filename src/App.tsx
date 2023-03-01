import { Fragment, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

export interface TaskList {
    id: number;
    projectName: string;
    taskDescription: string;
    timestamp: Date;
}

export interface TaskType {
    id: number;
    taskList: TaskList[];
    setTaskList: React.Dispatch<React.SetStateAction<any>>;
}

function App() {
    const [taskList, setTaskList] = useState([]);
    console.log(taskList);
    return (
        <Fragment>
            <h1 className="text-2xl font-bold py-4 pl-6">Kanban Board</h1>
            <p className="text-xl pl-6">Hi there!</p>
            <div className="flex flex-row items-center">
                <p className="text-xl pl-6">Click</p>
                <AddTask
                    id={new Date().getTime()}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
                <p className="text-xl my-2"> to add a new task</p>
            </div>
            <div>
                <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-2 bg-gray-300">
                    ToDo:{" "}
                </h2>
                {taskList.map((task, i) => (
                    <ToDo
                        key={i}
                        id={new Date().getTime()}
                        taskList={taskList}
                        setTaskList={setTaskList}
                        task={task}
                    />
                ))}
            </div>
        </Fragment>
    );
}

export default App;
