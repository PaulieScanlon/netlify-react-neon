import { useEffect, useState } from 'react';

const LogVisit = () => {
  const [visitor, setVisitor] = useState();

  useEffect(() => {
    const logVisit = async () => {
      try {
        const response = await fetch('/log-visit', {
          method: 'POST',
          body: JSON.stringify({ date: new Date() }),
        });

        if (!response.ok) {
          throw new Error('Bad response');
        }

        const json = await response.json();
        setVisitor(json);
      } catch (error) {
        console.error(error);
      }
    };

    logVisit();
  }, []);

  return <code>{JSON.stringify(visitor, null, 2)}</code>;
};

export default LogVisit;
