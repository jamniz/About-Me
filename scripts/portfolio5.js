document.addEventListener("DOMContentLoaded", function() {
    // Réinitialiser la valeur du sélecteur de langue
    document.getElementById("langue").value = "francais";

    // Points de rupture (! voir .scss) :
    let ptEcran = 576
    let moEcran = 768
    let gdEcran = 1024

    // Sélection des éléments à manipuler
    let navZone1 = document.querySelector(".navZone1")
    let navZone2 = document.querySelector(".navZone2")
    let bouton1 = document.querySelector(".bouton1")
    let bouton3 = document.querySelector(".bouton3")
    let bouton5 = document.querySelector(".bouton5")
    let bouton6 = document.querySelector(".bouton6")
    let skillsBtn = document.querySelector(".skillsBtn")
    let projectsBtn = document.querySelector(".projectsBtn")
    let zoneBloc2 = document.querySelector(".zoneBloc2")
    let zoneBloc4 = document.querySelector(".zoneBloc4")
    let zonedevImg = document.querySelector(".zoneDevImg")
    let zoneBloc1 = document.querySelector(".zoneBloc1")
    let zoneBloc3 = document.querySelector(".zoneBloc3")
    let zoneBouton5 = document.querySelector(".zoneBouton5")
    let zoneBouton6 = document.querySelector(".zoneBouton6")
    let skillsZone1 = document.querySelector(".skillsZone1")
    let skillsZone2 = document.querySelector(".skillsZone2")
    let skillsZone3 = document.querySelector(".skillsZone3")
    let bouton7 = document.querySelector(".bouton7")
    let projects = document.querySelector(".projects")
    let prZone1 = document.querySelector(".prZone1")
    let prZone2 = document.querySelector(".prZone2")
    let prZone3 = document.querySelector(".prZone3")
    let portfolio = document.querySelector(".portfolio")
    let bouton8 = document.querySelector(".bouton8")
    let zoneMyself = document.querySelector(".zoneMyself")
    let bouton2 = document.querySelector(".bouton2")
    let skills = document.querySelector(".skills")
    let zoneBouton7 = document.querySelector(".zoneBouton7")
    let contactBtn = document.querySelector(".contactBtn")
    let footerZone = document.querySelector(".footerZone")

    // Traductions
    let traductions = {
        francais: {
            "intro-1-text": "À propos de moi...",
            "intro-2-text": "Je vous souhaite une agréable lecture.",
            "bouton1" : "Ce que je recherche",
            "bouton3" : "Ce que je propose",
            "skillsBtn" : "Mes compétences",
            // "projectsBtn" : "Mes projets, réalisations,...",
            "projectsBtn" : "Mes réalisations",
            "bloc2First" : "Je suis passionnée par les algorithmes de communication au sens large, qu'ils soient informatiques, linguistiques, verbaux et non verbaux, j'essaie de les analyser et d'en apprendre davantage. Je souhaite transformer cette passion, notamment pour le développement informatique, en opportunité professionnelle.",
            "bloc2Second" : "<em>Ma quête de savoir n'est jamais terminée. Chaque ligne de code est une opportunité d'apprendre et chaque défi rencontré est une chance de grandir.</em>",
            "bloc4First" : "L'important n'est pas de tout savoir, mais d'avoir une idée du projet, de le visualiser, de l'analyser, de réfléchir à comment le réaliser et de savoir où chercher les détails et les connaissances concrètes nécessaires à sa réalisation.",
            "bloc4Second" : "Mais surtout, il faut avoir l'humilité d'admettre que l'on ne sait pas tout, être à l'écoute des conseils, ne pas se reposer sur ses lauriers, et toujours avoir l'envie d'apprendre davantage.",
            "bloc1Text1" : "<strong>Ce que je recherche&nbsp;:</strong><br>J'ai besoin d'un cadre et d'un mentorat pour apprendre à partir d'expériences et de connaissances des professionnels du développement Web et ainsi progresser.",
            "listItem1a" : "Je souhaite intégrer une formation qui me donnera une ligne directrice pour devenir développeuse informatique.",
            "listItem1b" : "Je recherche également une entreprise pour me faire découvrir la réalité du métier de développeur informatique dans le cadre d’une Immersion en milieu professionnel (convention France Travail).",
            "bloc3Text1" : "<strong>Ce que je propose&nbsp;:</strong><br>",
            "listItem3a" : "Détermination et motivation",
            "listItem3b" : "Rigueur et persévérance",
            "listItem3c" : "Capacité d’analyse et sens du détail",
            "listItem3d" : "Capacité d'apprendre de manière autonome",
            "listItem3e" : "<em>…et surtout, une curiosité insatiable et une forte envie de progresser.</em>",
            "skillsZone1" : "Mes acquis&nbsp;:<br><small>(à approfondir certainement)</small>",
            "skillsText2" : "Acquises de manière autonome,<br>(encadrement probablement nécessaire)&nbsp;:",
            "itemSkills2a" : "HTML/CSS (SASS)",
            "itemSkills2b" : "JavaScript (Front-End)",
            "itemSkills2c" : "Git/GitHub",
            "prZone1" : "Mes réalisations&nbsp;:",
            "prZone2" : "<em>C'est un peu vide, mais donnez-moi une chance, et je remplirai cette partie avec mes projets.</em>",
            "bouton5" : "Fermer",
            "bouton6" : "Fermer",
            "bouton2-open" : "<em>Et encore...</em>",
            "bouton2-close" : "<em>Retour</em>",
            "bouton7" : "Fermer",
            "bouton8" : "Fermer",
            "contactBtn-open" : "<strong>Contact</strong>",
            "contactBtn-close" : "<em>Fermer</em>",
            "portfolio1a" : "Mon portfolio",
            "portfolio2" : "<strong>À propos de moi.</strong><br><em>Mon voyage à travers les lignes, un bouton à la fois, un mot à la fois.<br>Un vrai défi, une rencontre enrichissante et j'ai beaucoup appris.</em>",
        },
        anglais: {
            "intro-1-text": "Some facts about me...",
            "intro-2-text": "Have a good time.",
            "bouton1" : "What I am looking for",
            "bouton3" : "What I bring to the table",
            "skillsBtn" : "My Skills",
            // "projectsBtn" : "My Projects, Achievements,...",
            "projectsBtn" : "My Achievements",
            "bloc2First" : "I have a strong interest in communication algorithms in the broadest sense, whether they are computer-based, linguistic, verbal and non-verbal, I try to analyze them and learn more. I would like to transform this passion, particularly for computer development, into a professional opportunity.",
            "bloc2Second" : "<em>My quest for skills is never over. Each line of code is an opportunity to learn and every challenge encountered is a chance to grow.</em>",
            "bloc4First" : "The important thing is not to know everything, but to have an idea of the project, to visualize it, to analyze it, to think about how to realize it and to know where to look for the details and concrete knowledge necessary for its realization.",
            "bloc4Second" : "But above all, you must have the humility to admit that you do not know everything, be open to advice, not rest on your laurels, and always have the desire to learn more.",
            "bloc1Text1" : "<strong>What I am looking for:</strong><br>I need a framework and mentorship to learn from the experiences and knowledge of web development professionals and thus progress.",
            "listItem1a" : "I wish to join a training program that will give me a guideline to become a web developer.",
            "listItem1b" : "I also am looking for a company to introduce me to the reality of the web developer profession as part of a Professional Immersion (supervised by France Travail).",
            "bloc3Text1" : "<strong>What I bring to the table:</strong><br>",
            "listItem3a" : "Determination and motivation",
            "listItem3b" : "Rigor and perseverance",
            "listItem3c" : "Analytical ability and attention to detail",
            "listItem3d" : "Ability to learn independently",
            "listItem3e" : "<em>...and above all, an insatiable curiosity and a strong desire to progress.</em>",
            "skillsZone1" : "My Acquired Skills:<br><small>(certainly should be deepened)</small>",
            "skillsText2" : "Self-taught<br>(likely requires guidance):",
            "itemSkills2a" : "HTML/CSS (SASS)",
            "itemSkills2b" : "JavaScript (Front-End)",
            "itemSkills2c" : "Git/GitHub",
            "prZone1" : "My Achievements:",
            "prZone2" : "<em>It's a bit empty, but give me a chance, and I will fill this section with my projects.</em>",
            "bouton5" : "Close",
            "bouton6" : "Close",
            "bouton2-open" : "<em>And also...</em>",
            "bouton2-close" : "<em>Back</em>",
            "bouton7" : "Close",
            "bouton8" : "Close",
            "contactBtn-open" : "<strong>Contact</strong>",
            "contactBtn-close" : "<em>Close</em>",
            "portfolio1a" : "My Portfolio",
            "portfolio2" : "<strong>Some facts about me.</strong><br><em>My trip through lines, one button at a time, one word at a time.<br>A real challenge, an enriching encounter and I have learned a lot.</em>"
        }
    }

    // ***CREATION DU CONTENU***
    // "navZone1"
    let introFirst = document.createElement("p")
    introFirst.className = "intro-1"
    let introSecond = document.createElement("p")
    introSecond.className = "intro-2"
    navZone1.append(introFirst, introSecond)

    // "aside"
    let bloc2First = document.createElement("p")
    bloc2First.className = "bloc2First"
    let bloc2Second = document.createElement("p")
    bloc2Second.className = "bloc2Second"
    zoneBloc2.append(bloc2First, bloc2Second)
    let bloc4First = document.createElement("p")
    bloc4First.className = "bloc4First"
    let bloc4Second = document.createElement("p")
    bloc4Second.className = "bloc4Second"
    zoneBloc4.append(bloc4First, bloc4Second)

    // "mainZone"
    let image1 = document.createElement("img")
    image1.className = "devImg"
    image1.src = "pictures/Dev4.png"
    image1.alt = "Développeuse"
    image1.querySelector(".devImg")
    zonedevImg.append(image1)
    let bloc1Text1 = document.createElement("p")
    bloc1Text1.className = "bloc1text1"
    let bloc3Text1 = document.createElement("p")
    bloc3Text1.className = "bloc3Text1"
        // "List1"
    let itemsList1 = ["listItem1a", "listItem1b"]
    let list1 = document.createElement("ul")
    list1.className = "list1"
    let listItem1a, listItem1b
    for (let i = 0; i < itemsList1.length; i++) {
        let liFirst = document.createElement("li")
        liFirst.textContent = itemsList1[i]
        list1.appendChild(liFirst)
        // Assignation des éléments li aux variables
        if (i === 0) listItem1a = liFirst;
        if (i === 1) listItem1b = liFirst;
        }
        // "List3"
    let itemsList3 = ["listItem3a", "listItem3b", "listItem3c", "listItem3d", "listItem3e"]
    let list3 = document.createElement("ul")
    list3.className = "list3"
    let listItem3a, listItem3b, listItem3c, listItem3d, listItem3e
    for (let i = 0; i < itemsList3.length; i++) {
        let liThird = document.createElement("li")
        liThird.textContent = itemsList3[i]
        list3.appendChild(liThird)
         // Assignation des éléments li aux variables
        if (i === 0) listItem3a = liThird;
        if (i === 1) listItem3b = liThird
        if (i === 2) listItem3c = liThird;
        if (i === 3) listItem3d = liThird;
        if (i === 4) listItem3e = liThird; 
        }
        // "DOM" insertion
    zoneBloc1.append(bloc1Text1, list1, zoneBouton5)
    zoneBloc3.append(bloc3Text1, list3, zoneBouton6)

    // "zoneDevImg" affichage
    let etatZoneBloc1 = false
    let etatZoneBloc3 = false

    function gererAffichageImage() {
        etatZoneBloc1 = !etatZoneBloc1
        etatZoneBloc3 = !etatZoneBloc3
        if (!etatZoneBloc1 && !etatZoneBloc3) {
            image1.classList.remove("devImg-open")
            image1.classList.add("devImg-close")
        } else {
            image1.classList.remove("devImg-close")
            image1.classList.add("devImg-open")
        }
    }
    function afficherImage() {
        etatZoneBloc1 = !etatZoneBloc1
        etatZoneBloc3 = !etatZoneBloc3
        if (etatZoneBloc1 || etatZoneBloc3) {
            image1.classList.remove("devImg-close")
            image1.classList.add("devImg-open")
        } else {
            image1.classList.remove("devImg-open")
            image1.classList.add("devImg-close")
        }
    }

    // "Skills"
    let skillsText2 = document.createElement("p")
    skillsText2.className = "skillsText2"
        // "SkillsList2"
    let itemSkills2 = ["itemSkills2a", "itemSkills2b", "itemSkills2c"]
    let skillsList2 = document.createElement("ul")
    skillsList2.className = "skillsList2"
    let itemSkills2a, itemSkills2b, itemSkills2c
    for (let i = 0; i < itemSkills2.length; i++) {
        let liSkills2 = document.createElement("li")
        liSkills2.textContent = itemSkills2[i]
        skillsList2.appendChild(liSkills2)
        // Assignation des éléments li aux variables
        if (i === 0) itemSkills2a = liSkills2
        if (i === 1) itemSkills2b = liSkills2
        if (i === 2) itemSkills2c = liSkills2
    }
        // "DOM" insertion
    skillsZone2.append(skillsText2, skillsList2)

    // "Projects"
    let portfolio1 = document.createElement("div")
    portfolio1.className = "portfolio1"
    portfolio1.querySelector(".portfolio1")
    let portfolio1a = document.createElement("a")
    portfolio1a.href = "https://jamniz.github.io/My-Portfolio/"
    portfolio1a.target = "_blanc"
    portfolio1a.rel = "noopener noreferrer"
    portfolio1a.title = "Mon portfolio"
    portfolio1a.className = "portfolio1a"
    portfolio1a.querySelector(".portfolio1a")
    let portfolio1b = document.createElement("p")
    portfolio1b.className = "portfolio1b"
    portfolio1b.innerHTML = "HTML/CSS(SCSS)/JS<br><em><small>(no framework)</small></em>"
    portfolio1b.querySelector(".portfolio1b")
    let portfolio2 = document.createElement("p")
    portfolio2.className = "portfolio2"
    portfolio2.querySelector(".portfolio2")
    prZone3.append(portfolio1, portfolio2)
    portfolio1.append(portfolio1a, portfolio1b)
    
    // "footer"
    let myGitHub = document.createElement("a")
    myGitHub.href = "https://github.com/jamniz"
    myGitHub.target = "_blanc"
    myGitHub.rel = "noopener noreferer"
    myGitHub.title = "Mon espace GitHub"
    myGitHub.textContent = "@jamniz (GitHub)"
    let myPlace = document.createElement("p")
    myPlace.className = "myPlace"
    myPlace.innerHTML = "<em>France, IdF, Hauts-de-Seine</em>"
    let myMail = document.createElement("a")
    myMail.href = "mailto:jamniz@outlook.com"
    myMail.textContent = "jamniz@outlook.com"
    let zoneGitHub = document.createElement("div")
    zoneGitHub.className = "zoneGitHub"
    // "DOM" insertion
    zoneMyself.append(zoneGitHub, myPlace, myMail)
    zoneGitHub.append(myGitHub)

    // ***ACTION DES BOUTONS***

    // Mettre à jour le texte des boutons
    function miseAJourTexteBouton(element, etat, openKey, closeKey) {
        let langue = document.getElementById("langue").value;
        element.textContent = etat ? traductions[langue][closeKey] : traductions[langue][openKey];
    }
    function majTexteBouton(element, etat, openKey, closeKey) {
        let langue = document.getElementById("langue").value;
        element.innerHTML = etat ? traductions[langue][closeKey] : traductions[langue][openKey];
    }

    // "bouton1/bouton5"
    zoneBloc1.classList.add("zoneBloc1-close")
    bouton1.addEventListener("click", function() {
        zoneBloc1.classList.remove("zoneBloc1-close")
        zoneBloc1.classList.add("zoneBloc1-open")
        zoneBloc1.scrollIntoView({behavior: "smooth"})
        gererAffichageImage()
    })
    bouton5.addEventListener("click", function() {
        zoneBloc1.classList.remove("zoneBloc1-open")
        zoneBloc1.classList.add("zoneBloc1-close")
        // gererAffichageImage()
        afficherImage()
    })

    // "bouton3/bouton6"
    zoneBloc3.classList.add("zoneBloc3-close")
    bouton3.addEventListener("click", function() {
        zoneBloc3.classList.remove("zoneBloc3-close")
        zoneBloc3.classList.add("zoneBloc3-open")
        zoneBloc3.scrollIntoView({behavior: "smooth"})
        gererAffichageImage()
    })
    bouton6.addEventListener("click", function() {
        zoneBloc3.classList.remove("zoneBloc1-open")
        zoneBloc3.classList.add("zoneBloc3-close")
        // gererAffichageImage()
        afficherImage
    })

    // "Bouton2"
    zoneBloc2.classList.add("zoneBloc2-open")
    zoneBloc4.classList.add("zoneBloc4-close")
    let etatBouton2 = false

    majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")

    bouton2.addEventListener("click", function () {
        let langue = document.getElementById("langue").value
        etatBouton2 = !etatBouton2
        if (etatBouton2 != false) {
            zoneBloc2.classList.add("zoneBloc2-close")
            zoneBloc4.classList.remove("zoneBloc4-close")
            bouton2.innerHTML = traductions[langue]["bouton2-close"]
        } else {
            zoneBloc2.classList.remove("zoneBloc2-close")
            zoneBloc4.classList.add("zoneBloc4-close")
        }
        majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")
    })
    document.getElementById("toggleBtn2").addEventListener("change", function() {
        etatBouton2 = this.checked
        majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")
    })
    majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")

    // "skillsBtn/bouton7"
    skills.classList.add("skills-close")
    skillsBtn.addEventListener("click", function() {
        skills.classList.remove("skills-close")
        skills.classList.add("skills-open")
        skills.scrollIntoView({behavior: "smooth"})
    })
    bouton7.addEventListener("click", function() {
        skills.classList.remove("skills-open")
        skills.classList.add("skills-close")
    })

    // "projectsBtn/bouton8"
    projects.classList.add("projects-close")
    projectsBtn.addEventListener("click", function() {
        projects.classList.remove("projects-close")
        projects.classList.add("projects-open")
        projects.scrollIntoView({behavior: "smooth"})
    })
    bouton8.addEventListener("click", function() {
        projects.classList.remove("projects-open")
        projects.classList.add("projects-close")
    })

    // "contactBtn"
    zoneMyself.classList.add("zoneMyself-close")
    let etatContactBtn = false

    majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")

    contactBtn.addEventListener("click", function() {
        let langue = document.getElementById("langue").value
        etatContactBtn = !etatContactBtn
        if (etatContactBtn != false) {
            zoneMyself.classList.remove("zoneMyself-close")
            zoneMyself.classList.add("zoneMyself-open")
            contactBtn.innerHTML = traductions[langue]["contactBtn-close"]
        } else {
            zoneMyself.classList.remove("zoneMyself-open")
            zoneMyself.classList.add("zoneMyself-close")
            contactBtn.innerHTML = traductions[langue]["contactBtn-open"]
        }
        majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")
    })
    document.getElementById("toggleContactBtn").addEventListener("change", function() {
        etatContactBtn = this.checked
        majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")
    })
    majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")


    // Fonction pour changer la langue et injecter le contenu
    function changerLangue(langue) {
        if (traductions[langue]) {
            introFirst.textContent = traductions[langue]["intro-1-text"]
            introSecond.textContent = traductions[langue]["intro-2-text"]
            bouton1.textContent = traductions[langue]["bouton1"]
            bouton3.textContent = traductions[langue]["bouton3"]
            skillsBtn.textContent = traductions[langue]["skillsBtn"]
            projectsBtn.textContent = traductions[langue]["projectsBtn"]
            bloc2First.textContent = traductions[langue]["bloc2First"]
            bloc2Second.innerHTML = traductions[langue]["bloc2Second"]
            bloc4First.textContent = traductions[langue]["bloc4First"]
            bloc4Second.textContent = traductions[langue]["bloc4Second"]
            bloc1Text1.innerHTML = traductions[langue]["bloc1Text1"]
            listItem1a.textContent = traductions[langue]["listItem1a"]
            listItem1b.textContent = traductions[langue]["listItem1b"]
            bloc3Text1.innerHTML = traductions[langue]["bloc3Text1"]
            listItem3a.textContent = traductions[langue]["listItem3a"]
            listItem3b.textContent = traductions[langue]["listItem3b"]
            listItem3c.textContent = traductions[langue]["listItem3c"]
            listItem3d.textContent = traductions[langue]["listItem3d"]
            listItem3e.innerHTML = traductions[langue]["listItem3e"]
            skillsZone1.innerHTML = traductions[langue]["skillsZone1"]
            skillsText2.innerHTML = traductions[langue]["skillsText2"]
            itemSkills2a.textContent = traductions[langue]["itemSkills2a"]
            itemSkills2b.textContent = traductions[langue]["itemSkills2b"]
            itemSkills2c.textContent = traductions[langue]["itemSkills2c"]
            prZone1.innerHTML = traductions[langue]["prZone1"]
            prZone2.innerHTML = traductions[langue]["prZone2"]
            // prZone3.textContent = traductions[langue]["prZone3"]
            bouton5.textContent = traductions[langue]["bouton5"]
            bouton6.textContent = traductions[langue]["bouton6"]
            bouton2.innerHTML = etatBouton2 ? traductions[langue]["bouton2-close"] : traductions[langue]["bouton2-open"]
            bouton7.textContent = traductions[langue]["bouton7"]
            bouton8.textContent = traductions[langue]["bouton8"]
            contactBtn.innerHTML = etatContactBtn ? traductions[langue]["contactBtn-close"] : traductions[langue]["contactBtn-open"]
            portfolio1a.textContent = traductions[langue]["portfolio1a"]
            portfolio2.innerHTML = traductions[langue]["portfolio2"]
        } else {
            console.error("Langue non supportée")  
        }
    }

    // Initialiser le contenu par défaut
    changerLangue("francais")

    // Event listener pour le changement de langue
    document.getElementById("langue").addEventListener("change", function () {
        let langue = this.value
        changerLangue(langue)
    })
})