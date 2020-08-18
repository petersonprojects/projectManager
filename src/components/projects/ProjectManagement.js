import React, { Component } from 'react';
import AddProject from './AddProject';
import { v1 as uuidv1 } from 'uuid';
import Project from './Project'

class ProjectManagement extends Component {

    constructor() {

        super();

        this.state = {
            projects: []
        }

    }

    componentDidMount = () => {

        // typically this is where an api or database call goes
        // what we're doing here is initalizing some example projects to start

        this.setState({
            projects: [
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "JavaScript"
                },
                {
                    id: uuidv1(),
                    category: "Back-End",
                    title: "Node.js"
                },
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "React Bootstrap"
                }
            ]
        })
    }

    handleAddProject = (newProject) => {
        
        let oldProjects = [...this.state.projects];

        oldProjects.push(newProject);

        this.setState({
            projects: oldProjects
        })

    }

    handleDeleteProject = (id) => {

        let oldProjects = [...this.state.projects];

        let index = oldProjects.findIndex(pObj => {

            return pObj.id === id;
        })

        console.log(index)

        oldProjects.splice(index,1);

        this.setState({
            projects: oldProjects
        })

    }
    

    render()
    {

        return (
            <>
                Project Management
                <br/>

                <AddProject addProject={(newProject)=>this.handleAddProject(newProject)}/>

                <Project projects={this.state.projects} onDelete={(id)=>this.handleDeleteProject(id)}/>
            </>
        )
    }
}

export default ProjectManagement
