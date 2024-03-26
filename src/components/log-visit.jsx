import { useEffect, useState } from 'react';

const LogVisit = () => {
  const [visitor, setVisitor] = useState();

  useEffect(() => {
    const initVisit = async () => {
      try {
        const response = await fetch('/log-visit');

        if (!response.ok) {
          throw new Error('Bad response');
        }

        const json = await response.json();
        setVisitor(json);
      } catch (error) {
        console.error(error);
      }
    };

    initVisit();
  }, []);

  return <code>{JSON.stringify(visitor, null, 2)}</code>;
};

export default LogVisit;
