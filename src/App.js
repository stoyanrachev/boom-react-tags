import "./App.css";
import Tags from "./Tags";
function App() {

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <Tags tags={["boomdotdev", "task", "tags", "react"]} />
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
