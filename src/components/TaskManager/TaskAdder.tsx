import React, { FormEvent, Fragment, SyntheticEvent } from "react";

interface TaskAdderProps {
    onAddTask: any
};

export default class TaskAdder extends React.Component<TaskAdderProps> {
    descriptionRef: React.RefObject<HTMLInputElement>

    constructor(props: TaskAdderProps) {
        super(props);
        this.descriptionRef = React.createRef<HTMLInputElement>() ;
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const node = this.descriptionRef.current;
        if (node && node.value) {
            const newTask = {
                description: node.value,
            };
            this.props.onAddTask(newTask);
        }
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.onSubmitForm} >
                    <input type="text" ref={this.descriptionRef}/>
                </form>
            </Fragment>
        )
    }
}