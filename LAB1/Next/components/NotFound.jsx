import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  function backHome() {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-700 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={backHome}
        className="btn btn-primary px-6 py-3 text-lg font-medium"
      >
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
