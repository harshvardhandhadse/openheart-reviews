export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6">
            🫀 OpenHeart Reviews
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            A Privacy-First Review Platform
          </p>
          <p className="text-xl text-gray-500 mb-12">
            Share honest reviews anonymously. Better than MouthShut.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/reviews/new" className="btn-primary">
              Write a Review
            </a>
            <a href="/categories" className="btn-secondary">
              Browse Categories
            </a>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose OpenHeart?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Anonymous Posting</h3>
              <p className="text-gray-600">Write reviews without revealing your identity</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Email Privacy</h3>
              <p className="text-gray-600">Your email is NEVER shown publicly</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-semibold mb-2">No Tracking</h3>
              <p className="text-gray-600">Zero third-party analytics or cookies</p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 text-center">
          <div className="bg-red-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">🚀 Coming Soon</h2>
            <p className="text-xl text-gray-700 mb-6">
              We're building something amazing for you!
            </p>
            <p className="text-gray-600">
              Full features launching soon: Categories, Reviews, User Dashboard, and more.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
