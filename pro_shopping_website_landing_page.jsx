export default function ProShoppingWebsite() {
  const products = [
    {
      name: "Luxury Sneakers",
      price: "₦45,000",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Modern Wrist Watch",
      price: "₦65,000",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Fashion Handbag",
      price: "₦38,000",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Smart Headphones",
      price: "₦55,000",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Premium Shopping Experience
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover stylish fashion, gadgets, accessories, and premium products at affordable prices.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2347013550592"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl transition"
              >
                Chat on WhatsApp
              </a>

              <a
                href="#products"
                className="border border-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
              alt="shopping"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your products delivered quickly and safely anywhere in Nigeria.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
          <p className="text-gray-600">
            Carefully selected high-quality products that customers love.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
          <p className="text-gray-600">
            Contact us anytime on WhatsApp for orders and customer support.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-4">Trending Products</h2>
          <p className="text-gray-600 text-lg">
            Shop the latest and hottest products today.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-extrabold text-green-600 mb-5">
                  {product.price}
                </p>

                <a
                  href="https://wa.me/2347013550592"
                  target="_blank"
                  className="block text-center bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready To Start Shopping?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Message us directly on WhatsApp and get the best deals instantly.
          </p>

          <a
            href="https://wa.me/2347013550592"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transition"
          >
            Contact Seller Now
          </a>

          <div className="mt-8 text-lg text-gray-400">
            WhatsApp: 07013550592
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center">
        <p>
          © 2026 Premium Shopping Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
