import { useEffect } from 'react';

const LogVisit = () => {
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
        console.log(await response.json());
      } catch (error) {
        console.error(error);
      }
    };
    logVisit();
  }, []);

  return null;
};

export default LogVisit;
