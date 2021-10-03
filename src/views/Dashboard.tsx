import React, { Fragment } from "react";

import Task from "../components/Task"

class Dashboard extends React.Component {
    render() {
        return (
            <Fragment>
                <Task description="Do homework"/>
                <Task description="Clean the house"/>
                <Task description="Do dishes"/>
            </Fragment>
        )
    }
}

export default Dashboard;