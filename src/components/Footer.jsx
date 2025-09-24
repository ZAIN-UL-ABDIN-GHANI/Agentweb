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
            <li><a href="#" className="hover:underline">AI Agents</a></li>
            <li><a href="#" className="hover:underline">Task Automation</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Live Demo</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-semibold mb-3">Use Cases</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Entrepreneurs & Startups</a></li>
            <li><a href="#" className="hover:underline">Small Teams & Agencies</a></li>
            <li><a href="#" className="hover:underline">Enterprise Solutions</a></li>
            <li><a href="#" className="hover:underline">Education & Research</a></li>
            <li><a href="#" className="hover:underline">Personal Productivity</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Customer Stories</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p>© 2025 AGENTAI. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
