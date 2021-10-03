import React from 'react';

import Task, { TaskProps } from "./Task";

export interface TaskRendererProps {
    tasklist: Array<TaskProps>
}

class TaskRenderer extends React.Component<TaskRendererProps> {
    constructor(props: TaskRendererProps) {
        super(props);
    }

    renderTasks() {
        return this.props.tasklist.map((taskProps, index) => {
            return <Task {...taskProps} key={index} />
        });
    }

    render() {
        return (
            <div>
                { this.renderTasks() }
            </div>
        );
    }
}

export default TaskRenderer;