const projectDetails = [
  {
      title: "An Introduction to Flux",
      description: "Flux is a design pattern which uses unidirectional data flow pattern to solve the state management complexity. Want to read more..",
      image: "./images/flux.png",
      date: "Aug 2020",
      site: "https://rkreddy99.medium.com/an-introduction-to-flux-abee8fc417f6",
  },
  {
      title: "Are you a potter-head?",
      description: "Let's checkout how well do you know about Harry Potter series by J. K. Rowling.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  }
]


let projectsContainer = document.getElementsByClassName("projects-container")[0]

function appendProjects(index) {
    const element = projectDetails[index];
  
    let project = document.createElement("div")
    project.className = "project"

    let projectImageDiv = document.createElement("div")
    projectImageDiv.className = "project-image"

    let projectImage = document.createElement("img")
    projectImage.className = "image"
    projectImage.src = element.image
    projectImage.alt = "project photo"

    let projectDescription = document.createElement("div")
    projectDescription.className = "project-description"

    let title = document.createElement("h4")
    title.textContent = element.title

    let description = document.createElement("p")
    description.textContent =  element.description

    let visitSite = document.createElement("button")
    visitSite.className = "visit-site"
    visitSite.innerHTML = "Read Blog"

    projectsContainer.appendChild(project)
    project.appendChild(projectImageDiv)
    projectImageDiv.appendChild(projectImage)
    project.appendChild(projectDescription)
    projectDescription.appendChild(title)
    projectDescription.appendChild(description)
    projectDescription.appendChild(visitSite)
    projectsContainer.appendChild(document.createElement("hr"))
}


let showMore = false
{/* <button class="load">Load More</button> */}

for (let index = 0; index < 2; index++) {
  appendProjects(index)
}
