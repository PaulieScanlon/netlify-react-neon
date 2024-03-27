import LogVisit from './components/log-visit.jsx';
import GetVisits from './components/get-visits.jsx';

function App() {
  return (
    <>
      <h1>Log visit</h1>
      <LogVisit />
      <h2>Last 5 visits</h2>
      <GetVisits />
    </>
  );
}

export default App;
