// This line imports the App.css file, which contains the styling for the App component
import './App.css';

// imports Bootstrap CSS, which is a popular CSS framework that provides pre-designed components and layout tools
import 'bootstrap/dist/css/bootstrap.min.css';

//app component which is responisble for rendering the application
function App() {
  //content component that returns text. It is called within the Home component
  // and populates the card with text
  function Content() {
    return (
      <>
      <div class="mt-4">
      <p>
      React components have several benefits, including:
      </p>
      <ul class="list">
        <li>
        <p>Reusability: React components can be easily reused throughout a application, making development more efficient.</p>
        </li>
        <li>
        <p>Composability: React components can be composed to create more complex UI elements, making it easy to build and maintain large and complex applications.</p>
        </li>
        <li>
        <p>Virtual DOM: React uses a virtual DOM, which optimizes updates and improves the performance of applications by minimizing the amount of DOM manipulation required.</p>
        </li>
      </ul>
      </div>
      </>
    )
  }

  //Home component that uses JSX to return HTML markdown for home page
  function Home() {
    return (
      <>
      <div class="main">
      <div class="card mt-4">
        <div class="card-header">
          <h3 >Hello World</h3>
        </div>
        <div class="card-body">
          <p>I am learning components in ReactJs</p>
          <Content />
        </div>
      </div>
      </div>
      </>
    );
  }
  //return home component to be rendered by React
  return (
  <Home />
  );
}

export default App;
