import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const projects = [
            {
                "id": 0,
                "display": true,
                "name": "Soun Collection",
                "slug": "soun-collection",
                "thumbnail": "sounCollection",
                "domains": [
                    "newsletter",
                ],
                "image":"sounCollection",
                "subTitle": "Vêtement",
                "description": "Création d'un modèle de newsletter, réalisé en 2011 au sein de l'agence <span class='important'>Websiting</span>. Soun collection est une ligne de vêtements pour femmes.",
                "intervention": "Conception <span class='important'>graphique</span> d'un modèle newsletter.",
                "sectors": [
                    "graphisme",
                    "developpement"
                ],
                "slider": true
            },
            {
                "id": 1, 
                "display": true,
                "name": "Vidéo Thérapie",
                "slug": "video-therapie",
                "thumbnail": "videoTherapie",
                "domains": [
                    "newsletter"
                ],
                "image":"videoTherapie",
                "subTitle": "Conseil",
                "description": "Création d'un modèle de newsletter, réalisé en 2011 au sein de l'agence <span class='important'>Websiting</span>. Vidéo Thérapie est un service de conseil par vidéo conférence.",
                "intervention":"Conception <span class='important'>graphique</span> d'un modèle newsletter.",
                "sectors": [
                    "graphisme"
                ],
                "slider": false
            },
            {
                "id": 2,
                "display": false, 
                "name": "Référence Top 10",
                "slug": "reference-top-10",
                "thumbnail": "referenceTop10",
                "domains": [
                    "web"
                ],
                "image":"referenceTop10",
                "subTitle": "Conseil",
                "description": "Refonte graphique du site web Référence Top 10, réalisé en 2011 au sein de l'agence <span class='important'>Websiting</span>. Site institutionnel présentant et expliquant le principe du référencement web.",
                "intervention": "Conception graphique de toutes les pages principales du site web.",
                "sectors": [
                    "webdesign"
                ],
                "slider": false
            },
            {
                "id": 3,
                "display": true, 
                "name": "HPC",
                "slug": "hpc",
                "thumbnail": "hpc",
                "domains": [
                    "identite"
                ],
                "image":"hpc",
                "subTitle": "Conseil",
                "description": "Création de l'identité visuelle en tant qu'<span class='important'>indépendant en 2011</span>. HPC, est une société en conseil et consulting.",
                "intervention": "Création d'un nouveau logotype et déclinaison de celui-ci sur de la papeterie.",
                "sectors": [
                    "identite"
                ],
                "slider": false
            },
            {
                "id": 4,
                "display": true, 
                "name": "Djula",
                "slug": "djula",
                "thumbnail": "djula",
                "domains": [
                    "application"
                ],
                "image":"djula",
                "subTitle": "Bijoutier",
                "description": "Déclinaison du site web en <span class='important'>version mobile</span>, réalisé en 2011 au sein de l'agence Websiting. Djula est un bijoutier souhaiteant rendre accessible ses produits aux utilisateurs mobile.",
                "intervention": "Déclinaison de la charte graphique sur l'ensemble des pages de l'application.",
                "sectors": [
                    "webdesign"
                ],
                "slider": false
            },
            {
                "id": 5,
                "display": true, 
                "name": "Tim and Kim",
                "slug": "tim-and-kim",
                "thumbnail": "timAndKim",
                "domains": [
                    "newsletter"
                ],
                "image":"timAndKim",
                "subTitle": "Maquillage",
                "description": "Intégration d'un modèle de newsletter, réalisé en 2012 en tant qu'<span class='important'>indépendant</span>. Tim and Kim makeup est un site ecommerce vendant des produits de maquillages à prix réduit. Elle propose également des conseils maquillage dans son show-room.",
                "intervention": "<span class='important'>Intégration HTML/CSS</span> d'un modèle newsletter.",
                "sectors": [
                    "developpement"
                ],
                "slider": false
            },
            {
                "id": 6,
                "display": false, 
                "name": "PP From Longwy",
                "slug": "pp-from-longwy",
                "thumbnail": "ppFromLongwy",
                "domains": [
                    "web"
                ],
                "image":"ppFromLongwy",
                "subTitle": "Bijoutier",
                "description": "Projet scolaire, en groupe, réalisé en 2012 à l'<span class='important'>IESA Multimédia Paris</span>. Le brief donné était de réaliser un site web dynamique sans utilisation de CMS. Nous avons choisi un vrai client : PP From Longwy, un créateur de bijoux.",
                "intervention": "<span class='important'>Intégration HTML/CSS</span> responsive de toutes les pages du site web : front office et back office",
                "sectors": [
                    "developpement",
                    "responsive"
                ],
                "slider": false
            },
            {
                "id": 7,
                "display": false, 
                "name": "Jeff Photographe",
                "slug": "jeff-photographe",
                "thumbnail": "jeffPhotographe",
                "domains": [
                    "identite"
                ],
                "image":"jeffPhotographe",
                "subTitle": "Photographe",
                "description": "Création de l'identité visuelle de ce photographe, réalisé en 2012 au sein de l'agence <span class='important'>ACPA Web</span>. Jeff Photographe est un photographe indépendant en Gironde, spécialisé dans les photos de mariage",
                "intervention": "Création d'un nouveau logotype et déclinaison de celui-ci sur le site web.",
                "sectors": [
                    "identite",
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "http://jeff-photographe.com/",
                "slider": false
            },
            {
                "id": 8,
                "display": true, 
                "name": "Centre Wagram / Association Wagram",
                "slug": "centre-wagram",
                "thumbnail": "wagram",
                "domains": [
                    "web"
                ],
                "image":"wagram",
                "subTitle": "Fiscal",
                "description": "Refonte graphique des 2 sites web Centre Wagram et Association Wagram, réalisé en tant qu'<span class='important'>indépendant en 2013</span>. Sites institutionnelles présentant les activités et les règles en vigueurs dans le domaine fiscal.",
                "intervention": "<span class='important'>Conception graphique et intégration HTML/CSS</span>, pour que la société puisse le développer sous leur logiciel.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 9,
                "display": true, 
                "name": "Easy Cook",
                "slug": "easy-cook",
                "thumbnail": "easyCook",
                "domains": [
                    "application",
                    "management"
                ],
                "image":"easyCook",
                "subTitle": "Cuisine",
                "description": "Projet scolaire en groupe réalisé en 2013 à l'IESA Multimédia Paris. Nous devions réaliser, en 9 jours, une <span class='important'>application mobile sur Titanium</span>. Nous avons développé une application permettant, à partir d'ingrédients sélectionner, proposer différentes recettes de cuisines à partir de ces aliments.",
                "intervention": "Gestion du projet : organisation et plannification des tâches, pour un groupe de 5 personnes.",
                "sectors": [
                    "management"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 10,
                "display": true, 
                "name": "Sépale",
                "slug": "sepale",
                "thumbnail": "sepale",
                "domains": [
                    "identite"
                ],
                "image":"sepale",
                "subTitle": "Conseil",
                "description": "Projet scolaire en groupe, réalisé en <span class='important'>2013 à l'IESA Multimédia Paris</span>. C'est un projet fictif, de mise en relation de coach de vie avec des nouveaux riches, pour qu'ils apprennent à vivre avec leur nouveau mode de vie.",
                "intervention": "<span class='important'>Intégration HTML/CSS responsive</span> de toutes les pages du site web.",
                "sectors": [
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "http://samanthapotier.com/realisations/sepale",
                "slider": false
            },
            {
                "id": 11,
                "display": true, 
                "name": "My 3D Factory",
                "slug": "my-3D-factory",
                "thumbnail": "my3DFactory",
                "domains": [
                    "management"
                ],
                "image":"my3DFactory",
                "subTitle": "Imprimante 3D",
                "description": "Réalisation d'un dossier pour la création d'une plateforme pour la vente de fichier pour une impression 3D, dans le cadre du <span class='important'>passage du titre de Chef de Projet Multimédia</span>, en 2013. Plateforme sur laquelle les designers peuvent importer leurs modèles de fichiers 3D et les clients en acheter.",
                "intervention": "Rédaction d'un cahier des charges fonctionnel et cahier des charges techniques, mise en place d'une stratégie digitale et réalisation des wireframes.",
                "sectors": [
                    "management",
                    "wireframe"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 12,
                "display": false, 
                "name": "Chocolats Vilas Boas",
                "slug": "chocolats-vilas-boas",
                "thumbnail": "chocolatsVilasBoas",
                "domains": [
                    "web"
                ],
                "image":"chocolatsVilasBoas",
                "subTitle": "Chocolatier",
                "description": "Création du site web Chocolats Vilas Boas, réalisé au sein de l'agence <span class='important'>ACPA Web en 2014</span>. Site vitrine présentant les différentes collection de créations en chocolat sur-mesure.",
                "intervention": "Conception <span class='important'>graphique</span> des pages principales du site web. <span class='important'>Intégration HTML/CSS</span> des pages principales pour un <span class='important'>développement sous le CMS Joomla</span>. <span class='important'>Formation client</span> pour qu'il puisse gérer son site web.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "http://chocolatsvilasboas.fr/",
                "slider": false
            },
            {
                "id": 13,
                "display": true, 
                "name": "L'Art du Feu",
                "slug": "art-du-feu",
                "thumbnail": "artDuFeu",
                "domains": [
                    "web"
                ],
                "image":"artDuFeu",
                "subTitle": "Cheminées",
                "description": "Refonte graphique du site web l'Art du feu, réalisé au sein de l'agence <span class='important'>ACPA Web en 2014</span>. Site vitrine des différentes cheminées et poëles vendus par la société.",
                "intervention": "Conception <span class='important'>graphique</span> des pages principales du site web. <span class='important'>Intégration HTML/CSS</span> des pages principales pour un <span class='important'>développement sous le CMS Joomla</span>.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "http://artdufeu78.com/",
                "slider": false
            },
            {
                "id": 14,
                "display": true, 
                "name": "Les Jardins de la Vieille Fontaine",
                "slug": "les-jardins-de-la-vieille-fontaine",
                "thumbnail": "lesJardinsDeLaVieilleFontaine",
                "domains": [
                    "web"
                ],
                "image":"lesJardinsDeLaVieilleFontaine",
                "subTitle": "Restaurant",
                "description": "Refonte graphique du site web Les Jardins de la Vieille Fontaine, réalisé au sein de l'agence <span class='important'>ACPA Web en 2014</span>. Mise en avant du lieu, présentation de la carte et des différents événements.",
                "intervention": "Conception <span class='important'>graphique</span> des pages principales du site web. <span class='important'>Intégration HTML/CSS</span> des pages principales pour un <span class='important'>développement sous le CMS Joomla</span>.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "https://www.lesjardinsdelavieillefontaine.com/",
                "slider": false
            },
            {
                "id": 15,
                "display": true, 
                "name": "LM2E",
                "slug": "lm2e",
                "thumbnail": "lm2e",
                "domains": [
                    "web"
                ],
                "image":"lm2e",
                "subTitle": "Dépannage d'électroménager",
                "description": "Création du site LM2E, réalisé au sein de l'agence <span class='important'>ACPA Web en 2014</span>. Site one-page présentant les différents services de cette société de dépannage d'électroménager.",
                "intervention": "Conception <span class='important'>graphique</span> et <span class='important'>intégration HTML/CSS responsive</span> de la page principal dans le but d'un <span class='important'>développement sous le CMS Joomla</span>. Site multilingue : anglais et français. Amélioration du référencement naturel.",
                "sectors": [
                    "webdesign",
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 16,
                "display": false, 
                "name": "Capitaine House",
                "slug": "capitaine-house",
                "thumbnail": "capitaineHouse",
                "domains": [
                    "management"
                ],
                "image":"capitaineHouse",
                "subTitle": "Immobilier",
                "description": "Projet scolaire par groupe, réalisé en 2014 au sein de <span class='important'>l'IESA Multimédia Paris</span>. Nous devions réaliser en 5 jours une plateforme de mise en relation entre propriétaire et locataire, mise en avant de la déclaration de l'état des lieux, en toute situation.",
                "intervention": "<span class='important'>Gestion du projet</span> : organisation et plannification des tâches, pour un groupe de 4 personnes. Création de <span class='important'>wireframes interactifs</span> avec le logiciel Prototyper Pro",
                "sectors": [
                    "management",
                    "wireframe"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 17,
                "display": true, 
                "name": "Tennis Club des Loges",
                "slug": "tennis-club-des-loges",
                "thumbnail": "tennisClubDesLoges",
                "domains": [
                    "identite"
                ],
                "image":"tennisClubDesLoges",
                "subTitle": "Association Sportive",
                "description": "Refonte de l'identité visuelle du club, réalisé en tant qu'<span class='important'>indépendant en 2014</span>. Le Tennis Club des Loges est une association sportive à Saint Germain en Laye - Yvelines (78).",
                "intervention": "Création d'un nouveau logotype et déclinaison de celui-ci/",
                "sectors": [
                    "identite"
                ],
                "linkToProject": "http://tennisclubdesloges.fr/",
                "slider": false
            },
            {
                "id": 18,
                "display": true, 
                "name": "Annuaire de Ville",
                "slug": "annuaire-de-ville",
                "thumbnail": "annuaireDeVille",
                "domains": [
                    "web"
                ],
                "image":"annuaireDeVille",
                "subTitle": "Annuaire",
                "description": "Refonte graphique du site web réalisé en 2014 au sein de l'agence ACPA Web. C'est un annuaire (papier et en ligne) listant tous les professionnels (artisans, médecins, administratifs...) des Yvelines.",
                "intervention": "Conception <span class='important'>graphique</span> des pages principales du site web. Intégration <span class='important'>HTML/CSS</span> des pages principales, afin qu'une autre personne puisse le développer sous un CMS.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 19,
                "display": true, 
                "name": "Joaillerie Mauger",
                "slug": "joaillerie-mauger",
                "thumbnail": "joaillerieMauger",
                "domains": [
                    "web"
                ],
                "image":"joaillerieMauger",
                "subTitle": "Bijoutier",
                "description": "<span class='important'>Refonte graphique</span> du site web Joaillerie Mauger, réalisé au sein de l'agence ACPA Web en 2014. Site vitrine présentant les différentes réalisations de ce grand bijoutier joaillier.",
                "intervention": "Conception <span class='important'>graphique</span> des pages principales du site web. <span class='important'>Intégration HTML/CSS</span> de toutes les pages pour un développement sous le CMS Joomla. Insertion de tous les visuels des bijoux.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 20,
                "display": false, 
                "name": "Intérieurs Gontier",
                "slug": "interieurs-gontier",
                "thumbnail": "interieursGontier",
                "domains": [
                    "web"
                ],
                "image":"interieursGontier",
                "subTitle": "Meubles d'ébénisterie",
                "description": "Création du site web pour le magasin Intérieur Gontier, renvendeur des Meubles Gontier, réalisé au sein de l'<span class='important'>agence ACPA Web en 2014</span>. Site vitrine mettant en avant les promotions sur les meubles et les décorateurs travaillant sur les meubles.",
                "intervention": "Conception <span class='important'>graphique</span> des pages principales, en s'inspirant du site Meubles Gontier. <span class='important'>Intégration HTML/CSS</span> des pages pour un développement sous le CMS Joomla.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 21,
                "display": true, 
                "name": "Meubles Gontier",
                "slug": "meubles-gontier",
                "thumbnail": "meublesGontier",
                "domains": [
                    "web"
                ],
                "image":"meublesGontier",
                "subTitle": "Meubles d'ébénisterie",
                "description": "<span class='important'>Refonte graphique</span> du site web Meubles Gontier France, réalisé au sein de l’agence ACPA Web en 2014. Site vitrine de présentation des différents meubles vendus par l’enseigne.",
                "intervention": "Conception <span class='important'>graphique responsive</span> de toutes les pages du site web. <span class='important'>Intégration HTML/CSS</span> des pages pour réaliser développement sous le CMS Joomla.",
                "sectors": [
                    "webdesign",
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "http://www.meubles-gontier.com/fr/",
                "slider": false
            },
            {
                "id": 22,
                "display": true, 
                "name": "SinistrApp",
                "slug": "sinistrapp",
                "thumbnail": "sinistrApp",
                "domains": [
                    "identite",
                    "application"
                ],
                "image":"sinistrApp",
                "subTitle": "Assurance",
                "description": "Projet scolaire en groupe réalisé en 2015 à l'IESA Multimédia Paris. Nous devions réaliser, en 1 semaine, une <span class='important'>application mobile</span> permettant aux clients de remplir une déclaration de sinistre à tout moment.",
                "intervention": "<span class='important'>Gestion du projet</span> : organisation et planification des tâches, pour un groupe de 5 personnes, selon la <span class='important'>méthode AGILE</span>. <span class='important'>Création du logotype</span> et de la conception <span class='important'>graphique de l'application</span>.",
                "sectors": [
                    "design",
                    "identite",
                    "management"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 23,
                "display": true, 
                "name": "Dynamic Art",
                "slug": "dynamic-art",
                "thumbnail": "dynamicArt",
                "domains": [
                    "web"
                ],
                "image":"dynamicArt",
                "subTitle": "Organisateur de soirées",
                "description": "Création du site internet Dynamic Art, réalisé au sein de l'agence <span class='important'>ACPA Web en 2015</span>. Site vitrine présentant les différentes solutions proposées par Dynamic Art pour animer les soirées.",
                "intervention": "Conception <span class='important'>graphique responsive</span> de toutes les pages du site internet. <span class='important'>Intégration HTML/CSS</span> des pages types pour un <span class='important'>développement sous le CMS Pulse Content</span>. Amélioration du référencement naturel.",
                "sectors": [
                    "webdesign",
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "http://www.dynamic-art.fr/",
                "slider": false
            },
            {
                "id": 24,
                "display": false, 
                "name": "AKKA Emailing",
                "slug": "akka-emailing",
                "thumbnail": "akkaEmailing",
                "domains": [
                    "web"
                ],
                "image":"akkaEmailing",
                "subTitle": "Ingénierie",
                "description": "Création d'une <span class='important'>plateforme de création et d'envoi d'emailing</span> personnalisé à destination des prospects du client, réalisé en 2016 chez AKKA DS. AKKA Emailing, filliale du groupe AKKA Technologie, est spécialisée sur le secteur aéronautique.",
                "intervention": "Conception <span class='important'>graphique</span> de la plateforme ainsi que d'un modèle d'emailing. <span clas='important'>Intégration HTML/CSS, via twig</span>, couplé avec un développement PHP, avec Silex.",
                "sectors": [
                    "webdesign",
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 25,
                "display": false, 
                "name": "AKKA Aeronews",
                "slug": "akka-aeronews",
                "thumbnail": "akkaAeronews",
                "domains": [
                    "web"
                ],
                "image":"akkaAeronews",
                "subTitle": "Aéronautique",
                "description": "Développement d'un <span class='important'>blog</span> a destination des collaborateurs AKKA Technologies en mission chez un grand client du secteur aéronautique. Seul les collaborateurs connectés peuvent accéder au contenu. Projet développé au sein d'AKKA DS en 2017.",
                "intervention": "Adaptation d'un template pour le <span class='important'>CMS Ghost (nodeJS)</span>. Paramétrage du CMS et ajout des premiers articles. Création des <span class='important'>documents de formation</span> pour rendre le client indépendant.",
                "sectors": [
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 26,
                "display": true, 
                "name": "Plateforme Intervention",
                "slug": "plateforme-intervention",
                "thumbnail": "plateformeIntervention",
                "domains": [
                    "web"
                ],
                "image":"plateformeIntervention",
                "subTitle": "Intervention",
                "description": "Création d'un <span class='important'>POC</span>, pour permettre le suivi des actions lors d'une intervention. Différents niveaux d'utilisateurs : le super admin, le gestionnaire et enfin l'intervenant, pouvant tous interagir les uns avec les autres. <span class='important'>Web App</span> réalisé au sein d'AKKA DS en 2017.",
                "intervention": "Création graphique, selon la charge graphique du client, avec la nécessité d'utiliser des pictogrammes pour une compréhension internationale. <span class='important'>Intégration HTML/CSS</span> de l'ensemble de la plateforme, au <span class='important'>format tablette</span>, couplé avec un développement PHP, avec Silex.",
                "sectors": [
                    "webdesign",
                    "developpement",
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 27,
                "display": true, 
                "name": "RAM",
                "slug": "ram",
                "thumbnail": "ram",
                "domains": [
                    "application"
                ],
                "image":"ram",
                "subTitle": "Administratif",
                "description": "Mise en place d'une <span class='important'>webapp</span> permettant à chaque collaborateur de remplir son RAM sur son mobile chaque soir, et le faire valider. Projet interne réalisé au sein d'AKKA DS en 2016.",
                "intervention": "Rédaction du cahier des <span class='important'>spécifications fonctionnels et techniques</span>. Création des <span class='important'>wireframes interactifs</span>, puis déclinaison de la charte graphique pour un <span class='important'>développement sous Angular 1.5</span>.",
                "sectors": [
                    "management",
                    "design",
                    "developpement"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 28,
                "display": true, 
                "name": "BMS Point For Contact",
                "slug": "bms-point-for-contact",
                "thumbnail": "bmsPointForContact",
                "domains": [
                    "web"
                ],
                "image":"bmsPointForContact",
                "subTitle": "Aéronautique",
                "description": "Application mobile permettant aux consultants de rechercher des process, accéder aux documents et prendre contact avec les personnes concernées. Wireframes réalisés dans le contexte d'une <span class='important'>réponse à appel d'offre</span>, chez AKKA DS en 2017.",
                "intervention": "Participation à la <span class='important'>rédaction de la propale</span>, création de <span class='important'>wireframes</span> de quelques pages afin de donner envi au client.",
                "sectors": [
                    "wireframe",
                    "application"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 29,
                "display": true, 
                "name": "Digital Learning Path",
                "slug": "digital-learning-path",
                "thumbnail": "digitalLearningPath",
                "domains": [
                    "web"
                ],
                "image":"digitalLearningPath",
                "subTitle": "Administration",
                "description": "Mise en place d'un outils interactif, adapté aux besoins en mobilité, à destination des managers. Enjeu de communication et conduite du changement, accompagnant les manager tout au long de l'année pour le suivi du programme et leurs collaborateurs. Rappel des dates des points indivuels et collectifs, avec les informations à aborder lors des points.",
                "intervention": "Participation aux <span class='important'>ateliers</span> avec le client, pour définir le besoins et réaliser les <span class='important'>wireframes</span>. Déclinaison de leur charte graphique sur la plateforme. <span class='important'>Intégration HTML/CSS/JS</span> de la plateforme, avec une map interactif.",
                "sectors": [
                    "webdesign",
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 30,
                "display": true, 
                "name": "Blog Externe - AKKA Technologies",
                "slug": "blog-externer-akka-technologies",
                "thumbnail": "akkaTechnologies_blogExterne",
                "domains": [
                    "web"
                ],
                "image":"akkaTechnologies_blogExterne",
                "subTitle": "Ingénierie",
                "description": "AKKA Technologies souhaite lancer un <span class='important'>blog sur l'innovation</span>, pour valoriser l'image corporate. <span class='important'>Communiquer sur les actualités</span> du groupe au travers d'un blog, avec du contenu à haute valeur ajoutée.",
                "intervention": "Réalisation des <span class='important'>maquettes</span> des pages principales. <span class='important'>Intégration HTML/CSS</span> sous le CMS b2evolution (PHP) de l'ensemble de la plateforme.",
                "sectors": [
                    "webdesign",
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 31,
                "display": true, 
                "name": "G2S",
                "slug": "g2s",
                "thumbnail": "g2s",
                "domains": [
                    "web",
                    "identite"
                ],
                "image":"g2s",
                "subTitle": "Emploi",
                "description": "G2S est une <span class='important'>plateforme d'intérmédiation</span> entre des freelances et les grands groupes du CAC 40. Cette plateforme permet aux freelances de répondres à des appels d'offre, en se faisant référencé par G2S. Il suffit aux freelances de s'inscrire et envoyer leurs CVs.",
                "intervention": "Création du <span class='important'>logotype</span>, ainsi que des wireframes et des maquettes. <span class='important'>Intégration HTML/CSS (Twig)</span> de l'ensemble des pages, couplé à un développement sous PHP (Silex). Développement du front et du back-office (permettant à l'entreprise d'ajouter les offres à sa convenance).",
                "sectors": [
                    "webdesign",
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 32,
                "display": true, 
                "name": "Intranet AKKA DS",
                "slug": "akka-ds-backoffice",
                "thumbnail": "akkaDs_backoffice",
                "domains": [
                    "web"
                ],
                "image":"akkaDs_backoffice",
                "subTitle": "Administration",
                "description": "Mise en place d'une <span class='important'>application intranet</span> au sein d'AKKA DS, afin d'y regrouper différentes informations. Plateforme permettant à l'ADV d'avoir un <span class='important'>suivi de l'ensemble de ses collaborateurs</span>, et traiter les différentes demandes (RAM, Congés, Notes de frais…)",
                "intervention": "Rédaction des <span class='important'>Spécifications fonctionnelles et techniques</span>, <span class='important'>suivi et gestion du projet</span> avec Trello. Déclinaison de la charte graphique sur des <span class='important'>wireframes interactifs</span>. Participation au <span class='important'>développement en VueJS et Electron</span>.",
                "sectors": [
                    "wireframe",
                    "developpement",
                    "management"
                ],
                "linkToProject": "",
                "slider": false
            },
            {
                "id": 33,
                "display": true, 
                "name": "AKKA DS",
                "slug": "akka-ds",
                "thumbnail": "akkaDs_site",
                "domains": [
                    "web"
                ],
                "image":"akkaDs_site",
                "subTitle": "Conseil en Transformation Digital",
                "description": "Développement d'un site vitrine mettant en avant AKKA DS, sa proposition de valeur ainsi que les différentes études de cas réalisées par l'agence.",
                "intervention": "Récupération des maquettes principales réalisées par un graphiste. <span class='important'>Intégration HTML/CSS</span> et développement des pages internes, en vue d'un développement PHP avec Code Igniter.",
                "sectors": [
                    "developpement",
                    "responsive"
                ],
                "linkToProject": "http://akka.digital/",
                "slider": false
            },
            {
                "id": 34,
                "display": true, 
                "name": "Plateforme de formation",
                "slug": "plateforme-de-formation",
                "thumbnail": "plateformeFormation",
                "domains": [
                    "web"
                ],
                "image":"plateformeFormation",
                "subTitle": "Formation",
                "description": "Afin de maintenir les compétences des stagiaires, mise en place d'une application tablette gamifiée de quiz ludique sur tablette. Les stagiaires peuvent répondre à des quiz concernant les formations suivies. Les formateurs ajoutent des parcours de formation, avec des quiz et peuvent consulter les résultats des stagiaires.",
                "intervention": "Participation à la propale. Une fois le projet gagné, <span class='important'>animation des 3 ateliers UX</span> chez le client, création des <span class='important'>wireframes interactifs</span>. Participation à la gestion de projet, avec la <span class='important'>rédaction des Spécifications fonctionnelles et techniques</span>, puis mise en place et suivi d'un JIRA. Création des GUI et maquettes des pages princiaples. <span class='important'>Intégration HTML/CSS (Twig)</span> en vu d'un développement PHP (Silex).",
                "sectors": [
                    "wireframe",
                    "developpement",
                    "management"
                ],
                "linkToProject": "",
                "slider": false
            },



            // {
            //     "id": 3,
            //     "display": true, 
            //     "name": "HPC",
            //     "slug": "hpc",
            //     "thumbnail": "hpc",
            //     "domains": [
            //         "identite"
            //     ],
            //     "image":"hpc",
            //     "subTitle": "Conseil",
            //     "description": "",
            //     "intervention": "",
            //     "sectors": [
            //         "webdesign"
            //     ],
            //     "linkToProject": "",
            //     "slider": false
            // },
        ];
        return {projects};
    }
}