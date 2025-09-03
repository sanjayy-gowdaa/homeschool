import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Users, Clock, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Home Schooling is the new <span className="text-blue-600">normal</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                We are here to help practicing homeschooling
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/features"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Explore Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/nios-guide"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border border-blue-600"
                >
                  Learn about NIOS
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/family-learning.jpg"
                  alt="Happy family learning together at home"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                ✨ Fun Learning!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold shadow-lg transform -rotate-12">
                📚 NIOS Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Homeschooling is Growing in India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              More Indian families are choosing homeschooling for its flexibility, personalized approach, 
              and stress-free learning environment. Join thousands of families who have made the switch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flexible Learning */}
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning</h3>
              <p className="text-gray-600">
                Learn at your own pace, on your own schedule. No rigid timelines or pressure to keep up with others.
              </p>
            </div>

            {/* Customized Curriculum */}
            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Curriculum</h3>
              <p className="text-gray-600">
                Tailor education to your child's interests, strengths, and learning style for maximum engagement.
              </p>
            </div>

            {/* Stress-Free Environment */}
            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stress-Free</h3>
              <p className="text-gray-600">
                Create a loving, supportive environment where children can thrive without academic pressure.
              </p>
            </div>
          </div>

          {/* Community Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <Users className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
              <p className="text-xl mb-8 opacity-90">
                Connect with thousands of homeschooling families across India
              </p>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Parents Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from real families who have successfully implemented homeschooling with our guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b67c?w=200&h=200&fit=crop&crop=face"
                    alt="Priya Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Mother of 2, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The NIOS guidance was invaluable. My children are now learning at their own pace and are much happier. The community support made all the difference."
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Rajesh Kumar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-gray-600 text-sm">Father of 1, Delhi</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Best decision we made for our daughter's education. The resources and support system are excellent. She's excelling beyond our expectations."
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
                    alt="Anita Patel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Anita Patel</h4>
                  <p className="text-gray-600 text-sm">Mother of 3, Bangalore</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "From enrollment to daily learning, every step was well-guided. My children are more confident and creative now. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
