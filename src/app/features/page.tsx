import Link from 'next/link';
import { BookOpen, FileText, Users, MessageCircle, Download, Star, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Articles & Guides",
    description: "Comprehensive guides on homeschooling methods, curriculum planning, and educational philosophies.",
    icon: BookOpen,
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "bg-blue-600",
    href: "/articles"
  },
  {
    id: 2,
    title: "Printable Worksheets",
    description: "Age-appropriate worksheets and activities for all subjects, ready to download and print.",
    icon: FileText,
    color: "bg-green-50 hover:bg-green-100",
    iconColor: "bg-green-600",
    href: "/worksheets"
  },
  {
    id: 3,
    title: "Support Groups & Forums",
    description: "Connect with other homeschooling parents, share experiences, and get advice from the community.",
    icon: MessageCircle,
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "bg-purple-600",
    href: "/forums"
  },
  {
    id: 4,
    title: "Community Links",
    description: "Local homeschooling groups, meetups, and events happening in your area.",
    icon: Users,
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "bg-orange-600",
    href: "/community"
  },
  {
    id: 5,
    title: "Resource Library",
    description: "Curated collection of books, websites, apps, and tools for effective homeschooling.",
    icon: Star,
    color: "bg-pink-50 hover:bg-pink-100",
    iconColor: "bg-pink-600",
    href: "/library"
  },
  {
    id: 6,
    title: "Free Downloads",
    description: "Templates, planners, checklists, and other helpful resources for homeschool organization.",
    icon: Download,
    color: "bg-indigo-50 hover:bg-indigo-100",
    iconColor: "bg-indigo-600",
    href: "/downloads"
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Homeschooling Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to start and succeed in your homeschooling journey. 
              From curriculum guides to community support, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`${feature.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconColor} text-white rounded-full mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Link
                    href={feature.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Homeschooling Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of families who have successfully transitioned to homeschooling with our comprehensive resources and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nios-guide"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Learn about NIOS
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border border-blue-600"
            >
              Get Personal Guidance
              <MessageCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
