import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';



export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]} ></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
        </ul>
        </section>
        <div id='core-concepts'>
        <CourseGoal title="Learn React" description="In-depth." ></CourseGoal>
        <CourseGoal title="Practice" description="Practice working with React components." ></CourseGoal>
        </div>
      </main>
    </div>
    
  );
}

export default App;
