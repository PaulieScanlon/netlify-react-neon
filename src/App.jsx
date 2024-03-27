import { useEffect, useState } from 'react';
import './App.css';

import LogVisit from './components/log-visit.jsx';

function App() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const getVisits = async () => {
      try {
        const response = await fetch('/get-visits', {
          method: 'GET',
        });

        const json = await response.json();
        setVisitors(json.visits);
      } catch (error) {
        console.error(error);
      }
    };

    getVisits();
  }, []);

  return (
    <>
      <h1>Log visit</h1>
      <LogVisit />
      <h2>Last 5 visits</h2>
      <ol>
        {visitors
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map((visit, index) => {
            return (
              <li key={index}>
                <code>{JSON.stringify(visit, null, 2)}</code>
              </li>
            );
          })}
      </ol>
    </>
  );
}

export default App;
