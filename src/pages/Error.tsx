import { useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  return (
    <>
      <h1>
        Error page, <i>"{location.pathname}"</i> page does not exist on the
        server.
      </h1>
    </>
  );
}

export default Error;
