import React, { Fragment } from "react";

import { TaskManager } from "../components";

class Dashboard extends React.Component {
    render() {
        return (
            <Fragment>
                <TaskManager/>
            </Fragment>
        )
    }
}

export default Dashboard;