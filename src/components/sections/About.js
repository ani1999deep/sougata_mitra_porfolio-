import { RevealOnScroll } from "../RevealOnScroll";
import "../../css/About.css";

export const About = () => {
  const testingTools = [
    "Postman",
    "SOAP UI",
    "Selenium (with PEGA)",
    "JMeter",
    "Load Runner",
    "SauceLabs",
    "Tricentis Tosca (Certified Consultant)",
  ];

  const testManagementTools = ["JIRA", "ServiceNow", "Azure DevOps", "Mantis"];

  const apiTestingTools = [
    "MuleSoft (Anypoint Platform)",
    "IIB APIs",
    "Salesforce (Service Cloud & Sales Cloud)",
    "DataPower (DP)",
    "IBM API Connect (APIC)",
  ];

  const automationTesting = [
    "Selenium (TDD and BDD)",
    "Maven-based frameworks",
    "SauceLabs automation",
    "JMeter",
    "Load Runner",
  ];

  const databases = [
    "Oracle 8i / 10g",
    "MS Access",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
  ];

  const cloudExperience = ["AWS (Migration Experience)"];

  const projectSkills = [
    "Scrum Master (Conducting sprints, standups, refinements, retrospectives)",
    "Agile-based project deliveries",
    "Test Strategy & Planning",
    "Requirement Analysis",
    "Test Case Design & Execution",
    "Defect Reporting and Triage",
    "Test Report Preparation & Sign-off",
    "Client Communication & Documentation",
  ];

  const migrationExperience = [
    "IIB to MuleSoft Migration",
    "APIC/DP to MuleSoft Migration",
    "On-premise to AWS Cloud",
  ];

  const domains = [
    "Insurance",
    "Bio-Med",
    "Hospitality",
    "E-Commerce",
    "G2C / B2C Portals",
    "Automobile",
    "Financial Services",
  ];

  const leadershipSkills = [
    "Leading QA Teams",
    "Mentoring Team Members",
    "Cross-functional Coordination (Dev, Product Owner, Business Users)",
    "Effort Estimation",
    "Delivery Management",
    "Client Communication & Stakeholder Engagement",
  ];

  const developmentConcepts = [
    "Built Maven-based automation framework (150+ Selenium reusable functions, 50+ PEGA-specific functions)",
    "TDD and BDD test development",
    "API collections and scripting in Postman",
    "SQL scripting for backend testing",
  ];

  const certifications = [
    "Information Security Management System by BS ISO/IEC 27001:2005",
    "Cyber Sentinel Training (Certification on Cyber Security)",
    "Professional Scrum Master 1 by Scrum.Org",
    "Certified Tricentis Tosca Consultant",
  ];

  return (
    <section id="about" className="about-section">
      <RevealOnScroll>
        <div className="about-container">
          <h2 className="about-title">About Me</h2>

          <div className="about-card">
            <p className="about-description">
              Accomplished IT leader with 20+ years of experience in enterprise
              software testing, QA strategy, and system integration across
              global domains. Specialized in Salesforce (Service & Sales Cloud),
              MuleSoft, and API testing using tools like Postman, Selenium, and
              JMeter. A Certified Scrum Master and ISO 27001 professional known
              for driving Agile excellence, leading high-performance teams, and
              ensuring secure, reliable delivery aligned with business goals.
            </p>

            <div className="skills-grid">
              {/* Existing skills */}
              {/* <div className="skills-section">
                <h3 className="skills-title">Frontend</h3>
                <div className="skills-tags">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* <div className="skills-section">
                <h3 className="skills-title">Backend</h3>
                <div className="skills-tags">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
              {/* 
              <div className="skills-section">
                <h3 className="skills-title">Other Skills</h3>
                <div className="skills-tags">
                  {otherSkills.map((skill, key) => (
                    <span key={key} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* <div className="skills-section">
                <h3 className="skills-title">Subjects</h3>
                <div className="skills-tags">
                  {subjects.map((subject, key) => (
                    <span key={key} className="skill-tag">
                      {subject}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Additional skills */}
              <div className="skills-section">
                <h3 className="skills-title">Testing Tools</h3>
                <div className="skills-tags">
                  {testingTools.map((tool, key) => (
                    <span key={key} className="skill-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Test Management Tools</h3>
                <div className="skills-tags">
                  {testManagementTools.map((tool, key) => (
                    <span key={key} className="skill-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">API Testing Tools</h3>
                <div className="skills-tags">
                  {apiTestingTools.map((tool, key) => (
                    <span key={key} className="skill-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Automation Testing</h3>
                <div className="skills-tags">
                  {automationTesting.map((tool, key) => (
                    <span key={key} className="skill-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Databases</h3>
                <div className="skills-tags">
                  {databases.map((db, key) => (
                    <span key={key} className="skill-tag">
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Cloud Experience</h3>
                <div className="skills-tags">
                  {cloudExperience.map((cloud, key) => (
                    <span key={key} className="skill-tag">
                      {cloud}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Project Skills</h3>
                <div className="skills-tags">
                  {projectSkills.map((skill, key) => (
                    <span key={key} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Migration Experience</h3>
                <div className="skills-tags">
                  {migrationExperience.map((experience, key) => (
                    <span key={key} className="skill-tag">
                      {experience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Domains</h3>
                <div className="skills-tags">
                  {domains.map((domain, key) => (
                    <span key={key} className="skill-tag">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Leadership Skills</h3>
                <div className="skills-tags">
                  {leadershipSkills.map((leadership, key) => (
                    <span key={key} className="skill-tag">
                      {leadership}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">
                  Development & Programming Concepts
                </h3>
                <div className="skills-tags">
                  {developmentConcepts.map((concept, key) => (
                    <span key={key} className="skill-tag">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">🏫 Education</h3>
              <ul className="info-list">
                <li>
                  <strong>G-Tech – 2 Year Diploma in Software</strong> – TATA
                  Infotech (2001 – 2003)
                </li>
                <li>
                  <strong>Bachelor of Science (B.Sc)</strong> – Burdwan
                  University (WB) (1998 – 2001)
                </li>
              </ul>

              <h3 className="info-title">🎓 Certifications</h3>
              <ul className="info-list">
                <li>
                  Information Security Management System by BS ISO/IEC
                  27001:2005
                </li>
                <li>
                  Cyber Sentinel Training (Certification on Cyber Security)
                </li>
                <li>Professional Scrum Master 1 by Scrum.Org</li>
                <li>Certified Tricentis Tosca Consultant</li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-title">💼 Work Experience</h3>
              <div className="info-text">
                <div>
                  <h4 className="info-role">
                    Node.js Developer Intern at Excellis IT Pvt. Ltd (July 2024
                    – Sept 2024)
                  </h4>
                  <p>
                    Developed a full-fledged e-commerce platform using React.js
                    and Node.js. Created REST APIs, user authentication, and
                    MongoDB database integration.
                  </p>
                </div>

                <div>
                  <h4 className="info-role">
                    Backend Developer Intern at Specstem Digital Pvt. Ltd. (Jan
                    2023 – July 2024)
                  </h4>
                  <p>
                    Maintained and optimized scalable APIs using Node.js,
                    Express, and MongoDB. Ensured secure handling of sensitive
                    user data.
                  </p>
                </div>

                <div>
                  <h4 className="info-role">
                    React.js Developer at Esolz Technologies Pvt. Ltd. (Nov 2022
                    – May 2023)
                  </h4>
                  <p>
                    Built an SPA admin dashboard using React and Redux,
                    improving UX and development efficiency.
                  </p>
                </div>

                <div>
                  <h4 className="info-role">
                    Service Engineer at Penta Automation (Dec 2021 – June 2022)
                  </h4>
                  <p>
                    Delivered PLC/HMI-based automation solutions. Worked on
                    sensor integrations, AutoCAD I/O mapping, and electrical
                    panel commissioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
