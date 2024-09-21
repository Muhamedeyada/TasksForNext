import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg p-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-2xl font-bold">
          Next Day1
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link href="/products" className="btn btn-primary">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="btn btn-secondary">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="btn btn-accent">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
