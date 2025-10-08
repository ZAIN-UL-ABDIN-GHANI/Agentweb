import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purLight text-gray-800 text-sm mt-[2%]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-bold">AGENTAI</h2>
          <p className="mt-2 text-gray-600">
            Your AI-powered agent for smarter workflows &amp; productivity.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/agents" className="hover:underline">
                AI Agents
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Task Automation
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline">
                Integrations
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" cl assName="hover:underline">
                Live Demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Press
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-semibold mb-3">Use Cases</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Entrepreneurs & Startups
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Small Teams & Agencies
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Enterprise Solutions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Education & Research
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Personal Productivity
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Community
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Customer Stories
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Tutorials
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>© 2025 AGENTAI. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
