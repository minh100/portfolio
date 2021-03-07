import React from 'react'
import '../Css/Project.css';


function Project() {
    return (
        <div id="project-page" className="project-container">
            <div className="project-content">
            <div className="contact-content-inner">
                    <h2 className="project-title">
                        Projects
                    </h2>
                    <hr className="space-black"></hr>
                </div>
                <ul className="list-container">
                    {
                        projectItem.map((project) => (
                            <li key={project.title}
                                className="card"
                                style={{ backgroundImage: `url(${project.picture})` }}
                            >
                                <div className="card-info">
                                    <h2 className="card-title">{project.title}</h2>
                                    <h5 className="card-subtitle">{project.subtitle}</h5>
                                    <h5 className="card-tech">{project.tech}</h5>
                                    <p className="card-description">{project.info}</p>
                                    <div className="project-links">
                                        {
                                            (project.link !== "") && (
                                                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                                    Link to site
                                                </a>
                                            )
                                        }
                                        <a className="project-link" href={project.code}target="_blank" rel="noopener noreferrer">Link to Code</a>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

}

const projectItem = [
    {
        title: "MChat",
        subtitle: "Online Chat App",
        tech: "ReactJS, Express, NodeJS, Socket.IO",
        info: "Website that allows users to create and join rooms to talk to other users in real time",
        link: "https://minh100.github.io/MChat/",
        code: "https://github.com/minh100/MChat",
        picture: require('../Images/MChatPic.png')
    },
    {
        title: "MyList",
        subtitle: "Anime Searcher and Tracker",
        tech: "ReactJS, HTML, CSS",
        info: "React website that allows you to search for anime and keep track of it in 3 lists. You can search for specific anime or use the prepopulated categories. All your anime lists are saved so you can comeback whenever and explore again.",
        link: "https://minh100.github.io/MyList/",
        code: "https://github.com/minh100/MyList/",
        picture: require('../Images/myListpic3.png'),
    },
    {

        title: "Portfolio",
        subtitle: "Personal Website",
        tech: "ReactJS, HTML, CSS",
        info: "Built a website to gain exposure to web development and showcase my passions and interests",
        link: "",
        code: "https://github.com/minh100/portfolio",
        picture: require('../Images/Haku.jpg'),
    },
    {
        title: "Assassins",
        subtitle: "Automation of Assassins/Spoon game",
        tech: "Java",
        info: "Program to automatically update the status of the popular game \"Assassins/Spoons\". Reduces human mistakes and increases efficiency of information update/relay.",
        link: "",
        code: "https://github.com/minh100/Assassins",
        picture: require('../Images/dagger.png'),
    },
    {
        title: "Bit Decoder/Encoder",
        subtitle: "Bit manipulation",
        tech: "C",
        info: "Program that takes in any length of ASCII values and converts it into any desired ASCII values. Has ability consider unsigned, signed, two's complement, and parity factors when converting.",
        link: "",
        code: "https://github.com/minh100",
        picture: require('../Images/bitdecoder.png')
    },
    {
        title: "Nonogram",
        subtitle: "Logic Puzzle",
        tech: "Java, JavaFX, Maven",
        info: "A single player logic game involving using the row and column clue to lead to the desired pattern",
        link: "",
        code: "https://github.com/minh100/Nonogram",
        picture: require('../Images/nonogram.png')
    },

]

export default Project;