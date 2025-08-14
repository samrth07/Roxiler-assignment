import React from "react";

export default function Home() {
  return (
    <div className="mt-24">
      <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-8 md:px-16 py-12 ">
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Rate Stores. Share Feedback. Build Trust.
          </h2>
          <p className="text-gray-600 text-lg">
            Join our platform to discover, rate, and review stores in your area.
            Whether you’re a shopper or a store owner, we help connect
            businesses with their customers.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/findstores"
              className="bg-green-500 text-white px-5 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-gray-300 px-5 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose StoreRate?
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-3">
                For Customers
              </h4>
              <p className="text-gray-600">
                Discover stores, read reviews, and rate your experience to help
                others make better choices.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-green-600 mb-3">
                For Store Owners
              </h4>
              <p className="text-gray-600">
                Track ratings, respond to feedback, and grow your business by
                building trust with customers.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-purple-600 mb-3">
                For Admins
              </h4>
              <p className="text-gray-600">
                Manage users, stores, and ratings in one centralized,
                easy-to-use dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-white border-t py-6 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} StoreRate. All rights reserved.
      </footer>
    </div>
  );
}
