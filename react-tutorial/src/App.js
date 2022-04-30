
import './App.css';

function App() {
  const title = 'welcome to my new blog';
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 24 }</p>
        <p>{ 'hey, i am daphne' }</p>
        <p>{ Math.random() *10 }</p>

        <a href={ link }>Google site</a>

      </div>
    </div>
  );
}

export default App;
