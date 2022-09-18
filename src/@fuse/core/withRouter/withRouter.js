import { useRouter } from 'next/router';

function withRouter(Child) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();

    return <Child {...props} navigate={router} location={router} />;
  };
}

export default withRouter;
