import Link from "next/link";

const TopNav = () => (
  <nav className="nav shadow p-3 mb-3 text-center">
    <Link href="/blogs" className="text-gray-500 mx-3">
      View all blogs
    </Link>
    <Link href="/add-blog" className="text-gray-500 mx-3">
      Add Blog
    </Link>
  </nav>
);

export default TopNav;
