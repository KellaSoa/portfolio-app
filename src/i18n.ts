import i18n from "i18next";
import { initReactI18next } from "react-i18next";

type Resources = {
  en: {
    translation: {
      home: object;
      about: object;
      work: object;
      skills: object;
      contact: object;
      footer: object;
    };
  };
  fr: {
    translation: {
      home: object;
      about: object;
      work: object;
      skills: object;
      contact: object;
      footer: object;
    };
  };
};

const resources: Resources = {
  en: {
    translation: {
      home: {
        slug: "home",
        title: "Home",
        hi: "Hi, my name is",
        full_name: "Kella Rianjafimamonjisoa",
        job_title: "I'm a Full Stack Developer.",
        description:
          "I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.",
        nextDescription:
          "I believe that every project begins with an idea,a vision to be realized, and my role is to transform that vision into a high-performance, tailor-made digital solution. I am a developer who loves tackling challenges and finding creative solutions to complex problems. Each project is a new opportunity for me to innovate, learn, and create exceptional user experiences. If you are looking for a partner who is ambitious, determined, and always ready to take on new challenges to turn your vision into reality, then you are in the right place!",
        slogan: "your vision, our mission",
        button: "View work",
      },
      about: {
        slug: "about",
        title: "About",
        subtitle: "Hi. I'm Kella, nice to meet you. Please take a look around.",
        description:
          "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to  large enterprise corporations. What would you do if you had a software expert available at your fingertips?",
      },
      skills: {
        slug: "home",
        title: "Skills",
        subtitle: "Technologies I've worked with",
        description:
          "Throughout my career, I’ve worked with a diverse range of technologies that empower me to create high-quality applications and websites. From crafting engaging front-end interfaces or building robust back-end, these tools and frameworks are at the core of my expertise, enabling me to deliver tailored solutions for various projects and industries.",
      },
      work: {
        slug: "work",
        title: "Work",
        subtitle: "My Projects",
        description:
          "Here are some of my most recent projects, each one representing a unique challenge and opportunity to create impactful solutions. From developing website, user interfaces to implementing complex backend systems, these projects showcase my ability to deliver innovative and reliable software. Take a look at the projects that reflect my work and expertise.",
      },
      contact: {
        slug: "contact",
        title: "Contact",
        subtitle: "Get in Touch",
        description:
          "If you'd like to make an enquiry, feel free to get in touch, and I will respond as soon as possible. You can either send me an email directly at: ",
        moreDescription:
          "or use the contact form. I look forward to hearing from you!",
        form: {
          name: "Name",
          required: "Required field",
          button: "Let's collaborate",
        },
      },
      footer: {
        copy: "All rights reserved.",
        made: "Made with",
        by: "by",
      },
    },
  },
  fr: {
    translation: {
      home: {
        slug: "home",
        title: "Accueil",
        hi: "Salut, je suis",
        full_name: "Kella Rianjafimamonjisoa",
        job_title: "Développeuse Full Stack",
        description:
          "Passionnée et ambitieuse, je me spécialise dans la création d'applications web et de sites web innovants. Mon approche est simple :",
        nextDescription:
          "Je crois que chaque projet commence par une idée, une vision à concrétiser, et mon rôle est de transformer cette vision en une solution numérique performante et sur-mesure.Je suis une développeuse qui aime relever des défis et trouver des solutions créatives aux problèmes complexes. Chaque projet est une nouvelle occasion pour moi d'innover, d'apprendre  et de créer des expériences utilisateur exceptionnelles .Si vous recherchez une partenaire ambitieuse, déterminée et toujours prête à relever de nouveaux défis pour transformer votre vision en réalité, alors vous êtes au bon endroit ! 💼",
        slogan: "votre vision, notre mission",
        button: "Voir mes réalisations",
      },
      about: {
        slug: "about",
        title: "À propos",
        subtitle: "Bonjour, je suis Kella. Ravie de vous accueillir",
        description:
          "Développeuse Full Stack passionnée, je conçois des applications et des sites web qui allient performance, esthétique et expérience utilisateur de qualité. Que ce soit pour développer des plateformes interactives, de site web ou des solutions backend robustes, je m'engage à transformer vos idées en projets concrets et innovants.Ce que je préfère dans mon métier, c’est transformer des idées en outils concrets qui aident les utilisateurs au quotidien, qu’il s’agisse d’un site web ou d’une application fonctionnelle",
      },
      skills: {
        slug: "skills",
        title: "Compétences",
        subtitle: "",
        description:
          "Au cours de ma carrière, j’ai utilisé un large éventail de technologies qui me permettent de créer des applications et des sites web de grande qualité. Qu’il s’agisse de concevoir des interfaces front-end ou des back-end performants, ces outils et frameworks constituent le cœur de mon expertise, me permettant de proposer des solutions adaptées à chaque projet",
      },
      work: {
        slug: "work",
        title: "Portfolio",
        subtitle: "Mes projets",
        description:
          "Voici quelques-uns de mes projets les plus récents, chacun représentant un défi unique et une opportunité de créer des solutions impactantes. Du développement de site web, d'interfaces utilisateur intuitives à la mise en œuvre de systèmes backend complexes, ces projets illustrent ma capacité à offrir des développements innovants et fiables. Découvrez les projets qui reflètent mon travail et mon expertise",
      },
      contact: {
        slug: "contact",
        title: "Contact",
        subtitle: "Prenez contact",
        description:
          "Si vous souhaitez faire une demande, n'hésitez pas à me contacter, et je vous répondrai dès que possible. Vous pouvez m'envoyer un e-mail directement à : ",
        moreDescription:
          "ou utiliser le formulaire de contact. J'ai hâte de recevoir votre message !",
        form: {
          name: "Nom",
          required: "Champ obligatoire",
          button: "Envoyer",
        },
      },
      footer: {
        copy: "Tous droits réservés.",
        made: "Fait avec",
        by: "par",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // Default language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
