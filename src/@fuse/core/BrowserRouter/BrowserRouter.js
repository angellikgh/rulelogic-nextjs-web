import { useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouter } from 'next/router';

function BrowserRouter({ children }) {
  const router = useRouter();

  const [state, setState] = useState({
    action: null, // history.action,
    location: router, // history.location,
  });

  // useLayoutEffect(() => history.listen(setState), []);

  return <Router location={state.location}>{children}</Router>;
}

export default BrowserRouter;
