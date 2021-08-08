const projectDetails = [
  {
      title: "Do you know me?",
      description: "A fun CLI app based on NodeJS that can quiz my friends on how well do they know me.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Are you a potter-head?",
      description: "Let's checkout how well do you know about Harry Potter series by J. K. Rowling.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Minion Speak",
      description: "Did you know that all the gibberish that minions speak is an actual language. Use this app to translate text from English to the Minion language or Banana laguage.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Speak Dothraki",
      description: "Have you heard of Dothraki language and wanted to speak it? Well here is an app that can translate text from English to Dothraki.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Emoji Interpreter",
      description: "This a fun app that can tell you meaning of animals and nature emojis.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Good Movies",
      description: "Do you love to watch movies? You would find some good recommendations.",
      image: "./images/photo.png",
      date: "Aug 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Cash Register",
      description: "This is an useful app that can tell the amount that a cashier has to return to the customer upon bill payment.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Is your birthday lucky?",
      description: "Find out whether your birthdate is lucky or not.",
      image: "./images/photo.png",
      date: "July 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Fun with Triangles",
      description: "Find out properties of triangles and play a quiz on triangles.",
      image: "./images/photo.png",
      date: "Aug 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  },
  {
      title: "Palindromic Birthday",
      image: "./images/photo.png",
      description: "Use this app to check whether if your birthdate forms a palindrome.",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/",
      date: "Aug 2020",
  },
  {
      title: "PnL Calculator",
      description: "Find out how much profit/loss have you made on a stock.",
      image: "./images/photo.png",
      date: "Aug 2020",
      site: "https://stackoverflow.com/",
      source: "https://stackoverflow.com/"
  }
]


let projectsContainer = document.getElementsByClassName("projects-container")[0]

let loadButton = document.createElement("button")
loadButton.className = "load"
loadButton.innerHTML = "Show More"
loadButton.addEventListener("click", () => {
    showMore = true
    loadButton.parentNode.removeChild(loadButton)
    for (let index = 3; index < projectDetails.length; index++) {
        appendProjects(index)
    }
})

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
    visitSite.innerHTML = "Visit Site"

    let viewSource = document.createElement("button")
    viewSource.className = "view-source"
    viewSource.innerHTML = "View Source"

    projectsContainer.appendChild(project)
    project.appendChild(projectImageDiv)
    projectImageDiv.appendChild(projectImage)
    project.appendChild(projectDescription)
    projectDescription.appendChild(title)
    projectDescription.appendChild(description)
    projectDescription.appendChild(visitSite)
    projectDescription.appendChild(viewSource)
    projectsContainer.appendChild(document.createElement("hr"))
}


let showMore = false
{/* <button class="load">Load More</button> */}

for (let index = 0; index < 3; index++) {
  appendProjects(index)
}

projectsContainer.appendChild(loadButton);
