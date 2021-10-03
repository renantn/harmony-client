import React, { Fragment } from "react";

import Task, { TaskProps } from "./Task";
import TaskAdder from "./TaskAdder";
import TaskRenderer, { TaskRendererProps } from "./TaskRenderer";

interface TaskManagerProps {};
interface TaskManagerState extends TaskRendererProps {};

class TaskManager extends React.Component <TaskManagerProps> {
    state: TaskManagerState;

    constructor(props: TaskManagerProps) {
        super(props);
        this.state = {
            tasklist: [],
        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(task: TaskProps) {
        this.state.tasklist.push(task);
        this.setState(this.state);
    }

    removeTask(index: number) {
        const newState = { ...this.state };
        newState.tasklist.splice(index, 1);
        this.setState(newState);
    }

    render() {
        return (
            <Fragment>
                <TaskAdder onAddTask={this.addTask}/>
                <TaskRenderer tasklist={this.state.tasklist}/>
            </Fragment>
        )
    }
}

export default TaskManager;