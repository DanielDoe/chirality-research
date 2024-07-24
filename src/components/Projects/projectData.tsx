import { Project } from "@/types/project";

const projectData: Project[] = [
  {
    id: 1,
    title: "Production Maintenance Tracker",
    problem: "Tracking operational activity was difficult amidst the manual system of communication over long email chains.",
    duration: "18 months",
    link: "",
    paragraph: "Developed an in-house system of mobile applications to facilitate a communication system for on-field personnel and multiple teams, including artificial lift, chemical, and subsurface teams, with over 250 users. The app supports the Power Analytics initiative to track accounts reviewed, billing errors, inactive accounts, and tasks assigned to the team. It reduced dependency on spreadsheets and created a consolidated environment to capture efforts associated with the Power Analytics platform. Resulted in a 21% reduction in ticket close-out time.",
    image: "/images/projects/project1.gif",
    cover: "/images/projects/19224.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Kho, Tac",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["maintenance", "communication", "optimization", "Power Analytics"],
    publishDate: "2024",
    significance: "This project significantly improved operational efficiency by replacing the manual process with an automated workflow. It enhanced field communication, operational visibility, and resource tracking, leading to a substantial reduction in ticket close-out time and improved overall maintenance management. By consolidating efforts in a unified platform, the project streamlined the management of billing errors, inactive accounts, data errors, and task tracking.",
    usecases: [
      "Tracking operational activity and maintenance work orders",
      "Facilitating communication between field personnel and multiple teams",
      "Improving resource tracking and operational visibility",
      "Reducing ticket close-out times and enhancing overall efficiency",
      "Billing Errors: Capture estimated savings and credit amounts by account and month",
      "Inactive Accounts: Identify and manage inactive meters with no activity for 12 consecutive months",
      "Data Errors: Field verification for ProdView wells/batteries to improve cost and consumption allocation accuracy",
      "Task Tracker: Flag accounts for review, categorize tasks, and assign them with direct email notifications",
      "Offline capabilities for field use in areas without cell service"
    ],
    techStack: [
      "Microsoft SQL Server",
      "Microsoft Power Apps",
      "Power BI",
    ],
  },
  {
    id: 2,
    title: "Production Chemical Optimization",
    problem:"Implementing a metric-driven Chemical Management Program for H₂S over 600+ wells across 150,000 acres",
    duration:"9 months",
    link: "https://www.lbcg.com/media/downloads/events/487/day-1-huzeifa-ismail-production-chemistry-and-integrity-management-and-leslie-malone-senior-staff-en.8005.pdf",
    paragraph:
      "Implemented a metric-driven Chemical Management Program for H₂S over 600+ wells across 150,000 acres, determining the most economical options for chemical treatment.",
    image: "/images/projects/project-2.png",
    cover: "/images/results/pexels-chokniti-khongchum-1197604-2280571.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Ron",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["chemical", "optimization"],
    publishDate: "2024",
    significance: "Presented at London Business Conferences Group Conference. This project helped in determining cost-effective strategies for H₂S treatment, improving operational efficiency and reducing CAPEX.",
    usecases: [
      "Implementing chemical management programs",
      "Optimizing chemical treatment strategies",
      "Reducing operational costs",
    ],
    techStack: [
      "SQL Server",
      "Power Apps",
    ],
  },
  {
    id: 3,
    title: "Pipeline Integrity",
    problem: "Challenges in managing pipeline integrity due to outdated systems and reliance on spreadsheets.",
    duration: "6 months",
    link: "",
    paragraph: "Developed a comprehensive pipeline integrity management program incorporating corrosion management, chemical usage, pigging/pipeline risk ranking, and support for the Power Analytics initiative. The program aims to track accounts reviewed, billing errors, inactive accounts, and tasks assigned to the team, reducing dependency on spreadsheets and creating a consolidated environment to capture efforts associated with the Power Analytics platform.",
    image: "/images/projects/project3.gif",
    cover: "/images/results/steel-pipelines-cables-plant.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Ron",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["pipeline", "integrity", "Power Analytics"],
    publishDate: "2024",
    significance: "The project significantly enhanced pipeline safety and reliability by integrating comprehensive integrity management practices. It reduced risks and maintenance costs and improved data accuracy and operational efficiency. By consolidating efforts in a unified platform, the project streamlined the management of billing errors, inactive accounts, data errors, and task tracking.",
    usecases: [
      "Corrosion management",
      "Chemical usage optimization",
      "Pigging and pipeline risk ranking",
      "Billing Errors: Capture estimated savings and credit amounts by account and month",
      "Inactive Accounts: Identify and manage inactive meters with no activity for 12 consecutive months",
      "Data Errors: Field verification for ProdView wells/batteries to improve cost and consumption allocation accuracy",
      "Task Tracker: Flag accounts for review, categorize tasks, and assign them with direct email notifications",
      "Offline capabilities for field use in areas without cell service"
    ],
    techStack: [
      "SQL Server",
      "Power Apps",
      "Azure",
    ],
  },  
  {
    id: 4,
    title: "iPig Machine Learning",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Used Google Cloud Vision API to develop a machine learning model based on field images to identify areas with high paraffin levels and corrosion, enabling effective monitoring and treatment scheduling.",
    image: "/images/projects/project4.png",
    cover: "/images/projects/129794.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Ruqaiya, Richard, Max",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["machine learning", "monitoring"],
    publishDate: "2024",
    significance: "Improved pipeline maintenance through advanced image recognition and machine learning, enhancing the accuracy of paraffin and corrosion detection.",
    usecases: [
      "Monitoring pipeline conditions",
      "Identifying areas with high paraffin levels",
      "Detecting corrosion using machine learning",
    ],
    techStack: [
      "Google Cloud Vision API",
    ],
  },
  {
    id: 5,
    title: "Pigging Economic Calculator",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a calculator to estimate the economic impact of pigging activities, optimizing costs and improving decision-making processes.",
    image: "/images/projects/project5.png",
    cover: "/images/results/pexels-negativespace-97080.jpg",
    author: {
      name: "Dr. Huzefa Ismail, MJ, Zainab, Sachin",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["economic", "calculator"],
    publishDate: "2024",
    significance: "Provided a tool to better understand and manage the economic aspects of pigging activities, leading to cost savings and more efficient operations.",
    usecases: [
      "Estimating pigging costs",
      "Optimizing pigging schedules",
      "Improving economic decision-making",
    ],
    techStack: [
      "Python",
      "Java",
      "SQL Server",
      "HTML5",
    ],
  },
  {
    id: 6,
    title: "Mercury Partitioning Calculator",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a calculator to model mercury partitioning in gas condensate systems using modern equations of state.",
    image: "/images/projects/project6.png",
    cover: "/images/projects/2148292565.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Ron",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["mercury", "modeling"],
    publishDate: "2024",
    significance: "Enhanced understanding of mercury behavior in gas condensate systems, improving safety and efficiency in processing operations.",
    usecases: [
      "Modeling mercury partitioning",
      "Improving gas condensate processing",
      "Enhancing safety measures",
    ],
    techStack: [
      "Python",
      "Excel",
    ],
  },
  {
    id: 7,
    title: "H₂S Economic Model",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a model to evaluate the economic impact of different H₂S treatment strategies, optimizing for cost and efficiency.",
    image: "/images/projects/project7.png",
    cover: "/images/results/pexels-pixabay-257775.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Ron",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["economic", "modeling"],
    publishDate: "2024",
    significance: "Optimized H₂S treatment strategies to balance cost and efficiency, leading to better economic outcomes.",
    usecases: [
      "Evaluating H₂S treatment strategies",
      "Optimizing treatment costs",
      "Improving efficiency of H₂S management",
    ],
    techStack: [
      "Python",
      "Excel",
    ],
  },
  {
    id: 8,
    title: "Produced Water Model",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a model to understand the behavior of produced water in oil and gas operations, improving water management practices.",
    image: "/images/projects/project8.png",
    cover: "/images/results/pexels-pixabay-40784.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Ron",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["water", "modeling"],
    publishDate: "2024",
    significance: "Improved water management in oil and gas operations, enhancing efficiency and environmental compliance.",
    usecases: [
      "Modeling produced water behavior",
      "Improving water management practices",
      "Enhancing environmental compliance",
    ],
    techStack: [
      "Python",
      "Excel",
    ],
  },
  {
    id: 9,
    title: "Data Historian: Canary",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a system to open-source internal live streaming data to engineers, enhancing data accessibility and analysis.",
    image: "/images/projects/project9.png",
    cover: "/images/projects/134032.jpg",
    author: {
      name: "Dr. Huzefa Ismail, Zam, Malik",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["data", "historian"],
    publishDate: "2024",
    significance: "Increased data transparency and accessibility, enabling better decision-making and analysis.",
    usecases: [
      "Streaming live data",
      "Improving data accessibility",
      "Enhancing data analysis",
    ],
    techStack: [
      "SQL Server",
      "Canary",
      "Axiom",
    ],
  },
  {
    id: 10,
    title: "Completions Tag Normalization",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Devised a multi-tier classification method to filter and normalize completion tags, improving data consistency and enabling better analytics.",
    image: "/images/projects/project10.png",
    cover: "/images/projects/pexels-fauxels-3183153.jpg",
    author: {
      name: "MJ, Zam, Malik, Tac",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["tag", "normalization"],
    publishDate: "2024",
    significance: "Improved data consistency and enabled better analytics, leading to enhanced operational efficiency and decision-making.",
    usecases: [
      "Normalizing completion tags",
      "Improving data consistency",
      "Enhancing data analytics",
    ],
    techStack: [
      "Power Apps",
      "Machine Learning",
    ],
  },
  {
    id: 11,
    title: "Automated Batch Treatment",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Implemented dynamic scheduling for treatment frequency and volume optimization using in-house app based on well production and temperature. Resulted in significant cost reduction and improved planning processes.",
    image: "/images/projects/project11.png",
    cover: "/images/projects/pexels-kateryna-babaieva-1423213-2760241.jpg",
    author: {
      name: "MJ, TAC, Zainab",
      image: "/images/team/mj.jpg",
      designation: "Data Analysts",
    },
    tags: ["batch treatment", "optimization", "cost reduction"],
    publishDate: "2024",
    significance: "This project reduced carbon footprint by 3,429% and annual lifecycle costs by 1,090%, leading to enhanced environmental sustainability and cost efficiency.",
    usecases: [
      "Scheduling treatment frequency dynamically",
      "Optimizing corrosion inhibitor volume",
      "Reducing operational costs",
      "Improving planning processes",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Azure",
      "Microsoft Power Apps",
    ],
  },
  {
    id: 12,
    title: "Permian Basin Production Model",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Built a model to forecast production and predict type curves in Permian Basin using publicly available, open-sourced data for over 12,000 wells.",
    image: "/images/projects/project12.png",
    cover: "/images/projects/2150103567.jpg",
    author: {
      name: "Taher, Omar, Max",
      image: "/images/team/taher.jpg",
      designation: "Data Scientists",
    },
    tags: ["production forecasting", "type curve prediction", "machine learning"],
    publishDate: "2024",
    significance: "Improved the accuracy of production forecasts and type curve predictions, leading to better resource planning and management in the Permian Basin.",
    usecases: [
      "Forecasting production in Permian Basin",
      "Predicting type curves for wells",
      "Enhancing resource management",
      "Utilizing machine learning models for data analysis",
    ],
    techStack: [
      "Python",
    ],
  },
  {
    id: 13,
    title: "Profitability Analysis",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Transitioned EFS Tiering to Profitability/LOE metrics as opposed to actual oil production, providing a more accurate measure of economic performance.",
    image: "/images/projects/project13.png",
    cover: "/images/results/pexels-tomfisk-6048400.jpg",
    author: {
      name: "Dr. HUZ",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["profitability analysis", "economic performance", "EFS Tiering"],
    publishDate: "2024",
    significance: "Enhanced the ability to measure and optimize profitability, leading to better decision-making and resource allocation.",
    usecases: [
      "Analyzing profitability and LOE metrics",
      "Improving economic performance evaluation",
      "Optimizing resource allocation",
      "Transitioning from production-based to profitability-based metrics",
    ],
    techStack: [
      "Python",
      "Azure",
    ],
  },
  {
    id: 14,
    title: "Carbon Intensities in GOM and Permian Basin",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a log-normal distribution algorithm to analyze historical data from EPA, EIA, and BOEM, providing insights into carbon intensities.",
    image: "/images/projects/project14.png",
    cover: "/images/results/pexels-pixabay-257775.jpg",
    author: {
      name: "Dr. HUZ, AMA, MJ, Taher, Shaq",
      image: "/images/team/ama.jpg",
      designation: "Data Analysts",
    },
    tags: ["carbon intensity", "data analysis", "environmental impact"],
    publishDate: "2024",
    significance: "Provided valuable insights into carbon intensities, supporting environmental sustainability initiatives and regulatory compliance.",
    usecases: [
      "Analyzing carbon intensities",
      "Using historical environmental data",
      "Supporting sustainability initiatives",
      "Ensuring regulatory compliance",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Python",
      "Azure",
      "R",
      "Excel",
    ],
  },
  {
    id: 15,
    title: "Scope-3 Emissions",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a model to analyze and reduce scope-3 emissions across various travel and accommodation categories, enhancing sustainability efforts.",
    image: "/images/projects/project15.png",
    cover: "/images/projects/pexels-distelapparath-3044479.jpg",
    author: {
      name: "AMA, MJ, TAC, Zainab, Sachin",
      image: "/images/team/ama.jpg",
      designation: "Data Scientists",
    },
    tags: ["scope-3 emissions", "sustainability", "carbon footprint"],
    publishDate: "2024",
    significance: "Significantly reduced the company's carbon footprint and improved sustainability reporting and performance.",
    usecases: [
      "Analyzing scope-3 emissions",
      "Reducing carbon footprint",
      "Improving sustainability reporting",
      "Enhancing environmental performance",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Python",
      "Azure",
      "Excel",
      "R",
    ],
  },
  {
    id: 16,
    title: "Environmental Reporting App",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Created an app for comprehensive environmental reporting, including fuel usage, emissions tracking, and compliance monitoring.",
    image: "/images/projects/project16.png",
    cover: "/images/projects/134032.jpg",
    author: {
      name: "TAC, AMA, MJ, Zainab",
      image: "/images/team/tac.jpg",
      designation: "Environmental Analysts",
    },
    tags: ["environmental reporting", "emissions tracking", "compliance monitoring"],
    publishDate: "2024",
    significance: "Enhanced the company's ability to monitor and report on environmental metrics, ensuring compliance and improving sustainability practices.",
    usecases: [
      "Tracking fuel usage and emissions",
      "Monitoring environmental compliance",
      "Reporting on sustainability metrics",
      "Improving environmental performance",
    ],
    techStack: [
      "HTML5",
      "Microsoft SQL Server",
      "Azure",
      "Microsoft Power Apps",
    ],
  },
  {
    id: 17,
    title: "D&I Timeseries Analysis",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Conducted a timeseries analysis of diversity and inclusion metrics by department, providing insights into organizational diversity trends.",
    image: "/images/projects/project17.png",
    cover: "/images/projects/pexels-goumbik-590022.jpg",
    author: {
      name: "Dr. HUZ",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["diversity and inclusion", "timeseries analysis", "organizational trends"],
    publishDate: "2024",
    significance: "Improved understanding of diversity and inclusion trends, supporting initiatives to enhance organizational diversity.",
    usecases: [
      "Analyzing D&I metrics over time",
      "Identifying diversity trends by department",
      "Supporting D&I initiatives",
      "Improving organizational diversity",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Azure",
    ],
  },
  {
    id: 18,
    title: "mLabs",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a centralized content-management portal for cross-discipline, cross-functional solutions organized by different business units.",
    image: "/images/projects/project18.png",
    cover: "/images/projects/129794.jpg",
    author: {
      name: "Laura, TAC, Ethesham",
      image: "/images/team/laura.jpg",
      designation: "Content Managers",
    },
    tags: ["content management", "cross-discipline solutions", "business units"],
    publishDate: "2024",
    significance: "Centralized management of solutions across business units, improving collaboration and knowledge sharing.",
    usecases: [
      "Managing content across business units",
      "Facilitating cross-functional collaboration",
      "Improving knowledge sharing",
      "Centralizing content management",
    ],
    techStack: [
      "Microsoft SQL Server",
      "PHP",
    ],
  },
  {
    id: 19,
    title: "KosGo",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Developed a dedicated server and real-time data search engine for daily data crawling, enhancing data accessibility and search capabilities.",
    image: "/images/projects/project19.png",
    cover: "/images/projects/pexels-anna-nekrashevich-6801648.jpg",
    author: {
      name: "TAC, Taher, Ethesham, Zainab, Sachin",
      image: "/images/team/tac.jpg",
      designation: "Data Engineers",
    },
    tags: ["data search", "real-time data", "data accessibility"],
    publishDate: "2024",
    significance: "Improved real-time data search capabilities, enhancing data accessibility and operational efficiency.",
    usecases: [
      "Crawling data daily",
      "Real-time data search",
      "Enhancing data accessibility",
      "Improving operational efficiency",
    ],
    techStack: [
      "Python",
      "Java",
      "ElasticSearch",
      "HTML5",
      "AWS",
    ],
  },
  {
    id: 20,
    title: "Production Report",
    problem:"",
    duration:"",
    link: "",
    paragraph:
      "Created a daily production performance report system integrating SQL Server, P2, and Spotfire for comprehensive data analysis and reporting.",
    image: "/images/projects/project20.png",
    cover: "/images/results/pexels-tomfisk-6048400.jpg",
    author: {
      name: "Dr. HUZ, Tony, Ama, MJ, Zainab",
      image: "/images/team/huz.jpg",
      designation: "Data Analysts",
    },
    tags: ["production", "reporting"],
    publishDate: "2024",
    significance: "Enhanced production performance monitoring and reporting, leading to better decision-making and operational efficiency.",
    usecases: [
      "Analyzing daily production performance",
      "Integrating data from multiple sources",
      "Generating comprehensive reports",
      "Supporting decision-making processes",
    ],
    techStack: [
      "Microsoft SQL Server",
      "P2",
      "TIBCO Spotfire",
      "HTML5",
    ],
  },
  {
    id: 21,
    title: "COVID-19 Tracker",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Effectively manage COVID-19 risks without impacting production/revenue or compromising employee safety.",
    image: "/images/projects/project21.png",
    cover: "/images/insights/7244701_18704.jpg",
    author: {
      name: "AMA, TAC, MALIK, Dr. HUZ",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["COVID-19", "tracker", "safety"],
    publishDate: "2024",
    significance: "This project provided a system to manage COVID-19 risks effectively while maintaining production levels and ensuring employee safety.",
    usecases: [
      "Tracking COVID-19 symptoms and exposure among employees",
      "Ensuring compliance with health and safety regulations",
      "Maintaining operational efficiency during the pandemic",
    ],
    techStack: [
      "Microsoft SQL Server",
      "TIBCO Spotfire",
      "Microsoft Power Apps",
    ],
  },
  {
    id: 22,
    title: "Historical Data Normalization",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Filling missing production data to improve accuracy and efficiency in historical data analysis.",
    image: "/images/projects/project22.png",
    cover: "/images/projects/134032.jpg",
    author: {
      name: "MJ, AMA, TONY, SHAQ, ALI",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["data normalization", "production data", "efficiency"],
    publishDate: "2024",
    significance: "This project enhanced the accuracy of historical data analysis by filling missing production data, leading to more reliable insights.",
    usecases: [
      "Filling missing oil, gas, and water production data",
      "Calculating bottom hole pressure",
      "Formulating working interest",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Python",
      "R",
      "Microsoft Excel",
    ],
  },
  {
    id: 23,
    title: "Decline Curve Analysis",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Analyzing decline curves to predict the lifetime production of wells.",
    image: "/images/projects/project23.png",
    cover: "/images/projects/pexels-goumbik-590022.jpg",
    author: {
      name: "Dr. HUZ, AMA, MJ",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["decline curve", "analysis", "prediction"],
    publishDate: "2024",
    significance: "This project utilized real-time data to create predictive models for well production, aiding in resource management and forecasting.",
    usecases: [
      "Analyzing decline curves using real-time data",
      "Predicting lifetime production of wells",
      "Creating real-time dashboards for monitoring",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Python",
      "OWL 7 Database",
      "Microsoft Excel",
    ],
  },
  {
    id: 24,
    title: "Well Data Extraction",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Extracting and organizing well data to improve accessibility and analysis.",
    image: "/images/projects/project24.png",
    cover: "/images/projects/19224.jpg",
    author: {
      name: "TONY, ALI, SHAQ",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["data extraction", "well data", "organization"],
    publishDate: "2024",
    significance: "This project streamlined the extraction and organization of well data, enhancing data accessibility and analysis capabilities.",
    usecases: [
      "Extracting data from well reports",
      "Organizing data into structured formats",
      "Improving data accessibility for analysis",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Python",
    ],
  },
  {
    id: 25,
    title: "Global Downtime Report",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Providing consistent global visualization of nonproductive time data to identify areas of concern and improve operational downtime.",
    image: "/images/projects/project25.png",
    cover: "/images/projects/pexels-anna-nekrashevich-6801648.jpg",
    author: {
      name: "Dr. HUZ",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["downtime", "global report", "visualization"],
    publishDate: "2024",
    significance: "This project standardized nonproductive time codes and provided a global visualization tool to enhance transparency and identify downtime causes.",
    usecases: [
      "Visualizing global nonproductive time data",
      "Standardizing nonproductive time codes",
      "Identifying operational concerns and improving efficiency",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Microsoft SQL Server Reporting Services",
    ],
  },
  {
    id: 26,
    title: "OPEX Tracker",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Real-time field OPEX tracking to understand estimated $/BOE at a given moment in time.",
    image: "/images/projects/project26.png",
    cover: "/images/projects/project-04.jpg",
    author: {
      name: "TAC, AMA, GEOFF",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["OPEX", "tracking", "real-time"],
    publishDate: "2024",
    significance: "This project enabled real-time tracking of operating expenses, improving financial management and operational efficiency.",
    usecases: [
      "Tracking field operating expenses in real-time",
      "Understanding estimated $/BOE at any given time",
      "Customizing expense tracking to improve LOE management",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Microsoft Power Apps",
      "Microsoft Power BI",
    ],
  },
  {
    id: 27,
    title: "CAPEX Accountability App",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Providing a comprehensive view of capital expenditure to ensure accountability and optimize budget management.",
    image: "/images/projects/project27.png",
    cover: "/images/results/pexels-pixabay-220301.jpg",
    author: {
      name: "TAC, AMA, MJ, TAHA, ZAINAB, SACHIN, KHO",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["CAPEX", "accountability", "budget management"],
    publishDate: "2024",
    significance: "This project developed an app to manage and track capital expenditure, promoting accountability and optimizing budget use.",
    usecases: [
      "Tracking capital expenditure across projects",
      "Ensuring accountability in budget management",
      "Providing comprehensive financial overviews",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Microsoft Power Apps",
      "Microsoft Power BI",
    ],
  },
  {
    id: 28,
    title: "Clarity Project Management",
    problem:"",
    duration:"",
    link: "",
    paragraph: "Enhancing project management by providing clear dashboards and tracking tools.",
    image: "/images/projects/project28.png",
    cover: "/images/projects/pexels-fauxels-3183153.jpg",
    author: {
      name: "TAC",
      image: "/images/team/huz.jpg",
      designation: "Lead Researcher",
    },
    tags: ["project management", "clarity", "dashboard"],
    publishDate: "2024",
    significance: "This project provided enhanced tools for project management, including clear dashboards and tracking mechanisms, to improve oversight and efficiency.",
    usecases: [
      "Creating clear project dashboards",
      "Tracking project progress and milestones",
      "Improving project oversight and efficiency",
    ],
    techStack: [
      "Microsoft SQL Server",
      "Microsoft Power Apps",
    ],
  },
];

export default projectData;