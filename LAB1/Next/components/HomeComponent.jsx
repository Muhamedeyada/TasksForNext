function HomeComponent() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
        <p className="mt-2">Your one-stop solution for all your needs.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-2 text-gray-700">
          We are a company dedicated to providing the best services to our
          customers.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-gray-700">
          Feel free to reach out to us at{" "}
          <a href="mailto:info@oursite.com" className="text-blue-500 underline">
            info@oursite.com
          </a>
          .
        </p>
      </section>

      <footer className="mt-8 bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <p>© 2024 Our Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomeComponent;
