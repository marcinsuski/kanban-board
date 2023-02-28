import EditTask from "./EditTask";
import { TaskList } from "../App";

export interface EditTaskType {
    task: any;
    id: number;
    taskList: TaskList[];
    setTaskList: React.Dispatch<React.SetStateAction<any>>;
}

const ToDo = ({ id, task, taskList, setTaskList }: EditTaskType) => {
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
            <div className="w-full flex justify-center">
                <button
                    className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-3 m-1 rounded-lg"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ToDo;
