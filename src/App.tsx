import React, { Fragment, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import "./App.css";
import AddTask from "./components/AddTask";
import ToDo from "./components/ToDo";

export interface TaskList {
    id: number;
    projectName: string;
    taskDescription: string;
    timestamp: Date;
    duration: number;
}

export interface TaskType {
    id: number;
    taskList: TaskList[];
    setTaskList: React.Dispatch<React.SetStateAction<any>>;
}

function App() {
    const [taskList, setTaskList] = useState<[]>([]);
    const [completed, setCompleted] = useState<TaskList[]>([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "todo",
        drop: (item: TaskList) =>
            addToCompleted(
                item.id,
                item.projectName,
                item.taskDescription,
                item.timestamp,
                item.duration
            ),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addToCompleted = (
        id: number,
        projectName: string,
        taskDescription: string,
        timestamp: Date,
        duration: number
    ) => {
        const moveTask: TaskList[] = taskList.filter(
            (task: TaskList) => id === task.id
        );
        setCompleted((completed: TaskList[]) => [
            ...completed,
            { moveTask, id, projectName, taskDescription, timestamp, duration },
        ]);
    };

    useEffect(() => {
        let array: string | null = localStorage.getItem("taskList");
        if (array) {
            setTaskList(JSON.parse(array));
        }
    }, []);
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
            <div className="flex flex-row">
                <div className="w-full">
                    <h2 className="ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-2 bg-gray-300">
                        ToDo:{" "}
                    </h2>
                    <div className="ml-6 flex flex-col-reverse">
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
                </div>
                <div className="w-full flex flex-col" ref={drop}>
                    <h2 className="text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-2 bg-gray-300">
                        Completed:{" "}
                    </h2>
                    {completed.map((task, i) => (
                        <ToDo
                            key={i}
                            id={new Date().getTime()}
                            taskList={taskList}
                            setTaskList={setTaskList}
                            task={task}
                        />
                    ))}
                </div>
            </div>
            <div></div>
        </Fragment>
    );
}

export default App;
