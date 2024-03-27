import { useEffect, useState, useRef } from 'react';

const GetVisits = () => {
  const [visitors, setVisitors] = useState([]);
  const isMountedRef = useRef(false);

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

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      getVisits();
    }
  }, []);

  return (
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
  );
};

export default GetVisits;
