import React from 'react';


// the project title plus a delete button
const ProjectItem = (props) => {
    return (
        <div>

            <li>
                <span>{props.proj.title} </span>
                {props.proj.category}
                <a href="#" onClick={()=>{props.onDelete(props.proj.id)}}> X</a>
            </li>

        </div>
    )
}

export default ProjectItem
