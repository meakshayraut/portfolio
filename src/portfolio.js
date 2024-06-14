/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akshay Raut",
  title: "Hi all, I'm Akshay",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with 2 years of experience in developing and deploying AI-driven solutions. Proficient in Azure OpenAI, Microsoft Bot Framework, and Python, with a focus on building conversational AI and enhancing user experience through NLP and LLM capabilities."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RHte6nquWjF3MJeZE_BoSUNMtuFtTUUM/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/meakshayraut",
  linkedin: "https://www.linkedin.com/in/me-akshay-raut/",
  gmail: "akshayrautg@gmail.com",
  medium: "https://medium.com/@akshay_raut",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED SOFTWARE ENGINEER SPECIALIZING IN AI AND CHATBOT DEVELOPMENT",
  skills: [
    emoji("⚡ Develop and deploy AI-driven solutions using Azure OpenAI"),
    emoji("⚡ Expertise in Azure Platform, Azure Services, and MS Bot Framework"),
    emoji("⚡ Implement advanced conversational AI using Microsoft Bot Framework"),
    emoji("⚡ Skilled in Natural Language Processing (NLP) and Generative AI"),
    emoji("⚡ Develop and maintain scalable backend systems with Python"),
    emoji("⚡ Create end-to-end chatbot services, including environment setup, database setup, and data logging"),
    emoji("⚡ Hands-on experience with business messaging services and chatbots across various channels (Web, Teams, WhatsApp)"),
    emoji("⚡ Passionate about leveraging AI to enhance user experience and operational efficiency")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Azure OpenAI",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Microsoft Bot Framework",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Langchain",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Llama-Index",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-fast-forward"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Suman Ramesh Tulsiani Technical Campus Kamshet",
      logo: require("./assets/images/srttc_logo.jpg"),
      subHeader: "Bachelor in Computer Engineering",
      duration: "2019 - 2022",
      desc: "Graduated with a strong focus on software development and engineering principles.",
      descBullets: [
        "GPA: 8.7",
      ]
    },
    {
      schoolName: "Government Polytechnic Awasari (KH)",
      logo: require("./assets/images/gpalogo.png"),
      subHeader: "Diploma in Computer Engineering",
      duration: "2016 - 2019",
      desc: "Completed a comprehensive diploma program with a focus on foundational engineering concepts.",
      descBullets: ["GPA: 6.0"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML", // Insert stack or technology you have experience in
      progressPercentage: "85%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer",
      company: "Star Union Dai-ichi Life Insurance",
      companylogo: require("./assets/images/sud_logo.png"), // Ensure you have the logo image in the specified path
      date: "March 2022 – Present",
      desc: "Developed and deployed AI-driven solutions using Azure OpenAI, enhancing employee onboarding and ensuring IT security policy adherence.",
      descBullets: [
        "Led the development of AI solutions, improving operational efficiency.",
        "Built scalable backend systems and ensured seamless integration with existing infrastructure.",
        "Collaborated with cross-functional teams to gather requirements and design solutions.",
        "Conducted comprehensive testing and debugging to ensure high-quality performance.",
        "Enhanced data security measures within AI applications to protect sensitive information."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS IN WHICH I DEVELOPED ADVANCED AI AND CHATBOT SOLUTIONS",
  projects: [
    {
      // image: require("./assets/images/hrOnboardingBot.png"), // Ensure you have the logo/image in the specified path
      projectName: "HR Onboarding Bot",
      projectDesc: "Developed an automated system to streamline the HR onboarding process, enhancing new employee experience and operational efficiency.",
      footerLink: [
        {
          name: "View Project",
          url: "http://your-project-url.com" // Replace with actual project URL if available
        }
        // You can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/internalGPT.png"), // Ensure you have the logo/image in the specified path
      projectName: "Internal GPT Assistant",
      projectDesc: "Created an AI-powered assistant to facilitate user queries on various company policies, using Azure OpenAI's LLM for accurate and real-time responses.",
      footerLink: [
        {
          name: "View Project",
          url: "http://your-project-url.com" // Replace with actual project URL if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Operationalizing LLMs on Azure",
      subtitle: "Completed certification on deploying and managing Large Language Models (LLMs) on Azure.",
      image: require("./assets/images/coursera-logo.png"), // Ensure you have the logo/image in the specified path
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/MCWRK77C67M9" // Replace with the actual URL of your certification
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@akshay_raut/llm-introduction-and-guide-to-develop-applications-5ba0b238f894",
      title: "LLM: Introduction and Guide to Develop Applications",
      description: "This guide aims to understand the core technologies essential for building applications powered by Large Language Models (LLMs). Suitable for developers and machine learning specialists."
    },
    {
      url: "https://medium.com/@akshay_raut/langchain-with-azure-openai-5d5f424089dc",
      title: "Langchain with Azure OpenAI",
      description: "Master Langchain and Azure OpenAI — Build a real-time application with hands-on creation of a real-time app. Stay with me on this practical learning journey!"
    },
    {
      url: "https://medium.com/@akshay_raut/prompt-templates-with-azure-openai-23bab0c64a4e",
      title: "Prompt Templates with Azure OpenAI",
      description: "Explore the power of prompt engineering with Azure OpenAI. Learn how to use prompt templates to guide LLM responses effectively and efficiently."
    },
    {
      url: "https://medium.com/@akshay_raut/user-crud-operations-image-upload-in-fastapi-with-mongodb-1538e82e819a",
      title: "User CRUD Operations + Image Upload in FastAPI with MongoDB",
      description: "Learn how to do CRUD operations in FastAPI app using PyMongo and Pydantic package, including image upload functionality."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in hiring me? Let's connect and discuss how I can contribute to your team!",
  number: "+91-9689304058",
  email_address: "akshayrautg@gmail.com"
};

// Twitter Section 

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
