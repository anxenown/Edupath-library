"use client";

import React, { useState, useEffect } from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface RoadmapStep {
  title: string;
  description: string;
  subSteps?: string[];
}

interface CareerData {
  name: string;
  roadmap: RoadmapStep[];
  bookKeywords: string;
}

const careers: CareerData[] = [
  {
    name: "Software Engineer",
    roadmap: [
      {
        title: "Learn Programming Basics",
        description:
          "Master fundamental concepts like variables, loops, and functions.",
        subSteps: [
          "Study JavaScript or Python",
          "Practice with simple projects like calculators",
        ],
      },
      {
        title: "Data Structures & Algorithms",
        description: "Understand arrays, trees, and sorting techniques.",
        subSteps: ["Solve problems on LeetCode", "Implement linked lists"],
      },
      {
        title: "Build Projects",
        description: "Create a portfolio with real-world apps.",
        subSteps: ["Develop a full-stack web app", "Contribute to open source"],
      },
    ],
    bookKeywords: "software engineering introduction",
  },
  {
    name: "Data Scientist",
    roadmap: [
      {
        title: "Mathematics Foundations",
        description: "Focus on statistics, linear algebra, and probability.",
        subSteps: ["Review calculus basics", "Learn hypothesis testing"],
      },
      {
        title: "Programming & Tools",
        description:
          "Get comfortable with Python/R and libraries like Pandas, NumPy.",
        subSteps: ["Analyze datasets on Kaggle", "Build data pipelines"],
      },
      {
        title: "Machine Learning",
        description: "Dive into models, evaluation, and deployment.",
        subSteps: [
          "Train neural networks with TensorFlow",
          "Create a predictive model",
        ],
      },
    ],
    bookKeywords: "data science beginner",
  },
  {
    name: "Product Manager",
    roadmap: [
      {
        title: "Understand Product Lifecycle",
        description: "Learn ideation, development, and launch phases.",
        subSteps: ["Study Agile/Scrum methodologies", "Analyze case studies"],
      },
      {
        title: "User Research & Analytics",
        description: "Gather insights and measure success.",
        subSteps: [
          "Conduct user interviews",
          "Use tools like Google Analytics",
        ],
      },
      {
        title: "Stakeholder Management",
        description: "Collaborate with teams and prioritize features.",
        subSteps: ["Practice roadmapping", "Simulate prioritization exercises"],
      },
    ],
    bookKeywords: "product management essentials",
  },
  {
    name: "Doctor",
    roadmap: [
      {
        title: "Complete Premedical Education",
        description: "Earn a bachelor’s degree with a focus on sciences.",
        subSteps: [
          "Take courses in biology, chemistry, and physics",
          "Maintain a high GPA",
        ],
      },
      {
        title: "Attend Medical School",
        description: "Complete a 4-year medical degree program.",
        subSteps: ["Pass the MCAT", "Apply to accredited medical schools"],
      },
      {
        title: "Residency and Licensing",
        description: "Gain hands-on experience and obtain a medical license.",
        subSteps: ["Complete residency program", "Pass USMLE exams"],
      },
    ],
    bookKeywords: "medical school preparation",
  },
  {
    name: "Lawyer",
    roadmap: [
      {
        title: "Earn a Bachelor’s Degree",
        description: "Complete an undergraduate degree in any field.",
        subSteps: [
          "Focus on critical thinking and writing",
          "Take LSAT prep courses",
        ],
      },
      {
        title: "Attend Law School",
        description: "Obtain a Juris Doctor (JD) degree.",
        subSteps: ["Pass the LSAT", "Apply to law schools"],
      },
      {
        title: "Pass the Bar Exam",
        description: "Become licensed to practice law.",
        subSteps: [
          "Study for the bar exam",
          "Gain practical experience through internships",
        ],
      },
    ],
    bookKeywords: "law school guide",
  },
  {
    name: "Teacher",
    roadmap: [
      {
        title: "Obtain a Bachelor’s Degree",
        description: "Earn a degree in education or a specific subject.",
        subSteps: ["Take education courses", "Focus on subject specialization"],
      },
      {
        title: "Complete Teacher Training",
        description: "Gain hands-on teaching experience.",
        subSteps: [
          "Participate in student teaching",
          "Earn a teaching credential",
        ],
      },
      {
        title: "Obtain Certification",
        description: "Meet state requirements for teaching.",
        subSteps: ["Pass certification exams", "Apply for a teaching license"],
      },
    ],
    bookKeywords: "teaching fundamentals",
  },
  {
    name: "Chef",
    roadmap: [
      {
        title: "Learn Culinary Basics",
        description: "Master cooking techniques and food safety.",
        subSteps: ["Enroll in culinary school", "Practice basic recipes"],
      },
      {
        title: "Gain Kitchen Experience",
        description: "Work in professional kitchens to build skills.",
        subSteps: ["Start as a prep cook", "Learn from experienced chefs"],
      },
      {
        title: "Specialize and Innovate",
        description: "Develop a signature style or cuisine.",
        subSteps: ["Experiment with recipes", "Pursue advanced certifications"],
      },
    ],
    bookKeywords: "culinary arts basics",
  },
  {
    name: "Pilot",
    roadmap: [
      {
        title: "Earn a Private Pilot License",
        description: "Learn the basics of flying an aircraft.",
        subSteps: ["Enroll in flight school", "Log 40+ hours of flight time"],
      },
      {
        title: "Obtain Commercial Pilot License",
        description: "Qualify for paid flying jobs.",
        subSteps: ["Complete 250+ flight hours", "Pass FAA exams"],
      },
      {
        title: "Build Flight Experience",
        description: "Work toward an Airline Transport Pilot license.",
        subSteps: ["Fly as a flight instructor", "Log 1,500 hours for ATP"],
      },
    ],
    bookKeywords: "aviation pilot training",
  },
  {
    name: "Architect",
    roadmap: [
      {
        title: "Earn an Architecture Degree",
        description: "Complete a professional degree in architecture.",
        subSteps: [
          "Enroll in a NAAB-accredited program",
          "Study design and drafting",
        ],
      },
      {
        title: "Complete Internship",
        description: "Gain practical experience under licensed architects.",
        subSteps: ["Join AXP program", "Work on real projects"],
      },
      {
        title: "Obtain Licensure",
        description: "Pass the Architect Registration Examination.",
        subSteps: ["Study for ARE exams", "Apply for state licensure"],
      },
    ],
    bookKeywords: "architecture fundamentals",
  },
  {
    name: "Graphic Designer",
    roadmap: [
      {
        title: "Learn Design Fundamentals",
        description: "Master color theory, typography, and layout.",
        subSteps: [
          "Study Adobe Photoshop and Illustrator",
          "Practice basic designs",
        ],
      },
      {
        title: "Build a Portfolio",
        description: "Showcase your best design work.",
        subSteps: ["Create mock branding projects", "Design logos and posters"],
      },
      {
        title: "Gain Professional Experience",
        description: "Work on freelance or agency projects.",
        subSteps: ["Apply for internships", "Network with designers"],
      },
    ],
    bookKeywords: "graphic design basics",
  },
  {
    name: "Nurse",
    roadmap: [
      {
        title: "Earn a Nursing Degree",
        description: "Complete a BSN or ADN program.",
        subSteps: [
          "Take prerequisite science courses",
          "Apply to nursing schools",
        ],
      },
      {
        title: "Pass NCLEX-RN",
        description: "Obtain licensure as a registered nurse.",
        subSteps: ["Study for NCLEX exam", "Practice clinical skills"],
      },
      {
        title: "Gain Clinical Experience",
        description: "Work in healthcare settings to build expertise.",
        subSteps: [
          "Start in a hospital or clinic",
          "Pursue specialty certifications",
        ],
      },
    ],
    bookKeywords: "nursing essentials",
  },
  {
    name: "Accountant",
    roadmap: [
      {
        title: "Earn a Bachelor’s Degree",
        description: "Study accounting or a related field.",
        subSteps: [
          "Take courses in finance and auditing",
          "Maintain a strong GPA",
        ],
      },
      {
        title: "Obtain CPA Certification",
        description: "Become a Certified Public Accountant.",
        subSteps: ["Meet 150 credit hours requirement", "Pass CPA exam"],
      },
      {
        title: "Gain Professional Experience",
        description: "Work in accounting firms or corporate finance.",
        subSteps: [
          "Start as a junior accountant",
          "Specialize in tax or audit",
        ],
      },
    ],
    bookKeywords: "accounting principles",
  },
  {
    name: "Marketing Manager",
    roadmap: [
      {
        title: "Learn Marketing Basics",
        description: "Understand branding, advertising, and market research.",
        subSteps: ["Study marketing principles", "Analyze case studies"],
      },
      {
        title: "Gain Digital Marketing Skills",
        description: "Master SEO, social media, and analytics.",
        subSteps: ["Learn Google Ads", "Practice content creation"],
      },
      {
        title: "Lead Marketing Campaigns",
        description: "Manage and measure marketing strategies.",
        subSteps: ["Run a campaign", "Use tools like HubSpot"],
      },
    ],
    bookKeywords: "marketing management",
  },
  {
    name: "Civil Engineer",
    roadmap: [
      {
        title: "Earn a Civil Engineering Degree",
        description: "Complete a bachelor’s degree in civil engineering.",
        subSteps: ["Study structural analysis", "Take surveying courses"],
      },
      {
        title: "Gain Field Experience",
        description: "Work on infrastructure projects.",
        subSteps: ["Intern at a construction firm", "Learn AutoCAD"],
      },
      {
        title: "Obtain PE License",
        description: "Become a Professional Engineer.",
        subSteps: ["Pass FE exam", "Complete 4 years of experience"],
      },
    ],
    bookKeywords: "civil engineering fundamentals",
  },
  {
    name: "Mechanical Engineer",
    roadmap: [
      {
        title: "Earn a Mechanical Engineering Degree",
        description: "Study mechanics, thermodynamics, and materials.",
        subSteps: ["Take physics and math courses", "Learn CAD software"],
      },
      {
        title: "Gain Practical Experience",
        description: "Work on mechanical design projects.",
        subSteps: ["Intern at a manufacturing firm", "Build prototypes"],
      },
      {
        title: "Obtain PE License",
        description: "Become a licensed Professional Engineer.",
        subSteps: ["Pass FE exam", "Complete 4 years of experience"],
      },
    ],
    bookKeywords: "mechanical engineering basics",
  },
  {
    name: "Electrical Engineer",
    roadmap: [
      {
        title: "Earn an Electrical Engineering Degree",
        description: "Study circuits, electronics, and power systems.",
        subSteps: ["Take physics and math courses", "Learn circuit design"],
      },
      {
        title: "Gain Practical Experience",
        description: "Work on electrical systems and projects.",
        subSteps: ["Intern at an engineering firm", "Use simulation software"],
      },
      {
        title: "Obtain PE License",
        description: "Become a licensed Professional Engineer.",
        subSteps: ["Pass FE exam", "Complete 4 years of experience"],
      },
    ],
    bookKeywords: "electrical engineering fundamentals",
  },
  {
    name: "Psychologist",
    roadmap: [
      {
        title: "Earn a Psychology Degree",
        description: "Study human behavior and research methods.",
        subSteps: ["Take courses in cognitive psychology", "Learn statistics"],
      },
      {
        title: "Pursue Graduate Studies",
        description: "Obtain a master’s or doctorate in psychology.",
        subSteps: ["Apply to graduate programs", "Conduct research"],
      },
      {
        title: "Obtain Licensure",
        description: "Become a licensed psychologist.",
        subSteps: ["Complete supervised hours", "Pass EPPP exam"],
      },
    ],
    bookKeywords: "psychology introduction",
  },
  {
    name: "Journalist",
    roadmap: [
      {
        title: "Earn a Journalism Degree",
        description: "Learn reporting, writing, and ethics.",
        subSteps: ["Study media law", "Practice news writing"],
      },
      {
        title: "Build a Portfolio",
        description: "Publish articles to showcase your work.",
        subSteps: ["Write for local publications", "Start a blog"],
      },
      {
        title: "Gain Professional Experience",
        description: "Work for news outlets or media companies.",
        subSteps: ["Intern at a newsroom", "Network with journalists"],
      },
    ],
    bookKeywords: "journalism basics",
  },
  {
    name: "Actor",
    roadmap: [
      {
        title: "Develop Acting Skills",
        description: "Take acting classes to learn techniques.",
        subSteps: ["Join a theater group", "Study method acting"],
      },
      {
        title: "Build a Portfolio",
        description: "Create a reel of your performances.",
        subSteps: ["Audition for local plays", "Record monologues"],
      },
      {
        title: "Secure Representation",
        description: "Work with an agent to find roles.",
        subSteps: ["Attend casting calls", "Network in the industry"],
      },
    ],
    bookKeywords: "acting techniques",
  },
  {
    name: "Musician",
    roadmap: [
      {
        title: "Learn an Instrument",
        description: "Master playing one or more instruments.",
        subSteps: ["Take music lessons", "Practice daily"],
      },
      {
        title: "Study Music Theory",
        description: "Understand scales, chords, and composition.",
        subSteps: ["Enroll in music theory classes", "Analyze songs"],
      },
      {
        title: "Perform and Record",
        description: "Build a fanbase and portfolio.",
        subSteps: ["Play at local venues", "Record original music"],
      },
    ],
    bookKeywords: "music theory basics",
  },
  {
    name: "Writer",
    roadmap: [
      {
        title: "Develop Writing Skills",
        description: "Practice creative and technical writing.",
        subSteps: ["Take writing workshops", "Write short stories"],
      },
      {
        title: "Build a Portfolio",
        description: "Publish articles, stories, or books.",
        subSteps: ["Submit to literary magazines", "Start a blog"],
      },
      {
        title: "Pursue Publishing Opportunities",
        description: "Work with editors or self-publish.",
        subSteps: [
          "Query literary agents",
          "Explore self-publishing platforms",
        ],
      },
    ],
    bookKeywords: "creative writing guide",
  },
  {
    name: "Photographer",
    roadmap: [
      {
        title: "Learn Photography Basics",
        description: "Master camera settings and composition.",
        subSteps: ["Study exposure and lighting", "Practice with a DSLR"],
      },
      {
        title: "Build a Portfolio",
        description: "Showcase your best photographs.",
        subSteps: ["Shoot diverse subjects", "Create a website"],
      },
      {
        title: "Gain Professional Experience",
        description: "Work on paid photography projects.",
        subSteps: ["Offer freelance services", "Network with clients"],
      },
    ],
    bookKeywords: "photography fundamentals",
  },
  {
    name: "Veterinarian",
    roadmap: [
      {
        title: "Earn a Veterinary Degree",
        description: "Complete a Doctor of Veterinary Medicine program.",
        subSteps: ["Take pre-vet courses", "Apply to veterinary schools"],
      },
      {
        title: "Gain Clinical Experience",
        description: "Work with animals in veterinary settings.",
        subSteps: ["Intern at a vet clinic", "Volunteer at shelters"],
      },
      {
        title: "Obtain Licensure",
        description: "Become a licensed veterinarian.",
        subSteps: ["Pass NAVLE exam", "Apply for state licensure"],
      },
    ],
    bookKeywords: "veterinary medicine basics",
  },
  {
    name: "Dentist",
    roadmap: [
      {
        title: "Earn a Dental Degree",
        description: "Complete a Doctor of Dental Surgery or Medicine program.",
        subSteps: ["Take pre-dental courses", "Pass DAT exam"],
      },
      {
        title: "Gain Clinical Experience",
        description: "Work in dental clinics to build skills.",
        subSteps: ["Shadow a dentist", "Practice dental procedures"],
      },
      {
        title: "Obtain Licensure",
        description: "Become a licensed dentist.",
        subSteps: ["Pass NBDE exams", "Apply for state licensure"],
      },
    ],
    bookKeywords: "dentistry fundamentals",
  },
  {
    name: "Pharmacist",
    roadmap: [
      {
        title: "Earn a Pharmacy Degree",
        description: "Complete a Doctor of Pharmacy (PharmD) program.",
        subSteps: ["Take pre-pharmacy courses", "Pass PCAT exam"],
      },
      {
        title: "Gain Clinical Experience",
        description: "Work in pharmacies or healthcare settings.",
        subSteps: ["Intern at a pharmacy", "Learn drug interactions"],
      },
      {
        title: "Obtain Licensure",
        description: "Become a licensed pharmacist.",
        subSteps: ["Pass NAPLEX exam", "Complete state requirements"],
      },
    ],
    bookKeywords: "pharmacy essentials",
  },
  {
    name: "Police Officer",
    roadmap: [
      {
        title: "Complete Basic Education",
        description: "Earn a high school diploma or associate’s degree.",
        subSteps: ["Study criminal justice", "Maintain physical fitness"],
      },
      {
        title: "Attend Police Academy",
        description: "Complete law enforcement training.",
        subSteps: ["Pass entrance exams", "Learn defensive tactics"],
      },
      {
        title: "Gain Field Experience",
        description: "Work as a patrol officer to build skills.",
        subSteps: ["Join a police department", "Complete probationary period"],
      },
    ],
    bookKeywords: "law enforcement basics",
  },
  {
    name: "Firefighter",
    roadmap: [
      {
        title: "Complete Basic Education",
        description: "Earn a high school diploma or associate’s degree.",
        subSteps: ["Study fire science", "Maintain physical fitness"],
      },
      {
        title: "Attend Fire Academy",
        description: "Complete firefighter training.",
        subSteps: ["Pass CPAT exam", "Learn firefighting techniques"],
      },
      {
        title: "Gain Field Experience",
        description: "Work as a firefighter to build expertise.",
        subSteps: ["Join a fire department", "Complete probationary period"],
      },
    ],
    bookKeywords: "firefighting fundamentals",
  },
  {
    name: "Entrepreneur",
    roadmap: [
      {
        title: "Develop a Business Idea",
        description: "Identify a market need and create a plan.",
        subSteps: ["Conduct market research", "Write a business plan"],
      },
      {
        title: "Secure Funding",
        description: "Raise capital to start your business.",
        subSteps: ["Pitch to investors", "Explore crowdfunding"],
      },
      {
        title: "Launch and Grow",
        description: "Build and scale your business.",
        subSteps: ["Develop a product", "Market to customers"],
      },
    ],
    bookKeywords: "entrepreneurship guide",
  },
  {
    name: "Financial Advisor",
    roadmap: [
      {
        title: "Earn a Finance Degree",
        description: "Study finance, economics, or business.",
        subSteps: ["Take investment courses", "Learn financial planning"],
      },
      {
        title: "Obtain Certifications",
        description: "Earn CFP or CFA credentials.",
        subSteps: ["Study for CFP exam", "Gain work experience"],
      },
      {
        title: "Build Client Base",
        description: "Work with clients to manage finances.",
        subSteps: ["Intern at a financial firm", "Network with clients"],
      },
    ],
    bookKeywords: "financial planning basics",
  },
  {
    name: "Human Resources Manager",
    roadmap: [
      {
        title: "Earn an HR Degree",
        description: "Study human resources or business administration.",
        subSteps: ["Take HR management courses", "Learn labor laws"],
      },
      {
        title: "Gain HR Experience",
        description: "Work in HR roles to build expertise.",
        subSteps: ["Start as an HR assistant", "Learn payroll systems"],
      },
      {
        title: "Obtain Certifications",
        description: "Earn PHR or SHRM-CP credentials.",
        subSteps: ["Study for certification exams", "Join HR networks"],
      },
    ],
    bookKeywords: "human resources management",
  },
  {
    name: "Sales Manager",
    roadmap: [
      {
        title: "Learn Sales Techniques",
        description: "Master selling strategies and customer relations.",
        subSteps: ["Study sales psychology", "Practice cold calling"],
      },
      {
        title: "Gain Sales Experience",
        description: "Work in sales roles to build skills.",
        subSteps: ["Start as a sales representative", "Meet sales targets"],
      },
      {
        title: "Lead a Sales Team",
        description: "Manage and motivate a sales team.",
        subSteps: ["Develop leadership skills", "Use CRM tools"],
      },
    ],
    bookKeywords: "sales management",
  },
  {
    name: "Operations Manager",
    roadmap: [
      {
        title: "Earn a Business Degree",
        description: "Study operations management or business.",
        subSteps: ["Take supply chain courses", "Learn process optimization"],
      },
      {
        title: "Gain Operational Experience",
        description: "Work in operations or logistics roles.",
        subSteps: ["Start as a coordinator", "Learn ERP systems"],
      },
      {
        title: "Develop Leadership Skills",
        description: "Manage teams and projects.",
        subSteps: [
          "Lead process improvements",
          "Earn certifications like Six Sigma",
        ],
      },
    ],
    bookKeywords: "operations management",
  },
  {
    name: "Web Developer",
    roadmap: [
      {
        title: "Learn Web Development Basics",
        description: "Master HTML, CSS, and JavaScript.",
        subSteps: ["Build simple websites", "Study responsive design"],
      },
      {
        title: "Explore Frameworks",
        description: "Learn React, Angular, or Vue.js.",
        subSteps: ["Build a dynamic web app", "Use version control like Git"],
      },
      {
        title: "Build a Portfolio",
        description: "Showcase your web projects.",
        subSteps: ["Deploy apps online", "Contribute to open source"],
      },
    ],
    bookKeywords: "web development beginner",
  },
  {
    name: "Mobile App Developer",
    roadmap: [
      {
        title: "Learn Mobile Development",
        description: "Master Swift for iOS or Kotlin for Android.",
        subSteps: ["Study mobile UI/UX", "Build simple apps"],
      },
      {
        title: "Explore Frameworks",
        description: "Learn Flutter or React Native for cross-platform apps.",
        subSteps: ["Build a cross-platform app", "Use APIs"],
      },
      {
        title: "Publish Apps",
        description: "Release apps on App Store or Google Play.",
        subSteps: ["Test apps thoroughly", "Create a developer portfolio"],
      },
    ],
    bookKeywords: "mobile app development",
  },
  {
    name: "UX/UI Designer",
    roadmap: [
      {
        title: "Learn Design Principles",
        description: "Study user experience and interface design.",
        subSteps: ["Master Figma or Sketch", "Learn usability testing"],
      },
      {
        title: "Build a Portfolio",
        description: "Create mockups and prototypes.",
        subSteps: ["Design app interfaces", "Conduct user research"],
      },
      {
        title: "Gain Professional Experience",
        description: "Work on real-world UX/UI projects.",
        subSteps: ["Intern at a tech company", "Collaborate with developers"],
      },
    ],
    bookKeywords: "ux ui design basics",
  },
  {
    name: "Data Analyst",
    roadmap: [
      {
        title: "Learn Data Analysis Tools",
        description: "Master Excel, SQL, and Python.",
        subSteps: [
          "Practice data cleaning",
          "Learn visualization tools like Tableau",
        ],
      },
      {
        title: "Analyze Real Datasets",
        description: "Work on data projects to gain insights.",
        subSteps: ["Explore Kaggle datasets", "Create dashboards"],
      },
      {
        title: "Build a Portfolio",
        description: "Showcase your data analysis projects.",
        subSteps: ["Publish reports", "Share insights on LinkedIn"],
      },
    ],
    bookKeywords: "data analysis beginner",
  },
  {
    name: "AI Engineer",
    roadmap: [
      {
        title: "Learn AI Fundamentals",
        description: "Study machine learning and neural networks.",
        subSteps: ["Take AI courses", "Learn Python libraries like TensorFlow"],
      },
      {
        title: "Build AI Models",
        description: "Create and deploy AI projects.",
        subSteps: ["Train models on datasets", "Use cloud platforms like AWS"],
      },
      {
        title: "Gain Industry Experience",
        description: "Work on AI-driven projects.",
        subSteps: ["Contribute to AI research", "Intern at tech companies"],
      },
    ],
    bookKeywords: "artificial intelligence basics",
  },
  {
    name: "Cybersecurity Specialist",
    roadmap: [
      {
        title: "Learn Cybersecurity Basics",
        description: "Understand networks, encryption, and threats.",
        subSteps: ["Study networking protocols", "Learn ethical hacking"],
      },
      {
        title: "Earn Certifications",
        description: "Obtain CompTIA Security+ or CISSP.",
        subSteps: ["Practice penetration testing", "Study for exams"],
      },
      {
        title: "Gain Practical Experience",
        description: "Work on security projects or incident response.",
        subSteps: ["Join bug bounty programs", "Intern at a security firm"],
      },
    ],
    bookKeywords: "cybersecurity fundamentals",
  },
  {
    name: "Environmental Scientist",
    roadmap: [
      {
        title: "Earn an Environmental Science Degree",
        description: "Study ecology, geology, and environmental policy.",
        subSteps: ["Take biology and chemistry courses", "Learn GIS tools"],
      },
      {
        title: "Conduct Field Research",
        description: "Work on environmental projects or studies.",
        subSteps: ["Intern with environmental agencies", "Analyze ecosystems"],
      },
      {
        title: "Pursue Certifications",
        description: "Earn credentials like LEED or CES.",
        subSteps: [
          "Study for certification exams",
          "Join environmental organizations",
        ],
      },
    ],
    bookKeywords: "environmental science introduction",
  },
  {
    name: "Biologist",
    roadmap: [
      {
        title: "Earn a Biology Degree",
        description: "Study cellular biology, genetics, and ecology.",
        subSteps: ["Take lab-based courses", "Learn microscopy techniques"],
      },
      {
        title: "Conduct Research",
        description: "Work on biological experiments or studies.",
        subSteps: ["Join a research lab", "Publish findings"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "biology fundamentals",
  },
  {
    name: "Chemist",
    roadmap: [
      {
        title: "Earn a Chemistry Degree",
        description: "Study organic, inorganic, and physical chemistry.",
        subSteps: ["Take lab-based courses", "Learn spectroscopy"],
      },
      {
        title: "Conduct Research",
        description: "Work on chemical experiments or projects.",
        subSteps: ["Join a research lab", "Publish findings"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "chemistry basics",
  },
  {
    name: "Physicist",
    roadmap: [
      {
        title: "Earn a Physics Degree",
        description: "Study mechanics, quantum physics, and relativity.",
        subSteps: [
          "Take advanced math courses",
          "Learn experimental techniques",
        ],
      },
      {
        title: "Conduct Research",
        description: "Work on physics experiments or theoretical models.",
        subSteps: ["Join a research lab", "Publish findings"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "physics introduction",
  },
  {
    name: "Mathematician",
    roadmap: [
      {
        title: "Earn a Mathematics Degree",
        description: "Study algebra, calculus, and statistics.",
        subSteps: ["Take advanced math courses", "Learn proof techniques"],
      },
      {
        title: "Conduct Research",
        description: "Work on mathematical problems or models.",
        subSteps: ["Join a research group", "Publish papers"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "mathematics fundamentals",
  },
  {
    name: "Economist",
    roadmap: [
      {
        title: "Earn an Economics Degree",
        description: "Study microeconomics, macroeconomics, and econometrics.",
        subSteps: ["Take statistics courses", "Learn economic modeling"],
      },
      {
        title: "Conduct Research",
        description: "Analyze economic data and trends.",
        subSteps: ["Work on economic studies", "Use software like Stata"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "economics introduction",
  },
  {
    name: "Sociologist",
    roadmap: [
      {
        title: "Earn a Sociology Degree",
        description: "Study social behavior, culture, and institutions.",
        subSteps: [
          "Take research methods courses",
          "Learn qualitative analysis",
        ],
      },
      {
        title: "Conduct Research",
        description: "Work on sociological studies or surveys.",
        subSteps: ["Join a research project", "Publish findings"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "sociology basics",
  },
  {
    name: "Historian",
    roadmap: [
      {
        title: "Earn a History Degree",
        description: "Study historical events, periods, and research methods.",
        subSteps: [
          "Take archival research courses",
          "Learn historical analysis",
        ],
      },
      {
        title: "Conduct Research",
        description: "Work on historical studies or publications.",
        subSteps: ["Visit archives", "Publish papers"],
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master’s or PhD for specialized roles.",
        subSteps: ["Apply to graduate programs", "Focus on a specialty"],
      },
    ],
    bookKeywords: "history research methods",
  },
  {
    name: "Librarian",
    roadmap: [
      {
        title: "Earn a Library Science Degree",
        description: "Study information organization and management.",
        subSteps: ["Take cataloging courses", "Learn library systems"],
      },
      {
        title: "Gain Library Experience",
        description: "Work in libraries or archives.",
        subSteps: ["Volunteer at a library", "Learn digital archiving"],
      },
      {
        title: "Obtain MLIS Degree",
        description: "Earn a Master’s in Library and Information Science.",
        subSteps: ["Apply to MLIS programs", "Specialize in a library field"],
      },
    ],
    bookKeywords: "library science basics",
  },
  {
    name: "Social Worker",
    roadmap: [
      {
        title: "Earn a Social Work Degree",
        description: "Study social welfare and counseling techniques.",
        subSteps: ["Take psychology courses", "Learn case management"],
      },
      {
        title: "Gain Field Experience",
        description: "Work with communities or clients.",
        subSteps: [
          "Intern at a social service agency",
          "Practice client assessments",
        ],
      },
      {
        title: "Obtain Licensure",
        description: "Become a licensed social worker.",
        subSteps: ["Earn an MSW", "Pass ASWB exam"],
      },
    ],
    bookKeywords: "social work fundamentals",
  },
  {
    name: "Fitness Trainer",
    roadmap: [
      {
        title: "Learn Fitness Fundamentals",
        description: "Study exercise science and anatomy.",
        subSteps: ["Take kinesiology courses", "Learn workout planning"],
      },
      {
        title: "Earn Certifications",
        description: "Obtain credentials like NASM or ACE.",
        subSteps: [
          "Study for certification exams",
          "Practice training techniques",
        ],
      },
      {
        title: "Build a Client Base",
        description: "Work with clients to achieve fitness goals.",
        subSteps: ["Offer personal training", "Market services online"],
      },
    ],
    bookKeywords: "fitness training basics",
  },
  {
    name: "Nutritionist",
    roadmap: [
      {
        title: "Earn a Nutrition Degree",
        description: "Study dietetics and human nutrition.",
        subSteps: ["Take biochemistry courses", "Learn meal planning"],
      },
      {
        title: "Gain Practical Experience",
        description: "Work with clients or in healthcare settings.",
        subSteps: ["Intern at a clinic", "Create nutrition plans"],
      },
      {
        title: "Obtain Certifications",
        description: "Earn RD or CNS credentials.",
        subSteps: ["Pass RD exam", "Complete supervised practice"],
      },
    ],
    bookKeywords: "nutrition fundamentals",
  },
  {
    name: "Real Estate Agent",
    roadmap: [
      {
        title: "Complete Real Estate Education",
        description: "Take required pre-licensing courses.",
        subSteps: ["Study real estate law", "Learn property valuation"],
      },
      {
        title: "Obtain a License",
        description: "Pass the real estate licensing exam.",
        subSteps: ["Apply for a state license", "Join a brokerage"],
      },
      {
        title: "Build a Client Base",
        description: "Market properties and work with clients.",
        subSteps: ["Network with buyers", "Use MLS systems"],
      },
    ],
    bookKeywords: "real estate basics",
  },
  {
    name: "Travel Agent",
    roadmap: [
      {
        title: "Learn Travel Industry Basics",
        description: "Study travel planning and booking systems.",
        subSteps: ["Take travel agency courses", "Learn about destinations"],
      },
      {
        title: "Gain Industry Experience",
        description: "Work with clients to plan trips.",
        subSteps: ["Intern at a travel agency", "Use booking software"],
      },
      {
        title: "Obtain Certifications",
        description: "Earn credentials like CTA or CTC.",
        subSteps: ["Study for certification exams", "Build a client network"],
      },
    ],
    bookKeywords: "travel agent guide",
  },
  {
    name: "Event Planner",
    roadmap: [
      {
        title: "Learn Event Planning Basics",
        description: "Study logistics, budgeting, and vendor management.",
        subSteps: [
          "Take event management courses",
          "Learn contract negotiation",
        ],
      },
      {
        title: "Gain Practical Experience",
        description: "Work on events to build skills.",
        subSteps: ["Volunteer for local events", "Assist experienced planners"],
      },
      {
        title: "Build a Portfolio",
        description: "Showcase successful events.",
        subSteps: ["Plan small events", "Market services online"],
      },
    ],
    bookKeywords: "event planning basics",
  },
];

const CareerChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Welcome message on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "🎉 Yo, what's up? I'm your super-charged Career Advisor Bot, ready to launch you into your dream job! Spill the tea—what career are you vibing with? Say something like 'I’m pumped to be a software engineer' or 'What’s the deal with data science?' and I’ll drop an epic roadmap to get you there! 🚀",
          sender: "bot",
        },
      ]);
    }
  }, [isOpen]);

  // Normalize input for matching
  const normalizeInput = (text: string) => {
    return text
      .toLowerCase()
      .replace(
        /i (want to be|am interested in|like to learn|become a|tell me about)\s+/gi,
        ""
      )
      .replace(/[^a-z0-9\s]/g, "")
      .trim();
  };

  // Handle greetings and basic questions with engaging responses
  const handleGreetingOrBasicQuestion = (
    normalizedInput: string
  ): Message | null => {
    const greetings = [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ];
    const basicQuestions = [
      "what can you do",
      "help",
      "how are you",
      "who are you",
      "what is this",
    ];

    const words = normalizedInput.split(/\s+/);
    const isGreeting = greetings.some((g) => words.includes(g));
    const isBasicQuestion = basicQuestions.some((q) =>
      normalizedInput.includes(q.replace(/\s+/g, ""))
    );

    if (isGreeting) {
      const responses = [
        "Yo, hey there! 😎 Super excited to chat—wanna talk about your dream career? Drop something like 'software engineer' or 'data scientist' and let’s get this party started! 🎉",
        "Hello, future superstar! 🌟 What career’s got you buzzing? Tell me, like, 'I wanna be a product manager,' and I’ll hook you up with an awesome roadmap! 🚀",
        "Hey, what’s good? 😄 I’m all about helping you chase that dream job. Name a career, like 'coder' or 'data guru,' and I’ll map out your path to greatness!",
      ];
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
      };
    }

    if (isBasicQuestion) {
      const responses = [
        "I’m your Career Advisor Bot, here to sprinkle some career magic! ✨ I’ve got roadmaps for cool jobs like Software Engineer, Data Scientist, or even Chef! Just tell me what you’re into, like 'I’m curious about coding,' and I’ll serve up a plan hotter than a trending TikTok! 😎 What’s up next?",
        "Yo, I’m the bot to make your career dreams pop off! 🎯 I can guide you through paths like Pilot or Architect with killer steps and tips. Try saying 'data scientist roadmap' or just vibe with me—what’s your next move? 🚀",
        "What’s up? I’m your go-to pal for career advice! 😊 I can drop knowledge on jobs like Photographer or Nurse. Throw me a career idea, like 'tell me about event planning,' and I’ll hit you with a roadmap that slaps! 💥 Ready?",
      ];
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
      };
    }

    return null;
  };

  // Simple keyword-based career matching
  const findCareer = (input: string): CareerData | undefined => {
    const normalizedInput = normalizeInput(input);
    const keywords = normalizedInput.split(/\s+/);

    // Common aliases for careers
    const careerAliases: { [key: string]: string } = {
      coder: "Software Engineer",
      programmer: "Software Engineer",
      developer: "Software Engineer",
      "data science": "Data Scientist",
      "data analyst": "Data Scientist",
      "product management": "Product Manager",
      pm: "Product Manager",
      doc: "Doctor",
      physician: "Doctor",
      attorney: "Lawyer",
      educator: "Teacher",
      cook: "Chef",
      aviator: "Pilot",
      designer: "Graphic Designer",
      rn: "Nurse",
      cpa: "Accountant",
      marketer: "Marketing Manager",
      therapist: "Psychologist",
      reporter: "Journalist",
      performer: "Actor",
      vet: "Veterinarian",
      realtor: "Real Estate Agent",
    };

    // Find matching career
    for (const career of careers) {
      const careerNameLower = career.name.toLowerCase();
      // Check if any keyword matches career name or aliases
      for (const keyword of keywords) {
        if (
          careerNameLower.includes(keyword) ||
          careerAliases[keyword]?.toLowerCase() === careerNameLower
        ) {
          return career;
        }
      }
    }

    // Special handling for book-related queries
    if (
      keywords.some((k) =>
        ["book", "books", "harry", "potter", "sherlock", "holmes"].includes(k)
      )
    ) {
      return undefined; // Defer to book response
    }

    return undefined;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const normalizedInput = normalizeInput(input);
    let botResponse: Message;

    // Handle greetings or basic questions first
    const greetingResponse = handleGreetingOrBasicQuestion(normalizedInput);
    if (greetingResponse) {
      botResponse = greetingResponse;
    }
    // Check if user is asking about books
    else if (
      normalizedInput.includes("book") ||
      normalizedInput.includes("books") ||
      normalizedInput.includes("harry") ||
      normalizedInput.includes("sherlock")
    ) {
      const responses = [
        "Ooh, you’re diving into the book world, huh? 📚 I’m all about careers, but I love the enthusiasm! Try searching Google Books for faves like 'Harry Potter' or 'Sherlock Holmes.' Wanna pivot to a career path instead? Tell me something like 'I’m into coding' and I’ll drop a roadmap that’s pure fire! 🔥",
        "Books, huh? You’ve got great taste! 😎 I’m your career hype bot, so I can’t dish on 'Harry Potter' or 'Sherlock,' but I can hook you up with an epic career plan. Toss me a job idea like 'data scientist' or 'photographer,' and let’s make some career magic happen! ✨ What’s next?",
        "Whoa, a book lover! 📖 'Harry Potter' or 'Sherlock Holmes'? Awesome picks! I’m here to guide you on career adventures, though. Drop a career vibe like 'software engineer' or 'event planner,' and I’ll serve up a roadmap that’ll blow your mind! 🚀 Ready to explore?",
      ];
      botResponse = {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
      };
    } else {
      const detectedCareer = findCareer(input);

      if (detectedCareer) {
        const { name, roadmap } = detectedCareer;
        const intros = [
          `🚀 Heck yeah, ${name}! That’s an awesome choice! Let’s map out your journey to becoming a rockstar ${name} with this killer roadmap:\n\n`,
          `🎉 Woohoo, you’re aiming to be a ${name}? That’s the spirit! Here’s your ultimate guide to crushing it in ${name}:\n\n`,
          `🔥 ${name}, huh? You’re about to embark on an epic adventure! Check out this roadmap to dominate as a ${name}:\n\n`,
        ];
        let responseText = intros[Math.floor(Math.random() * intros.length)];
        roadmap.forEach((step, index) => {
          responseText += `**${index + 1}. ${step.title}**: ${
            step.description
          }\n`;
          if (step.subSteps) {
            responseText += `- ${step.subSteps.join("\n- ")}\n`;
          }
          responseText += "\n";
        });
        const closers = [
          `So, what’s the vibe? Wanna dig deeper into any of these steps for ${name}? Or maybe explore another career? I’m all ears… or rather, all text! 😎`,
          `Boom! That’s your path to ${name} glory! 🚀 Wanna zoom in on one of these steps or switch gears to another career? Hit me up!`,
          `There ya go—your ${name} roadmap is ready to roll! 🌟 Got a specific step you’re curious about, or wanna check out another job? Let’s keep the momentum going!`,
        ];
        responseText += closers[Math.floor(Math.random() * closers.length)];
        botResponse = { text: responseText, sender: "bot" };
      } else {
        const responses = [
          "🤔 Hmm, I’m picking up some static on that career choice! Could you clarify your dream job? Try something like 'software engineer,' 'data scientist,' or 'event planner,' and I’ll whip up a roadmap that’s straight-up legendary! 🚀 What’s your next move?",
          "😅 Whoops, my career radar’s a bit fuzzy! What job are you dreaming of? Say 'coder,' 'nurse,' or 'architect,' and I’ll drop a plan so epic it’ll blow your socks off! 🌟 What’s up?",
          "🤷‍♂️ Not quite sure which career you’re aiming for, but I’m pumped to help! Throw me a hint like 'photographer' or 'firefighter,' and I’ll hit you with a roadmap that’s pure gold! 💥 Ready to dive in?",
        ];
        botResponse = {
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "bot",
        };
      }
    }

    setMessages((prev) => [...prev, botResponse]);
    setIsLoading(false);
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50 transition-transform hover:scale-105"
        aria-label="Toggle chatbot"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chatbot Panel */}
      <div
        className={`fixed bottom-20 right-6 w-96 bg-gray-800 text-white shadow-xl rounded-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Career Advisor Bot</h2>
          <button
            onClick={toggleChat}
            className="text-gray-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Close chatbot"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-900">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg transition-all ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white ml-auto max-w-xs"
                  : "bg-gray-700 text-gray-100 mr-auto max-w-xs"
              }`}
            >
              <div className="prose prose-sm max-w-none prose-invert">
                {msg.text
                  .split("\n")
                  .map((line, i) =>
                    line ? <p key={i}>{line}</p> : <br key={i} />
                  )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Your career guru is cooking up something awesome! 🚀
            </div>
          )}
        </div>
        <form
          onSubmit={handleSendMessage}
          className="flex p-4 border-t border-gray-700"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Drop your dream career here! (e.g., 'software engineer')"
            className="flex-1 p-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            disabled={isLoading || !input.trim()}
          >
            Fire Away!
          </button>
        </form>
      </div>
    </>
  );
};

export default CareerChatBot;
