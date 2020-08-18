import React from 'react';

// the project title plus a delete button
const ProjectItem = (props) => {
    return (
        <div>

            <li>
                <span>{props.proj.title} </span>
                {props.proj.category}
                <button onClick={()=>{props.onDelete(props.proj.id)}}> X</button>
            </li>

        </div>
    )
}

export default ProjectItem
