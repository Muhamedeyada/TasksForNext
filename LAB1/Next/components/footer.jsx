import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Next Day1</h2>
          <p className="text-gray-400">
            © 2024 Next Day1. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-400 hover:text-white">
            About Us
          </Link>
          <Link href="/products" className="text-gray-400 hover:text-white">
            Products
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
