import { useEffect, useState } from 'react';

const GetVisits = () => {
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
      <h1>Last 5 visits</h1>
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
};

export default GetVisits;
