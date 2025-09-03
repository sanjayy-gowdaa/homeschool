import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, BookOpen, Heart, Users, Lightbulb } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Homeschooling in India: A Complete Guide",
    excerpt: "Everything you need to know about starting your homeschooling journey in India, including legal aspects and practical tips.",
    author: "Priya Sharma",
    date: "March 15, 2024",
    category: "Getting Started",
    readTime: "8 min read",
    featured: true,
    tags: ["Beginner", "Legal", "NIOS"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop"
  },
  {
    id: 2,
    title: "NIOS Enrollment: Step-by-Step Process for 2024",
    excerpt: "Detailed guide on how to enroll your child in NIOS, including important dates, requirements, and documentation.",
    author: "Rajesh Kumar",
    date: "March 10, 2024",
    category: "NIOS Updates",
    readTime: "6 min read",
    featured: false,
    tags: ["NIOS", "Enrollment", "Documentation"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop"
  },
  {
    id: 3,
    title: "Creating a Learning Schedule That Works for Your Family",
    excerpt: "Tips and strategies for developing a flexible yet structured homeschool schedule that accommodates your family's needs.",
    author: "Meera Patel",
    date: "March 5, 2024",
    category: "Homeschool Tips",
    readTime: "5 min read",
    featured: false,
    tags: ["Schedule", "Planning", "Time Management"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
  },
  {
    id: 4,
    title: "Parent Experience: Why We Chose Homeschooling",
    excerpt: "A real parent's journey from traditional school to homeschooling, including challenges faced and benefits experienced.",
    author: "Anita Singh",
    date: "February 28, 2024",
    category: "Parent Experiences",
    readTime: "7 min read",
    featured: true,
    tags: ["Experience", "Transition", "Benefits"],
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=450&fit=crop"
  },
  {
    id: 5,
    title: "Building a Homeschool Community: Finding Your Tribe",
    excerpt: "How to connect with other homeschooling families in your area and build a supportive community.",
    author: "Kavya Reddy",
    date: "February 20, 2024",
    category: "Community",
    readTime: "4 min read",
    featured: false,
    tags: ["Community", "Networking", "Support"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop"
  },
  {
    id: 6,
    title: "Managing Homeschool Assessments and Progress Tracking",
    excerpt: "Effective methods for assessing your child's progress and maintaining records for future educational needs.",
    author: "Suresh Gupta",
    date: "February 15, 2024",
    category: "Assessment",
    readTime: "6 min read",
    featured: false,
    tags: ["Assessment", "Progress", "Records"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop"
  }
];

const categories = [
  { name: "Getting Started", count: 12, icon: BookOpen },
  { name: "NIOS Updates", count: 8, icon: Calendar },
  { name: "Parent Experiences", count: 15, icon: Heart },
  { name: "Homeschool Tips", count: 20, icon: Lightbulb },
  { name: "Community", count: 6, icon: Users }
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Homeschooling Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tips, experiences, and updates from the homeschooling community. 
              Learn from other parents, get NIOS updates, and discover new resources.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Posts</h2>
              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Load More Posts
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <li key={category.name}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                          className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <div className="flex items-center">
                            <IconComponent className="h-4 w-4 mr-2" />
                            <span>{category.name}</span>
                          </div>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest homeschooling tips and NIOS updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['NIOS', 'Beginner', 'Tips', 'Experience', 'Community', 'Assessment', 'Legal', 'Planning'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
