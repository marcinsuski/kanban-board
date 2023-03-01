import EditTask from "./EditTask";
import { TaskList } from "../App";
import { useEffect, useState } from "react";

export interface EditTaskType {
    task: any;
    id: number;
    taskList: TaskList[];
    setTaskList: React.Dispatch<React.SetStateAction<any>>;
}

const ToDo = ({ id, task, taskList, setTaskList }: EditTaskType) => {
    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout> = setTimeout(() => {}, 0);
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
         else if (!running) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [running]);

    const handleDelete: React.Dispatch<React.SetStateAction<any>> = (
        itemId: number
    ) => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks: TaskList[]) =>
            currentTasks.filter((todo) => todo.id !== itemId)
        );
    };

    return (
        <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
            <div className="flex flex-row w-full justify-between">
                <p className="font-semibold text-xl">{task.projectName}</p>
                <EditTask
                    id={id}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>
            <p className="text-lg py-2">{task.taskDescription}</p>
            <div className="w-full flex flex-row items-center justify-evenly">
                <div className=" w-1/4 min-w-max text-xl font-semibold py-4">
                    <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span className="text-sm">
                        {("0" + Math.floor((time / 10) % 100)).slice(-2)}
                    </span>
                </div>
                <div className="w-1/3 max-w-sm flex flex-row justify-evenly gap-4">
                    {running ? (
                        <button
                            className="border rounded-lg py-1 px-3"
                            onClick={() => setRunning(false)}
                        >
                            Stop
                        </button>
                    ) : (
                        <button
                            className="border rounded-lg py-1 px-3"
                            onClick={() => setRunning(true)}
                        >
                            Start
                        </button>
                    )}
                    <button
                        className="border rounded-lg py-1 px-3"
                        onClick={() => setTime(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center mt-2">
                <button
                    className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-3 m-2 rounded-lg"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ToDo;
