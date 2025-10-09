import React, { useState, useEffect } from 'react';
import { Briefcase, Code, GraduationCap, Github, Mail, Zap, ChevronRight } from 'lucide-react';

// --- DATA STRUCTURES (Based on Resume Content) ---

const profile = {
  name: "Avi Kumar Talaviya",
  title: "Data Scientist | ML Engineer | Gen AI Consultant",
  tagline: "Specializing in Generative AI, Advanced RAG solutions, and scalable MLOps.",
  email: "avikumart@arizona.edu",
  github: "https://github.com/avikumart",
};

const experience = [
  {
    title: "Research Collaborator",
    company: "University of Arizona - ECE",
    period: "August 2025 - Present | Tucson, AZ",
    description: "Leading research in healthcare data (EEG/fMRI) classification. Applied transformer-based multimodal models and utilized High-Performance Computing (HPC) for large-scale dataset preprocessing and training, demonstrating expertise in complex multimodal GenAI workflows.",
  },
  {
    title: "Data Analytics Training Specialist",
    company: "Tops Technologies Pvt. Ltd.",
    period: "September 2024 - May 2025 | Surat",
    description: "Trained learners in comprehensive data analytics tools (Python, Power BI, SQL). Optimized database design and complex SQL queries, achieving a documented efficiency increase of up to 70%.",
  },
  {
    title: "Data Science Project Lead",
    company: "Omdena Local Chapter",
    period: "March 2023 - May 2023 | Mumbai",
    description: "Led 25+ members on an AQI monitoring and prediction project. Developed a time-series forecasting model to predict AQI in Mumbai with over 80% RMSE accuracy.",
  },
];

const projects = [
  {
    name: "Natural Language to SQL (NL2SQL) Generation Application",
    link: "#", // Placeholder as link not provided in resume
    details: [
      "Designed an NL2SQL GenAI app using Llama Index and an LLM to automate query generation.",
      "Incorporated Advanced RAG techniques: Semantic Chunking, Metadata Filtering, and Vector Search Optimization.",
      "Implemented LLM optimization strategies (Prompt Compression, Caching) to reduce latency and improve resource utilization.",
    ],
    tags: ["GenAI", "RAG", "LLM Optimization", "Llama Index"],
  },
  {
    name: "Cyberbullying Detection using NLP",
    link: "https://github.com/avikumart/Cyberbullying-Detection-NLP",
    details: [
      "Performed end-to-end unstructured text data processing and cleaning.",
      "Applied word2vec embedding with an XGBoost classifier, achieving a strong log loss of 12.",
    ],
    tags: ["NLP", "XGBoost", "Word2Vec", "Classification"],
  },
  {
    name: "Road Traffic Severity Classification Project",
    link: "https://github.com/avikumart/Road-Traffic-Severity-Classification-Project",
    details: [
      "Analyzed data using Dabl and Pandas, treated missing values, and performed categorical encoding.",
      "Utilized Principal Component Analysis (PCA) to reduce dataset dimensionality.",
    ],
    tags: ["ML", "Data Analysis", "PCA", "Python"],
  },
];

const skills = {
    'Generative AI & LLMs': 'Agentic AI, Advanced RAG, LangChain, OpenAI, Hugging Face, Llama Index, Multimodal Models, Prompt Engineering, Fine-Tuning, Semantic Chunking, Hybrid Retrieval.',
    'Data & ML Engineering': 'Python, R, SQL, TensorFlow, PyTorch, Keras, Scikit-learn, Pandas, Matplotlib, Data Structures and Algorithms, Text/Image Analysis.',
    'Cloud & MLOps/DevOps': 'AWS (EC2, Lambda, S3), Azure Data Warehousing, HPC, CI/CD, MLOps, Prefect, Spark/PySpark, Git/GitHub.',
    'Deep Learning': 'Transformers, CNNs, RNNs, LSTMs, Deep Reinforcement Learning.',
};

const education = [
    {
        degree: "M.S. in Information Science (Specialization: ML)",
        school: "University of Arizona",
        period: "July 2024 - May 2026",
        gpa: "Current GPA: 4.0",
        notes: "Coursework: Machine Learning, Deep Learning, Applied NLP, Data Mining, Cloud Data Warehousing (Azure).",
    },
    {
        degree: "Bachelor's in Data Science and Analytics",
        school: "Jain University",
        period: "Aug 2021 - July 2024",
        gpa: "Current CGPA: 9.3/10",
        notes: "Coursework: Statistics, Machine Learning, Data Mining, Time-Series Analysis.",
    },
];

// --- COMPONENTS ---

// Generic Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white p-6 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);

// Header Section
const Header = () => (
  <header className="bg-gray-900 text-white p-8 md:p-12 lg:p-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">{profile.name}</h1>
        <p className="mt-2 text-xl sm:text-2xl font-light text-green-300">{profile.title}</p>
        <p className="mt-1 text-sm sm:text-base text-gray-400 font-mono italic">{profile.tagline}</p>
      </div>
      <div className="mt-6 md:mt-0 flex space-x-4">
        <a 
          href={profile.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-gray-700 rounded-full hover:bg-green-500 transition duration-300 transform hover:scale-105"
          aria-label="GitHub Profile"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href={`mailto:${profile.email}`} 
          className="p-3 bg-gray-700 rounded-full hover:bg-green-500 transition duration-300 transform hover:scale-105"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </header>
);

// Section Title Component
const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-3xl font-bold mb-6 flex items-center text-gray-800 border-b-4 border-green-500 pb-2">
    <Icon className="w-7 h-7 mr-3 text-green-600" />
    {title}
  </h2>
);

// Experience Section
const ExperienceSection = () => (
  <section className="py-12">
    <SectionTitle icon={Briefcase} title="Work Experience" />
    <div className="space-y-8">
      {experience.map((item, index) => (
        <Card key={index} className="border-l-4 border-green-500 hover:border-green-600">
          <h3 className="text-xl font-semibold text-gray-900">{item.title} at {item.company}</h3>
          <p className="text-sm text-gray-500 italic mt-1">{item.period}</p>
          <p className="mt-3 text-gray-700">{item.description}</p>
        </Card>
      ))}
    </div>
  </section>
);

// Projects Section
const ProjectsSection = () => (
  <section className="py-12 bg-gray-50">
    <SectionTitle icon={Code} title="Projects & Achievements" />
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl font-semibold text-green-700 hover:text-green-900 transition duration-300 flex items-center"
            >
              {project.name} <ChevronRight className="w-5 h-5 ml-1" />
            </a>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside ml-2">
              {project.details.map((detail, dIndex) => (
                <li key={dIndex} className="text-sm">{detail}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, tIndex) => (
              <span key={tIndex} className="text-xs font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => (
    <section className="py-12">
      <SectionTitle icon={Zap} title="Technical Expertise" />
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <Card key={index} className="hover:border-b-4 hover:border-green-500">
            <h3 className="text-lg font-bold text-gray-800 mb-2 border-b pb-1">{category}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{skillList}</p>
          </Card>
        ))}
      </div>
    </section>
);

// Education Section
const EducationSection = () => (
    <section className="py-12 bg-gray-50">
        <SectionTitle icon={GraduationCap} title="Education" />
        <div className="space-y-6">
            {education.map((item, index) => (
                <Card key={index} className="border-r-4 border-green-500">
                    <h3 className="text-xl font-semibold text-gray-900">{item.degree}</h3>
                    <p className="text-md text-green-700 mt-1">{item.school}</p>
                    <p className="text-sm text-gray-500 italic mt-1">{item.period} | {item.gpa}</p>
                    <p className="mt-2 text-sm text-gray-600">{item.notes}</p>
                </Card>
            ))}
        </div>
    </section>
);


// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white p-6 mt-12">
    <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Avi Kumar Talaviya. Built with React & Tailwind CSS.</p>
      <p className="mt-1">
        <a href={`mailto:${profile.email}`} className="text-green-400 hover:text-green-300">Email</a> | 
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="ml-2 text-green-400 hover:text-green-300">GitHub</a>
      </p>
    </div>
  </footer>
);


// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <HelmetComponent />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            {/* Left Column (Skills & Education) - Full width on mobile, 1/3 on desktop */}
            <div className="lg:col-span-1">
                <div className="sticky top-0 lg:pt-10"> {/* Sticky effect for better desktop layout */}
                    <SkillsSection />
                    <div className='py-12 lg:pt-0'>
                        <EducationSection />
                    </div>
                </div>
            </div>

            {/* Right Column (Experience & Projects) - Full width on mobile, 2/3 on desktop */}
            <div className="lg:col-span-2 lg:pt-10">
                <ExperienceSection />
                <ProjectsSection />
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Simple component to manage head tags (Simulating react-helmet functionality)
// This is necessary to load the Inter font and Tailwind CSS (which is usually imported via a separate file)
const HelmetComponent = () => (
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{profile.name} | Portfolio</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
            body {
                font-family: 'Inter', sans-serif;
            }
            /* Custom Scrollbar for a sleek look */
            ::-webkit-scrollbar {
                width: 8px;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            ::-webkit-scrollbar-thumb {
                background: #10b981; /* Green-500 */
                border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #059669; /* Green-600 */
            }
            .font-serif {
                font-family: 'Merriweather', serif; /* Using a secondary font for the title for emphasis */
            }
            `}
        </style>
    </head>
);

// This ensures the App component can be rendered in the host environment
export default App;