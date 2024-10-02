const projects = [
    {
        name: "kitelang",
        description: "Kite is a very simple low-level programming language.<br>It provides direct access to memory and hardware with pointers and registers, allowing for system-level programming with minimal abstraction.",
        ghlink: "https://github.com/Vardan2009/kitelang",
        skills: ["C++", "x86 Assembly"]
    },
    {
        name: "numeral",
        description: "A very minimal expression evaluator written in C++",
        ghlink: "https://github.com/Vardan2009/numeral",
        skills: ["C++"]
    },
    {
        name: "spamsentry",
        description: "A simple machine learning algorithm created for a workshop in TUMO Yerevan",
        ghlink: "https://github.com/Vardan2009/spamsentry",
        skills: ["Python", "SkicitLearn", "Pandas"]
    },
    {
        name: "eigerlang",
        description: "Eiger (name from Mt. Eiger, Switzerland) is a simple interpreted dynamic-typed programming language.",
        ghlink: "https://github.com/eigerproject/eigercs",
        skills: ["C#"]
    },
    {
        name: "speedtypers",
        description: "A web keyboard training game created for a workshop in TUMO Yerevan",
        ghlink: "https://github.com/Vardan2009/FastCoding",
        skills: ["HTML", "CSS", "JavaScript"]
    }
]
const elProjName = document.querySelector("h1#proj_name")
const elProjDescription = document.querySelector("p#proj_description")
const elProjSkills = document.querySelector("span#proj_skills")
const elProjGhLink = document.querySelector("a#proj_ghlink")
let projIdx = 0;

const setProj = (delta) => {
    projIdx += delta
    if (projIdx < 0)
        projIdx = projects.length - 1
    if (projIdx >= projects.length)
        projIdx = 0
    elProjName.innerHTML = projects[projIdx].name
    elProjDescription.innerHTML = projects[projIdx].description
    elProjSkills.innerHTML = projects[projIdx].skills.join(', ')
    elProjGhLink.setAttribute("href", projects[projIdx].ghlink)
}

setProj(0)