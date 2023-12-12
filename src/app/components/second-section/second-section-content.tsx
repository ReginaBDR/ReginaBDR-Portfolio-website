import "./second-section-content.css";

export const SecondSectionContent = () => {
  return (
    <section className="second-section-content">
      <h3 className="skills-title">Front-end technologies</h3>
      <ul>
        <li>Html, Css and Scss</li>
        <li>Tailwind and AntDesign</li>
        <li>React.js, Vue.js, Remix.js and Next.js</li>
        <li>Javascript and Typescript</li>
        <li>Canvas, Three.js, and Ifc.js</li>
        <li>Turf.js and Mapbox</li>
        <li>Mocha, Cypress and Jest</li>
        <li>Agile Scrum methodology</li>
      </ul>
      <h3 className="skills-title">Back-end technologies</h3>
      <ul>
        <li>Python, Kotlin and Java </li>
        <li>Spring, Spring Boot, and JHipster</li>
        <li>Node.js, Express.js and Nest.js</li>
        <li>Jwt, Keycloak and Auth0</li>
        <li>SQL and No SQL Databases, GraphQL</li>
        <li>Docker, AWS and Kubernetes</li>
        <li>Git, CI/CD and Github Actions</li>
        <li>JUnit and Mockito</li>
      </ul>
      <h3 className="skills-title">And I speak fluently in:</h3>
      <ul>
        <li>Spanish</li>
        <li>English</li>
        <li>Portuguese</li>
      </ul>
    </section>
  );
};
