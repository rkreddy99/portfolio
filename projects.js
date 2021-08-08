let projectDetails = [
  {
      title: "Do you know me?",
      description: "A fun CLI app based on NodeJS that can quiz my friends on how well do they know me.",
      image: "./images/know-me.png",
      date: "July 2020",
      site: "https://replit.com/@Rama-KrishnaKri/KnowMe?embed=1&output=1",
      source: "https://github.com/rkreddy99/know-me"
  },
  {
      title: "Are you a potter-head?",
      description: "Let's checkout how well do you know about Harry Potter series by J. K. Rowling.",
      image: "./images/potter-head.png",
      date: "July 2020",
      site: "https://replit.com/@Rama-KrishnaKri/PotterHead?embed=1&output=1",
      source: "https://github.com/rkreddy99/movies-quiz"
  },
  {
      title: "Minion Speak",
      description: "Did you know that all the gibberish that minions speak is an actual language. Use this app to translate text from English to the Minion language or Banana laguage.",
      image: "./images/minion-language.png",
      date: "July 2020",
      site: "https://minion-translator-m6.netlify.app/",
      source: "https://github.com/rkreddy99/minion-translator"
  },
  {
      title: "Speak Dothraki",
      description: "Have you heard of Dothraki language and wanted to speak it? Well here is an app that can translate text from English to Dothraki.",
      image: "./images/speak-dothraki.png",
      date: "July 2020",
      site: "https://dothraki-translator-m7.netlify.app/",
      source: "https://github.com/rkreddy99/dothraki-translator"
  },
  {
      title: "Emoji Interpreter",
      description: "This a fun app that can tell you meaning of animals and nature emojis.",
      image: "./images/know-emoji.png",
      date: "July 2020",
      site: "https://know-ur-emoji-m8.netlify.app/",
      source: "https://github.com/rkreddy99/emoji-detector"
  },
  {
      title: "Good Movies",
      description: "Do you love to watch movies? You would find some good recommendations.",
      image: "./images/good-movies.png",
      date: "Aug 2020",
      site: "https://movie-recommender-m09.netlify.app/",
      source: "https://github.com/rkreddy99/genre-recommender"
  },
  {
      title: "Cash Register",
      description: "This is an useful app that can tell the amount that a cashier has to return to the customer upon bill payment.",
      image: "./images/cash-register.png",
      date: "July 2020",
      site: "https://cash-registry-m10.netlify.app/",
      source: "https://github.com/rkreddy99/cash-register"
  },
  {
      title: "Is your birthday lucky?",
      description: "Find out whether your birthdate is lucky or not.",
      image: "./images/lucky-birthday.png",
      date: "July 2020",
      site: "https://lucky-birthday-m11.netlify.app/",
      source: "https://github.com/rkreddy99/lucky-birthday"
  },
  {
      title: "Fun with Triangles",
      description: "Find out properties of triangles and play a quiz on triangles.",
      image: "./images/fun-triangles.png",
      date: "Aug 2020",
      site: "https://fun-with-triangles-m12.netlify.app/",
      source: "https://github.com/rkreddy99/fun-with-triangles"
  },
  {
      title: "Palindromic Birthday",
      image: "./images/palindrome-birthday.png",
      description: "Use this app to check whether if your birthdate forms a palindrome.",
      site: "https://palindrome-birthday-m13.netlify.app/",
      source: "https://github.com/rkreddy99/palindrome-birthday",
      date: "Aug 2020",
  },
  {
      title: "Stock PnL Calculator",
      description: "Find out how much profit/loss have you made on a stock.",
      image: "./images/stock-price.png",
      date: "Aug 2020",
      site: "https://stock-price-calculator-m14.netlify.app/",
      source: "https://github.com/rkreddy99/stock-price-calculator"
  }
]

projectDetails = projectDetails.reverse()

let projectsContainer = document.getElementsByClassName("projects-container")[0]

let loadButton = document.createElement("button")
loadButton.className = "load"
loadButton.innerHTML = "Show More"
loadButton.addEventListener("click", () => {
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
    visitSite.addEventListener("click", () => {window.open(element.site)})

    let viewSource = document.createElement("button")
    viewSource.className = "view-source"
    viewSource.innerHTML = "View Source"
    viewSource.addEventListener("click", () => {window.open(element.source)})

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

for (let index = 0; index < 3; index++) {
  appendProjects(index)
}

projectsContainer.appendChild(loadButton);
