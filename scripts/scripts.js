document.addEventListener("DOMContentLoaded", function () {
    // Réinitialiser la valeur du sélecteur de langue
    document.getElementById("langue").value = "francais";

    // Sélection des éléments à manipuler
    let introText1 = document.getElementById("intro1-texte")
    let introText2 = document.getElementById("intro2-texte")
    let skills1 = document.getElementById("skills1")
    let skills2 = document.getElementById("skills2")
    let skills3 = document.getElementById("skills3")
    let skills4 = document.getElementById("skills4")
    let skills5 = document.getElementById("skills5")
    let skills6 = document.getElementById("skills6")
    let skills7 = document.getElementById("skills7")
    let skills8 = document.getElementById("skills8")
    let skills9 = document.getElementById("skills9")
    let skills10 = document.getElementById("skills10")
    let skills11 = document.getElementById("skills11")
    let skills12 = document.getElementById("skills12")
    let notions = document.getElementById("notions")
    let devDomaine = document.getElementById("dev-domaine")
    let cyberDomaine = document.getElementById("cyber-domaine")
    let dataDomaine = document.getElementById("data-domaine")
    let bouton1 = document.querySelector(".bouton1")
    let bouton3 = document.querySelector(".bouton3")
    let bouton5 = document.querySelector(".bouton5")
    let bouton6 = document.querySelector(".bouton6")
    let projectsBtn = document.querySelector(".projectsBtn")
    let bouton2 = document.querySelector(".bouton2")
    let zoneBloc2 = document.querySelector(".zoneBloc2")
    let zoneBloc4 = document.querySelector(".zoneBloc4")
    let bloc2First = document.querySelector(".bloc2First")
    let bloc2Second = document.querySelector(".bloc2Second")
    let bloc4First = document.querySelector(".bloc4First")
    let bloc4Second = document.querySelector(".bloc4Second")
    let zoneBouton1 = document.querySelector(".zoneBouton1")
    let zoneBouton3 = document.querySelector(".zoneBouton3")
    let zoneBloc1 = document.querySelector(".bloc1-zone")
    let zoneBloc3 = document.querySelector(".bloc3-zone")
    let textBloc1 = document.querySelector(".text-bloc1")
    let textBloc3 = document.querySelector(".text-bloc3")
    let item1Bloc1 = document.getElementById("item1-bloc1")
    let item2Bloc1 = document.getElementById("item2-bloc1")
    let item1Bloc3 = document.getElementById("item1-bloc3")
    let item2Bloc3 = document.getElementById("item2-bloc3")
    let item3Bloc3 = document.getElementById("item3-bloc3")
    let item4Bloc3 = document.getElementById("item4-bloc3")
    let item5Bloc3 = document.getElementById("item5-bloc3")
    let webBtn = document.querySelector(".webBtn")
    let cyberBtn = document.querySelector(".cyberBtn")
    let dataBtn = document.querySelector(".dataBtn")
    let portfolio1Content = document.querySelector(".portfolio1-content")
    let portfolio2Content = document.querySelector(".portfolio2-content")
    let portfolio3Content = document.querySelector(".portfolio3-content")
    let contactBtn = document.querySelector(".contactBtn")
    let zoneMyself = document.querySelector(".zoneMyself")
    let zonePrBtn = document.querySelector(".zonePrBtn")
    let portfolio = document.querySelector(".portfolio")
    let zoneDevImg = document.querySelector(".zoneDevImg")
    let webPr1Text2 = document.getElementById("webPr1-text2")
    let cyberText1 = document.querySelector(".cyber-text1")
    let cyberText2 = document.querySelector(".cyber-text2")
    let dataText1 = document.querySelector(".data-text1")
    let dataText2 = document.querySelector(".data-text2")
    let closePrBtn = document.querySelector(".closePrBtn")
    let prAboutMe = document.getElementById("pr-about-me")
    let textNote = document.getElementById("text-note")


    // Traductions
    let traductions = {
        francais: {
            "intro1-texte": "À propos de moi...",
            "intro2-texte": "Je vous souhaite une agréable lecture.",
            "skills1": "HTML/ CSS (SASS)",
            "skills2": "JavaScript/ React.js",
            "skills3": "Git/ GitHub",
            "skills4": "PHP",
            "skills5": "DSFR, RGAA",
            "skills6": "Systèmes de détection d'intrusion (IDS)",
            "skills7": "Gestion des informations et des événements de sécurité (SIEM)",
            "skills8": "SQL",
            "skills9": "Linux",
            "skills10": "Python",
            "skills11": "Compétences analytiques&nbsp;&ndash; nettoyage des données, analyse, visualisation",
            "skills12": "Outils&nbsp;&ndash; Spreadsheets/ Excel, R, Tableau",
            "notions": "<em>Notions&nbsp;:</em>",
            "dev-domaine": "<strong>Développement Web</strong>",
            "cyber-domaine": "<strong>Cybersécurité</strong>",
            "data-domaine": "<strong>Analyse des données</strong>",
            "bouton1": "Ce que je recherche",
            "bouton2-open": "<em>Et encore...</em>",
            "bouton2-close": "<em>Retour</em>",
            "bouton3": "Ce que je propose",
            "projectsBtn": "Mes réalisations",
            "bloc2First": "Je suis passionnée par les algorithmes de communication au sens large, qu'ils soient informatiques, linguistiques, factuels ou abstraits, j'essaie de les analyser et d'en apprendre davantage. Je souhaite transformer cette passion, notamment pour le développement informatique, en opportunité professionnelle.",
            "bloc2Second": "<em>Ma quête de savoir n'est jamais terminée. Chaque ligne de code est une opportunité d'apprendre et chaque défi rencontré est une chance de grandir.</em>",
            "bloc4First": "L'important n'est pas de tout savoir, mais d'avoir une idée du projet, de le visualiser, de l'analyser, de réfléchir à comment le réaliser et de savoir où chercher les détails et les connaissances concrètes nécessaires à sa réalisation.",
            "bloc4Second": "Mais surtout, il faut avoir l'humilité d'admettre que l'on ne sait pas tout, être à l'écoute des conseils, ne pas se reposer sur ses lauriers, et toujours avoir l'envie d'apprendre davantage.",
            "text-bloc1": "<strong>Ce que je recherche&nbsp;:</strong><br>J'ai besoin d'un cadre et d'un mentorat pour apprendre à partir d'expériences et de connaissances des professionnels du développement Web et ainsi progresser.",
            "item1-bloc1": "Je souhaite intégrer ma formation <strong><em>Openclassrooms</em></strong> qui me donnera une ligne directrice pour devenir développeuse informatique.",
            "item2-bloc1": "Je souhaite approfondir mes acquis et apprendre davantage pour me spécialiser dans le milieu professionnel via une alternance&nbsp;&ndash; <strong><em>Contrat d'apprentissage</em></strong>.",
            "text-bloc3": "<strong>Ce que je propose&nbsp;:</strong><br>",
            "item1-bloc3": "Détermination et motivation",
            "item2-bloc3": "Rigueur et persévérance",
            "item3-bloc3": "Capacité d’analyse et sens du détail",
            "item4-bloc3": "Capacité d'apprendre de manière autonome et saisir vite les concepts",
            "item5-bloc3": "<em>…et surtout, une curiosité insatiable et une forte envie de progresser.</em>",
            "bouton5": "Fermer",
            "bouton6": "Fermer",
            "webBtn-open": "Projets Web",
            "webBtn-close": "<small>Fermer 'Projets Web'</small>",
            "cyberBtn-open": "Cybersécurité",
            "cyberBtn-close": "<small>Fermer 'Cybersécurité'</small>",
            "dataBtn-open": "Analyse de données",
            "dataBtn-close": "<small>Fermer 'Analyse de données'</small>",
            "contactBtn-open": "<strong>Contact</strong>",
            "contactBtn-close": "<em>Fermer</em>",
            "webPr1-text2": "<em>Mon voyage à travers les lignes,<br>un bouton à la fois,<br>un mot à la fois</em>",
            "cyber-text1": "Portfolio réalisé dans le cadre du certificat.",
            "cyber-text2": "À venir (en cours de préparation)",
            "data-text1": "Portfolio réalisé dans le cadre du certificat.",
            "data-text2": "À venir (en cours de préparation)",
            "closePrBtn": "<em>Fermer<br>'Mes réalisations'</em>",
            "pr-about-me": "Présentation",
            "text-note": "Quelques projets en cours...<br><em>à venir prochainement</em>"

        },
        anglais: {
            "intro1-texte": "Some facts about me...",
            "intro2-texte": "Have a good time.",
            "skills1": "HTML/ CSS (SASS)",
            "skills2": "JavaScript/ React.js",
            "skills3": "Git/ GitHub",
            "skills4": "PHP",
            "skills5": "DSFR, RGAA",
            "skills6": "Intrusion Detection System (IDS)",
            "skills7": "Security Information and Event Management (SIEM)",
            "skills8": "SQL",
            "skills9": "Linux",
            "skills10": "Python",
            "skills11": "Analytical skills&nbsp;&ndash; data cleaning, analysis, visualization",
            "skills12": "Tools&nbsp;&ndash; Spreadsheets/ Excel, R, Tableau",
            "notions": "<em>Fundamentals:</em>",
            "dev-domaine": "<strong>Web Development</strong>",
            "cyber-domaine": "<strong>Cybersecurity</strong>",
            "data-domaine": "<strong>Data Analytics</strong>",
            "bouton1": "What I am looking for",
            "bouton2-open": "<em>And also...</em>",
            "bouton2-close": "<em>Back</em>",
            "bouton3": "What I bring to the table",
            "projectsBtn": "My Achievements",
            "bloc2First": "I have a strong interest in communication algorithms in the broadest sense, whether they are computer-based, linguistic, factual, or abstract, I try to analyze them and learn more. I would like to transform this passion, particularly for computer development, into a professional opportunity.",
            "bloc2Second": "<em>My quest for skills is never over. Each line of code is an opportunity to learn and every challenge encountered is a chance to grow.</em>",
            "bloc4First": "The important thing is not to know everything, but to have an idea of the project, to visualize it, to analyze it, to think about how to realize it and to know where to look for the details and concrete knowledge necessary for its realization.",
            "bloc4Second": "But above all, you must have the humility to admit that you do not know everything, be open to advice, not rest on your laurels, and always have the desire to learn more.",
            "text-bloc1": "<strong>What I am looking for:</strong><br>I need a framework and mentorship to learn from the experiences and knowledge of web development professionals and thus progress.",
            "text-bloc3": "<strong>What I bring to the table:</strong><br>",
            "item1-bloc1": "I wish to join my training program <strong><em>Openclassrooms</em></strong> that will give me a guideline to become a web developer.",
            "item2-bloc1": "I wish to deepen my knowledge and learn more to specialize in the professional field through an apprenticeship&nbsp;&ndash; <strong><em>Contrat d'apprentissage</em></strong>.",
            "item1-bloc3": "Determination and motivation",
            "item2-bloc3": "Rigor and perseverance",
            "item3-bloc3": "Analytical ability and attention to detail",
            "item4-bloc3": "Ability to learn independently and grasp concepts quickly",
            "item5-bloc3": "<em>...and above all, an insatiable curiosity and a strong desire to progress.</em>",
            "bouton5": "Close",
            "bouton6": "Close",
            "webBtn-open": "Web Projects",
            "webBtn-close": "<small>Close 'Web Projects'</small>",
            "cyberBtn-open": "Cybersecurity",
            "cyberBtn-close": "<small>Close 'Cybersecurity'</small>",
            "dataBtn-open": "Data Analytics",
            "dataBtn-close": "<small>Close 'Data Analytics'</small>",
            "contactBtn-open": "<strong>Contact</strong>",
            "contactBtn-close": "<em>Close</em>",
            "webPr1-text2": "<em>My trip through lines,<br>one button at a time,<br>one word at a time.</em>",
            "cyber-text1": "Portfolio created as part of the certificate.",
            "cyber-text2": "Coming soon (in progress)",
            "data-text1": "Portfolio created as part of the certificate.",
            "data-text2": "Coming soon (in progress)",
            "closePrBtn": "<em>Close<br>'My Achievements'",
            "pr-about-me": "About Me",
            "text-note": "Some projects in progress...<br><em>comming soon</em>"
        }
    }

    // Mettre à jour le texte des boutons
    // function miseAJourTexteBouton(element, etat, openKey, closeKey) {
    //     let langue = document.getElementById("langue").value;
    //     element.textContent = etat ? traductions[langue][closeKey] : traductions[langue][openKey];
    // }
    function majTexteBouton(element, etat, openKey, closeKey) {
        let langue = document.getElementById("langue").value;
        element.innerHTML = etat ? traductions[langue][closeKey] : traductions[langue][openKey];
    }


    // ***CHANGER LANGUE***

    // Fonction pour changer la langue et injecter le contenu
    function changerLangue(langue) {
        if (traductions[langue]) {
            introText1.textContent = traductions[langue]["intro1-texte"]
            introText2.textContent = traductions[langue]["intro2-texte"]
            skills1.textContent = traductions[langue]["skills1"]
            skills2.textContent = traductions[langue]["skills2"]
            skills3.textContent = traductions[langue]["skills3"]
            skills4.textContent = traductions[langue]["skills4"]
            skills5.textContent = traductions[langue]["skills5"]
            skills6.textContent = traductions[langue]["skills6"]
            skills7.textContent = traductions[langue]["skills7"]
            skills8.textContent = traductions[langue]["skills8"]
            skills9.textContent = traductions[langue]["skills9"]
            skills10.textContent = traductions[langue]["skills10"]
            skills11.innerHTML = traductions[langue]["skills11"]
            skills12.innerHTML = traductions[langue]["skills12"]
            notions.innerHTML = traductions[langue]["notions"]
            devDomaine.innerHTML = traductions[langue]["dev-domaine"]
            cyberDomaine.innerHTML = traductions[langue]["cyber-domaine"]
            dataDomaine.innerHTML = traductions[langue]["data-domaine"]
            bouton1.textContent = traductions[langue]["bouton1"]
            bouton3.textContent = traductions[langue]["bouton3"]
            projectsBtn.textContent = traductions[langue]["projectsBtn"]
            bouton2.innerHTML = etatBouton2 ? traductions[langue]["bouton2-close"] : traductions[langue]["bouton2-open"]
            bloc2First.textContent = traductions[langue]["bloc2First"]
            bloc2Second.innerHTML = traductions[langue]["bloc2Second"]
            bloc4First.textContent = traductions[langue]["bloc4First"]
            bloc4Second.textContent = traductions[langue]["bloc4Second"]
            textBloc1.innerHTML = traductions[langue]["text-bloc1"]
            textBloc3.innerHTML = traductions[langue]["text-bloc3"]
            item1Bloc1.innerHTML = traductions[langue]["item1-bloc1"]
            item2Bloc1.innerHTML = traductions[langue]["item2-bloc1"]
            item1Bloc3.textContent = traductions[langue]["item1-bloc3"]
            item2Bloc3.textContent = traductions[langue]["item2-bloc3"]
            item3Bloc3.textContent = traductions[langue]["item3-bloc3"]
            item4Bloc3.textContent = traductions[langue]["item4-bloc3"]
            item5Bloc3.innerHTML = traductions[langue]["item5-bloc3"]
            bouton5.textContent = traductions[langue]["bouton5"]
            bouton6.textContent = traductions[langue]["bouton6"]
            webBtn.innerHTML = etatWebBtn ? traductions[langue]["webBtn-close"] : traductions[langue]["webBtn-open"]
            cyberBtn.innerHTML = etatCyberBtn ? traductions[langue]["cyberBtn-close"] : traductions[langue]["cyberBtn-open"]
            dataBtn.innerHTML = etatDataBtn ? traductions[langue]["dataBtn-close"] : traductions[langue]["dataBtn-open"]
            contactBtn.innerHTML = etatContactBtn ? traductions[langue]["contactBtn-close"] : traductions[langue]["contactBtn-open"]
            webPr1Text2.innerHTML = traductions[langue]["webPr1-text2"]
            cyberText1.textContent = traductions[langue]["cyber-text1"]
            cyberText2.textContent = traductions[langue]["cyber-text2"]
            dataText1.textContent = traductions[langue]["data-text1"]
            dataText2.textContent = traductions[langue]["data-text2"]
            closePrBtn.innerHTML = traductions[langue]["closePrBtn"]
            prAboutMe.textContent = traductions[langue]["pr-about-me"]
            textNote.innerHTML = traductions[langue]["text-note"]
        } else {
            console.error("Langue non supportée")
        }
    }

    // ***ACTION DES BOUTONS***

    // "Bouton2"
    let etatBouton2 = false
    majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close");

    // Initialiser les classes par défaut
    zoneBloc2.classList.add("zoneBloc2-open")
    zoneBloc4.classList.add("zoneBloc4-close")

    bouton2.addEventListener("click", function () {
        // let langue = document.getElementById("langue").value
        etatBouton2 = !etatBouton2
        if (etatBouton2 != false) {
            zoneBloc2.classList.add("zoneBloc2-close")
            zoneBloc4.classList.remove("zoneBloc4-close")
        } else {
            zoneBloc2.classList.remove("zoneBloc2-close")
            zoneBloc4.classList.add("zoneBloc4-close")
        }
        majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")
    })
    document.getElementById("toggleBtn2").addEventListener("change", function () {
        etatBouton2 = this.checked
        majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")
    })
    majTexteBouton(bouton2, etatBouton2, "bouton2-open", "bouton2-close")

    // "Bouton1/Bouton5"

    // Initialiser les classes par défaut
    zoneBloc1.classList.add("zoneBloc1-close")
    zoneBouton1.classList.add("zoneBouton1-open")

    bouton1.addEventListener("click", function () {
        zoneBloc1.classList.remove("zoneBloc1-close")
        zoneBloc1.classList.add("zoneBloc1-open")
        zoneBouton1.classList.add("zoneBouton1-hidden")
        zoneBouton1.classList.remove("zoneBouton1-open")
        zoneBloc1.scrollIntoView({ behavior: "smooth", block: "end" })
    })
    bouton5.addEventListener("click", function () {
        zoneBloc1.classList.remove("zoneBloc1-open")
        zoneBloc1.classList.add("zoneBloc1-close")
        zoneBouton1.classList.remove("zoneBouton-hidden")
        zoneBouton1.classList.add("zoneBouton1-open")
    })

    // "Bouton3/Bouton6"

    // Initialiser les classes par défaut
    zoneBloc3.classList.add("zoneBloc3-close")
    zoneBouton3.classList.add("zoneBouton6-open")

    bouton3.addEventListener("click", function () {
        zoneBloc3.classList.remove("zoneBloc3-close")
        zoneBloc3.classList.add("zoneBloc3-open")
        zoneBouton3.classList.add("zoneBouton3-hidden")
        zoneBouton3.classList.remove("zoneBouton3-open")
        zoneBloc3.scrollIntoView({ behavior: "smooth", block: "end" })
    })
    bouton6.addEventListener("click", function () {
        zoneBloc3.classList.remove("zoneBloc3-open")
        zoneBloc3.classList.add("zoneBloc3-close")
        zoneBouton3.classList.remove("zoneBouton3-hidden")
        zoneBouton3.classList.add("zoneBouton3-open")
    })


    // "ProjectsBtn/closePrBtn"
    portfolio.classList.add("portfolio-close")
    zonePrBtn.classList.add("zonePrBtn-open")

    projectsBtn.addEventListener("click", function () {
        portfolio.classList.remove("portfolio-close")
        portfolio.classList.add("portfolio-open")
        zonePrBtn.classList.remove("zonePrBtn-open")
        zonePrBtn.classList.add("zonePrBtn-hidden")
        portfolio.scrollIntoView({ behavior: "smooth", block: "end" })
    })

    closePrBtn.addEventListener("click", function () {
        portfolio.classList.remove("portfolio-open")
        portfolio.classList.add("portfolio-close")
        zonePrBtn.classList.remove("zonePrBtn-hidden")
        zonePrBtn.classList.add("zonePrBtn-open")
    })

    // "webBtn"
    let etatWebBtn = false
    portfolio1Content.classList.add("portfolio1-content-close")

    majTexteBouton(webBtn, etatWebBtn, "webBtn-open", "webBtn-close")

    webBtn.addEventListener("click", function () {
        etatWebBtn = !etatWebBtn
        if (etatWebBtn != false) {
            portfolio1Content.classList.remove("portfolio1-content-close")
            portfolio1Content.classList.add("portfolio1-content-open")
        } else {
            portfolio1Content.classList.remove("portfolio1-content-open")
            portfolio1Content.classList.add("portfolio1-content-close")
        }
        majTexteBouton(webBtn, etatWebBtn, "webBtn-open", "webBtn-close")
    })
    document.getElementById("toggleWebBtn").addEventListener("change", function () {
        etatWebBtn = this.checked
        majTexteBouton(webBtn, etatWebBtn, "webBtn-open", "webBtn-close")
    })
    majTexteBouton(webBtn, etatWebBtn, "webBtn-open", "webBtn-close")

    // "cyberBtn"
    let etatCyberBtn = false
    portfolio2Content.classList.add("portfolio2-content-close")

    majTexteBouton(cyberBtn, etatCyberBtn, "cyberBtn-open", "cyberBtn-close")

    cyberBtn.addEventListener("click", function () {
        etatCyberBtn = !etatCyberBtn
        if (etatCyberBtn != false) {
            portfolio2Content.classList.remove("portfolio2-content-close")
            portfolio2Content.classList.add("portfolio2-content-open")
        } else {
            portfolio2Content.classList.add("portfolio2-content-close")
            portfolio2Content.classList.remove("portfolio2-content-open")
        }
        majTexteBouton(cyberBtn, etatCyberBtn, "cyberBtn-open", "cyberBtn-close")
    })
    document.getElementById("toggleCyberBtn").addEventListener("change", function () {
        etatCyberBtn = this.checked
        majTexteBouton(cyberBtn, etatCyberBtn, "cyberBtn-open", "cyberBtn-close")
    })
    majTexteBouton(cyberBtn, etatCyberBtn, "cyberBtn-open", "cyberBtn-close")

    // "dataBtn"
    let etatDataBtn = false
    portfolio3Content.classList.add("portfolio3-content-close")

    majTexteBouton(dataBtn, etatDataBtn, "dataBtn-open", "dataBtn-close")

    dataBtn.addEventListener("click", function () {
        etatDataBtn = !etatDataBtn
        if (etatDataBtn != false) {
            portfolio3Content.classList.remove("portfolio3-content-close")
            portfolio3Content.classList.add("portfolio3-content-open")
        } else {
            portfolio3Content.classList.add("portfolio3-content-close")
            portfolio3Content.classList.remove("portfolio3-content-open")
        }
        majTexteBouton(dataBtn, etatDataBtn, "dataBtn-open", "dataBtn-close")
    })
    document.getElementById("toggleDataBtn").addEventListener("change", function () {
        etatDataBtn = this.checked
        majTexteBouton(dataBtn, etatDataBtn, "dataBtn-open", "dataBtn-close")
    })
    majTexteBouton(dataBtn, etatDataBtn, "dataBtn-open", "dataBtn-close")

    // ""contactBtn
    let etatContactBtn = false
    zoneMyself.classList.add("zoneMyself-close")

    majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")

    contactBtn.addEventListener("click", function () {
        etatContactBtn = !etatContactBtn
        if (etatContactBtn != false) {
            zoneMyself.classList.add("zoneMyself-open")
            zoneMyself.classList.remove("zoneMyself-close")
        } else {
            zoneMyself.classList.remove("zoneMyself-open")
            zoneMyself.classList.add("zoneMyself-close")
        }
        majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")
    })
    document.getElementById("toggleContactBtn").addEventListener("change", function () {
        etatContactBtn = this.checked
        majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")
    })
    majTexteBouton(contactBtn, etatContactBtn, "contactBtn-open", "contactBtn-close")

    // ***MàJ TRADUCTION***

    // Initialiser le contenu par défaut
    changerLangue("francais")

    // Event listener pour le changement de langue
    document.getElementById("langue").addEventListener("change", function () {
        let langue = this.value
        changerLangue(langue)
    })
})