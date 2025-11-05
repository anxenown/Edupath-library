"use client";
import { useState, useEffect } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface SubStep {
  title: string;
  description: string;
}

interface RoadmapStep {
  title: string;
  description: string;
  subroadmap: SubStep[];
}

interface Career {
  name: string;
  roadmap: RoadmapStep[];
}

const careers: Career[] = [
  {
    name: "Software Engineer",
    roadmap: [
      {
        title: "Learn Fundamentals",
        description: "Study programming basics like variables, loops, and functions in languages like JavaScript or Python.",
        subroadmap: [
          { title: "Choose a Beginner-Friendly Language", description: "Select Python for its simplicity or JavaScript for web development; research pros and cons online." },
          { title: "Enroll in Introductory Courses", description: "Sign up for free platforms like Codecademy, Khan Academy, or Coursera's 'Python for Everybody'." },
          { title: "Practice Basic Syntax", description: "Write simple scripts to experiment with variables, data types, conditionals, and loops." },
          { title: "Solve Beginner Problems", description: "Use sites like HackerRank or LeetCode's easy section to apply fundamentals." },
          { title: "Read Documentation", description: "Familiarize yourself with official language docs to understand built-in functions." }
        ]
      },
      {
        title: "Master a Language",
        description: "Deep dive into TypeScript/JavaScript, including OOP, async programming, and frameworks like React.",
        subroadmap: [
          { title: "Study Advanced Concepts", description: "Learn object-oriented programming, closures, and prototypes in JavaScript." },
          { title: "Explore Asynchronous Programming", description: "Practice with Promises, async/await, and handling APIs." },
          { title: "Learn TypeScript Basics", description: "Convert JavaScript code to TypeScript, focusing on types and interfaces." },
          { title: "Dive into Frameworks", description: "Build small apps with React, understanding components, state, and props." },
          { title: "Work on Mini-Projects", description: "Create a weather app or chat interface to integrate concepts." }
        ]
      },
      {
        title: "Build Projects",
        description: "Create personal projects such as a todo app, blog, or full-stack application.",
        subroadmap: [
          { title: "Plan Project Scope", description: "Define features, user stories, and tech stack for your project." },
          { title: "Set Up Development Environment", description: "Install necessary tools like VS Code, Node.js, and databases." },
          { title: "Implement Core Features", description: "Code the main functionality, like CRUD operations for a todo app." },
          { title: "Add Styling and UI", description: "Use CSS or libraries like Bootstrap to make it visually appealing." },
          { title: "Deploy and Share", description: "Host on platforms like GitHub Pages or Vercel and get feedback." }
        ]
      },
      {
        title: "Learn Version Control",
        description: "Use Git and GitHub for code management and collaboration.",
        subroadmap: [
          { title: "Install Git", description: "Download and set up Git on your machine, configure user details." },
          { title: "Learn Basic Commands", description: "Master init, add, commit, push, pull, and branch." },
          { title: "Create a GitHub Account", description: "Sign up and create your first repository." },
          { title: "Practice Branching and Merging", description: "Work on feature branches and resolve merge conflicts." },
          { title: "Collaborate on Projects", description: "Fork repos, create pull requests, and review code." }
        ]
      },
      {
        title: "Understand Data Structures & Algorithms",
        description: "Study arrays, linked lists, trees, sorting, and searching algorithms.",
        subroadmap: [
          { title: "Study Basic Data Structures", description: "Learn arrays, stacks, queues, and linked lists with examples." },
          { title: "Explore Advanced Structures", description: "Dive into trees, graphs, hash tables, and their operations." },
          { title: "Learn Algorithms", description: "Understand sorting (bubble, quicksort), searching (binary), and recursion." },
          { title: "Practice Implementation", description: "Code data structures from scratch in your chosen language." },
          { title: "Solve Problems", description: "Use LeetCode or GeeksforGeeks to apply DS&A in challenges." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Contribute to open-source, internships, or freelance work.",
        subroadmap: [
          { title: "Find Open-Source Projects", description: "Search on GitHub for beginner-friendly repos with 'good first issue'." },
          { title: "Apply for Internships", description: "Update resume and apply via LinkedIn or company sites." },
          { title: "Start Freelancing", description: "Create profiles on Upwork or Fiverr, offer small coding services." },
          { title: "Network at Events", description: "Attend meetups, hackathons, or conferences to connect." },
          { title: "Document Contributions", description: "Build a portfolio showcasing your work and learnings." }
        ]
      },
      {
        title: "Prepare for Interviews",
        description: "Practice coding problems on LeetCode, HackerRank, and behavioral questions.",
        subroadmap: [
          { title: "Review DS&A", description: "Focus on medium-level problems and time complexity." },
          { title: "Practice Mock Interviews", description: "Use Pramp or Interviewing.io for simulated sessions." },
          { title: "Prepare Behavioral Answers", description: "Use STAR method for questions on experience and challenges." },
          { title: "Study System Design", description: "Learn basics of designing scalable systems." },
          { title: "Research Companies", description: "Tailor resume and prepare questions for specific roles." }
        ]
      }
    ]
  },
  {
    name: "Data Scientist",
    roadmap: [
      {
        title: "Learn Math & Stats",
        description: "Cover linear algebra, calculus, probability, and statistics.",
        subroadmap: [
          { title: "Study Linear Algebra", description: "Learn vectors, matrices, and eigenvalues via Khan Academy." },
          { title: "Master Calculus", description: "Cover derivatives, integrals, and multivariable calculus." },
          { title: "Understand Probability", description: "Study distributions, Bayes' theorem, and random variables." },
          { title: "Dive into Statistics", description: "Learn hypothesis testing, confidence intervals, and regression." },
          { title: "Apply Concepts", description: "Solve math problems on platforms like Brilliant.org." }
        ]
      },
      {
        title: "Programming Skills",
        description: "Master Python or R, including libraries like NumPy, Pandas, and Scikit-learn.",
        subroadmap: [
          { title: "Learn Python Basics", description: "Complete introductory courses on Python syntax and functions." },
          { title: "Explore Data Libraries", description: "Practice data manipulation with Pandas and arrays with NumPy." },
          { title: "Study Machine Learning Libs", description: "Use Scikit-learn for basic models like linear regression." },
          { title: "Build Simple Scripts", description: "Write code to analyze CSV files and compute stats." },
          { title: "Learn R if Chosen", description: "Focus on data frames and ggplot for visualization." }
        ]
      },
      {
        title: "Data Manipulation",
        description: "Learn SQL for databases and data wrangling techniques.",
        subroadmap: [
          { title: "Learn SQL Fundamentals", description: "Master SELECT, JOIN, GROUP BY on platforms like SQLZoo." },
          { title: "Practice Data Wrangling", description: "Use Pandas to clean, merge, and transform datasets." },
          { title: "Work with Databases", description: "Set up SQLite or PostgreSQL and query large data." },
          { title: "Handle Missing Data", description: "Learn imputation, outlier detection, and normalization." },
          { title: "Apply to Real Data", description: "Download datasets from Kaggle and preprocess them." }
        ]
      },
      {
        title: "Machine Learning",
        description: "Study supervised/unsupervised learning, neural networks, and tools like TensorFlow or PyTorch.",
        subroadmap: [
          { title: "Learn Supervised Learning", description: "Study regression, classification, and decision trees." },
          { title: "Explore Unsupervised Learning", description: "Cover clustering, PCA, and anomaly detection." },
          { title: "Introduction to Neural Networks", description: "Build simple feedforward networks." },
          { title: "Use Frameworks", description: "Train models with TensorFlow or PyTorch tutorials." },
          { title: "Evaluate Models", description: "Learn metrics like accuracy, precision, and cross-validation." }
        ]
      },
      {
        title: "Big Data Tools",
        description: "Get familiar with Hadoop, Spark, or cloud services like AWS/GCP.",
        subroadmap: [
          { title: "Understand Big Data Concepts", description: "Learn about distributed computing and MapReduce." },
          { title: "Install and Use Spark", description: "Set up PySpark and process large datasets." },
          { title: "Explore Cloud Platforms", description: "Create accounts on AWS or GCP, use S3 and EC2." },
          { title: "Practice with Datasets", description: "Run jobs on sample big data from public sources." },
          { title: "Learn Data Pipelines", description: "Build ETL processes using Airflow or similar." }
        ]
      },
      {
        title: "Visualization",
        description: "Use Matplotlib, Seaborn, or Tableau for data storytelling.",
        subroadmap: [
          { title: "Learn Matplotlib Basics", description: "Create plots like line, bar, and scatter charts." },
          { title: "Advance with Seaborn", description: "Use for statistical visualizations and heatmaps." },
          { title: "Explore Tableau", description: "Build interactive dashboards with free Tableau Public." },
          { title: "Practice Storytelling", description: "Create reports explaining insights from data." },
          { title: "Share Visuals", description: "Publish on GitHub or personal blogs." }
        ]
      },
      {
        title: "Projects & Portfolio",
        description: "Build models for real-world problems and showcase on GitHub/Kaggle.",
        subroadmap: [
          { title: "Select Project Ideas", description: "Choose problems like sentiment analysis or sales prediction." },
          { title: "Gather Data", description: "Use APIs or public datasets from UCI or Kaggle." },
          { title: "Build and Train Models", description: "Implement end-to-end ML pipelines." },
          { title: "Document Process", description: "Write READMEs with methods, results, and visualizations." },
          { title: "Share on Platforms", description: "Upload to GitHub and participate in Kaggle competitions." }
        ]
      }
    ]
  },
  {
    name: "Product Manager",
    roadmap: [
      {
        title: "Understand Business Basics",
        description: "Learn about market analysis, customer needs, and business models.",
        subroadmap: [
          { title: "Study Market Analysis", description: "Learn SWOT, PESTLE, and competitor research." },
          { title: "Explore Customer Needs", description: "Read books like 'The Mom Test' for validation." },
          { title: "Learn Business Models", description: "Understand canvas models and revenue streams." },
          { title: "Take Online Courses", description: "Enroll in Coursera's business fundamentals." },
          { title: "Apply to Case Studies", description: "Analyze real companies like Uber or Airbnb." }
        ]
      },
      {
        title: "Product Lifecycle",
        description: "Study ideation, development, launch, and iteration processes.",
        subroadmap: [
          { title: "Learn Ideation Techniques", description: "Practice brainstorming and mind mapping." },
          { title: "Understand Development Phases", description: "Study MVP building and prototyping." },
          { title: "Plan Launch Strategies", description: "Learn go-to-market plans and beta testing." },
          { title: "Master Iteration", description: "Use feedback loops and A/B testing." },
          { title: "Review Case Studies", description: "Examine product launches like iPhone." }
        ]
      },
      {
        title: "User Research",
        description: "Master interviews, surveys, and usability testing.",
        subroadmap: [
          { title: "Learn Interview Techniques", description: "Practice open-ended questions and active listening." },
          { title: "Design Surveys", description: "Use tools like Google Forms for quantitative data." },
          { title: "Conduct Usability Tests", description: "Set up sessions with tools like UserTesting." },
          { title: "Analyze Data", description: "Synthesize findings into personas and insights." },
          { title: "Practice on Projects", description: "Research for a hypothetical app." }
        ]
      },
      {
        title: "Agile/Scrum",
        description: "Get certified in Agile methodologies and tools like Jira or Trello.",
        subroadmap: [
          { title: "Study Agile Principles", description: "Read the Agile Manifesto and Scrum Guide." },
          { title: "Take Certification Course", description: "Enroll in Scrum Master cert on Scrum.org." },
          { title: "Learn Tools", description: "Set up boards in Jira or Trello for practice." },
          { title: "Simulate Sprints", description: "Run mock projects with daily standups." },
          { title: "Join Communities", description: "Participate in Agile forums or meetups." }
        ]
      },
      {
        title: "Technical Knowledge",
        description: "Gain basic understanding of software development and tech stacks.",
        subroadmap: [
          { title: "Learn Software Basics", description: "Understand SDLC and common languages." },
          { title: "Explore Tech Stacks", description: "Study MEAN/MERN or cloud services." },
          { title: "Take Intro Courses", description: "Complete free coding intros on freeCodeCamp." },
          { title: "Collaborate with Devs", description: "Shadow or discuss with engineers." },
          { title: "Build Simple Prototypes", description: "Use no-code tools like Bubble." }
        ]
      },
      {
        title: "Communication Skills",
        description: "Improve writing specs, presenting, and stakeholder management.",
        subroadmap: [
          { title: "Write Product Specs", description: "Practice PRDs with features and requirements." },
          { title: "Hone Presentation Skills", description: "Use Toastmasters or record pitches." },
          { title: "Learn Stakeholder Management", description: "Study negotiation and alignment techniques." },
          { title: "Practice Feedback", description: "Role-play meetings and reviews." },
          { title: "Read Resources", description: "Books like 'Inspired' by Marty Cagan." }
        ]
      },
      {
        title: "Build Experience",
        description: "Start as a PM intern, associate, or manage side projects.",
        subroadmap: [
          { title: "Apply for Internships", description: "Target tech companies via LinkedIn." },
          { title: "Manage Side Projects", description: "Lead open-source or personal apps." },
          { title: "Volunteer for Roles", description: "Help in clubs or startups as PM." },
          { title: "Build Portfolio", description: "Document experiences and outcomes." },
          { title: "Network", description: "Attend PM meetups and conferences." }
        ]
      }
    ]
  },
  {
    name: "Doctor",
    roadmap: [
      {
        title: "Complete Pre-Med Education",
        description: "Earn a bachelor's degree in biology, chemistry, or a related field with a strong GPA.",
        subroadmap: [
          { title: "Choose Major and Courses", description: "Select science-heavy major; take prerequisites like bio, chem, physics." },
          { title: "Maintain High GPA", description: "Study consistently and seek tutoring if needed." },
          { title: "Gain Extracurriculars", description: "Join pre-med clubs and volunteer in healthcare." },
          { title: "Research Opportunities", description: "Participate in lab work or projects." },
          { title: "Prepare for MCAT Early", description: "Review basics during undergrad." }
        ]
      },
      {
        title: "Take the MCAT",
        description: "Prepare and pass the Medical College Admission Test (MCAT).",
        subroadmap: [
          { title: "Study Plan", description: "Create a 3-6 month schedule with content review." },
          { title: "Use Resources", description: "Khan Academy, AAMC practice, and books like Kaplan." },
          { title: "Practice Exams", description: "Take full-length tests weekly." },
          { title: "Focus Weak Areas", description: "Analyze scores and drill sections." },
          { title: "Register and Take", description: "Schedule when ready; aim for 510+ score." }
        ]
      },
      {
        title: "Attend Medical School",
        description: "Complete a 4-year MD or DO program, including classroom and clinical training.",
        subroadmap: [
          { title: "Apply via AMCAS/AACOMAS", description: "Submit apps, essays, and letters." },
          { title: "Complete Years 1-2", description: "Focus on basic sciences and USMLE Step 1 prep." },
          { title: "Clinical Rotations Years 3-4", description: "Rotate through specialties." },
          { title: "Pass USMLE Step 2", description: "Prepare during rotations." },
          { title: "Apply for Residency", description: "Use ERAS system." }
        ]
      },
      {
        title: "Complete Residency",
        description: "Undergo 3-7 years of specialized training in a residency program.",
        subroadmap: [
          { title: "Match via NRMP", description: "Rank programs and match day." },
          { title: "Start Training", description: "Hands-on patient care under supervision." },
          { title: "Pass USMLE Step 3", description: "Take during first years." },
          { title: "Specialize Further", description: "Choose subspecialty if applicable." },
          { title: "Complete Program", description: "Fulfill all requirements and evaluations." }
        ]
      },
      {
        title: "Pass Licensing Exams",
        description: "Pass the USMLE or COMLEX exams to become licensed.",
        subroadmap: [
          { title: "Prepare for USMLE/COMLEX", description: "Use UWorld and First Aid books." },
          { title: "Schedule Exams", description: "Take Step 1 after basic sciences, Step 2 after rotations." },
          { title: "Practice Questions", description: "Do thousands of Q-bank questions." },
          { title: "Review Content", description: "Focus on high-yield topics." },
          { title: "Apply for License", description: "Submit scores to state board." }
        ]
      },
      {
        title: "Pursue Fellowship (Optional)",
        description: "Specialize further with 1-3 years of fellowship training.",
        subroadmap: [
          { title: "Choose Subspecialty", description: "Research fields like cardiology or oncology." },
          { title: "Apply to Programs", description: "Use fellowship match systems." },
          { title: "Complete Training", description: "Advanced clinical and research work." },
          { title: "Pass Subspecialty Boards", description: "Take additional exams." },
          { title: "Integrate into Practice", description: "Apply skills in career." }
        ]
      },
      {
        title: "Maintain Certification",
        description: "Engage in continuing medical education and board certifications.",
        subroadmap: [
          { title: "Earn Board Certification", description: "Pass specialty board exam post-residency." },
          { title: "Complete CME Credits", description: "Attend conferences, online courses annually." },
          { title: "Recertify Periodically", description: "Retake exams every 7-10 years." },
          { title: "Stay Updated", description: "Read journals and join professional societies." },
          { title: "Track Requirements", description: "Use apps or boards to log activities." }
        ]
      }
    ]
  },
  {
    name: "Lawyer",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete an undergraduate degree in any field, focusing on critical thinking and writing.",
        subroadmap: [
          { title: "Choose Relevant Major", description: "Opt for political science, English, or history." },
          { title: "Build Skills", description: "Take writing, logic, and debate courses." },
          { title: "Maintain High GPA", description: "Aim for 3.5+ for law school admissions." },
          { title: "Gain Extracurriculars", description: "Join mock trial or pre-law clubs." },
          { title: "Prepare for LSAT", description: "Start early review of logic games." }
        ]
      },
      {
        title: "Take the LSAT",
        description: "Prepare and pass the Law School Admission Test (LSAT).",
        subroadmap: [
          { title: "Create Study Plan", description: "3-6 months with daily practice." },
          { title: "Use Prep Materials", description: "Khan Academy LSAT, PowerScore books." },
          { title: "Practice Tests", description: "Take official past exams timed." },
          { title: "Focus on Sections", description: "Drill logical reasoning, reading comp." },
          { title: "Register and Take", description: "Aim for 160+ score." }
        ]
      },
      {
        title: "Attend Law School",
        description: "Complete a 3-year Juris Doctor (JD) program.",
        subroadmap: [
          { title: "Apply via LSAC", description: "Submit transcripts, essays, recommendations." },
          { title: "Complete 1L Year", description: "Core courses like contracts, torts." },
          { title: "Participate in Clinics", description: "Gain practical experience in 2L/3L." },
          { title: "Join Journals/Moot Court", description: "Build resume with extracurriculars." },
          { title: "Prepare for Bar", description: "Start review in final year." }
        ]
      },
      {
        title: "Pass the Bar Exam",
        description: "Study and pass the state bar exam to become licensed.",
        subroadmap: [
          { title: "Choose State", description: "Decide based on practice location." },
          { title: "Enroll in Bar Prep", description: "Use Barbri or Themis courses." },
          { title: "Study Intensively", description: "2-3 months full-time review." },
          { title: "Practice Essays/MBE", description: "Do thousands of multiple-choice and essays." },
          { title: "Take and Pass", description: "Register for July or February exam." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work as a clerk, intern, or associate in a law firm.",
        subroadmap: [
          { title: "Secure Internships", description: "Apply during law school summers." },
          { title: "Clerk for Judges", description: "Apply for judicial clerkships post-grad." },
          { title: "Join as Associate", description: "Start at firms or public sector." },
          { title: "Build Network", description: "Attend bar associations." },
          { title: "Handle Cases", description: "Gain courtroom or transactional experience." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on areas like criminal, corporate, or family law.",
        subroadmap: [
          { title: "Research Specialties", description: "Explore interests through electives." },
          { title: "Gain Relevant Experience", description: "Work in targeted practice areas." },
          { title: "Earn Certifications", description: "Pursue bar specialties if available." },
          { title: "Join Professional Groups", description: "Like ABA sections." },
          { title: "Build Expertise", description: "Publish articles or speak at events." }
        ]
      },
      {
        title: "Continue Education",
        description: "Stay updated with legal developments through CLE courses.",
        subroadmap: [
          { title: "Track State Requirements", description: "Know annual CLE credit needs." },
          { title: "Attend Seminars", description: "Online or in-person on new laws." },
          { title: "Read Legal Journals", description: "Subscribe to updates in your field." },
          { title: "Network at Events", description: "Conferences for credits and connections." },
          { title: "Renew License", description: "Submit CLE compliance periodically." }
        ]
      }
    ]
  },
  {
    name: "Teacher",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in education or a subject area with teaching certification.",
        subroadmap: [
          { title: "Choose Program", description: "Select education major or subject with cert track." },
          { title: "Take Core Courses", description: "Pedagogy, child development, curriculum." },
          { title: "Maintain GPA", description: "Aim for requirements for certification." },
          { title: "Gain Early Experience", description: "Volunteer in schools or tutor." },
          { title: "Prepare for Exams", description: "Study for Praxis or state tests early." }
        ]
      },
      {
        title: "Complete Student Teaching",
        description: "Gain hands-on experience through supervised teaching practicum.",
        subroadmap: [
          { title: "Apply for Placement", description: "Coordinate with university and schools." },
          { title: "Observe Classes", description: "Shadow mentor teacher initially." },
          { title: "Plan Lessons", description: "Create and deliver under supervision." },
          { title: "Receive Feedback", description: "Evaluate performance and adjust." },
          { title: "Document Experience", description: "Build portfolio of lessons." }
        ]
      },
      {
        title: "Pass Certification Exams",
        description: "Take and pass state-required exams like Praxis.",
        subroadmap: [
          { title: "Research Requirements", description: "Know specific tests for your state/subject." },
          { title: "Study Materials", description: "Use ETS resources and practice books." },
          { title: "Take Practice Tests", description: "Simulate exam conditions." },
          { title: "Focus on Weaknesses", description: "Drill content knowledge and pedagogy." },
          { title: "Register and Pass", description: "Schedule when prepared." }
        ]
      },
      {
        title: "Obtain Teaching License",
        description: "Apply for and receive state teaching certification.",
        subroadmap: [
          { title: "Gather Documents", description: "Transcripts, exam scores, background check." },
          { title: "Submit Application", description: "Via state education department." },
          { title: "Complete Fingerprinting", description: "For criminal background." },
          { title: "Pay Fees", description: "Cover application costs." },
          { title: "Receive License", description: "Initial or provisional cert." }
        ]
      },
      {
        title: "Gain Classroom Experience",
        description: "Start as a substitute or assistant teacher.",
        subroadmap: [
          { title: "Apply for Sub Positions", description: "Register with districts." },
          { title: "Work as Assistant", description: "Aid in classrooms for experience." },
          { title: "Manage Classroom", description: "Develop discipline and engagement skills." },
          { title: "Reflect on Lessons", description: "Journal successes and improvements." },
          { title: "Seek Full-Time Role", description: "Apply for permanent positions." }
        ]
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master's in education for specialization or advancement.",
        subroadmap: [
          { title: "Choose Program", description: "M.Ed in curriculum, leadership, etc." },
          { title: "Apply and Enroll", description: "Submit GRE if needed, recommendations." },
          { title: "Complete Coursework", description: "Online or in-person classes." },
          { title: "Thesis or Project", description: "Research in education topic." },
          { title: "Use for Career", description: "Qualify for higher pay or admin roles." }
        ]
      },
      {
        title: "Engage in Professional Development",
        description: "Attend workshops and continue learning new teaching methods.",
        subroadmap: [
          { title: "Identify Needs", description: "Based on evaluations or interests." },
          { title: "Attend Workshops", description: "Local or national conferences." },
          { title: "Online Courses", description: "Platforms like Coursera for ed tech." },
          { title: "Join Associations", description: "NEA or subject-specific groups." },
          { title: "Renew Certification", description: "Log PD hours as required." }
        ]
      }
    ]
  },
  {
    name: "Chef",
    roadmap: [
      {
        title: "Gain Basic Culinary Skills",
        description: "Learn knife skills, basic cooking techniques, and food safety.",
        subroadmap: [
          { title: "Take Beginner Classes", description: "Online or local community courses." },
          { title: "Practice Knife Techniques", description: "Learn cuts like julienne, dice." },
          { title: "Study Cooking Methods", description: "Sauté, bake, grill basics." },
          { title: "Learn Food Safety", description: "Complete ServSafe food handler course." },
          { title: "Cook at Home", description: "Experiment with simple recipes." }
        ]
      },
      {
        title: "Attend Culinary School",
        description: "Enroll in a culinary arts program or apprenticeship.",
        subroadmap: [
          { title: "Research Programs", description: "Compare schools like CIA or local." },
          { title: "Apply and Enroll", description: "Submit portfolio or experience." },
          { title: "Complete Curriculum", description: "Classes on techniques, nutrition." },
          { title: "Gain Hands-On Training", description: "Kitchen labs and externships." },
          { title: "Graduate with Cert", description: "Earn degree or diploma." }
        ]
      },
      {
        title: "Work in Kitchens",
        description: "Start as a line cook or prep cook to gain experience.",
        subroadmap: [
          { title: "Apply for Entry Jobs", description: "Restaurants, hotels via Indeed." },
          { title: "Learn Station Duties", description: "Prep, grill, sauté lines." },
          { title: "Build Speed and Efficiency", description: "Handle rush hours." },
          { title: "Seek Feedback", description: "From chefs on techniques." },
          { title: "Advance Positions", description: "Move up to sous chef." }
        ]
      },
      {
        title: "Specialize in Cuisine",
        description: "Focus on areas like pastry, international, or fine dining.",
        subroadmap: [
          { title: "Choose Specialty", description: "Based on interest, like Italian or baking." },
          { title: "Take Advanced Courses", description: "Workshops or online for specific cuisine." },
          { title: "Work in Specialized Kitchens", description: "Join restaurants in that niche." },
          { title: "Experiment Recipes", description: "Create fusion or traditional dishes." },
          { title: "Build Portfolio", description: "Photos and menus of specialties." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain certifications like ServSafe or ACF credentials.",
        subroadmap: [
          { title: "Study for ServSafe", description: "Manager level for advanced safety." },
          { title: "Apply for ACF Cert", description: "Levels like Certified Culinarian." },
          { title: "Prepare Portfolio", description: "For practical exams." },
          { title: "Take Exams", description: "Written and hands-on tests." },
          { title: "Maintain Certs", description: "Renew with CE." }
        ]
      },
      {
        title: "Advance to Leadership",
        description: "Become a sous chef or head chef through promotions.",
        subroadmap: [
          { title: "Demonstrate Skills", description: "Excel in current role for notice." },
          { title: "Learn Management", description: "Inventory, staffing, menu planning." },
          { title: "Seek Mentorship", description: "From executive chefs." },
          { title: "Take Leadership Roles", description: "Supervise shifts." },
          { title: "Apply for Promotions", description: "Internal or new opportunities." }
        ]
      },
      {
        title: "Open Your Own Restaurant",
        description: "Develop business skills and launch your venture.",
        subroadmap: [
          { title: "Learn Business Basics", description: "Courses on finance, marketing." },
          { title: "Create Business Plan", description: "Concept, menu, funding." },
          { title: "Secure Funding", description: "Loans, investors, crowdfunding." },
          { title: "Find Location and Setup", description: "Lease, equip kitchen." },
          { title: "Launch and Manage", description: "Hire staff, market opening." }
        ]
      }
    ]
  },
  {
    name: "Pilot",
    roadmap: [
      {
        title: "Meet Basic Requirements",
        description: "Be at least 17, pass a medical exam, and have good vision.",
        subroadmap: [
          { title: "Check Age and Health", description: "Ensure eligibility; get FAA medical cert." },
          { title: "Vision Test", description: "Correctable to 20/20; see aviation doctor." },
          { title: "English Proficiency", description: "Demonstrate reading/speaking." },
          { title: "Background Check", description: "For security clearance." },
          { title: "Gather Documents", description: "ID, birth certificate." }
        ]
      },
      {
        title: "Earn Private Pilot License",
        description: "Complete flight training and pass FAA exams.",
        subroadmap: [
          { title: "Find Flight School", description: "Choose Part 141 or 61 school." },
          { title: "Ground School", description: "Learn aerodynamics, regulations." },
          { title: "Flight Training", description: "Log 40+ hours with instructor." },
          { title: "Pass Written Exam", description: "FAA knowledge test." },
          { title: "Checkride", description: "Oral and flight test with examiner." }
        ]
      },
      {
        title: "Build Flight Hours",
        description: "Log at least 250 hours for commercial license.",
        subroadmap: [
          { title: "Plan Logging", description: "Track solo, cross-country hours." },
          { title: "Rent Aircraft", description: "Fly regularly to build time." },
          { title: "Join Flying Clubs", description: "For affordable access." },
          { title: "Night and Instrument", description: "Include required types." },
          { title: "Document Progress", description: "Use logbook app." }
        ]
      },
      {
        title: "Obtain Commercial Pilot License",
        description: "Pass advanced training and exams.",
        subroadmap: [
          { title: "Advanced Training", description: "Complex aircraft, maneuvers." },
          { title: "Ground School", description: "Commercial knowledge." },
          { title: "Pass Written", description: "FAA commercial test." },
          { title: "Build Required Hours", description: "250 total, specific categories." },
          { title: "Checkride", description: "Demonstrate skills to examiner." }
        ]
      },
      {
        title: "Get Instrument Rating",
        description: "Learn to fly in low visibility conditions.",
        subroadmap: [
          { title: "Instrument Ground School", description: "Learn IFR rules, navigation." },
          { title: "Simulator Training", description: "Practice in sim before plane." },
          { title: "Flight Hours", description: "40 hours instrument time." },
          { title: "Pass Written Exam", description: "FAA instrument knowledge." },
          { title: "Practical Test", description: "IFR flight with examiner." }
        ]
      },
      {
        title: "Pursue Airline Transport Pilot Certificate",
        description: "Log 1,500 hours and pass ATP exams for airline jobs.",
        subroadmap: [
          { title: "Build Multi-Engine Hours", description: "If needed for rating." },
          { title: "ATP Ground School", description: "Advanced aeronautics." },
          { title: "Pass Written", description: "ATP knowledge test." },
          { title: "Log 1500 Hours", description: "Including night, PIC." },
          { title: "Checkride", description: "Multi-engine ATP practical." }
        ]
      },
      {
        title: "Gain Airline Experience",
        description: "Start with regional airlines and advance to majors.",
        subroadmap: [
          { title: "Apply to Regionals", description: "With ATP and hours." },
          { title: "Complete Type Rating", description: "For specific aircraft." },
          { title: "Build Seniority", description: "Fly routes, gain experience." },
          { title: "Network", description: "Attend aviation job fairs." },
          { title: "Apply to Majors", description: "After 1000+ turbine hours." }
        ]
      }
    ]
  },
  {
    name: "Architect",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a 5-year Bachelor of Architecture program.",
        subroadmap: [
          { title: "Choose Accredited Program", description: "NAAB-approved schools." },
          { title: "Take Core Courses", description: "Design studios, history, structures." },
          { title: "Build Portfolio", description: "From studio projects." },
          { title: "Gain Intern Experience", description: "Summer internships." },
          { title: "Prepare for Grad if Needed", description: "For M.Arch if B.S." }
        ]
      },
      {
        title: "Gain Internship Experience",
        description: "Complete paid internships under licensed architects.",
        subroadmap: [
          { title: "Register for IDP/AXP", description: "Architectural Experience Program." },
          { title: "Find Firms", description: "Apply via AIA or LinkedIn." },
          { title: "Log Hours", description: "In categories like design, construction." },
          { title: "Seek Mentorship", description: "From supervising architects." },
          { title: "Complete 3740 Hours", description: "Over 3+ years." }
        ]
      },
      {
        title: "Pass the ARE",
        description: "Take and pass the Architect Registration Examination.",
        subroadmap: [
          { title: "Eligibility Check", description: "After degree and some experience." },
          { title: "Study Materials", description: "Use PPI books, online courses." },
          { title: "Schedule Divisions", description: "6 sections like practice management." },
          { title: "Practice Exams", description: "Simulate test conditions." },
          { title: "Pass All", description: "Retake if needed." }
        ]
      },
      {
        title: "Obtain Licensure",
        description: "Apply for state architecture license.",
        subroadmap: [
          { title: "Submit Application", description: "To state board with docs." },
          { title: "Pass Jurisprudence Exam", description: "If required for state laws." },
          { title: "Pay Fees", description: "Initial licensing costs." },
          { title: "Receive License", description: "Become registered architect." },
          { title: "Maintain with CE", description: "Annual requirements." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on residential, commercial, or sustainable design.",
        subroadmap: [
          { title: "Choose Area", description: "Based on interest and market." },
          { title: "Gain Targeted Experience", description: "Work on related projects." },
          { title: "Earn Certifications", description: "Like LEED for green design." },
          { title: "Network in Niche", description: "Join specialized AIA committees." },
          { title: "Build Portfolio", description: "Showcase specialty work." }
        ]
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master's for research or teaching roles.",
        subroadmap: [
          { title: "Select M.Arch or PhD", description: "For advanced design or academia." },
          { title: "Apply to Programs", description: "With portfolio and GRE." },
          { title: "Complete Studies", description: "Thesis on specialized topic." },
          { title: "Research or Teach", description: "Assistantships during program." },
          { title: "Use for Career", description: "Qualify for prof or lead roles." }
        ]
      },
      {
        title: "Join Professional Organizations",
        description: "Become a member of AIA for networking and resources.",
        subroadmap: [
          { title: "Apply for Membership", description: "AIA or NCARB." },
          { title: "Attend Events", description: "Conferences, webinars." },
          { title: "Participate in Committees", description: "Contribute to industry." },
          { title: "Access Resources", description: "CE courses, job boards." },
          { title: "Network", description: "Connect with peers." }
        ]
      }
    ]
  },
  {
    name: "Graphic Designer",
    roadmap: [
      {
        title: "Learn Design Fundamentals",
        description: "Study color theory, typography, and composition.",
        subroadmap: [
          { title: "Study Color Theory", description: "Learn palettes, harmony via online tutorials." },
          { title: "Explore Typography", description: "Fonts, kerning, hierarchy." },
          { title: "Understand Composition", description: "Rule of thirds, balance." },
          { title: "Take Courses", description: "Skillshare or Coursera intros." },
          { title: "Practice Sketches", description: "Draw daily to apply principles." }
        ]
      },
      {
        title: "Master Software Tools",
        description: "Become proficient in Adobe Photoshop, Illustrator, and InDesign.",
        subroadmap: [
          { title: "Install Adobe Suite", description: "Get student license if eligible." },
          { title: "Learn Photoshop", description: "Editing, layers, masks tutorials." },
          { title: "Master Illustrator", description: "Vectors, paths, logos." },
          { title: "Use InDesign", description: "Layouts for print, books." },
          { title: "Practice Projects", description: "Recreate designs." }
        ]
      },
      {
        title: "Build a Portfolio",
        description: "Create personal projects like logos, posters, and websites.",
        subroadmap: [
          { title: "Plan Projects", description: "Variety to show skills." },
          { title: "Design Logos", description: "For fictional brands." },
          { title: "Create Posters", description: "Events or concepts." },
          { title: "Build Websites", description: "Using Figma or Adobe XD." },
          { title: "Host Online", description: "Behance or personal site." }
        ]
      },
      {
        title: "Earn a Degree or Certification",
        description: "Complete a graphic design program or online courses.",
        subroadmap: [
          { title: "Choose Path", description: "Degree or cert like Google UX." },
          { title: "Enroll in Program", description: "Community college or online." },
          { title: "Complete Assignments", description: "Build skills through work." },
          { title: "Get Certified", description: "Adobe Certified Expert exams." },
          { title: "Update Resume", description: "Include credentials." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Freelance, intern, or work at design agencies.",
        subroadmap: [
          { title: "Start Freelancing", description: "On Upwork with small gigs." },
          { title: "Apply for Internships", description: "Agencies via LinkedIn." },
          { title: "Work Entry-Level", description: "Junior designer roles." },
          { title: "Collaborate", description: "With others on projects." },
          { title: "Seek Feedback", description: "From mentors or online communities." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on UI/UX, branding, or motion graphics.",
        subroadmap: [
          { title: "Choose Niche", description: "Based on interest." },
          { title: "Take Specialized Courses", description: "UI/UX on Coursera." },
          { title: "Build Specialized Portfolio", description: "Projects in focus area." },
          { title: "Gain Experience in Niche", description: "Targeted jobs or freelance." },
          { title: "Certify in Specialty", description: "Like After Effects for motion." }
        ]
      },
      {
        title: "Network and Stay Updated",
        description: "Join communities like Behance and follow design trends.",
        subroadmap: [
          { title: "Create Behance Profile", description: "Upload work." },
          { title: "Join Dribbble/AIGA", description: "For networking." },
          { title: "Attend Conferences", description: "Like Adobe MAX." },
          { title: "Follow Trends", description: "Sites like Awwwards." },
          { title: "Engage Online", description: "Comment, collaborate." }
        ]
      }
    ]
  },
  {
    name: "Nurse",
    roadmap: [
      {
        title: "Earn a Nursing Degree",
        description: "Complete an ADN or BSN program.",
        subroadmap: [
          { title: "Choose Program", description: "ADN for quicker entry, BSN for advancement." },
          { title: "Take Prerequisites", description: "Anatomy, microbiology." },
          { title: "Complete Nursing Courses", description: "Theory and clinicals." },
          { title: "Maintain GPA", description: "For licensure eligibility." },
          { title: "Graduate", description: "With degree." }
        ]
      },
      {
        title: "Pass the NCLEX-RN",
        description: "Study and pass the national licensing exam.",
        subroadmap: [
          { title: "Review Content", description: "Use UWorld or Kaplan." },
          { title: "Practice Questions", description: "Thousands of NCLEX-style." },
          { title: "Take Practice Exams", description: "Full-length timed." },
          { title: "Focus on Weak Areas", description: "Pharm, patient care." },
          { title: "Register and Pass", description: "Via Pearson Vue." }
        ]
      },
      {
        title: "Obtain State Licensure",
        description: "Apply for RN license in your state.",
        subroadmap: [
          { title: "Submit Application", description: "To state board of nursing." },
          { title: "Background Check", description: "Fingerprints and history." },
          { title: "Provide Transcripts", description: "And NCLEX scores." },
          { title: "Pay Fees", description: "Application costs." },
          { title: "Receive License", description: "Initial RN." }
        ]
      },
      {
        title: "Gain Clinical Experience",
        description: "Work in hospitals, clinics, or home health.",
        subroadmap: [
          { title: "Apply for Entry Jobs", description: "New grad programs." },
          { title: "Complete Orientation", description: "Hospital training." },
          { title: "Build Skills", description: "Patient care, meds admin." },
          { title: "Seek Mentorship", description: "From experienced nurses." },
          { title: "Log Hours", description: "For future certs." }
        ]
      },
      {
        title: "Specialize",
        description: "Pursue certifications in areas like pediatrics or oncology.",
        subroadmap: [
          { title: "Choose Specialty", description: "Based on interest." },
          { title: "Gain Required Experience", description: "1-2 years in area." },
          { title: "Study for Cert Exam", description: "Like CCRN or CPN." },
          { title: "Pass Exam", description: "From ANCC or similar." },
          { title: "Maintain Cert", description: "With CE." }
        ]
      },
      {
        title: "Advance Education",
        description: "Earn an MSN or DNP for advanced practice roles.",
        subroadmap: [
          { title: "Select Program", description: "NP, CNS, etc." },
          { title: "Apply with Experience", description: "GRE if needed." },
          { title: "Complete Coursework", description: "Advanced patho, pharm." },
          { title: "Clinical Hours", description: "Supervised practice." },
          { title: "Certify as APRN", description: "Pass national exam." }
        ]
      },
      {
        title: "Continue Professional Development",
        description: "Attend CE courses and renew licenses.",
        subroadmap: [
          { title: "Track State Requirements", description: "CE hours needed." },
          { title: "Attend Workshops", description: "On new practices." },
          { title: "Online CE", description: "Platforms like Nurse.com." },
          { title: "Join Associations", description: "ANA for resources." },
          { title: "Renew License", description: "Every 2-3 years." }
        ]
      }
    ]
  },
  {
    name: "Accountant",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in accounting or finance.",
        subroadmap: [
          { title: "Choose Program", description: "Accredited accounting major." },
          { title: "Take Core Courses", description: "Financial, managerial accounting." },
          { title: "Learn Software", description: "QuickBooks, Excel." },
          { title: "Maintain GPA", description: "For CPA eligibility." },
          { title: "Gain Internships", description: "During summers." }
        ]
      },
      {
        title: "Gain Practical Experience",
        description: "Intern at accounting firms or in finance departments.",
        subroadmap: [
          { title: "Apply for Internships", description: "Big 4 or local firms." },
          { title: "Learn On-Job", description: "Bookkeeping, audits." },
          { title: "Network", description: "With professionals." },
          { title: "Log Hours", description: "For CPA requirements." },
          { title: "Seek Full-Time", description: "Post-grad roles." }
        ]
      },
      {
        title: "Pass the CPA Exam",
        description: "Meet education requirements and pass the four-part exam.",
        subroadmap: [
          { title: "Check Eligibility", description: "150 credit hours." },
          { title: "Study Plan", description: "Use Becker or Wiley." },
          { title: "Take Sections", description: "AUD, BEC, FAR, REG." },
          { title: "Practice MCQs/Sims", description: "Daily drills." },
          { title: "Pass All", description: "Within 18 months." }
        ]
      },
      {
        title: "Obtain CPA License",
        description: "Fulfill experience and ethics requirements for licensure.",
        subroadmap: [
          { title: "Complete Experience", description: "1-2 years under CPA." },
          { title: "Ethics Exam", description: "State-specific test." },
          { title: "Submit Application", description: "To state board." },
          { title: "Pay Fees", description: "Licensing costs." },
          { title: "Receive License", description: "Active CPA." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on tax, audit, forensic, or managerial accounting.",
        subroadmap: [
          { title: "Choose Area", description: "Based on interest." },
          { title: "Gain Experience in Field", description: "Targeted roles." },
          { title: "Earn Additional Certs", description: "Like CISA for audit." },
          { title: "Build Expertise", description: "Through projects." },
          { title: "Network in Specialty", description: "Join groups." }
        ]
      },
      {
        title: "Pursue Advanced Certifications",
        description: "Earn CMA, CIA, or other specialized credentials.",
        subroadmap: [
          { title: "Select Cert", description: "CMA for management." },
          { title: "Meet Requirements", description: "Education, experience." },
          { title: "Study Materials", description: "Official review courses." },
          { title: "Pass Exams", description: "Multiple parts." },
          { title: "Maintain", description: "With CE." }
        ]
      },
      {
        title: "Stay Updated",
        description: "Complete continuing professional education (CPE).",
        subroadmap: [
          { title: "Track CPE Requirements", description: "40 hours/year." },
          { title: "Attend Seminars", description: "On GAAP, tax changes." },
          { title: "Online Courses", description: "Platforms like AICPA." },
          { title: "Read Publications", description: "Journal of Accountancy." },
          { title: "Renew License", description: "Submit CPE logs." }
        ]
      }
    ]
  },
  {
    name: "Marketing Manager",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in marketing, business, or communications.",
        subroadmap: [
          { title: "Choose Major", description: "Marketing or related." },
          { title: "Take Core Courses", description: "Consumer behavior, research." },
          { title: "Learn Tools", description: "Google Analytics intro." },
          { title: "Gain Clubs/Interns", description: "Marketing clubs." },
          { title: "Build Portfolio", description: "Class projects." }
        ]
      },
      {
        title: "Gain Entry-Level Experience",
        description: "Start as a marketing coordinator or assistant.",
        subroadmap: [
          { title: "Apply for Jobs", description: "Entry roles via LinkedIn." },
          { title: "Learn On-Job", description: "Campaign execution." },
          { title: "Build Skills", description: "Content creation, social." },
          { title: "Seek Promotion", description: "After 1-2 years." },
          { title: "Network", description: "Industry events." }
        ]
      },
      {
        title: "Learn Digital Tools",
        description: "Master SEO, Google Analytics, and social media platforms.",
        subroadmap: [
          { title: "Study SEO", description: "Google's free courses." },
          { title: "Learn Analytics", description: "Google Analytics Academy." },
          { title: "Master Social", description: "Facebook Blueprint." },
          { title: "Practice", description: "On personal blog." },
          { title: "Certify", description: "Google certs." }
        ]
      },
      {
        title: "Develop Strategy Skills",
        description: "Study market research, branding, and campaign planning.",
        subroadmap: [
          { title: "Learn Research", description: "Surveys, focus groups." },
          { title: "Study Branding", description: "Books like 'Building a Brand'." },
          { title: "Plan Campaigns", description: "Create mock strategies." },
          { title: "Analyze Case Studies", description: "Nike, Coca-Cola." },
          { title: "Apply in Work", description: "Contribute to plans." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Get certified in Google Ads, HubSpot, or content marketing.",
        subroadmap: [
          { title: "Choose Certs", description: "Relevant to role." },
          { title: "Study Online", description: "Free HubSpot academy." },
          { title: "Take Exams", description: "Pass assessments." },
          { title: "Add to Resume", description: "Showcase skills." },
          { title: "Renew if Needed", description: "Annual updates." }
        ]
      },
      {
        title: "Advance to Management",
        description: "Lead teams and manage budgets in senior roles.",
        subroadmap: [
          { title: "Build Leadership", description: "Mentor juniors." },
          { title: "Learn Budgeting", description: "ROI, allocation." },
          { title: "Apply for Manager", description: "Internal promotions." },
          { title: "Manage Projects", description: "Oversee campaigns." },
          { title: "Develop Team", description: "Hiring, training." }
        ]
      },
      {
        title: "Network and Stay Current",
        description: "Join AMA and follow industry trends.",
        subroadmap: [
          { title: "Join AMA", description: "American Marketing Association." },
          { title: "Attend Conferences", description: "Like Inbound." },
          { title: "Read Blogs", description: "HubSpot, Marketing Week." },
          { title: "Social Media", description: "Follow influencers." },
          { title: "Network Events", description: "Local meetups." }
        ]
      }
    ]
  },
  {
    name: "Civil Engineer",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a civil engineering program accredited by ABET.",
        subroadmap: [
          { title: "Choose ABET School", description: "For licensure eligibility." },
          { title: "Take Core Courses", description: "Statics, fluids, geotech." },
          { title: "Lab and Projects", description: "Hands-on design." },
          { title: "Maintain GPA", description: "For jobs and PE." },
          { title: "Intern Summers", description: "Construction sites." }
        ]
      },
      {
        title: "Pass the FE Exam",
        description: "Take the Fundamentals of Engineering exam.",
        subroadmap: [
          { title: "Eligibility", description: "Senior year or graduate." },
          { title: "Study Plan", description: "Use NCEES reference handbook." },
          { title: "Practice Problems", description: "FE review manuals." },
          { title: "Register with NCEES", description: "Schedule computer-based." },
          { title: "Pass Exam", description: "Become EIT." }
        ]
      },
      {
        title: "Gain Work Experience",
        description: "Work under licensed engineers for 4 years.",
        subroadmap: [
          { title: "Find Entry Job", description: "Firms via ASCE." },
          { title: "Log Experience", description: "Progressive responsibility." },
          { title: "Seek Supervision", description: "From PE mentors." },
          { title: "Build Skills", description: "Design, site work." },
          { title: "Document", description: "For PE application." }
        ]
      },
      {
        title: "Pass the PE Exam",
        description: "Take the Principles and Practice of Engineering exam.",
        subroadmap: [
          { title: "Choose Discipline", description: "Civil: structural, etc." },
          { title: "Study Materials", description: "PPI review courses." },
          { title: "Practice Exams", description: "Full-day simulations." },
          { title: "Register", description: "After experience approval." },
          { title: "Pass", description: "Become PE." }
        ]
      },
      {
        title: "Obtain Licensure",
        description: "Apply for professional engineer (PE) license.",
        subroadmap: [
          { title: "Submit App", description: "To state board with refs." },
          { title: "Ethics Exam", description: "If required." },
          { title: "Pay Fees", description: "Licensing costs." },
          { title: "Receive License", description: "Stamp plans." },
          { title: "Renew", description: "With PDH." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on structural, transportation, or environmental engineering.",
        subroadmap: [
          { title: "Choose Field", description: "Based on interest." },
          { title: "Gain Specialized Exp", description: "Projects in area." },
          { title: "Earn Certs", description: "Like SE for structural." },
          { title: "Advanced Courses", description: "Continuing ed." },
          { title: "Network", description: "ASCE specialty groups." }
        ]
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master's for research or leadership roles.",
        subroadmap: [
          { title: "Select M.S.", description: "In civil subfield." },
          { title: "Apply", description: "With GRE, recommendations." },
          { title: "Complete", description: "Thesis or coursework." },
          { title: "Research", description: "Publish papers." },
          { title: "Use for Career", description: "Management or academia." }
        ]
      }
    ]
  },
  {
    name: "Mechanical Engineer",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a mechanical engineering program.",
        subroadmap: [
          { title: "Choose Program", description: "ABET accredited." },
          { title: "Core Courses", description: "Thermodynamics, mechanics." },
          { title: "Labs/Projects", description: "Design builds." },
          { title: "GPA Maintenance", description: "For opportunities." },
          { title: "Internships", description: "Manufacturing firms." }
        ]
      },
      {
        title: "Pass the FE Exam",
        description: "Pass the Fundamentals of Engineering exam.",
        subroadmap: [
          { title: "Prepare", description: "Review handbook." },
          { title: "Study", description: "Mechanical-specific." },
          { title: "Practice", description: "Problems from reviews." },
          { title: "Register", description: "NCEES." },
          { title: "Pass", description: "EIT status." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work in design, manufacturing, or testing for 4 years.",
        subroadmap: [
          { title: "Entry Jobs", description: "Junior engineer." },
          { title: "Log Work", description: "Under PE." },
          { title: "Skills Build", description: "CAD, testing." },
          { title: "Mentorship", description: "Seek guidance." },
          { title: "Document", description: "For PE." }
        ]
      },
      {
        title: "Pass the PE Exam",
        description: "Take the professional engineering exam.",
        subroadmap: [
          { title: "Study Plan", description: "Mechanical depth." },
          { title: "Materials", description: "MERM book." },
          { title: "Practice", description: "Exams." },
          { title: "Schedule", description: "After exp." },
          { title: "Pass", description: "PE license." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on robotics, automotive, or HVAC systems.",
        subroadmap: [
          { title: "Select Area", description: "Interest-based." },
          { title: "Experience", description: "Targeted projects." },
          { title: "Certs", description: "Like CMfgE." },
          { title: "Courses", description: "Specialized CE." },
          { title: "Network", description: "ASME groups." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain ASME or other industry certifications.",
        subroadmap: [
          { title: "Choose Cert", description: "Relevant to specialty." },
          { title: "Meet Reqs", description: "Exp, education." },
          { title: "Study", description: "Official materials." },
          { title: "Exam", description: "Pass test." },
          { title: "Maintain", description: "Renewal." }
        ]
      },
      {
        title: "Continue Education",
        description: "Pursue a master's or PhD for advanced roles.",
        subroadmap: [
          { title: "Select Degree", description: "M.S. or PhD." },
          { title: "Apply", description: "GRE, statements." },
          { title: "Complete", description: "Research thesis." },
          { title: "Publish", description: "Papers." },
          { title: "Career Use", description: "R&D or teaching." }
        ]
      }
    ]
  },
  {
    name: "Electrical Engineer",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete an electrical engineering program.",
        subroadmap: [
          { title: "Program Selection", description: "ABET." },
          { title: "Courses", description: "Circuits, signals." },
          { title: "Labs", description: "Hands-on electronics." },
          { title: "GPA", description: "High for opps." },
          { title: "Interns", description: "Power companies." }
        ]
      },
      {
        title: "Pass the FE Exam",
        description: "Pass the Fundamentals of Engineering exam.",
        subroadmap: [
          { title: "Prep", description: "Handbook review." },
          { title: "Study", description: "EE specific." },
          { title: "Practice", description: "Problems." },
          { title: "Register", description: "NCEES." },
          { title: "Pass", description: "EIT." }
        ]
      },
      {
        title: "Gain Professional Experience",
        description: "Work in power systems, electronics, or telecommunications.",
        subroadmap: [
          { title: "Jobs", description: "Entry-level EE." },
          { title: "Log", description: "4 years under PE." },
          { title: "Skills", description: "Design, testing." },
          { title: "Mentor", description: "Guidance." },
          { title: "Doc", description: "For license." }
        ]
      },
      {
        title: "Pass the PE Exam",
        description: "Take the Principles and Practice exam.",
        subroadmap: [
          { title: "Discipline", description: "Electrical power." },
          { title: "Study", description: "Review materials." },
          { title: "Practice", description: "Exams." },
          { title: "Schedule", description: "Post-exp." },
          { title: "Pass", description: "PE." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on renewable energy, circuits, or control systems.",
        subroadmap: [
          { title: "Choose", description: "Interest." },
          { title: "Exp", description: "Projects." },
          { title: "Certs", description: "IEEE." },
          { title: "Courses", description: "CE." },
          { title: "Network", description: "IEEE sections." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Get IEEE or other specialized certifications.",
        subroadmap: [
          { title: "Select", description: "Relevant." },
          { title: "Reqs", description: "Meet." },
          { title: "Study", description: "Materials." },
          { title: "Exam", description: "Pass." },
          { title: "Maintain", description: "CE." }
        ]
      },
      {
        title: "Advance Your Career",
        description: "Pursue leadership roles or advanced degrees.",
        subroadmap: [
          { title: "Leadership", description: "Manage teams." },
          { title: "Degrees", description: "M.S./PhD." },
          { title: "Apply", description: "Programs." },
          { title: "Complete", description: "Research." },
          { title: "Use", description: "Senior positions." }
        ]
      }
    ]
  },
  {
    name: "Psychologist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in psychology or related field.",
        subroadmap: [
          { title: "Major", description: "Psychology." },
          { title: "Courses", description: "Intro, stats, research." },
          { title: "Exp", description: "Lab volunteer." },
          { title: "GPA", description: "High for grad school." },
          { title: "GRE Prep", description: "Early." }
        ]
      },
      {
        title: "Pursue Graduate Education",
        description: "Earn a master's or PhD/PsyD in psychology.",
        subroadmap: [
          { title: "Choose Program", description: "Clinical PhD or PsyD." },
          { title: "Apply", description: "GRE, essays, recs." },
          { title: "Coursework", description: "Advanced theory." },
          { title: "Research/Thesis", description: "Conduct studies." },
          { title: "Graduate", description: "With degree." }
        ]
      },
      {
        title: "Complete Supervised Experience",
        description: "Log 1-2 years of supervised clinical hours.",
        subroadmap: [
          { title: "Find Internship", description: "APA-accredited." },
          { title: "Log Hours", description: "1500-2000." },
          { title: "Supervision", description: "Weekly meetings." },
          { title: "Varied Experience", description: "Different clients." },
          { title: "Document", description: "For licensure." }
        ]
      },
      {
        title: "Pass Licensing Exams",
        description: "Take the EPPP and state jurisprudence exams.",
        subroadmap: [
          { title: "Study EPPP", description: "ASP PB materials." },
          { title: "Practice", description: "Mock exams." },
          { title: "Jurisprudence", description: "State laws." },
          { title: "Register", description: "With board." },
          { title: "Pass", description: "Both exams." }
        ]
      },
      {
        title: "Obtain Licensure",
        description: "Apply for state psychologist license.",
        subroadmap: [
          { title: "Submit App", description: "Docs, fees." },
          { title: "Background", description: "Check." },
          { title: "Refs", description: "From supervisors." },
          { title: "Receive", description: "License." },
          { title: "Renew", description: "With CE." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on clinical, counseling, or forensic psychology.",
        subroadmap: [
          { title: "Choose", description: "Interest." },
          { title: "Post-Doc", description: "Specialty training." },
          { title: "Certs", description: "ABPP board." },
          { title: "Experience", description: "Targeted practice." },
          { title: "Network", description: "APA divisions." }
        ]
      },
      {
        title: "Maintain Certification",
        description: "Complete continuing education requirements.",
        subroadmap: [
          { title: "Track CE", description: "36 hours/2 years." },
          { title: "Attend", description: "Workshops, online." },
          { title: "Topics", description: "Ethics, new research." },
          { title: "Submit", description: "For renewal." },
          { title: "Stay Current", description: "Journals." }
        ]
      }
    ]
  },
  {
    name: "Journalist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in journalism, communications, or English.",
        subroadmap: [
          { title: "Major", description: "Journalism." },
          { title: "Courses", description: "Reporting, ethics." },
          { title: "Campus Media", description: "Newspaper, radio." },
          { title: "Interns", description: "Local media." },
          { title: "Portfolio", description: "Clips." }
        ]
      },
      {
        title: "Build Writing Skills",
        description: "Practice reporting, editing, and multimedia storytelling.",
        subroadmap: [
          { title: "Daily Writing", description: "Blogs, articles." },
          { title: "Learn AP Style", description: "Stylebook." },
          { title: "Multimedia", description: "Video, podcast." },
          { title: "Edit Work", description: "Peer reviews." },
          { title: "Publish", description: "Online platforms." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Intern at newspapers, TV stations, or online media.",
        subroadmap: [
          { title: "Apply Interns", description: "NYT, local." },
          { title: "On-Job", description: "Research, interviews." },
          { title: "Build Clips", description: "Published pieces." },
          { title: "Network", description: "With editors." },
          { title: "Freelance", description: "Side gigs." }
        ]
      },
      {
        title: "Develop a Portfolio",
        description: "Compile clips of published work.",
        subroadmap: [
          { title: "Select Best", description: "Varied stories." },
          { title: "Create Site", description: "WordPress portfolio." },
          { title: "Include Multimedia", description: "Videos, photos." },
          { title: "Update Regularly", description: "New work." },
          { title: "Share", description: "On LinkedIn." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on investigative, sports, or digital journalism.",
        subroadmap: [
          { title: "Choose Niche", description: "Passion." },
          { title: "Courses", description: "Specialized training." },
          { title: "Experience", description: "Targeted assignments." },
          { title: "Build Expertise", description: "Deep research." },
          { title: "Network", description: "Niche groups." }
        ]
      },
      {
        title: "Network",
        description: "Join SPJ and attend industry conferences.",
        subroadmap: [
          { title: "Join SPJ", description: "Society of Professional Journalists." },
          { title: "Attend Conf", description: "IRE, NABJ." },
          { title: "Meetups", description: "Local chapters." },
          { title: "Online", description: "Twitter, LinkedIn." },
          { title: "Mentors", description: "Seek advice." }
        ]
      },
      {
        title: "Advance to Senior Roles",
        description: "Become an editor or correspondent.",
        subroadmap: [
          { title: "Gain Years Exp", description: "5+ in field." },
          { title: "Leadership", description: "Manage stories." },
          { title: "Apply Senior", description: "Editor positions." },
          { title: "Develop Skills", description: "Management." },
          { title: "Portfolio", description: "Show progression." }
        ]
      }
    ]
  },
  {
    name: "Actor",
    roadmap: [
      {
        title: "Take Acting Classes",
        description: "Enroll in drama school or workshops for fundamentals.",
        subroadmap: [
          { title: "Find Classes", description: "Local theater or online." },
          { title: "Learn Techniques", description: "Method, Meisner." },
          { title: "Practice Scenes", description: "Monologues, improv." },
          { title: "Get Feedback", description: "From instructors." },
          { title: "Continue Training", description: "Advanced workshops." }
        ]
      },
      {
        title: "Build Experience",
        description: "Participate in community theater or student films.",
        subroadmap: [
          { title: "Audition Local", description: "Community plays." },
          { title: "Student Films", description: "College projects." },
          { title: "Roles", description: "Small to lead." },
          { title: "Network On-Set", description: "With cast/crew." },
          { title: "Record Performances", description: "For reel." }
        ]
      },
      {
        title: "Create a Reel and Headshots",
        description: "Develop a professional demo reel and photos.",
        subroadmap: [
          { title: "Headshots", description: "Professional photographer." },
          { title: "Compile Footage", description: "From past work." },
          { title: "Edit Reel", description: "1-2 min highlights." },
          { title: "Update Resume", description: "Roles, training." },
          { title: "Online Presence", description: "Actors Access." }
        ]
      },
      {
        title: "Find an Agent",
        description: "Sign with talent representation.",
        subroadmap: [
          { title: "Research Agents", description: "IMDB Pro, referrals." },
          { title: "Submit Materials", description: "Reel, headshots." },
          { title: "Audition for Agents", description: "Showcases." },
          { title: "Sign Contract", description: "Review terms." },
          { title: "Maintain Relationship", description: "Communication." }
        ]
      },
      {
        title: "Audition Regularly",
        description: "Attend castings for TV, film, or stage roles.",
        subroadmap: [
          { title: "Find Auditions", description: "Backstage, Casting Networks." },
          { title: "Prepare Sides", description: "Memorize, rehearse." },
          { title: "Self-Tape", description: "For remote." },
          { title: "Attend Callbacks", description: "Follow up." },
          { title: "Handle Rejection", description: "Learn from it." }
        ]
      },
      {
        title: "Network",
        description: "Join SAG-AFTRA and attend industry events.",
        subroadmap: [
          { title: "Join Union", description: "SAG-AFTRA after eligibility." },
          { title: "Events", description: "Film fests, panels." },
          { title: "Online", description: "LinkedIn, Twitter." },
          { title: "Collaborate", description: "With filmmakers." },
          { title: "Mentors", description: "Seek advice." }
        ]
      },
      {
        title: "Diversify Skills",
        description: "Learn voice acting, improv, or directing.",
        subroadmap: [
          { title: "Voice Classes", description: "For commercials, animation." },
          { title: "Improv Workshops", description: "UCB or Groundlings." },
          { title: "Directing", description: "Short films." },
          { title: "Dance/Singing", description: "For musicals." },
          { title: "Update Reel", description: "With new skills." }
        ]
      }
    ]
  },
  {
    name: "Musician",
    roadmap: [
      {
        title: "Learn an Instrument or Voice",
        description: "Take lessons and practice daily.",
        subroadmap: [
          { title: "Choose Instrument", description: "Guitar, piano, vocals." },
          { title: "Find Teacher", description: "Local or online." },
          { title: "Daily Practice", description: "30-60 min." },
          { title: "Learn Basics", description: "Scales, chords." },
          { title: "Record Progress", description: "Track improvement." }
        ]
      },
      {
        title: "Study Music Theory",
        description: "Understand scales, harmony, and composition.",
        subroadmap: [
          { title: "Online Courses", description: "Coursera music theory." },
          { title: "Learn Scales", description: "Major, minor." },
          { title: "Harmony", description: "Chords, progressions." },
          { title: "Composition", description: "Write simple songs." },
          { title: "Apply to Instrument", description: "Practice theory." }
        ]
      },
      {
        title: "Perform Live",
        description: "Play at open mics, gigs, or with bands.",
        subroadmap: [
          { title: "Find Venues", description: "Local open mics." },
          { title: "Prepare Setlist", description: "5-10 songs." },
          { title: "Join Band", description: "Craigslist or apps." },
          { title: "Perform", description: "Build stage presence." },
          { title: "Get Feedback", description: "From audience." }
        ]
      },
      {
        title: "Record Music",
        description: "Create demos or albums using software like Logic Pro.",
        subroadmap: [
          { title: "Setup Home Studio", description: "Mic, DAW." },
          { title: "Learn Software", description: "Logic or GarageBand." },
          { title: "Record Tracks", description: "Multi-layer." },
          { title: "Mix/Master", description: "Basics of EQ, reverb." },
          { title: "Release Demo", description: "SoundCloud." }
        ]
      },
      {
        title: "Build a Fanbase",
        description: "Use social media and platforms like SoundCloud.",
        subroadmap: [
          { title: "Create Profiles", description: "Instagram, TikTok." },
          { title: "Post Content", description: "Covers, originals." },
          { title: "Engage Fans", description: "Comments, lives." },
          { title: "Collaborate", description: "With other musicians." },
          { title: "Promote", description: "Ads, playlists." }
        ]
      },
      {
        title: "Pursue Education",
        description: "Earn a degree in music performance or production.",
        subroadmap: [
          { title: "Choose School", description: "Berklee or local." },
          { title: "Audition/Apply", description: "Portfolio." },
          { title: "Complete Degree", description: "Performance focus." },
          { title: "Network", description: "In school." },
          { title: "Graduate", description: "With skills." }
        ]
      },
      {
        title: "Network and Collaborate",
        description: "Connect with producers and other artists.",
        subroadmap: [
          { title: "Attend Events", description: "Music conferences." },
          { title: "Online Networks", description: "LinkedIn music." },
          { title: "Collaborate", description: "Co-write songs." },
          { title: "Find Producer", description: "For recordings." },
          { title: "Build Team", description: "Manager, agent." }
        ]
      }
    ]
  },
  {
    name: "Writer",
    roadmap: [
      {
        title: "Develop Writing Skills",
        description: "Practice daily writing and read extensively.",
        subroadmap: [
          { title: "Daily Journal", description: "500 words/day." },
          { title: "Read Genres", description: "Classics, contemporaries." },
          { title: "Study Grammar", description: "Books like Elements of Style." },
          { title: "Write Exercises", description: "Prompts from sites." },
          { title: "Get Feedback", description: "Writing groups." }
        ]
      },
      {
        title: "Earn a Degree",
        description: "Complete a bachelor's in English, creative writing, or journalism.",
        subroadmap: [
          { title: "Choose Major", description: "Creative writing." },
          { title: "Courses", description: "Workshops, literature." },
          { title: "Campus Pubs", description: "Submit work." },
          { title: "Thesis", description: "Capstone project." },
          { title: "Graduate", description: "With portfolio." }
        ]
      },
      {
        title: "Build a Portfolio",
        description: "Write articles, stories, or blogs.",
        subroadmap: [
          { title: "Create Blog", description: "WordPress." },
          { title: "Write Pieces", description: "Short stories, essays." },
          { title: "Publish Online", description: "Medium." },
          { title: "Variety", description: "Different styles." },
          { title: "Host Site", description: "Personal domain." }
        ]
      },
      {
        title: "Freelance or Intern",
        description: "Gain experience writing for publications.",
        subroadmap: [
          { title: "Freelance Sites", description: "Upwork." },
          { title: "Pitch Ideas", description: "To magazines." },
          { title: "Internships", description: "Publishing houses." },
          { title: "Build Clips", description: "Published work." },
          { title: "Network", description: "Editors." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on fiction, non-fiction, technical, or copywriting.",
        subroadmap: [
          { title: "Choose Genre", description: "Interest." },
          { title: "Study Specifics", description: "Books on craft." },
          { title: "Write in Niche", description: "Projects." },
          { title: "Join Groups", description: "Genre associations." },
          { title: "Portfolio Update", description: "Specialized." }
        ]
      },
      {
        title: "Publish Work",
        description: "Submit to agents, publishers, or self-publish.",
        subroadmap: [
          { title: "Query Agents", description: "For books." },
          { title: "Submit Manuscripts", description: "To publishers." },
          { title: "Self-Publish", description: "Amazon KDP." },
          { title: "Edit", description: "Professional help." },
          { title: "Market", description: "Book tours, social." }
        ]
      },
      {
        title: "Join Communities",
        description: "Participate in writers' groups and conferences.",
        subroadmap: [
          { title: "Local Groups", description: "Meetups." },
          { title: "Online Forums", description: "Reddit r/writing." },
          { title: "Conferences", description: "AWP." },
          { title: "Critique Partners", description: "Exchange work." },
          { title: "Network", description: "For opportunities." }
        ]
      }
    ]
  },
  {
    name: "Photographer",
    roadmap: [
      {
        title: "Learn Photography Basics",
        description: "Study exposure, composition, and lighting.",
        subroadmap: [
          { title: "Exposure Triangle", description: "Aperture, shutter, ISO." },
          { title: "Composition Rules", description: "Rule of thirds." },
          { title: "Lighting", description: "Natural vs artificial." },
          { title: "Courses", description: "Udemy basics." },
          { title: "Practice", description: "Daily shoots." }
        ]
      },
      {
        title: "Acquire Gear",
        description: "Start with a DSLR or mirrorless camera and lenses.",
        subroadmap: [
          { title: "Research Cameras", description: "Entry-level Canon/Nikon." },
          { title: "Buy Lenses", description: "Prime, zoom." },
          { title: "Accessories", description: "Tripod, filters." },
          { title: "Budget", description: "Used gear." },
          { title: "Learn Equipment", description: "Manuals." }
        ]
      },
      {
        title: "Practice Shooting",
        description: "Take photos in various genres like portrait or landscape.",
        subroadmap: [
          { title: "Genres", description: "Try portrait, street." },
          { title: "Daily Shoots", description: "365 project." },
          { title: "Experiment Settings", description: "Manual mode." },
          { title: "Review Photos", description: "Critique own work." },
          { title: "Challenges", description: "Photo prompts." }
        ]
      },
      {
        title: "Master Editing Software",
        description: "Learn Adobe Lightroom and Photoshop.",
        subroadmap: [
          { title: "Install Software", description: "Adobe CC." },
          { title: "Lightroom Basics", description: "Import, adjust." },
          { title: "Photoshop", description: "Layers, retouch." },
          { title: "Tutorials", description: "YouTube." },
          { title: "Edit Portfolio", description: "Apply to shots." }
        ]
      },
      {
        title: "Build a Portfolio",
        description: "Create an online website or Instagram showcase.",
        subroadmap: [
          { title: "Select Best Shots", description: "20-30 images." },
          { title: "Create Website", description: "Squarespace." },
          { title: "Instagram", description: "Curated feed." },
          { title: "Categories", description: "By genre." },
          { title: "Update", description: "Regularly." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Freelance, assist pros, or work at studios.",
        subroadmap: [
          { title: "Assistants", description: "Shadow photographers." },
          { title: "Freelance", description: "Events, portraits." },
          { title: "Studio Jobs", description: "Product shoots." },
          { title: "Network", description: "Local groups." },
          { title: "Build Clients", description: "Referrals." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on wedding, commercial, or fine art photography.",
        subroadmap: [
          { title: "Choose Niche", description: "Passion." },
          { title: "Training", description: "Workshops." },
          { title: "Portfolio", description: "Niche-specific." },
          { title: "Market", description: "Target audience." },
          { title: "Certs", description: "If applicable." }
        ]
      }
    ]
  },
  {
    name: "Veterinarian",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete pre-vet studies in biology or animal science.",
        subroadmap: [
          { title: "Major", description: "Animal science." },
          { title: "Prereqs", description: "Bio, chem, physics." },
          { title: "Exp", description: "Vet shadowing." },
          { title: "GPA", description: "3.5+." },
          { title: "GRE Prep", description: "Early." }
        ]
      },
      {
        title: "Take the GRE",
        description: "Prepare and pass the Graduate Record Examination.",
        subroadmap: [
          { title: "Study Plan", description: "3 months." },
          { title: "Resources", description: "ETS, Kaplan." },
          { title: "Practice Tests", description: "Full-length." },
          { title: "Focus Sections", description: "Quant, verbal." },
          { title: "Take Exam", description: "Aim high score." }
        ]
      },
      {
        title: "Attend Veterinary School",
        description: "Complete a 4-year Doctor of Veterinary Medicine (DVM) program.",
        subroadmap: [
          { title: "Apply VMCAS", description: "Essays, recs." },
          { title: "Years 1-2", description: "Basic sciences." },
          { title: "Clinical Years", description: "Rotations." },
          { title: "Research", description: "Optional projects." },
          { title: "Graduate", description: "DVM degree." }
        ]
      },
      {
        title: "Pass Licensing Exams",
        description: "Take the NAVLE and state exams.",
        subroadmap: [
          { title: "Study NAVLE", description: "Review books." },
          { title: "Practice", description: "Questions." },
          { title: "State Exam", description: "Jurisprudence." },
          { title: "Register", description: "ICVA." },
          { title: "Pass", description: "Both." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Intern or work in clinics.",
        subroadmap: [
          { title: "Internship", description: "1-year post-grad." },
          { title: "Entry Jobs", description: "Associate vet." },
          { title: "Build Skills", description: "Surgery, diagnostics." },
          { title: "Network", description: "AVMA." },
          { title: "Log", description: "For specialty." }
        ]
      },
      {
        title: "Specialize",
        description: "Pursue residencies in surgery, oncology, etc.",
        subroadmap: [
          { title: "Choose Specialty", description: "Interest." },
          { title: "Apply Residency", description: "VIRMP." },
          { title: "Complete 3 Years", description: "Training." },
          { title: "Board Exam", description: "ACVS etc." },
          { title: "Practice", description: "Specialist." }
        ]
      },
      {
        title: "Maintain Certification",
        description: "Complete continuing education.",
        subroadmap: [
          { title: "Track CE", description: "State reqs." },
          { title: "Attend", description: "Conferences." },
          { title: "Online", description: "Webinars." },
          { title: "Renew License", description: "Annually." },
          { title: "Stay Updated", description: "Journals." }
        ]
      }
    ]
  },
  {
    name: "Dentist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete pre-dental studies in sciences.",
        subroadmap: [
          { title: "Major", description: "Biology." },
          { title: "Prereqs", description: "Chem, physics." },
          { title: "Exp", description: "Dental shadowing." },
          { title: "GPA", description: "High." },
          { title: "DAT Prep", description: "Early." }
        ]
      },
      {
        title: "Take the DAT",
        description: "Pass the Dental Admission Test.",
        subroadmap: [
          { title: "Study", description: "Kaplan." },
          { title: "Practice", description: "Tests." },
          { title: "Sections", description: "Perceptual, sciences." },
          { title: "Register", description: "ADA." },
          { title: "Take", description: "Score 19+." }
        ]
      },
      {
        title: "Attend Dental School",
        description: "Complete a 4-year DDS or DMD program.",
        subroadmap: [
          { title: "Apply ADEA", description: "AADSAS." },
          { title: "Basic Sciences", description: "Years 1-2." },
          { title: "Clinical", description: "Patient care." },
          { title: "Boards Part 1", description: "During school." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Pass Licensing Exams",
        description: "Take NBDE and state clinical exams.",
        subroadmap: [
          { title: "NBDE Part 2", description: "Study." },
          { title: "Clinical Exam", description: "Practical." },
          { title: "State", description: "Jurisprudence." },
          { title: "Practice", description: "Mocks." },
          { title: "Pass", description: "All." }
        ]
      },
      {
        title: "Complete Residency (Optional)",
        description: "Specialize in orthodontics or oral surgery.",
        subroadmap: [
          { title: "Choose", description: "Specialty." },
          { title: "Apply", description: "Match." },
          { title: "Train", description: "2-6 years." },
          { title: "Board Cert", description: "Exam." },
          { title: "Practice", description: "Specialist." }
        ]
      },
      {
        title: "Open or Join a Practice",
        description: "Start working in private or public dental care.",
        subroadmap: [
          { title: "Join Existing", description: "Associate." },
          { title: "Open Own", description: "Business plan." },
          { title: "Licensing", description: "State." },
          { title: "Build Patients", description: "Marketing." },
          { title: "Manage", description: "Staff, finances." }
        ]
      },
      {
        title: "Continue Education",
        description: "Attend CE courses for advancements.",
        subroadmap: [
          { title: "Reqs", description: "State CE hours." },
          { title: "Attend", description: "ADA conferences." },
          { title: "Online", description: "Webinars." },
          { title: "Special Topics", description: "New tech." },
          { title: "Renew", description: "License." }
        ]
      }
    ]
  },
  {
    name: "Pharmacist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete pre-pharmacy coursework in sciences.",
        subroadmap: [
          { title: "Prereqs", description: "Chem, bio." },
          { title: "Major", description: "Any with prereqs." },
          { title: "GPA", description: "High." },
          { title: "Exp", description: "Pharmacy tech." },
          { title: "PCAT Prep", description: "If required." }
        ]
      },
      {
        title: "Take the PCAT",
        description: "Pass the Pharmacy College Admission Test (optional for some schools).",
        subroadmap: [
          { title: "Check Req", description: "For schools." },
          { title: "Study", description: "Kaplan." },
          { title: "Practice", description: "Tests." },
          { title: "Register", description: "Pearson." },
          { title: "Take", description: "Good score." }
        ]
      },
      {
        title: "Attend Pharmacy School",
        description: "Complete a 4-year PharmD program.",
        subroadmap: [
          { title: "Apply PharmCAS", description: "Apps." },
          { title: "Didactic Years", description: "Pharm sciences." },
          { title: "Rotations", description: "Clinical." },
          { title: "Research", description: "Optional." },
          { title: "Graduate", description: "PharmD." }
        ]
      },
      {
        title: "Pass Licensing Exams",
        description: "Take NAPLEX and MPJE.",
        subroadmap: [
          { title: "NAPLEX Study", description: "RxPrep." },
          { title: "MPJE", description: "State law." },
          { title: "Practice", description: "Questions." },
          { title: "Register", description: "NABP." },
          { title: "Pass", description: "Both." }
        ]
      },
      {
        title: "Complete Internship Hours",
        description: "Log required supervised hours.",
        subroadmap: [
          { title: "During School", description: "IPPE/APPE." },
          { title: "Post-Grad", description: "If needed." },
          { title: "Supervisor", description: "Licensed pharmacist." },
          { title: "Log", description: "Hours." },
          { title: "Submit", description: "For license." }
        ]
      },
      {
        title: "Specialize",
        description: "Pursue residencies in clinical or community pharmacy.",
        subroadmap: [
          { title: "Choose", description: "PGY1/2." },
          { title: "Apply ASHP", description: "Match." },
          { title: "Complete", description: "1-2 years." },
          { title: "Board Cert", description: "BPS." },
          { title: "Practice", description: "Specialist." }
        ]
      },
      {
        title: "Maintain Licensure",
        description: "Complete continuing education.",
        subroadmap: [
          { title: "CE Hours", description: "30/2 years." },
          { title: "Attend", description: "Seminars." },
          { title: "Online", description: "ACPE." },
          { title: "Topics", description: "New drugs." },
          { title: "Renew", description: "License." }
        ]
      }
    ]
  },
  {
    name: "Police Officer",
    roadmap: [
      {
        title: "Meet Basic Requirements",
        description: "Be 21+, have a high school diploma, and pass background checks.",
        subroadmap: [
          { title: "Age/Education", description: "Verify." },
          { title: "Fitness", description: "Prepare physically." },
          { title: "Background", description: "Clean record." },
          { title: "Citizenship", description: "US citizen." },
          { title: "Driver's License", description: "Valid." }
        ]
      },
      {
        title: "Earn a Degree (Optional)",
        description: "Complete associate's or bachelor's in criminal justice.",
        subroadmap: [
          { title: "Choose Program", description: "CJ degree." },
          { title: "Courses", description: "Law, ethics." },
          { title: "GPA", description: "Good standing." },
          { title: "Interns", description: "Police dept." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Attend Police Academy",
        description: "Complete training in law, firearms, and tactics.",
        subroadmap: [
          { title: "Apply", description: "To department." },
          { title: "Physical Training", description: "Fitness drills." },
          { title: "Classroom", description: "Legal studies." },
          { title: "Firearms", description: "Range practice." },
          { title: "Graduate", description: "Cert." }
        ]
      },
      {
        title: "Pass Certification Exams",
        description: "Pass physical, written, and psychological tests.",
        subroadmap: [
          { title: "Written", description: "Knowledge test." },
          { title: "Physical", description: "Agility course." },
          { title: "Psych", description: "Evaluation." },
          { title: "Polygraph", description: "If required." },
          { title: "Pass All", description: "Hire." }
        ]
      },
      {
        title: "Gain Field Experience",
        description: "Start as a patrol officer.",
        subroadmap: [
          { title: "Field Training", description: "With FTO." },
          { title: "Patrol Duties", description: "Calls, reports." },
          { title: "Build Skills", description: "De-escalation." },
          { title: "Evaluations", description: "Performance." },
          { title: "Years Exp", description: "For promotion." }
        ]
      },
      {
        title: "Specialize",
        description: "Move to detective, SWAT, or K-9 units.",
        subroadmap: [
          { title: "Choose Unit", description: "Interest." },
          { title: "Training", description: "Specialized courses." },
          { title: "Apply", description: "Internal." },
          { title: "Experience", description: "In role." },
          { title: "Cert", description: "If needed." }
        ]
      },
      {
        title: "Advance in Rank",
        description: "Pursue promotions through experience and exams.",
        subroadmap: [
          { title: "Study", description: "For sergeant exam." },
          { title: "Exp", description: "3+ years." },
          { title: "Apply", description: "Promotions." },
          { title: "Leadership", description: "Supervise." },
          { title: "Continue", description: "To captain." }
        ]
      }
    ]
  },
  {
    name: "Firefighter",
    roadmap: [
      {
        title: "Meet Requirements",
        description: "Be 18+, have a high school diploma, and EMT certification.",
        subroadmap: [
          { title: "Age/Education", description: "Verify." },
          { title: "EMT Cert", description: "Complete course." },
          { title: "Driver's", description: "Valid license." },
          { title: "Background", description: "Clean." },
          { title: "Fitness", description: "Prepare." }
        ]
      },
      {
        title: "Pass Physical Tests",
        description: "Complete CPAT or similar fitness exams.",
        subroadmap: [
          { title: "Train", description: "Strength, endurance." },
          { title: "Practice CPAT", description: "Events like hose drag." },
          { title: "Schedule", description: "Test." },
          { title: "Medical Exam", description: "Pass physical." },
          { title: "Pass", description: "Cert." }
        ]
      },
      {
        title: "Attend Fire Academy",
        description: "Train in firefighting techniques, rescue, and hazmat.",
        subroadmap: [
          { title: "Apply", description: "Department." },
          { title: "Classroom", description: "Fire science." },
          { title: "Practical", description: "Live fire, rescue." },
          { title: "Hazmat", description: "Awareness level." },
          { title: "Graduate", description: "Cert." }
        ]
      },
      {
        title: "Obtain Certifications",
        description: "Earn Firefighter I/II and EMT-B certifications.",
        subroadmap: [
          { title: "FF I", description: "Basic skills." },
          { title: "FF II", description: "Advanced." },
          { title: "EMT-B", description: "Basic life support." },
          { title: "Tests", description: "Written/practical." },
          { title: "Maintain", description: "Renew." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Start as a probationary firefighter.",
        subroadmap: [
          { title: "Probation", description: "1 year training." },
          { title: "Calls", description: "Respond to emergencies." },
          { title: "Station Duties", description: "Maintenance." },
          { title: "Learn", description: "From veterans." },
          { title: "Evaluations", description: "Pass prob." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on wildland, arson investigation, or paramedic.",
        subroadmap: [
          { title: "Choose", description: "Area." },
          { title: "Training", description: "Special courses." },
          { title: "Cert", description: "Like Paramedic." },
          { title: "Experience", description: "In field." },
          { title: "Apply", description: "For unit." }
        ]
      },
      {
        title: "Advance Career",
        description: "Promote to engineer, captain, or chief.",
        subroadmap: [
          { title: "Exp", description: "Years in role." },
          { title: "Study", description: "For promo exams." },
          { title: "Leadership", description: "Courses." },
          { title: "Apply", description: "Internal." },
          { title: "Manage", description: "Teams." }
        ]
      }
    ]
  },
  {
    name: "Entrepreneur",
    roadmap: [
      {
        title: "Develop an Idea",
        description: "Identify a problem and brainstorm solutions.",
        subroadmap: [
          { title: "Problem Spot", description: "Personal pain points." },
          { title: "Brainstorm", description: "Mind maps." },
          { title: "Research", description: "Similar solutions." },
          { title: "Refine", description: "Unique value." },
          { title: "Document", description: "Idea notebook." }
        ]
      },
      {
        title: "Validate the Idea",
        description: "Conduct market research and get feedback.",
        subroadmap: [
          { title: "Surveys", description: "Google Forms." },
          { title: "Interviews", description: "Potential customers." },
          { title: "Competitor Analysis", description: "SWOT." },
          { title: "MVP Test", description: "Landing page." },
          { title: "Adjust", description: "Based on feedback." }
        ]
      },
      {
        title: "Create a Business Plan",
        description: "Outline goals, finances, and strategies.",
        subroadmap: [
          { title: "Executive Summary", description: "Overview." },
          { title: "Market Analysis", description: "Target audience." },
          { title: "Financials", description: "Projections." },
          { title: "Strategies", description: "Marketing, ops." },
          { title: "Review", description: "With mentors." }
        ]
      },
      {
        title: "Secure Funding",
        description: "Seek investors, loans, or bootstrap.",
        subroadmap: [
          { title: "Bootstrap", description: "Personal funds." },
          { title: "Loans", description: "SBA, banks." },
          { title: "Investors", description: "Pitch angels." },
          { title: "Crowdfund", description: "Kickstarter." },
          { title: "Grants", description: "For startups." }
        ]
      },
      {
        title: "Launch the Business",
        description: "Register, build a team, and start operations.",
        subroadmap: [
          { title: "Register", description: "LLC, EIN." },
          { title: "Build Team", description: "Hire key roles." },
          { title: "Set Up Ops", description: "Website, office." },
          { title: "Marketing Launch", description: "Announce." },
          { title: "Monitor", description: "Early metrics." }
        ]
      },
      {
        title: "Scale and Manage",
        description: "Grow through marketing and innovation.",
        subroadmap: [
          { title: "Marketing", description: "SEO, ads." },
          { title: "Innovate", description: "New features." },
          { title: "Manage Finances", description: "Cash flow." },
          { title: "Hire More", description: "As grow." },
          { title: "Metrics", description: "KPIs track." }
        ]
      },
      {
        title: "Learn Continuously",
        description: "Attend workshops and network with entrepreneurs.",
        subroadmap: [
          { title: "Workshops", description: "Startup events." },
          { title: "Books", description: "Lean Startup." },
          { title: "Online Courses", description: "Coursera business." },
          { title: "Network", description: "Meetups." },
          { title: "Mentors", description: "Find advisors." }
        ]
      }
    ]
  },
  {
    name: "Financial Advisor",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in finance, economics, or business.",
        subroadmap: [
          { title: "Major", description: "Finance." },
          { title: "Courses", description: "Investments, accounting." },
          { title: "Cert Prep", description: "Early for Series." },
          { title: "Interns", description: "Banks." },
          { title: "GPA", description: "High." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work in banking or investment firms.",
        subroadmap: [
          { title: "Entry Jobs", description: "Analyst." },
          { title: "Learn", description: "Client interaction." },
          { title: "Build Network", description: "Clients." },
          { title: "Log", description: "For certs." },
          { title: "Promote", description: "To advisor." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain CFP, CFA, or Series 7 licenses.",
        subroadmap: [
          { title: "Series 7", description: "FINRA exam." },
          { title: "CFP", description: "Course, exam." },
          { title: "CFA", description: "Levels 1-3." },
          { title: "Study", description: "Materials." },
          { title: "Pass", description: "All required." }
        ]
      },
      {
        title: "Build Client Base",
        description: "Network and provide financial planning services.",
        subroadmap: [
          { title: "Network", description: "Events." },
          { title: "Marketing", description: "Seminars." },
          { title: "Services", description: "Plans, advice." },
          { title: "Referrals", description: "From satisfied." },
          { title: "CRM", description: "Manage clients." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on retirement, estate, or tax planning.",
        subroadmap: [
          { title: "Choose", description: "Area." },
          { title: "Training", description: "Certs like CRPC." },
          { title: "Experience", description: "Target clients." },
          { title: "Market", description: "Niche." },
          { title: "Update Knowledge", description: "Trends." }
        ]
      },
      {
        title: "Stay Compliant",
        description: "Follow SEC regulations and ethics.",
        subroadmap: [
          { title: "Learn Regs", description: "SEC, FINRA." },
          { title: "Ethics Training", description: "Annual." },
          { title: "Audits", description: "Prepare for." },
          { title: "Documentation", description: "Client files." },
          { title: "Renew", description: "Licenses." }
        ]
      },
      {
        title: "Continue Education",
        description: "Complete CE requirements annually.",
        subroadmap: [
          { title: "Track", description: "CE hours." },
          { title: "Attend", description: "Webinars." },
          { title: "Topics", description: "Market updates." },
          { title: "Cert Renew", description: "CFP etc." },
          { title: "Stay Informed", description: "News." }
        ]
      }
    ]
  },
  {
    name: "Human Resources Manager",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in HR, business, or psychology.",
        subroadmap: [
          { title: "Major", description: "HR management." },
          { title: "Courses", description: "Labor law, org behavior." },
          { title: "Interns", description: "HR depts." },
          { title: "GPA", description: "Good." },
          { title: "Cert Prep", description: "Early." }
        ]
      },
      {
        title: "Gain Entry-Level Experience",
        description: "Start as an HR assistant or recruiter.",
        subroadmap: [
          { title: "Jobs", description: "Assistant roles." },
          { title: "Learn", description: "Recruiting, benefits." },
          { title: "Build Skills", description: "ATS software." },
          { title: "Network", description: "SHRM." },
          { title: "Promote", description: "To specialist." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain SHRM-CP or PHR credentials.",
        subroadmap: [
          { title: "Choose", description: "SHRM-CP." },
          { title: "Eligibility", description: "Exp." },
          { title: "Study", description: "SHRM materials." },
          { title: "Exam", description: "Pass." },
          { title: "Maintain", description: "Recert." }
        ]
      },
      {
        title: "Develop Skills",
        description: "Learn labor laws, employee relations, and talent management.",
        subroadmap: [
          { title: "Labor Laws", description: "FLSA, ADA." },
          { title: "Employee Relations", description: "Conflict resolution." },
          { title: "Talent Mgmt", description: "Performance reviews." },
          { title: "Training", description: "Workshops." },
          { title: "Apply", description: "In role." }
        ]
      },
      {
        title: "Advance to Management",
        description: "Lead HR teams and strategic initiatives.",
        subroadmap: [
          { title: "Leadership", description: "Manage staff." },
          { title: "Strategic", description: "HR planning." },
          { title: "Apply", description: "Manager jobs." },
          { title: "Projects", description: "Lead changes." },
          { title: "Eval", description: "Performance." }
        ]
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn an MBA or master's in HR.",
        subroadmap: [
          { title: "Select", description: "MHRM." },
          { title: "Apply", description: "GRE." },
          { title: "Complete", description: "Courses." },
          { title: "Thesis", description: "HR topic." },
          { title: "Use", description: "Senior roles." }
        ]
      },
      {
        title: "Network",
        description: "Join SHRM and attend conferences.",
        subroadmap: [
          { title: "Join SHRM", description: "Membership." },
          { title: "Confs", description: "Annual SHRM." },
          { title: "Local Chapters", description: "Meetups." },
          { title: "Online", description: "LinkedIn groups." },
          { title: "Mentors", description: "Find." }
        ]
      }
    ]
  },
  {
    name: "Sales Manager",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in business, marketing, or related field.",
        subroadmap: [
          { title: "Major", description: "Business." },
          { title: "Courses", description: "Sales, management." },
          { title: "Interns", description: "Sales roles." },
          { title: "GPA", description: "Good." },
          { title: "Cert", description: "Early." }
        ]
      },
      {
        title: "Gain Sales Experience",
        description: "Start as a sales representative.",
        subroadmap: [
          { title: "Entry Sales", description: "Rep jobs." },
          { title: "Learn Techniques", description: "Closing, prospecting." },
          { title: "Meet Quotas", description: "Build track record." },
          { title: "Network", description: "Clients." },
          { title: "Promote", description: "To senior rep." }
        ]
      },
      {
        title: "Develop Leadership Skills",
        description: "Learn team management and motivation techniques.",
        subroadmap: [
          { title: "Courses", description: "Leadership training." },
          { title: "Mentor", description: "Juniors." },
          { title: "Books", description: "How to Win Friends." },
          { title: "Practice", description: "Lead small teams." },
          { title: "Feedback", description: "360 reviews." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain sales management or CRM certifications.",
        subroadmap: [
          { title: "Choose", description: "CSM or HubSpot." },
          { title: "Study", description: "Online." },
          { title: "Exam", description: "Pass." },
          { title: "CRM", description: "Salesforce cert." },
          { title: "Maintain", description: "Updates." }
        ]
      },
      {
        title: "Build Strategies",
        description: "Master forecasting, pipeline management, and analytics.",
        subroadmap: [
          { title: "Forecasting", description: "Sales predictions." },
          { title: "Pipeline", description: "CRM tools." },
          { title: "Analytics", description: "Data analysis." },
          { title: "Practice", description: "In role." },
          { title: "Tools", description: "Excel, Tableau." }
        ]
      },
      {
        title: "Advance Career",
        description: "Move to director or VP roles.",
        subroadmap: [
          { title: "Exp", description: "3-5 years manager." },
          { title: "Apply", description: "Higher positions." },
          { title: "Strategic", description: "Company-wide." },
          { title: "Network", description: "Industry." },
          { title: "Achievements", description: "Show results." }
        ]
      },
      {
        title: "Stay Updated",
        description: "Follow sales trends and technologies.",
        subroadmap: [
          { title: "Read", description: "Sales blogs." },
          { title: "Confs", description: "Sales events." },
          { title: "Tech", description: "New CRM." },
          { title: "Training", description: "Ongoing." },
          { title: "Network", description: "Peers." }
        ]
      }
    ]
  },
  {
    name: "Operations Manager",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in business administration or operations.",
        subroadmap: [
          { title: "Major", description: "Ops management." },
          { title: "Courses", description: "Supply chain, logistics." },
          { title: "Interns", description: "Ops depts." },
          { title: "GPA", description: "Good." },
          { title: "Cert Prep", description: "Early." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work in logistics, supply chain, or production.",
        subroadmap: [
          { title: "Entry", description: "Coordinator." },
          { title: "Learn", description: "Processes." },
          { title: "Projects", description: "Improvement." },
          { title: "Network", description: "APICS." },
          { title: "Promote", description: "To supervisor." }
        ]
      },
      {
        title: "Learn Tools",
        description: "Master ERP systems, Lean, and Six Sigma.",
        subroadmap: [
          { title: "ERP", description: "SAP training." },
          { title: "Lean", description: "Principles course." },
          { title: "Six Sigma", description: "Yellow belt." },
          { title: "Practice", description: "Simulations." },
          { title: "Apply", description: "Work projects." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain CPIM, CSCP, or PMP.",
        subroadmap: [
          { title: "Choose", description: "CPIM for inventory." },
          { title: "Eligibility", description: "Exp." },
          { title: "Study", description: "APICS materials." },
          { title: "Exam", description: "Pass." },
          { title: "Maintain", description: "CE." }
        ]
      },
      {
        title: "Develop Leadership",
        description: "Manage teams and process improvements.",
        subroadmap: [
          { title: "Team Mgmt", description: "Lead small groups." },
          { title: "Improvements", description: "Kaizen events." },
          { title: "Training", description: "Leadership courses." },
          { title: "Feedback", description: "From teams." },
          { title: "Results", description: "Measurable." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on manufacturing, retail, or healthcare operations.",
        subroadmap: [
          { title: "Choose", description: "Industry." },
          { title: "Exp", description: "Targeted." },
          { title: "Certs", description: "Industry-specific." },
          { title: "Network", description: "Groups." },
          { title: "Projects", description: "In focus." }
        ]
      },
      {
        title: "Pursue MBA",
        description: "Earn an advanced degree for executive roles.",
        subroadmap: [
          { title: "Apply", description: "GMAT." },
          { title: "Complete", description: "MBA program." },
          { title: "Focus Ops", description: "Electives." },
          { title: "Network", description: "Alumni." },
          { title: "Use", description: "For promotion." }
        ]
      }
    ]
  },
  {
    name: "Web Developer",
    roadmap: [
      {
        title: "Learn HTML/CSS/JS",
        description: "Master front-end basics.",
        subroadmap: [
          { title: "HTML", description: "Structure." },
          { title: "CSS", description: "Styling." },
          { title: "JS", description: "Interactivity." },
          { title: "Courses", description: "freeCodeCamp." },
          { title: "Practice", description: "Simple pages." }
        ]
      },
      {
        title: "Study Frameworks",
        description: "Learn React, Vue, or Angular.",
        subroadmap: [
          { title: "Choose", description: "React popular." },
          { title: "Tutorials", description: "Official docs." },
          { title: "Build Apps", description: "Todo list." },
          { title: "State Mgmt", description: "Redux." },
          { title: "Projects", description: "Integrate." }
        ]
      },
      {
        title: "Back-End Skills",
        description: "Study Node.js, Python, or PHP with databases.",
        subroadmap: [
          { title: "Choose Lang", description: "Node.js." },
          { title: "Learn Server", description: "Express." },
          { title: "Databases", description: "MongoDB/SQL." },
          { title: "API", description: "REST." },
          { title: "Practice", description: "Full-stack app." }
        ]
      },
      {
        title: "Build Projects",
        description: "Create websites and apps for portfolio.",
        subroadmap: [
          { title: "Ideas", description: "Blog, e-comm." },
          { title: "Plan", description: "Wireframes." },
          { title: "Code", description: "Front/back." },
          { title: "Deploy", description: "Heroku." },
          { title: "Portfolio", description: "Showcase." }
        ]
      },
      {
        title: "Learn Version Control",
        description: "Use Git and GitHub.",
        subroadmap: [
          { title: "Install", description: "Git." },
          { title: "Commands", description: "Commit, branch." },
          { title: "GitHub", description: "Repos." },
          { title: "Collaborate", description: "PRs." },
          { title: "Practice", description: "On projects." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Freelance or intern.",
        subroadmap: [
          { title: "Freelance", description: "Upwork." },
          { title: "Intern", description: "Tech companies." },
          { title: "Contribute OS", description: "GitHub." },
          { title: "Network", description: "Meetups." },
          { title: "Jobs", description: "Apply junior." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on full-stack, e-commerce, or SEO.",
        subroadmap: [
          { title: "Choose", description: "Full-stack." },
          { title: "Advanced", description: "Courses." },
          { title: "Projects", description: "Specialized." },
          { title: "Certs", description: "If available." },
          { title: "Market", description: "Skills." }
        ]
      }
    ]
  },
  {
    name: "Mobile App Developer",
    roadmap: [
      {
        title: "Learn Programming Languages",
        description: "Master Swift for iOS or Kotlin/Java for Android.",
        subroadmap: [
          { title: "Choose Platform", description: "iOS/Android." },
          { title: "Learn Lang", description: "Swift tutorials." },
          { title: "Basics", description: "Syntax, OOP." },
          { title: "Practice", description: "Simple apps." },
          { title: "Advanced", description: "Async, networking." }
        ]
      },
      {
        title: "Study Frameworks",
        description: "Learn Flutter, React Native for cross-platform.",
        subroadmap: [
          { title: "Choose", description: "Flutter." },
          { title: "Install", description: "SDK." },
          { title: "Tutorials", description: "Build UI." },
          { title: "State Mgmt", description: "Provider." },
          { title: "Projects", description: "Cross-platform app." }
        ]
      },
      {
        title: "Understand UI/UX",
        description: "Design user-friendly interfaces.",
        subroadmap: [
          { title: "Principles", description: "User-centered." },
          { title: "Tools", description: "Figma for mobile." },
          { title: "Wireframes", description: "Design apps." },
          { title: "Testing", description: "Usability." },
          { title: "Apply", description: "In code." }
        ]
      },
      {
        title: "Build Apps",
        description: "Create personal projects and publish to stores.",
        subroadmap: [
          { title: "Ideas", description: "Weather, notes." },
          { title: "Develop", description: "Full app." },
          { title: "Test", description: "Devices, emulators." },
          { title: "Publish", description: "App Store, Play." },
          { title: "Update", description: "Based on feedback." }
        ]
      },
      {
        title: "Learn APIs and Databases",
        description: "Integrate back-end services.",
        subroadmap: [
          { title: "APIs", description: "REST, GraphQL." },
          { title: "Databases", description: "Firebase." },
          { title: "Auth", description: "User login." },
          { title: "Practice", description: "App with backend." },
          { title: "Security", description: "Best practices." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Freelance or work at tech companies.",
        subroadmap: [
          { title: "Freelance", description: "Apps for clients." },
          { title: "Jobs", description: "Junior dev." },
          { title: "OS Contribute", description: "Mobile repos." },
          { title: "Portfolio", description: "Apps." },
          { title: "Network", description: "Dev meetups." }
        ]
      },
      {
        title: "Stay Updated",
        description: "Follow mobile tech trends.",
        subroadmap: [
          { title: "Blogs", description: "Medium mobile." },
          { title: "Confs", description: "Google I/O." },
          { title: "Updates", description: "iOS/Android releases." },
          { title: "Courses", description: "New frameworks." },
          { title: "Community", description: "Stack Overflow." }
        ]
      }
    ]
  },
  {
    name: "UX/UI Designer",
    roadmap: [
      {
        title: "Learn Design Principles",
        description: "Study user-centered design and wireframing.",
        subroadmap: [
          { title: "Principles", description: "Don Norman books." },
          { title: "User-Centered", description: "Personas." },
          { title: "Wireframing", description: "Sketches." },
          { title: "Courses", description: "Google UX cert." },
          { title: "Practice", description: "Redesign apps." }
        ]
      },
      {
        title: "Master Tools",
        description: "Become proficient in Figma, Sketch, or Adobe XD.",
        subroadmap: [
          { title: "Choose Tool", description: "Figma free." },
          { title: "Tutorials", description: "Official." },
          { title: "UI Elements", description: "Buttons, icons." },
          { title: "Prototyping", description: "Interactive." },
          { title: "Collaborate", description: "Share files." }
        ]
      },
      {
        title: "Understand User Research",
        description: "Learn testing, personas, and journeys.",
        subroadmap: [
          { title: "Research Methods", description: "Interviews." },
          { title: "Personas", description: "Create profiles." },
          { title: "Journeys", description: "Maps." },
          { title: "Testing", description: "Usability sessions." },
          { title: "Apply", description: "In projects." }
        ]
      },
      {
        title: "Build Portfolio",
        description: "Create case studies of designs.",
        subroadmap: [
          { title: "Projects", description: "App redesigns." },
          { title: "Case Studies", description: "Process, outcomes." },
          { title: "Site", description: "Behance or personal." },
          { title: "Variety", description: "Web, mobile." },
          { title: "Update", description: "New work." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Intern or freelance.",
        subroadmap: [
          { title: "Internships", description: "Tech companies." },
          { title: "Freelance", description: "Upwork UI gigs." },
          { title: "Collaborate", description: "With devs." },
          { title: "Feedback", description: "From peers." },
          { title: "Jobs", description: "Junior UX." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on mobile, web, or accessibility.",
        subroadmap: [
          { title: "Choose", description: "Mobile UX." },
          { title: "Courses", description: "Specialized." },
          { title: "Projects", description: "In niche." },
          { title: "Certs", description: "Accessibility." },
          { title: "Market", description: "Skills." }
        ]
      },
      {
        title: "Certify",
        description: "Earn Google UX Design certificate.",
        subroadmap: [
          { title: "Enroll", description: "Coursera." },
          { title: "Complete Modules", description: "7 courses." },
          { title: "Projects", description: "Build portfolio." },
          { title: "Exam", description: "None, certificate." },
          { title: "Add to Resume", description: "Showcase." }
        ]
      }
    ]
  },
  {
    name: "Data Analyst",
    roadmap: [
      {
        title: "Learn Statistics",
        description: "Cover descriptive and inferential stats.",
        subroadmap: [
          { title: "Descriptive", description: "Mean, median." },
          { title: "Inferential", description: "Hypothesis testing." },
          { title: "Courses", description: "Khan Academy." },
          { title: "Practice", description: "Problems." },
          { title: "Apply", description: "Data sets." }
        ]
      },
      {
        title: "Programming Skills",
        description: "Master Python, R, or Excel.",
        subroadmap: [
          { title: "Choose", description: "Python." },
          { title: "Basics", description: "Syntax." },
          { title: "Libraries", description: "Pandas." },
          { title: "Excel", description: "Advanced functions." },
          { title: "Projects", description: "Data manipulation." }
        ]
      },
      {
        title: "Data Tools",
        description: "Learn SQL, Tableau, or Power BI.",
        subroadmap: [
          { title: "SQL", description: "Queries." },
          { title: "Visualization", description: "Tableau public." },
          { title: "Practice", description: "Build dashboards." },
          { title: "Integrate", description: "With Python." },
          { title: "Cert", description: "Tableau desktop." }
        ]
      },
      {
        title: "Build Projects",
        description: "Analyze datasets and create reports.",
        subroadmap: [
          { title: "Find Data", description: "Kaggle." },
          { title: "Analyze", description: "Insights." },
          { title: "Report", description: "Visuals, conclusions." },
          { title: "Portfolio", description: "GitHub." },
          { title: "Share", description: "LinkedIn." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Intern or work in business intelligence.",
        subroadmap: [
          { title: "Interns", description: "Data roles." },
          { title: "Jobs", description: "Junior analyst." },
          { title: "Freelance", description: "Data gigs." },
          { title: "Network", description: "Meetups." },
          { title: "Build", description: "Real-world exp." }
        ]
      },
      {
        title: "Certify",
        description: "Earn Google Data Analytics certificate.",
        subroadmap: [
          { title: "Enroll", description: "Coursera." },
          { title: "Modules", description: "8 courses." },
          { title: "Projects", description: "Case studies." },
          { title: "Complete", description: "Certificate." },
          { title: "Resume", description: "Add." }
        ]
      },
      {
        title: "Advance",
        description: "Move to senior analyst roles.",
        subroadmap: [
          { title: "Exp", description: "2-3 years." },
          { title: "Skills", description: "Advanced ML." },
          { title: "Apply", description: "Senior positions." },
          { title: "Lead", description: "Projects." },
          { title: "Mentor", description: "Juniors." }
        ]
      }
    ]
  },
  {
    name: "AI Engineer",
    roadmap: [
      {
        title: "Learn Programming",
        description: "Master Python and libraries like TensorFlow.",
        subroadmap: [
          { title: "Python Basics", description: "Syntax." },
          { title: "Advanced", description: "OOP, libs." },
          { title: "TensorFlow", description: "Tutorials." },
          { title: "Practice", description: "Scripts." },
          { title: "Projects", description: "Simple models." }
        ]
      },
      {
        title: "Study Math",
        description: "Cover linear algebra, calculus, and probability.",
        subroadmap: [
          { title: "Linear Algebra", description: "Matrices." },
          { title: "Calculus", description: "Derivatives." },
          { title: "Probability", description: "Distributions." },
          { title: "Courses", description: "MIT OCW." },
          { title: "Apply", description: "To AI concepts." }
        ]
      },
      {
        title: "Machine Learning Basics",
        description: "Learn algorithms and models.",
        subroadmap: [
          { title: "Algorithms", description: "Regression, trees." },
          { title: "Models", description: "Build with scikit." },
          { title: "Courses", description: "Coursera ML." },
          { title: "Practice", description: "Kaggle datasets." },
          { title: "Evaluate", description: "Metrics." }
        ]
      },
      {
        title: "Deep Learning",
        description: "Study neural networks and CNNs/RNNs.",
        subroadmap: [
          { title: "NN Basics", description: "Layers, activation." },
          { title: "CNN", description: "Image class." },
          { title: "RNN", description: "Sequences." },
          { title: "Frameworks", description: "Keras." },
          { title: "Projects", description: "Image recog." }
        ]
      },
      {
        title: "Build Projects",
        description: "Create AI apps like chatbots or image recognizers.",
        subroadmap: [
          { title: "Ideas", description: "Chatbot." },
          { title: "Develop", description: "Using libs." },
          { title: "Deploy", description: "Heroku." },
          { title: "Test", description: "Accuracy." },
          { title: "Portfolio", description: "GitHub." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work on research or industry projects.",
        subroadmap: [
          { title: "Interns", description: "AI companies." },
          { title: "Research", description: "University labs." },
          { title: "Jobs", description: "Junior AI." },
          { title: "OS", description: "Contribute." },
          { title: "Network", description: "Confs." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on NLP, computer vision, or robotics.",
        subroadmap: [
          { title: "Choose", description: "NLP." },
          { title: "Courses", description: "Specialized." },
          { title: "Projects", description: "Sentiment analysis." },
          { title: "Papers", description: "Read latest." },
          { title: "Cert", description: "If available." }
        ]
      }
    ]
  },
  {
    name: "Cybersecurity Specialist",
    roadmap: [
      {
        title: "Learn Networking Basics",
        description: "Understand TCP/IP, firewalls, and OS.",
        subroadmap: [
          { title: "TCP/IP", description: "Protocols." },
          { title: "Firewalls", description: "Config." },
          { title: "OS", description: "Linux, Windows." },
          { title: "Courses", description: "CompTIA Net+." },
          { title: "Practice", description: "Home lab." }
        ]
      },
      {
        title: "Study Security Concepts",
        description: "Learn encryption, vulnerabilities, and ethical hacking.",
        subroadmap: [
          { title: "Encryption", description: "AES, RSA." },
          { title: "Vulns", description: "Common exploits." },
          { title: "Ethical Hack", description: "Basics." },
          { title: "Courses", description: "Cybrary." },
          { title: "Labs", description: "TryHackMe." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain CompTIA Security+, CISSP, or CEH.",
        subroadmap: [
          { title: "Sec+", description: "Entry." },
          { title: "Study", description: "Books, videos." },
          { title: "Exam", description: "Pass." },
          { title: "Advanced", description: "CISSP after exp." },
          { title: "Maintain", description: "CE." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work in IT support or security operations.",
        subroadmap: [
          { title: "IT Support", description: "Help desk." },
          { title: "SOC", description: "Analyst." },
          { title: "Projects", description: "Home security." },
          { title: "Intern", description: "Cyber firms." },
          { title: "Build", description: "Resume." }
        ]
      },
      {
        title: "Practice Tools",
        description: "Use Wireshark, Metasploit, or SIEM systems.",
        subroadmap: [
          { title: "Wireshark", description: "Packet analysis." },
          { title: "Metasploit", description: "Exploits." },
          { title: "SIEM", description: "Splunk free." },
          { title: "Labs", description: "Virtual machines." },
          { title: "Projects", description: "Pen tests." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on penetration testing or forensics.",
        subroadmap: [
          { title: "Choose", description: "Pen testing." },
          { title: "Certs", description: "OSCP." },
          { title: "Exp", description: "Targeted." },
          { title: "Tools", description: "Specialized." },
          { title: "Network", description: "Groups." }
        ]
      },
      {
        title: "Stay Updated",
        description: "Follow threat landscapes and trends.",
        subroadmap: [
          { title: "Blogs", description: "Krebs on Security." },
          { title: "Confs", description: "Black Hat." },
          { title: "News", description: "Daily threats." },
          { title: "Communities", description: "Reddit cybersecurity." },
          { title: "Training", description: "Ongoing." }
        ]
      }
    ]
  },
  {
    name: "Environmental Scientist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in environmental science or biology.",
        subroadmap: [
          { title: "Major", description: "Env science." },
          { title: "Courses", description: "Ecology, chemistry." },
          { title: "Fieldwork", description: "Labs." },
          { title: "GPA", description: "High." },
          { title: "Interns", description: "Agencies." }
        ]
      },
      {
        title: "Gain Field Experience",
        description: "Intern with agencies or research labs.",
        subroadmap: [
          { title: "Apply", description: "EPA, NGOs." },
          { title: "Field", description: "Sampling, surveys." },
          { title: "Lab", description: "Analysis." },
          { title: "Network", description: "Supervisors." },
          { title: "Document", description: "Resume." }
        ]
      },
      {
        title: "Learn Tools",
        description: "Master GIS, data analysis, and lab techniques.",
        subroadmap: [
          { title: "GIS", description: "ArcGIS tutorials." },
          { title: "Data", description: "R or Python." },
          { title: "Lab", description: "Soil, water testing." },
          { title: "Practice", description: "Projects." },
          { title: "Cert", description: "GIS cert." }
        ]
      },
      {
        title: "Pursue Graduate Degree",
        description: "Earn a master's for advanced research.",
        subroadmap: [
          { title: "Apply", description: "GRE." },
          { title: "Program", description: "M.S. env." },
          { title: "Research", description: "Thesis." },
          { title: "Publish", description: "Findings." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain CEP or other environmental credentials.",
        subroadmap: [
          { title: "Choose", description: "CEP." },
          { title: "Eligibility", description: "Exp." },
          { title: "Study", description: "Materials." },
          { title: "Exam", description: "Pass." },
          { title: "Maintain", description: "CE." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on conservation, pollution, or climate change.",
        subroadmap: [
          { title: "Choose", description: "Climate." },
          { title: "Courses", description: "Specialized." },
          { title: "Projects", description: "In area." },
          { title: "Network", description: "Groups." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Network",
        description: "Join ESA and attend conferences.",
        subroadmap: [
          { title: "Join ESA", description: "Membership." },
          { title: "Confs", description: "Annual." },
          { title: "Local", description: "Chapters." },
          { title: "Online", description: "Forums." },
          { title: "Collaborate", description: "Research." }
        ]
      }
    ]
  },
  {
    name: "Biologist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in biology or related field.",
        subroadmap: [
          { title: "Major", description: "Biology." },
          { title: "Courses", description: "Cell bio, genetics." },
          { title: "Labs", description: "Hands-on." },
          { title: "GPA", description: "High." },
          { title: "Research", description: "Undergrad." }
        ]
      },
      {
        title: "Gain Lab Experience",
        description: "Work in research labs or internships.",
        subroadmap: [
          { title: "Apply", description: "University labs." },
          { title: "Techniques", description: "PCR, microscopy." },
          { title: "Interns", description: "Pharma, gov." },
          { title: "Document", description: "Skills." },
          { title: "Network", description: "PIs." }
        ]
      },
      {
        title: "Pursue Graduate Studies",
        description: "Earn a master's or PhD for specialization.",
        subroadmap: [
          { title: "Apply", description: "GRE." },
          { title: "Program", description: "PhD biology." },
          { title: "Research", description: "Dissertation." },
          { title: "Teach", description: "TA." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Conduct Research",
        description: "Participate in fieldwork or experiments.",
        subroadmap: [
          { title: "Design", description: "Experiments." },
          { title: "Field/Lab", description: "Data collection." },
          { title: "Analyze", description: "Stats." },
          { title: "Collaborate", description: "Teams." },
          { title: "Fund", description: "Grants." }
        ]
      },
      {
        title: "Publish Findings",
        description: "Write papers and present at conferences.",
        subroadmap: [
          { title: "Write", description: "Manuscripts." },
          { title: "Submit", description: "Journals." },
          { title: "Present", description: "Posters, talks." },
          { title: "Confs", description: "Attend." },
          { title: "Citations", description: "Build h-index." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on marine, molecular, or ecology.",
        subroadmap: [
          { title: "Choose", description: "Marine." },
          { title: "Courses", description: "Special." },
          { title: "Research", description: "In field." },
          { title: "Certs", description: "If avail." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Career Advancement",
        description: "Move to academia, industry, or government.",
        subroadmap: [
          { title: "Post-Doc", description: "For academia." },
          { title: "Apply Jobs", description: "Labs, agencies." },
          { title: "Tenure", description: "If prof." },
          { title: "Lead", description: "Projects." },
          { title: "Network", description: "Ongoing." }
        ]
      }
    ]
  },
  {
    name: "Chemist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in chemistry.",
        subroadmap: [
          { title: "Major", description: "Chemistry." },
          { title: "Courses", description: "Organic, physical." },
          { title: "Labs", description: "Experiments." },
          { title: "GPA", description: "High." },
          { title: "Research", description: "Undergrad." }
        ]
      },
      {
        title: "Gain Lab Skills",
        description: "Work in university or industry labs.",
        subroadmap: [
          { title: "University Labs", description: "Assistant." },
          { title: "Techniques", description: "Spectroscopy." },
          { title: "Safety", description: "Protocols." },
          { title: "Interns", description: "Pharma." },
          { title: "Document", description: "Skills." }
        ]
      },
      {
        title: "Pursue Advanced Degrees",
        description: "Earn a master's or PhD for research roles.",
        subroadmap: [
          { title: "Apply", description: "GRE." },
          { title: "Program", description: "PhD chem." },
          { title: "Research", description: "Thesis." },
          { title: "Publish", description: "During." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on organic, analytical, or physical chemistry.",
        subroadmap: [
          { title: "Choose", description: "Organic." },
          { title: "Courses", description: "Advanced." },
          { title: "Research", description: "In specialty." },
          { title: "Certs", description: "ACS." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain ACS certification.",
        subroadmap: [
          { title: "Eligibility", description: "Degree." },
          { title: "Apply", description: "ACS." },
          { title: "Exam", description: "If required." },
          { title: "Portfolio", description: "Work." },
          { title: "Maintain", description: "CE." }
        ]
      },
      {
        title: "Conduct Research",
        description: "Develop new compounds or processes.",
        subroadmap: [
          { title: "Design", description: "Experiments." },
          { title: "Lab Work", description: "Synthesis." },
          { title: "Analyze", description: "Data." },
          { title: "Collaborate", description: "Teams." },
          { title: "Fund", description: "Grants." }
        ]
      },
      {
        title: "Advance Career",
        description: "Move to senior scientist or management.",
        subroadmap: [
          { title: "Exp", description: "Years." },
          { title: "Lead", description: "Projects." },
          { title: "Publish", description: "Papers." },
          { title: "Apply", description: "Senior roles." },
          { title: "Manage", description: "Teams." }
        ]
      }
    ]
  },
  {
    name: "Physicist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in physics.",
        subroadmap: [
          { title: "Major", description: "Physics." },
          { title: "Courses", description: "Mechanics, quantum." },
          { title: "Labs", description: "Experiments." },
          { title: "GPA", description: "High." },
          { title: "Research", description: "Undergrad." }
        ]
      },
      {
        title: "Gain Research Experience",
        description: "Participate in labs or internships.",
        subroadmap: [
          { title: "Labs", description: "University." },
          { title: "Interns", description: "National labs." },
          { title: "Projects", description: "Data analysis." },
          { title: "Present", description: "Posters." },
          { title: "Network", description: "Professors." }
        ]
      },
      {
        title: "Pursue Graduate Degrees",
        description: "Earn a PhD for advanced roles.",
        subroadmap: [
          { title: "Apply", description: "GRE physics." },
          { title: "Program", description: "PhD." },
          { title: "Coursework", description: "Advanced." },
          { title: "Qualifiers", description: "Exams." },
          { title: "Dissertation", description: "Original research." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on quantum, astrophysics, or particle physics.",
        subroadmap: [
          { title: "Choose", description: "Quantum." },
          { title: "Courses", description: "Special." },
          { title: "Research", description: "In field." },
          { title: "Confs", description: "Attend." },
          { title: "Publish", description: "Specialty." }
        ]
      },
      {
        title: "Publish and Present",
        description: "Share findings in journals and conferences.",
        subroadmap: [
          { title: "Write Papers", description: "With advisors." },
          { title: "Submit", description: "PRD, Nature." },
          { title: "Present", description: "APS meetings." },
          { title: "Collaborate", description: "International." },
          { title: "Citations", description: "Build impact." }
        ]
      },
      {
        title: "Career Path",
        description: "Work in academia, industry, or government labs.",
        subroadmap: [
          { title: "Post-Doc", description: "Research." },
          { title: "Apply", description: "Jobs." },
          { title: "Academia", description: "Prof." },
          { title: "Industry", description: "Tech." },
          { title: "Gov", description: "NASA, DOE." }
        ]
      },
      {
        title: "Continue Learning",
        description: "Stay updated with new theories and technologies.",
        subroadmap: [
          { title: "Read", description: "ArXiv." },
          { title: "Confs", description: "Ongoing." },
          { title: "Courses", description: "Online." },
          { title: "Collaborate", description: "New projects." },
          { title: "Teach", description: "Share knowledge." }
        ]
      }
    ]
  },
  {
    name: "Mathematician",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in mathematics.",
        subroadmap: [
          { title: "Major", description: "Math." },
          { title: "Courses", description: "Calculus, algebra." },
          { title: "Proofs", description: "Learn writing." },
          { title: "GPA", description: "High." },
          { title: "Research", description: "REU." }
        ]
      },
      {
        title: "Develop Analytical Skills",
        description: "Study algebra, calculus, and statistics.",
        subroadmap: [
          { title: "Algebra", description: "Abstract." },
          { title: "Calculus", description: "Multivariable." },
          { title: "Stats", description: "Probability." },
          { title: "Practice", description: "Problems." },
          { title: "Software", description: "Matlab." }
        ]
      },
      {
        title: "Pursue Graduate Degrees",
        description: "Earn a master's or PhD.",
        subroadmap: [
          { title: "Apply", description: "GRE math." },
          { title: "Program", description: "PhD." },
          { title: "Quals", description: "Exams." },
          { title: "Research", description: "Thesis." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Gain Research Experience",
        description: "Work on theorems or applications.",
        subroadmap: [
          { title: "Projects", description: "With profs." },
          { title: "Theorems", description: "Prove." },
          { title: "Applications", description: "Modeling." },
          { title: "Collaborate", description: "Teams." },
          { title: "Present", description: "Seminars." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on applied, pure, or computational math.",
        subroadmap: [
          { title: "Choose", description: "Applied." },
          { title: "Courses", description: "Special." },
          { title: "Research", description: "In area." },
          { title: "Tools", description: "Software." },
          { title: "Publish", description: "Specialty." }
        ]
      },
      {
        title: "Publish Work",
        description: "Contribute to journals.",
        subroadmap: [
          { title: "Write", description: "Papers." },
          { title: "Submit", description: "AMS journals." },
          { title: "Review", description: "Peer." },
          { title: "Revise", description: "Based on feedback." },
          { title: "Citations", description: "Build." }
        ]
      },
      {
        title: "Career Advancement",
        description: "Teach, research, or work in industry.",
        subroadmap: [
          { title: "Post-Doc", description: "Research." },
          { title: "Academia", description: "Prof." },
          { title: "Industry", description: "Data, finance." },
          { title: "Apply", description: "Jobs." },
          { title: "Lead", description: "Projects." }
        ]
      }
    ]
  },
  {
    name: "Economist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in economics.",
        subroadmap: [
          { title: "Major", description: "Econ." },
          { title: "Courses", description: "Micro, macro." },
          { title: "Stats", description: "Econometrics." },
          { title: "GPA", description: "High." },
          { title: "Research", description: "Undergrad." }
        ]
      },
      {
        title: "Study Advanced Topics",
        description: "Learn micro/macro economics and econometrics.",
        subroadmap: [
          { title: "Micro", description: "Markets." },
          { title: "Macro", description: "GDP, inflation." },
          { title: "Econometrics", description: "Regression." },
          { title: "Software", description: "Stata, R." },
          { title: "Practice", description: "Data analysis." }
        ]
      },
      {
        title: "Pursue Graduate Degrees",
        description: "Earn a master's or PhD.",
        subroadmap: [
          { title: "Apply", description: "GRE." },
          { title: "Program", description: "PhD econ." },
          { title: "Coursework", description: "Advanced." },
          { title: "Quals", description: "Exams." },
          { title: "Dissertation", description: "Research." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Intern at banks or government agencies.",
        subroadmap: [
          { title: "Interns", description: "Fed, World Bank." },
          { title: "Analysis", description: "Economic data." },
          { title: "Reports", description: "Write." },
          { title: "Network", description: "Professionals." },
          { title: "Jobs", description: "Entry economist." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on labor, international, or environmental economics.",
        subroadmap: [
          { title: "Choose", description: "Labor." },
          { title: "Courses", description: "Special." },
          { title: "Research", description: "In field." },
          { title: "Publish", description: "Specialty." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Publish Research",
        description: "Contribute to economic journals.",
        subroadmap: [
          { title: "Research", description: "Topics." },
          { title: "Write", description: "Papers." },
          { title: "Submit", description: "AER." },
          { title: "Present", description: "AEA meetings." },
          { title: "Collaborate", description: "Co-authors." }
        ]
      },
      {
        title: "Career Path",
        description: "Work in academia, policy, or finance.",
        subroadmap: [
          { title: "Academia", description: "Prof." },
          { title: "Policy", description: "Gov agencies." },
          { title: "Finance", description: "Banks." },
          { title: "Apply", description: "Positions." },
          { title: "Advance", description: "Senior." }
        ]
      }
    ]
  },
  {
    name: "Sociologist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in sociology.",
        subroadmap: [
          { title: "Major", description: "Sociology." },
          { title: "Courses", description: "Theory, methods." },
          { title: "Research", description: "Projects." },
          { title: "GPA", description: "High." },
          { title: "Interns", description: "Social orgs." }
        ]
      },
      {
        title: "Study Social Theories",
        description: "Learn about inequality, culture, and institutions.",
        subroadmap: [
          { title: "Theories", description: "Marx, Durkheim." },
          { title: "Inequality", description: "Class, race." },
          { title: "Culture", description: "Norms." },
          { title: "Institutions", description: "Family, education." },
          { title: "Read", description: "Key texts." }
        ]
      },
      {
        title: "Pursue Graduate Degrees",
        description: "Earn a master's or PhD.",
        subroadmap: [
          { title: "Apply", description: "GRE." },
          { title: "Program", description: "PhD soc." },
          { title: "Coursework", description: "Advanced." },
          { title: "Quals", description: "Exams." },
          { title: "Dissertation", description: "Research." }
        ]
      },
      {
        title: "Conduct Research",
        description: "Use surveys, interviews, or data analysis.",
        subroadmap: [
          { title: "Methods", description: "Qual/quant." },
          { title: "Design", description: "Studies." },
          { title: "Collect Data", description: "Fieldwork." },
          { title: "Analyze", description: "SPSS." },
          { title: "Ethics", description: "IRB." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on criminology, education, or urban sociology.",
        subroadmap: [
          { title: "Choose", description: "Criminology." },
          { title: "Courses", description: "Special." },
          { title: "Research", description: "In area." },
          { title: "Publish", description: "Specialty." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Publish Findings",
        description: "Write articles and books.",
        subroadmap: [
          { title: "Articles", description: "Journals." },
          { title: "Books", description: "Monographs." },
          { title: "Submit", description: "ASR." },
          { title: "Present", description: "ASA." },
          { title: "Collaborate", description: "Co-authors." }
        ]
      },
      {
        title: "Career Advancement",
        description: "Teach or work in policy/research.",
        subroadmap: [
          { title: "Academia", description: "Prof." },
          { title: "Policy", description: "Think tanks." },
          { title: "Research", description: "Institutes." },
          { title: "Apply", description: "Jobs." },
          { title: "Lead", description: "Projects." }
        ]
      }
    ]
  },
  {
    name: "Historian",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in history.",
        subroadmap: [
          { title: "Major", description: "History." },
          { title: "Courses", description: "Periods, regions." },
          { title: "Research", description: "Papers." },
          { title: "GPA", description: "High." },
          { title: "Interns", description: "Museums." }
        ]
      },
      {
        title: "Develop Research Skills",
        description: "Learn archival work and analysis.",
        subroadmap: [
          { title: "Archives", description: "Primary sources." },
          { title: "Analysis", description: "Critical thinking." },
          { title: "Writing", description: "Historiography." },
          { title: "Tools", description: "Databases." },
          { title: "Practice", description: "Projects." }
        ]
      },
      {
        title: "Pursue Graduate Degrees",
        description: "Earn a master's or PhD.",
        subroadmap: [
          { title: "Apply", description: "GRE." },
          { title: "MA", description: "Thesis." },
          { title: "PhD", description: "Dissertation." },
          { title: "Fields", description: "Exams." },
          { title: "Graduate", description: "Degree." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on ancient, modern, or regional history.",
        subroadmap: [
          { title: "Choose", description: "Modern Europe." },
          { title: "Courses", description: "Special." },
          { title: "Research", description: "In area." },
          { title: "Languages", description: "If needed." },
          { title: "Publish", description: "Specialty." }
        ]
      },
      {
        title: "Conduct Research",
        description: "Write theses or books.",
        subroadmap: [
          { title: "Topics", description: "Original." },
          { title: "Archives", description: "Travel if needed." },
          { title: "Analyze", description: "Sources." },
          { title: "Write", description: "Drafts." },
          { title: "Revise", description: "Feedback." }
        ]
      },
      {
        title: "Publish and Present",
        description: "Share work at conferences.",
        subroadmap: [
          { title: "Papers", description: "Journals." },
          { title: "Books", description: "Publishers." },
          { title: "Confs", description: "AHA." },
          { title: "Present", description: "Panels." },
          { title: "Network", description: "Peers." }
        ]
      },
      {
        title: "Career Path",
        description: "Teach, curate museums, or consult.",
        subroadmap: [
          { title: "Academia", description: "Prof." },
          { title: "Museums", description: "Curator." },
          { title: "Consult", description: "Historical films." },
          { title: "Apply", description: "Jobs." },
          { title: "Advance", description: "Senior." }
        ]
      }
    ]
  },
  {
    name: "Librarian",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete any undergraduate degree.",
        subroadmap: [
          { title: "Any Major", description: "Liberal arts." },
          { title: "Courses", description: "Info science intro." },
          { title: "Exp", description: "Library volunteer." },
          { title: "GPA", description: "Good." },
          { title: "Prep", description: "For MLIS." }
        ]
      },
      {
        title: "Pursue MLIS",
        description: "Earn a Master's in Library and Information Science.",
        subroadmap: [
          { title: "Apply", description: "ALA-accredited." },
          { title: "Courses", description: "Cataloging, reference." },
          { title: "Practicum", description: "Library work." },
          { title: "Thesis", description: "Optional." },
          { title: "Graduate", description: "MLIS." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work as a library assistant or volunteer.",
        subroadmap: [
          { title: "Assistant Jobs", description: "Entry." },
          { title: "Volunteer", description: "Local libraries." },
          { title: "Skills", description: "Circulation, ref." },
          { title: "Network", description: "Librarians." },
          { title: "Build Resume", description: "Exp." }
        ]
      },
      {
        title: "Learn Tools",
        description: "Master cataloging, databases, and digital resources.",
        subroadmap: [
          { title: "Cataloging", description: "MARC, RDA." },
          { title: "Databases", description: "EBSCO." },
          { title: "Digital", description: "E-books, archives." },
          { title: "Practice", description: "In school/work." },
          { title: "Cert", description: "If avail." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on public, academic, or special libraries.",
        subroadmap: [
          { title: "Choose", description: "Academic." },
          { title: "Courses", description: "Special." },
          { title: "Exp", description: "In type." },
          { title: "Network", description: "ALA divisions." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain state or ALA credentials.",
        subroadmap: [
          { title: "State Cert", description: "For public." },
          { title: "ALA", description: "Specialist." },
          { title: "Study", description: "Reqs." },
          { title: "Exam", description: "Pass." },
          { title: "Maintain", description: "CE." }
        ]
      },
      {
        title: "Advance",
        description: "Move to director or archivist roles.",
        subroadmap: [
          { title: "Exp", description: "Years." },
          { title: "Leadership", description: "Manage." },
          { title: "Apply", description: "Higher positions." },
          { title: "Additional Ed", description: "If needed." },
          { title: "Network", description: "For opps." }
        ]
      }
    ]
  },
  {
    name: "Social Worker",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a BSW in social work.",
        subroadmap: [
          { title: "Major", description: "BSW." },
          { title: "Courses", description: "Practice, policy." },
          { title: "Field", description: "Practicum." },
          { title: "GPA", description: "Good." },
          { title: "Prep", description: "For MSW." }
        ]
      },
      {
        title: "Pursue MSW",
        description: "Earn a Master's in Social Work.",
        subroadmap: [
          { title: "Apply", description: "CSWE-accredited." },
          { title: "Courses", description: "Advanced practice." },
          { title: "Field Placement", description: "600 hours." },
          { title: "Specialization", description: "Clinical." },
          { title: "Graduate", description: "MSW." }
        ]
      },
      {
        title: "Complete Fieldwork",
        description: "Log supervised hours in agencies.",
        subroadmap: [
          { title: "Placement", description: "Schools, hospitals." },
          { title: "Supervision", description: "Licensed SW." },
          { title: "Hours", description: "Required amount." },
          { title: "Skills", description: "Case management." },
          { title: "Document", description: "For license." }
        ]
      },
      {
        title: "Pass Licensing Exams",
        description: "Take ASWB exams.",
        subroadmap: [
          { title: "Level", description: "Masters or clinical." },
          { title: "Study", description: "ASWB guide." },
          { title: "Practice", description: "Questions." },
          { title: "Register", description: "ASWB." },
          { title: "Pass", description: "Exam." }
        ]
      },
      {
        title: "Obtain Licensure",
        description: "Become an LCSW or similar.",
        subroadmap: [
          { title: "Apply", description: "State board." },
          { title: "Hours", description: "Post-MSW supervised." },
          { title: "Ethics", description: "Course if req." },
          { title: "Receive", description: "License." },
          { title: "Renew", description: "CE." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on clinical, child welfare, or community.",
        subroadmap: [
          { title: "Choose", description: "Clinical." },
          { title: "Training", description: "Additional." },
          { title: "Exp", description: "In area." },
          { title: "Cert", description: "Specialty." },
          { title: "Roles", description: "Targeted." }
        ]
      },
      {
        title: "Continue Education",
        description: "Attend CE courses.",
        subroadmap: [
          { title: "Reqs", description: "State CE." },
          { title: "Attend", description: "Workshops." },
          { title: "Online", description: "NASW." },
          { title: "Topics", description: "New practices." },
          { title: "Renew", description: "License." }
        ]
      }
    ]
  },
  {
    name: "Fitness Trainer",
    roadmap: [
      {
        title: "Earn Certification",
        description: "Obtain NASM, ACE, or similar credentials.",
        subroadmap: [
          { title: "Choose Org", description: "NASM." },
          { title: "Study", description: "Online course." },
          { title: "Exam", description: "Pass cert." },
          { title: "CPR/AED", description: "Required." },
          { title: "Renew", description: "CE." }
        ]
      },
      {
        title: "Learn Anatomy and Physiology",
        description: "Understand body mechanics and exercise science.",
        subroadmap: [
          { title: "Courses", description: "Online anatomy." },
          { title: "Body Systems", description: "Muscular, cardio." },
          { title: "Mechanics", description: "Biomechanics." },
          { title: "Practice", description: "Apply to exercises." },
          { title: "Books", description: "Exercise phys." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work at gyms or with clients.",
        subroadmap: [
          { title: "Gym Jobs", description: "Trainer." },
          { title: "Clients", description: "Personal training." },
          { title: "Programs", description: "Design workouts." },
          { title: "Feedback", description: "From clients." },
          { title: "Build", description: "Portfolio." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on yoga, strength, or sports training.",
        subroadmap: [
          { title: "Choose", description: "Strength." },
          { title: "Cert", description: "Specialty." },
          { title: "Training", description: "Courses." },
          { title: "Practice", description: "With clients." },
          { title: "Market", description: "Niche." }
        ]
      },
      {
        title: "Build Client Base",
        description: "Market services online or in-person.",
        subroadmap: [
          { title: "Social Media", description: "Instagram fitness." },
          { title: "Website", description: "Services." },
          { title: "Referrals", description: "From current." },
          { title: "Events", description: "Free sessions." },
          { title: "Track", description: "Growth." }
        ]
      },
      {
        title: "Pursue Advanced Certs",
        description: "Earn specialties like nutrition or rehab.",
        subroadmap: [
          { title: "Nutrition", description: "Cert." },
          { title: "Rehab", description: "Corrective exercise." },
          { title: "Study", description: "Courses." },
          { title: "Exam", description: "Pass." },
          { title: "Integrate", description: "Services." }
        ]
      },
      {
        title: "Open Studio",
        description: "Start your own business.",
        subroadmap: [
          { title: "Plan", description: "Business model." },
          { title: "Location", description: "Lease." },
          { title: "Equip", description: "Gym gear." },
          { title: "Market", description: "Opening." },
          { title: "Manage", description: "Ops." }
        ]
      }
    ]
  },
  {
    name: "Nutritionist",
    roadmap: [
      {
        title: "Earn a Bachelor's Degree",
        description: "Complete a degree in nutrition or dietetics.",
        subroadmap: [
          { title: "Major", description: "Dietetics." },
          { title: "Courses", description: "Biochem, food science." },
          { title: "ACEND", description: "Accredited." },
          { title: "GPA", description: "High." },
          { title: "Intern Prep", description: "Early." }
        ]
      },
      {
        title: "Complete Internship",
        description: "Log supervised practice hours.",
        subroadmap: [
          { title: "Apply", description: "DI programs." },
          { title: "Hours", description: "1200+." },
          { title: "Rotations", description: "Clinical, community." },
          { title: "Supervision", description: "RD." },
          { title: "Complete", description: "Cert." }
        ]
      },
      {
        title: "Pass RD Exam",
        description: "Become a Registered Dietitian.",
        subroadmap: [
          { title: "Eligibility", description: "After DI." },
          { title: "Study", description: "Review courses." },
          { title: "Practice", description: "Questions." },
          { title: "Register", description: "CDR." },
          { title: "Pass", description: "Exam." }
        ]
      },
      {
        title: "Obtain Licensure",
        description: "Get state certification if required.",
        subroadmap: [
          { title: "Check State", description: "Reqs." },
          { title: "Apply", description: "Board." },
          { title: "Docs", description: "RD cred." },
          { title: "Fees", description: "Pay." },
          { title: "Receive", description: "License." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work in hospitals, clinics, or private practice.",
        subroadmap: [
          { title: "Jobs", description: "Clinical RD." },
          { title: "Clients", description: "Counseling." },
          { title: "Build", description: "Expertise." },
          { title: "Network", description: "AND." },
          { title: "Private", description: "Start practice." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on sports, pediatric, or clinical nutrition.",
        subroadmap: [
          { title: "Choose", description: "Sports." },
          { title: "Cert", description: "CSSD." },
          { title: "Training", description: "Courses." },
          { title: "Exp", description: "In area." },
          { title: "Market", description: "Niche." }
        ]
      },
      {
        title: "Continue Education",
        description: "Attend CE and stay updated on research.",
        subroadmap: [
          { title: "CE Hours", description: "75/5 years." },
          { title: "Attend", description: "Conferences." },
          { title: "Research", description: "Journals." },
          { title: "Online", description: "Webinars." },
          { title: "Renew", description: "RD." }
        ]
      }
    ]
  },
  {
    name: "Real Estate Agent",
    roadmap: [
      {
        title: "Complete Pre-Licensing Education",
        description: "Take required real estate courses.",
        subroadmap: [
          { title: "Find School", description: "State-approved." },
          { title: "Courses", description: "60-90 hours." },
          { title: "Topics", description: "Law, finance." },
          { title: "Complete", description: "Cert." },
          { title: "Study", description: "For exam." }
        ]
      },
      {
        title: "Pass Licensing Exam",
        description: "Pass state real estate exam.",
        subroadmap: [
          { title: "Study", description: "Review books." },
          { title: "Practice", description: "Tests." },
          { title: "Register", description: "State." },
          { title: "Take", description: "Pass." },
          { title: "Background", description: "Check." }
        ]
      },
      {
        title: "Join a Brokerage",
        description: "Work under a licensed broker.",
        subroadmap: [
          { title: "Research", description: "Firms like RE/MAX." },
          { title: "Apply", description: "Interview." },
          { title: "Sign", description: "Agreement." },
          { title: "Training", description: "Firm-specific." },
          { title: "Activate License", description: "With broker." }
        ]
      },
      {
        title: "Build Network",
        description: "Attend open houses and network events.",
        subroadmap: [
          { title: "Open Houses", description: "Host." },
          { title: "Events", description: "NAR meetings." },
          { title: "Social", description: "LinkedIn." },
          { title: "Referrals", description: "From contacts." },
          { title: "CRM", description: "Manage leads." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Handle listings and closings.",
        subroadmap: [
          { title: "Listings", description: "Market properties." },
          { title: "Showings", description: "To buyers." },
          { title: "Negotiate", description: "Offers." },
          { title: "Closings", description: "Transactions." },
          { title: "Learn", description: "From deals." }
        ]
      },
      {
        title: "Earn Certifications",
        description: "Obtain Realtor designation or specialties.",
        subroadmap: [
          { title: "Realtor", description: "NAR membership." },
          { title: "Specialties", description: "CRS, ABR." },
          { title: "Study", description: "Courses." },
          { title: "Exam", description: "Pass." },
          { title: "Maintain", description: "Dues." }
        ]
      },
      {
        title: "Advance to Broker",
        description: "Get broker license after experience.",
        subroadmap: [
          { title: "Exp", description: "2-3 years." },
          { title: "Courses", description: "Broker pre-lic." },
          { title: "Exam", description: "Pass broker." },
          { title: "Apply", description: "State." },
          { title: "Open Firm", description: "Or manage." }
        ]
      }
    ]
  },
  {
    name: "Travel Agent",
    roadmap: [
      {
        title: "Earn Certification",
        description: "Complete travel agent training programs.",
        subroadmap: [
          { title: "Programs", description: "ASTA or online." },
          { title: "Courses", description: "Destinations, booking." },
          { title: "Cert", description: "CTA." },
          { title: "Study", description: "Exams." },
          { title: "Complete", description: "Credential." }
        ]
      },
      {
        title: "Learn Destinations",
        description: "Study geography, cultures, and travel logistics.",
        subroadmap: [
          { title: "Geography", description: "Maps, regions." },
          { title: "Cultures", description: "Customs." },
          { title: "Logistics", description: "Visas, transport." },
          { title: "Resources", description: "Travel books." },
          { title: "Travel", description: "Personal if possible." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Work at agencies or as independent.",
        subroadmap: [
          { title: "Agency Jobs", description: "Entry." },
          { title: "Book Trips", description: "For clients." },
          { title: "Independent", description: "Home-based." },
          { title: "Network", description: "Suppliers." },
          { title: "Build", description: "Client list." }
        ]
      },
      {
        title: "Master Tools",
        description: "Use booking software like Sabre or Amadeus.",
        subroadmap: [
          { title: "Train", description: "Software courses." },
          { title: "Practice", description: "Demos." },
          { title: "Book", description: "Flights, hotels." },
          { title: "CRM", description: "Client management." },
          { title: "Update", description: "New features." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on luxury, adventure, or corporate travel.",
        subroadmap: [
          { title: "Choose", description: "Luxury." },
          { title: "Training", description: "Special certs." },
          { title: "Suppliers", description: "Partner with." },
          { title: "Market", description: "Niche clients." },
          { title: "Experience", description: "Build." }
        ]
      },
      {
        title: "Build Client Base",
        description: "Market through social media and referrals.",
        subroadmap: [
          { title: "Social", description: "Travel posts." },
          { title: "Website", description: "Services." },
          { title: "Referrals", description: "Incentives." },
          { title: "Events", description: "Travel fairs." },
          { title: "CRM", description: "Follow-ups." }
        ]
      },
      {
        title: "Network",
        description: "Join ASTA and attend trade shows.",
        subroadmap: [
          { title: "Join ASTA", description: "Membership." },
          { title: "Shows", description: "ITB, WTM." },
          { title: "Local", description: "Chapters." },
          { title: "Suppliers", description: "Connect." },
          { title: "Collaborate", description: "Agents." }
        ]
      }
    ]
  },
  {
    name: "Event Planner",
    roadmap: [
      {
        title: "Earn a Degree or Certification",
        description: "Complete hospitality or event management program.",
        subroadmap: [
          { title: "Program", description: "Degree or cert." },
          { title: "Courses", description: "Planning, marketing." },
          { title: "Cert", description: "CMP." },
          { title: "Study", description: "Exams." },
          { title: "Complete", description: "Credential." }
        ]
      },
      {
        title: "Gain Experience",
        description: "Intern at event companies or volunteer.",
        subroadmap: [
          { title: "Interns", description: "Event firms." },
          { title: "Volunteer", description: "Weddings, festivals." },
          { title: "Roles", description: "Coordination." },
          { title: "Network", description: "Planners." },
          { title: "Build", description: "Portfolio." }
        ]
      },
      {
        title: "Learn Planning Skills",
        description: "Master budgeting, vendor management, and logistics.",
        subroadmap: [
          { title: "Budgeting", description: "Spreadsheets." },
          { title: "Vendors", description: "Contracts." },
          { title: "Logistics", description: "Timelines." },
          { title: "Software", description: "Event tools." },
          { title: "Practice", description: "Mock events." }
        ]
      },
      {
        title: "Build Portfolio",
        description: "Document planned events.",
        subroadmap: [
          { title: "Photos", description: "Events." },
          { title: "Descriptions", description: "Case studies." },
          { title: "Site", description: "Portfolio." },
          { title: "Testimonials", description: "Clients." },
          { title: "Update", description: "New events." }
        ]
      },
      {
        title: "Specialize",
        description: "Focus on weddings, corporate, or festivals.",
        subroadmap: [
          { title: "Choose", description: "Weddings." },
          { title: "Training", description: "Special courses." },
          { title: "Exp", description: "In niche." },
          { title: "Network", description: "Vendors." },
          { title: "Market", description: "Niche." }
        ]
      },
      {
        title: "Network",
        description: "Join MPI or ILEA.",
        subroadmap: [
          { title: "Join MPI", description: "Membership." },
          { title: "Confs", description: "Attend." },
          { title: "Local", description: "Chapters." },
          { title: "Vendors", description: "Connect." },
          { title: "Collaborate", description: "Planners." }
        ]
      },
      {
        title: "Start Business",
        description: "Launch your own event planning firm.",
        subroadmap: [
          { title: "Plan", description: "Business." },
          { title: "Register", description: "LLC." },
          { title: "Marketing", description: "Website." },
          { title: "Clients", description: "First events." },
          { title: "Grow", description: "Hire staff." }
        ]
      }
    ]
  }
];
interface BookRecommendation {
  id: number; // Add the id property
  title: string;
  author: string;
  category: string;
  cover: string;
  url: string;

}
type CareerName =
  | "Software Engineer"
  | "Data Scientist"
  | "Product Manager"
  | "Doctor"
  | "Lawyer"
  | "Teacher"
  | "Chef"
  | "Pilot"
  | "Architect"
  | "Graphic Designer"
  | "Nurse"
  | "Accountant"
  | "Marketing Manager"
  | "Civil Engineer"
  | "Mechanical Engineer"
  | "Electrical Engineer"
  | "Psychologist"
  | "Journalist"
  | "Actor"
  | "Musician"
  | "Writer"
  | "Photographer"
  | "Veterinarian"
  | "Dentist"
  | "Pharmacist"
  | "Police Officer"
  | "Firefighter"
  | "Entrepreneur"
  | "Financial Advisor"
  | "Human Resources Manager"
  | "Sales Manager"
  | "Operations Manager"
  | "Web Developer"
  | "Mobile App Developer"
  | "UX/UI Designer"
  | "Data Analyst"
  | "AI Engineer"
  | "Cybersecurity Specialist"
  | "Environmental Scientist"
  | "Biologist"
  | "Chemist"
  | "Physicist"
  | "Mathematician"
  | "Economist"
  | "Sociologist"
  | "Historian"
  | "Librarian"
  | "Social Worker"
  | "Fitness Trainer"
  | "Nutritionist"
  | "Real Estate Agent"
  | "Travel Agent"
  | "Event Planner";

// BookCard component
const BookCard = ({ book }: { book: BookRecommendation }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="mb-4">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600">By {book.author}</p>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {book.category}
        </span>
      </div>
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        Download Free
      </a>
    </div>
  );
};

export default function Roadmap() {
  const [selectedCareer, setSelectedCareer] = useState<CareerName | null>(null);
  const [bookRecommendations, setBookRecommendations] = useState<
    BookRecommendation[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(
    null
  );

  // Fetch book recommendations from Firestore
  useEffect(() => {
    const fetchBookRecommendations = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const booksData = querySnapshot.docs.map((doc) => ({
          id: doc.data().id,
          title: doc.data().title,
          author: doc.data().author,
          category: doc.data().category,
          cover: doc.data().cover,
          url: doc.data().url,
        })) as BookRecommendation[];
        setBookRecommendations(booksData);
        setError(null);
      } catch (error) {
        console.error("Error fetching book recommendations:", error);
        setError(
          "Failed to load book recommendations. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookRecommendations();
  }, []);

  const handleSelect = (careerName: string) => {
    if (careers.some((career: Career) => career.name === careerName)) {
      setSelectedCareer(careerName as CareerName);
      setSelectedStepIndex(null); // Reset step selection when career changes
    } else {
      setSelectedCareer(null);
      setSelectedStepIndex(null);
    }
  };

  const handleStepClick = (index: number) => {
    // Toggle sub-roadmap visibility
    setSelectedStepIndex(selectedStepIndex === index ? null : index);
  };

  const selectedRoadmap = careers.find(
    (c: Career) => c.name === selectedCareer
  );
  const selectedBooks: BookRecommendation[] = selectedCareer
    ? bookRecommendations.filter(
        (book: BookRecommendation) => book.category === selectedCareer
      )
    : [];
  const selectedSubRoadmap =
    selectedRoadmap &&
    selectedStepIndex !== null &&
    Number.isInteger(selectedStepIndex) &&
    selectedStepIndex >= 0
      ? selectedRoadmap.roadmap[selectedStepIndex]?.subroadmap
      : null;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10 mt-12">
          Discover Your Career Roadmap
        </h1>

        <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-6 mb-8 transform transition-all duration-300 hover:shadow-2xl">
          <label
            htmlFor="career-select"
            className="block text-xl font-semibold text-gray-700 mb-3"
          >
            Select Your Career Path
          </label>
          <div className="relative">
            <select
              id="career-select"
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-all duration-200"
              value={selectedCareer || ""}
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option value="">-- Select a Career --</option>
              {careers.map((career: Career) => (
                <option key={career.name} value={career.name}>
                  {career.name}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {isLoading && (
          <div className="text-center text-gray-600">Loading...</div>
        )}

        {error && <div className="text-center text-red-500 mb-6">{error}</div>}

        {selectedRoadmap && !isLoading && !error && (
          <div className="w-full max-w-5xl mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {selectedRoadmap.name} Roadmap
            </h2>
            <div className="relative space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {selectedRoadmap.roadmap.map(
                (step: RoadmapStep, index: number) => (
                  <div
                    key={index}
                    className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[150px] flex flex-col justify-between"
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-10 w-10 text-blue-500 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Step {index + 1}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    {index < selectedRoadmap.roadmap.length - 1 && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full md:bottom-auto md:left-full md:-translate-x-0 md:-translate-y-1/2 md:-rotate-90">
                        <svg
                          className="w-8 h-8 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>

            {selectedSubRoadmap && (
              <div className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg animate-fadeIn">
                <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                  Sub-Roadmap for{" "}
                  {selectedRoadmap.roadmap[selectedStepIndex!].title}
                </h4>
                <div className="flex flex-row space-x-4 overflow-x-auto pb-4">
                  {selectedSubRoadmap.map(
                    (subStep: SubStep, subIndex: number) => (
                      <div
                        key={subIndex}
                        className="bg-white p-4 rounded-lg shadow-md min-w-[250px] flex-shrink-0 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center">
                          <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
                          <div>
                            <h5 className="text-md font-medium text-gray-800">
                              {subStep.title}
                            </h5>
                            <p className="text-sm text-gray-500">
                              Sub-Step {subIndex + 1}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {subStep.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {selectedCareer && selectedBooks.length > 0 && !isLoading && !error && (
          <div className="w-full max-w-5xl mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Recommended Books for {selectedCareer}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedBooks.map((book: BookRecommendation, index: number) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>
        )}

        {selectedCareer &&
          selectedBooks.length === 0 &&
          !isLoading &&
          !error && (
            <div className="text-center text-gray-600">
              No book recommendations available for {selectedCareer}.
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
}