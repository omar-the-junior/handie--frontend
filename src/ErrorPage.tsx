import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <div className="flex w-full flex-col items-center justify-center gap-10 px-20 py-32">
        <h1 className="h1 text-center font-bold">{errorMessage}</h1>
        <Link to="/" className="btn btn-sm md:btn-md">
          Back to home page
        </Link>
      </div>
      <Footer />
    </div>
  );
}
