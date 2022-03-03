import './App.css';

function App() {
  return (
    <div className="container">
      <gridHeader>
      <h1>Qiong Peng's Website</h1>
      </gridHeader>
      
      <gridLeft>
      <ul>
          <li><a href="/">Home Page</a></li>
          <li><a href="/about">Photos</a></li>
          <li><a href="/project">Secret Project</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </gridLeft>

      <gridCenter>
         <box></box>
      </gridCenter>

      <gridRight>

      </gridRight>

      <gridFoot>
<h1>This is the footer</h1>
      </gridFoot>

    </div>
  );
}

export default App;
