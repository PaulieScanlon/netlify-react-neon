import { useEffect, useState, useRef } from 'react';

const LogVisit = () => {
  const [visitor, setVisitor] = useState();
  const isMountedRef = useRef(false);

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

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      logVisit();
    }
  }, []);

  return <code>{JSON.stringify(visitor, null, 2)}</code>;
};

export default LogVisit;
