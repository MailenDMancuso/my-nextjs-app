import Link from "next/link";

const TopNav = () => (
  <nav className="nav shadow p-2 mb-3">
    <Link href="/blog-list" className="nav-link">
      View all blogs
    </Link>
    <Link href="/add-blog" className="nav-link">
      Add Blog
    </Link>
  </nav>
);

export default TopNav;
