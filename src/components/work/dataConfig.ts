import Abbicura from "../../assets/projects/abbicuradite.jpeg";
import pastorale from "../../assets/projects/pastorale.jpeg";
import aristonEvent from "../../assets/projects/aristonEvent.png";
import mysales from "../../assets/projects/mysales.jpg";
import odgumbria from "../../assets/projects/odgumbria.png";
import scoplan from "../../assets/projects/scoplan.png";

type LanguageContent = {
  en: string;
  fr: string;
};

interface DataConfigItem {
  id: number;
  name: LanguageContent;
  image: string;
  link: string;
  overview: LanguageContent;
}

export const dataConfig: DataConfigItem[] = [
  {
    id: 1,
    name: {
      en: "Abbi cura di te",
      fr: "Abbi cura di te",
    },
    image: Abbicura,
    link: "https://abbicuradite.ebiterumbria.it/",
    overview: {
      en: `This is a dedicated web site aimed at promoting workplace safety and health for employees across the Umbria region in Italy.
      The website serves as an assessment tool that evaluates the posture and potential workplace hazards faced by individuals in various job categories. 
      After completing the assessment, users are provided with a personalized training course designed to help them correct harmful daily routines and adopt safer work practices.
      By identifying risks and providing targeted solutions, Abbi Cura di Te ensures that employees can create safer and healthier work environments.`,
      fr: `Un site web dédié à la promotion de la sécurité et de la santé au travail pour les employés de la région de l'Ombrie en italie.
      Il sert d'outil d'évaluation permettant d'analyser la posture et les risques potentiels rencontrés par les individus dans divers métiers.
      Après avoir terminé l'évaluation, les utilisateurs reçoivent un cours de formation personnalisé conçu pour les aider à corriger les habitudes quotidiennes nuisibles et adopter des pratiques de travail plus sûres.
      En identifiant les risques et en fournissant des solutions ciblées, "Abbi Cura di Te" veille à ce que les employés puissent créer des environnements de travail plus sûrs et plus sains.`,
    },
  },
  {
    id: 2,
    name: {
      en: "Pastorale con le famiglie",
      fr: "Pastorale con le famiglie",
    },
    image: pastorale,
    link: "https://pastoraleconlefamiglie.org/",
    overview: {
      en: `A website designed to provide spiritual formation and guidance based on biblical principles for individuals, couples, and married couples.
      The website serves as a resource for those seeking to deepen their faith through a series of pastor-led courses tailored to various stages of life and relationships.
      This offers detailed presentations of each course, including content outlines, costs, and additional information to help participants make informed decisions. 
      To enhance the experience, the website also provides a convenient hotel booking option directly within the course details, ensuring a comfortable stay for participants attending in-person sessions.
      Additionally, Pastorale con le Famiglie supports the mission of evangelization by offering a feature where users can make donations to help further the cause of spreading the Gospel.`,
      fr: `Un site web conçue pour fournir une formation spirituelle et des conseils basés sur les principes bibliques pour les individus, les couples et les couples mariés.
      Ceci sert de ressource pour ceux qui cherchent à approfondir leur foi à travers une série de cours dirigés par des pasteurs, adaptés aux différentes étapes de la vie et des relations.
      La plateforme propose des présentations détaillées de chaque cours, y compris des plans de contenu, des coûts et des informations supplémentaires pour aider les participants à prendre des décisions éclairées.
      Pour améliorer l'expérience, le site propose également une option de réservation d'hôtel directement dans les détails du cours, garantissant un séjour confortable pour les participants assistant aux sessions en personne.
      De plus, ce site soutient la mission d'évangélisation en offrant une fonctionnalité permettant aux utilisateurs de faire des dons pour aider à diffuser l'Évangile.`,
    },
  },
  {
    id: 3,
    name: {
      en: "Ariston event",
      fr: "Ariston event",
    },
    image: aristonEvent,
    link: "https://aristoneventi.com/",
    overview: {
      en: `Ariston Event is a powerful platform designed to streamline the management of promotional events for Ariston, 
      specifically targeting wholesalers and installers across Italy. This platform simplifies event organization by offering a range of tools that enhance efficiency and participant engagement. 
      It reduces the complexity of event management, making it easier for Ariston to execute successful promotional events and engage with their network effectively.`,
      fr: `Ariston Event est une plateforme puissante conçue pour suivre et améliorer la gestion des événements promotionnels pour Ariston,
      en ciblant spécifiquement les grossistes et les installateurs à travers l'Italie. Cette plateforme simplifie l'organisation d'événements en offrant une gamme d'outils qui améliorent l'efficacité et l'engagement des participants. 
      Elle réduit la complexité de la gestion des événements, facilitant ainsi la mise en œuvre d'événements promotionnels réussis et l'engagement du réseau d'Ariston de manière efficace.`,
    },
  },
  {
    id: 4,
    name: {
      en: "My sales",
      fr: "My sales",
    },
    image: mysales,
    link: "https://mysalesariston.com/",
    overview: {
      en: `MySales is an application designed to streamline the sales tracking process for Ariston's wholesalers. This app is specifically tailored to help wholesalers efficiently apply promotions and manage their sales data, ensuring accurate and validated transactions.

The core functionality of MySales revolves around the ability to scan QR codes on Ariston products. This feature allows wholesalers to quickly and easily apply promotions to invoices, ensuring that all discounts and offers are correctly accounted for during the sales process. The app also supports the uploading of documents, such as invoices, to validate and confirm the application of these promotions.`,
      fr: `MySales est une application conçue pour suivre le processus de suivi des ventes pour les grossistes d'Ariston. Cette application est spécifiquement adaptée pour aider les grossistes à appliquer efficacement les promotions et à gérer leurs données de vente, garantissant des transactions exactes et validées.

La fonctionnalité principale de MySales repose sur la capacité à scanner les codes QR des produits Ariston. Cette fonctionnalité permet aux grossistes d'appliquer rapidement et facilement les promotions sur les factures, garantissant que toutes les remises et offres sont correctement prises en compte lors du processus de vente. L'application prend également en charge le téléchargement de documents, tels que des factures, pour valider et confirmer l'application de ces promotions.`,
    },
  },
  {
    id: 5,
    name: {
      en: "ODGUmria",
      fr: "ODGUmria",
    },
    image: odgumbria,
    link: "https://odgumbria.it/",
    overview: {
      en: "The website of the Ordine dei Giornalisti dell’Umbria (ODG Umbria) is a central platform that offers both administrative resources for journalists registered in the region and a space dedicated to the publication of local news. This project aims to support journalists in their work while providing the community with privileged access to important regional information. In addition, the site also serves to inform and share the latest news with visitors interested in Umbria, as well as offering training opportunities for those looking to improve or certify their skills in journalism.",
      fr: "Le site web de l'Ordine dei Giornalisti dell’Umbria (ODG Umbria) est une plateforme centrale qui propose à la fois des ressources administratives pour les journalistes inscrits dans la région et un espace dédié à la publication des actualités locales. Ce projet vise à soutenir les journalistes dans leur activité tout en offrant à la communauté un accès privilégié aux informations régionales importantes. En plus de cela, le site sert également à informer et à partager les dernières nouvelles avec les visiteurs intéressés par l'Ombrie, ainsi que des opportunités de formation pour ceux souhaitant se perfectionner ou se certifier dans le domaine du journalisme",
    },
  },
  {
    id: 5,
    name: {
      en: "Scoplan",
      fr: "Scoplan",
    },
    image: scoplan,
    link: "https://www.scoplan.com/",
    overview: {
      en: "Scoplan is a Provence-based startup focused on digitalizing and enhancing transparency in the civil engineering industry. This platform designed to allow clients to monitor the progress of construction projects directly from their smartphones. This digital tool aims to improve communication and reduce uncertainties in the construction process, providing clients with real-time access to project updates.",
      fr: "Scoplan est une startup basée en Provence qui se spécialise dans la numérisation et l'amélioration de la transparence dans l'industrie du génie civil. Une plateforme web qui permet aux clients de suivre l'avancement des projets de construction directement depuis leurs smartphones. Cet outil numérique vise à améliorer la communication et à réduire les incertitudes liées au processus de construction, offrant aux clients un accès en temps réel aux mises à jour des projets, un peu comme un portail client pour les services bancaires.",
    },
  },
];
