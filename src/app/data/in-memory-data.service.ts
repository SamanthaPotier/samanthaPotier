import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const projects = [
            { 
                "id": 0,
                "display": true,
                "name": "Soun Collection",
                "slug": "soun-collection",
                "thumbnail": "http://samanthapotier.com/img/thumbnail/soun-collection.jpg",
                "domains": [
                    "newsletter",
                    "mobile",
                ],
                "imageBig":"paysage_001",
                "imageSmall":"paysage_002",
                "imageMedium":"paysage_003",
                "subTitle": "Vêtement",
                "description": "Création d'un modèle de newsletter, <span class='red'>réalisé en 2011</span> au sein de l'agence Websiting. Soun collection est une ligne de vêtements pour femmes.",
                "intervention": "Conception graphique d'un modèle newsletter.",
                "sectors": [
                    "graphisme",
                    "web"
                ],
                "linkToProject": "",
                "slider": true,
            },
            { 
                "id": 1, 
                "display": false,
                "name": "Vidéo Thérapie",
                "slug": "video-therapie",
                "thumbnail": "http://samanthapotier.com/img/thumbnail/video-therapie.jpg",
                "domains": [
                    "newsletter",
                    "web"
                ],
                "image":"http://samanthapotier.com/img/screen/video-therapie-newsletter.jpg",
                "subTitle": "Conseil",
                "description": "Création d'un modèle de newsletter, réalisé en 2011 au sein de l'agence Websiting. Vidéo Thérapie est un service de conseil par vidéo conférence.",
                "intervention":"Conception graphique d'un modèle newsletter.",
                "sectors": [
                    "graphisme",
                    "web"
                ],
                "linkToProject": "",
                "slider": false,
            },
            { 
                "id": 5,
                "display": true, 
                "name": "PP From Longwy",
                "slug": "pp-from-longwy",
                "thumbnail": "http://samanthapotier.com/img/thumbnail/pp-from-longwy.jpg",
                "domains": [
                    "web",
                    "web"
                ],
                "image":"http://samanthapotier.com/img/screen/pp-from-longwy-imac.jpg",
                "subTitle": "Bijoutier",
                "description": "Projet scolaire, en groupe, <span style='color: red;'>réalisé</span> 2012 à l'IESA Multimédia Paris. Le brief donné était de réaliser un site internet dynamique sans utilisation de CMS. Nous avons choisi un vrai client : PP From Longwy, un créateur de bijoux.",
                "intervention": "Intégration HTML/CSS responsive de toutes les pages du site internet (front office et back office).",
                "sectors": [
                    "dev",
                    "responsive"
                ],
                "linkToProject": "http://www.ppfromlongwy.com/",
                "slider": false,
            }
        ];
        return {projects};
    }
}