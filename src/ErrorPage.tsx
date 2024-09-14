import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: React.ReactNode;

  if (isRouteErrorResponse(error)) {
    errorMessage = (
      <>
        <span className="text-primary">{error.status}</span> {error.statusText}
      </>
    );
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unkown error';
  }

  return (
    <div>
      <Navbar />
      <div className="flex w-full items-center justify-center px-20 py-10">
        <h1 className="text-center text-5xl font-bold">{errorMessage}</h1>
      </div>
    </div>
  );
}
