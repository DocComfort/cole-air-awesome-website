import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/lib/metadata'
import { NewsletterSignup } from '@/components/LeadCapture'

export const metadata: Metadata = generateServiceMetadata(
  'HVAC Tips & News Lake Charles | Cole Air Blog',
  'Expert HVAC tips for Southwest Louisiana homeowners. Energy savings, maintenance guides, hurricane prep, and local climate solutions from Cole Air Inc.',
  '/blog'
)

const featuredPosts = [
  {
    title: 'Hurricane HVAC Preparation Guide for Southwest Louisiana',
    excerpt: 'Protect your HVAC system from storm damage with our comprehensive hurricane preparation checklist.',
    category: 'Hurricane Prep',
    readTime: '5 min read',
    slug: 'hurricane-hvac-prep-guide',
    image: '🌀',
    featured: true
  },
  {
    title: 'Louisiana Summer Energy Savings: Beat the Heat Without Breaking the Bank',
    excerpt: 'Learn how to keep your Lake Charles home cool while reducing your Entergy bill with these proven strategies.',
    category: 'Energy Savings',
    readTime: '4 min read',
    slug: 'summer-energy-savings-tips',
    image: '💡'
  },
  {
    title: 'Signs Your AC Needs Repair: Lake Charles Homeowner Guide',
    excerpt: 'Recognize the warning signs before your AC breaks down in Louisiana heat. When to call for professional help.',
    category: 'Maintenance',
    readTime: '3 min read',
    slug: 'ac-repair-warning-signs',
    image: '🔧'
  }
]

const recentPosts = [
  {
    title: 'Winter Heating Tips for Occasional Louisiana Cold Snaps',
    excerpt: 'How to prepare your heating system for those surprise Louisiana cold fronts.',
    category: 'Seasonal',
    readTime: '3 min read',
    slug: 'winter-heating-louisiana',
    date: '2025-10-20'
  },
  {
    title: 'Commercial HVAC Maintenance for Lake Charles Businesses',
    excerpt: 'Keep your business comfortable and compliant with regular commercial HVAC service.',
    category: 'Commercial',
    readTime: '4 min read',
    slug: 'commercial-hvac-maintenance',
    date: '2025-10-18'
  },
  {
    title: 'Indoor Air Quality Solutions for Southwest Louisiana',
    excerpt: 'Combat humidity, allergens, and indoor pollutants with professional air quality systems.',
    category: 'Air Quality',
    readTime: '5 min read',
    slug: 'indoor-air-quality-solutions',
    date: '2025-10-15'
  },
  {
    title: 'Heat Pump vs Central AC: What\'s Best for Lake Charles?',
    excerpt: 'Compare heating and cooling options for Southwest Louisiana\'s unique climate.',
    category: 'Installation',
    readTime: '6 min read',
    slug: 'heat-pump-vs-central-ac',
    date: '2025-10-12'
  },
  {
    title: 'HVAC Filter Guide: Choosing the Right Filter for Louisiana',
    excerpt: 'Navigate HVAC filter options to improve air quality and system efficiency.',
    category: 'Maintenance',
    readTime: '4 min read',
    slug: 'hvac-filter-guide-louisiana',
    date: '2025-10-10'
  },
  {
    title: 'Emergency HVAC Situations: When to Call Cole Air Immediately',
    excerpt: 'Recognize HVAC emergencies that require immediate professional attention.',
    category: 'Emergency',
    readTime: '3 min read',
    slug: 'hvac-emergency-situations',
    date: '2025-10-08'
  }
]

const categories = [
  { name: 'Hurricane Prep', count: 8, color: 'bg-red-100 text-red-800' },
  { name: 'Energy Savings', count: 12, color: 'bg-green-100 text-green-800' },
  { name: 'Maintenance', count: 15, color: 'bg-blue-100 text-blue-800' },
  { name: 'Installation', count: 7, color: 'bg-purple-100 text-purple-800' },
  { name: 'Seasonal', count: 10, color: 'bg-orange-100 text-orange-800' },
  { name: 'Commercial', count: 6, color: 'bg-gray-100 text-gray-800' },
  { name: 'Air Quality', count: 5, color: 'bg-teal-100 text-teal-800' },
  { name: 'Emergency', count: 4, color: 'bg-yellow-100 text-yellow-800' }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HVAC Tips & News
              <span className="block text-blue-300">for Southwest Louisiana</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert advice, maintenance tips, and local HVAC insights from 40+ years serving Lake Charles families and businesses.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h2>
              {featuredPosts.filter(post => post.featured).map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{post.image}</span>
                      <div>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-500 ml-3">{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}` as any}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </div>
              ))}
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest HVAC Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          categories.find(cat => cat.name === post.category)?.color || 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600">
                        <Link href={`/blog/${post.slug}` as any}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <Link
                          href={`/blog/${post.slug}` as any}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter Signup */}
            <div className="mb-8">
              <NewsletterSignup />
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                🚨 HVAC Emergency?
              </h3>
              <p className="text-red-700 mb-4">
                Don't wait - call for immediate service!
              </p>
              <a
                href="tel:3378556278"
                className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition-colors block text-center"
              >
                Call (337) 855-6278
              </a>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}` as any}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                  >
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-gray-500 text-sm">({category.count})</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Most Popular</h3>
              <div className="space-y-4">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 hover:text-blue-600 mb-1">
                      <Link href={`/blog/${post.slug}` as any}>
                        {post.title}
                      </Link>
                    </h4>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}