import Link from 'next/link';
import { Play, BookOpen, Users, Clock, Star, ArrowRight, Video, Monitor } from 'lucide-react';

const videoCategories = [
  {
    id: 1,
    title: "Mathematics Lessons",
    description: "Step-by-step video tutorials for all math concepts from basic to advanced.",
    thumbnail: "/api/placeholder/400/225",
    duration: "15-30 min",
    lessons: 45,
    level: "All Levels",
    color: "bg-blue-50",
    status: "Coming Soon"
  },
  {
    id: 2,
    title: "Science Experiments",
    description: "Interactive science lessons with virtual and practical experiments.",
    thumbnail: "/api/placeholder/400/225",
    duration: "20-40 min",
    lessons: 38,
    level: "Class 6-12",
    color: "bg-green-50",
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "English Language",
    description: "Grammar, vocabulary, and literature lessons with native speakers.",
    thumbnail: "/api/placeholder/400/225",
    duration: "10-25 min",
    lessons: 52,
    level: "All Levels",
    color: "bg-purple-50",
    status: "Coming Soon"
  },
  {
    id: 4,
    title: "Hindi Language",
    description: "Comprehensive Hindi learning from basics to advanced literature.",
    thumbnail: "/api/placeholder/400/225",
    duration: "15-30 min",
    lessons: 35,
    level: "All Levels",
    color: "bg-orange-50",
    status: "Coming Soon"
  },
  {
    id: 5,
    title: "Social Studies",
    description: "History, Geography, and Civics with visual storytelling.",
    thumbnail: "/api/placeholder/400/225",
    duration: "20-35 min",
    lessons: 42,
    level: "Class 5-12",
    color: "bg-pink-50",
    status: "Coming Soon"
  },
  {
    id: 6,
    title: "Life Skills",
    description: "Practical skills for personal development and real-world applications.",
    thumbnail: "/api/placeholder/400/225",
    duration: "10-20 min",
    lessons: 28,
    level: "All Ages",
    color: "bg-indigo-50",
    status: "Coming Soon"
  }
];

const features = [
  {
    title: "High-Quality Videos",
    description: "Professional HD videos with clear audio and visual explanations.",
    icon: Video
  },
  {
    title: "Interactive Learning",
    description: "Pause, rewind, and learn at your own pace with interactive elements.",
    icon: Monitor
  },
  {
    title: "Expert Teachers",
    description: "Experienced educators and subject matter experts as instructors.",
    icon: Users
  },
  {
    title: "Curriculum Aligned",
    description: "All lessons aligned with NIOS and NCERT curriculum standards.",
    icon: BookOpen
  }
];

export default function VideoLessons() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Lessons
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Engaging video lessons designed specifically for homeschooling families. 
              Learn from expert teachers with interactive content that makes education enjoyable.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-semibold">Coming Soon - Video Platform in Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Our Video Lessons?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our video platform will provide the best online learning experience for homeschooling families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Lesson Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive video lessons covering all major subjects with age-appropriate content 
              for different learning levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoCategories.map((category) => (
              <div
                key={category.id}
                className={`${category.color} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative`}
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {category.status}
                </div>

                {/* Video Thumbnail Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <Play className="h-8 w-8 text-gray-600" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {category.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Video className="h-4 w-4 mr-1" />
                      {category.lessons} lessons
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {category.level}
                    </span>
                  </div>
                  
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-lg cursor-not-allowed flex items-center justify-center"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Content Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What's Coming
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-700">Video Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-700">Subject Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700">Access Available</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900">Platform Features:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Play className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                Interactive video player with note-taking capabilities
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                Progress tracking and completion certificates
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                Downloadable supplementary materials
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                Quiz and assessment integration
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                Parent dashboard for monitoring progress
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Be Among the First to Access Our Video Platform
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our waiting list to get early access to our comprehensive video learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Join Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/nios-guide"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors border-2 border-white"
            >
              Learn about NIOS
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
