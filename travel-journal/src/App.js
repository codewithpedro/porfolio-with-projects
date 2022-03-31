import './App.css';
import Header from './components/Header';
import Log from './components/Log';
import data from './data';

function App() {
  const logs = data.map(entry => {
    return <Log 
              key={entry.id}
              {...entry}
            />
  })

  return (
    <div className="">
      <Header />
      <main class="main">
        <div className='container'>
          {logs}
        </div>
      </main>
    </div>
  );
}

export default App;
