import "./styles/globals.css"
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {

    return (
        <div>
    
        {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
        <div className="text-center text-gray-700">
          <h1 className="text-5xl font-bold mb-4">Welcome to The Pantry</h1>
          <p className="text-xl mb-8">
            Your one-stop shop for all your daily essentials.
          </p>
          <Link href="/home">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">
              Browse Products
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Category 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/fruits.jpg"
              alt="Fresh Fruits"
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fresh Fruits</h3>
            <p className="text-gray-600 mb-4">
              Enjoy the freshest hand-picked fruits from our farm.
            </p>
            <Link href="/home">
              <span className="text-blue-500 hover:underline">Shop Fruits</span>
            </Link>
          </div>

          {/* Category 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/vegetables.jpg"
              alt="Fresh Vegetables"
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fresh Vegetables</h3>
            <p className="text-gray-600 mb-4">
              Organic and locally sourced vegetables for your daily needs.
            </p>
            <Link href="/home">
              <span className="text-blue-500 hover:underline">Shop Vegetables</span>
            </Link>
          </div>

          {/* Category 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/snacks.jpg"
              alt="Snacks"
              width={300}
              height={200}
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Snacks</h3>
            <p className="text-gray-600 mb-4">
              Delicious snacks to satisfy your cravings at any time.
            </p>
            <Link href="/home">
              <span className="text-blue-500 hover:underline">Shop Snacks</span>
            </Link>
          </div>
        </div>
      </section>

  
      </div>
    );
}