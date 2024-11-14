import s from './ProjectsPanel.module.css';
import Project from "./Project/Project";

const data = [
    {
        name: "Some1",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    },
    {
        name: "Some2",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    },
    {
        name: "Some3",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    },
    {
        name: "Some4",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    },
    {
        name: "Some5",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    },
    {
        name: "Some6",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    },
    {
        name: "Some7",
        link: "https:google.com",
        stack: ["Lorem ipsum dolor.","Lorem ipsum dolor sit amet.","Lorem ipsum.","Lorem ipsum dolor.","Lorem ipsum dolor sit amet."],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus hic in magnam modi necessitatibus nisi, pariatur, quas quibusdam quisquam repellat. Error illum ipsa iste maiores, perspiciatis quas recusandae unde. Aperiam aspernatur blanditiis deleniti dolorum eaque earum enim excepturi expedita, harum id libero minima mollitia natus neque ullam vel."
    }
];

function ProjectsPanel(props) {
    return (
        <div className={s.ProjectsPanel}>
            {data.map(project => {
                return <Project projectData={project}/>
            })}
        </div>
    );
}

export default ProjectsPanel;
