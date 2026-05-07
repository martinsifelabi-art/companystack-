export default function CompanyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to Our Professional Company
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              We are passionate about delivering quality services with honesty,
              creativity, and professionalism. Our goal is to help clients grow
              their businesses while building strong and trusted relationships.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2347013550592"
                target="_blank"
                className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="#services"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                View Our Services
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Business Team"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are dedicated to helping individuals and businesses succeed by
            offering reliable and professional solutions. Every client matters
            to us, and we work with care, respect, and commitment to deliver
            results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              Quality services designed to help you grow and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-semibold mb-4">Professional Work</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide professional and high-quality services tailored to
                meet your needs with excellence.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">Friendly Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team communicates respectfully and politely to ensure every
                client feels comfortable and valued.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on delivering projects quickly while maintaining top
                quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 text-lg">
              Here are some examples of the quality and creativity we bring to
              every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Project"
              className="rounded-3xl shadow-lg h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Project"
              className="rounded-3xl shadow-lg h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Project"
              className="rounded-3xl shadow-lg h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Thank you for visiting our website. We would be happy to work with
            you and help bring your ideas to life. Please feel free to contact
            us anytime. We are always ready to assist you with professionalism
            and respect.
          </p>

          <div className="bg-white text-gray-900 inline-block px-8 py-6 rounded-3xl shadow-2xl">
            <p className="text-xl font-semibold mb-2">WhatsApp Contact</p>
            <p className="text-2xl font-bold text-green-600">
              07013550592
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/2347013550592"
              target="_blank"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition inline-block"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center px-6">
        <p>
          © 2026 Professional Company. Built with care to serve our clients
          better.
        </p>
      </footer>
    </div>
  );
}
