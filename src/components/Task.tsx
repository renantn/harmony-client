import React, { Fragment } from "react";
import CSS from "csstype"

interface TaskProps {
    description: string,
}

class Task extends React.Component {
    taskStyle: CSS.Properties;

    constructor(props: TaskProps) {
        super(props);
        this.taskStyle = {
            border: "1px solid black",
        }
    }

    render() {
        return (
            <Fragment>
                <article style={this.taskStyle}>
                    <header> Do homework </header>
                    <aside>
                        <button>Done</button>
                        <button>Remove</button>
                    </aside>
                </article>
            </Fragment>
        );
    }
}

export default Task