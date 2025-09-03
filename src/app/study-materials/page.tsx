import Link from 'next/link';
import { BookOpen, Download, FileText, Calculator, Globe, Beaker, Users, ArrowRight, Clock } from 'lucide-react';

const subjects = [
  {
    id: 1,
    title: "Mathematics",
    description: "Comprehensive math resources from basic arithmetic to advanced calculus.",
    icon: Calculator,
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "bg-blue-600",
    materials: ["Worksheets", "Practice Tests", "Video Solutions", "Formula Sheets"],
    status: "Coming Soon"
  },
  {
    id: 2,
    title: "Science",
    description: "Physics, Chemistry, and Biology resources with practical experiments.",
    icon: Beaker,
    color: "bg-green-50 hover:bg-green-100",
    iconColor: "bg-green-600",
    materials: ["Lab Manuals", "Theory Notes", "Diagrams", "Quiz Questions"],
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "English",
    description: "Language skills, literature, and communication development materials.",
    icon: BookOpen,
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "bg-purple-600",
    materials: ["Grammar Guides", "Writing Prompts", "Reading Lists", "Vocabulary"],
    status: "Coming Soon"
  },
  {
    id: 4,
    title: "Social Studies",
    description: "History, Geography, Civics, and Economics study materials.",
    icon: Globe,
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "bg-orange-600",
    materials: ["Maps", "Timeline Charts", "Case Studies", "Current Affairs"],
    status: "Coming Soon"
  },
  {
    id: 5,
    title: "Hindi",
    description: "Hindi language learning resources and literature materials.",
    icon: FileText,
    color: "bg-pink-50 hover:bg-pink-100",
    iconColor: "bg-pink-600",
    materials: ["Grammar Rules", "Literature", "Writing Practice", "Poems"],
    status: "Coming Soon"
  },
  {
    id: 6,
    title: "Life Skills",
    description: "Practical life skills and personality development resources.",
    icon: Users,
    color: "bg-indigo-50 hover:bg-indigo-100",
    iconColor: "bg-indigo-600",
    materials: ["Communication", "Problem Solving", "Time Management", "Ethics"],
    status: "Coming Soon"
  }
];

export default function StudyMaterials() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Study Materials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive study materials for all subjects, designed specifically for homeschooling families. 
              Download PDFs, worksheets, and interactive content to support your child's learning journey.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-semibold">Coming Soon - Currently in Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Subject-wise Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive study materials will cover all major subjects with age-appropriate content 
              for different grade levels, aligned with NIOS and NCERT curricula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <div
                  key={subject.id}
                  className={`${subject.color} rounded-xl p-8 transition-all duration-300 hover:shadow-lg border border-gray-200 relative`}
                >
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {subject.status}
                  </div>

                  <div className={`inline-flex items-center justify-center w-16 h-16 ${subject.iconColor} text-white rounded-full mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {subject.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {subject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Will Include:</h4>
                    <ul className="space-y-1">
                      {subject.materials.map((material, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <Download className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-lg cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our study materials will be comprehensive, engaging, and designed specifically for homeschooling needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">PDF Downloads</h3>
              <p className="text-gray-600 text-sm">Printable worksheets and study guides for offline learning.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Interactive Content</h3>
              <p className="text-gray-600 text-sm">Engaging activities and quizzes to make learning fun.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Practice Tests</h3>
              <p className="text-gray-600 text-sm">Regular assessments to track progress and understanding.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Parent Guides</h3>
              <p className="text-gray-600 text-sm">Instructions and tips for parents to guide their children effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get Notified When Materials Are Ready
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be the first to access our comprehensive study materials when they're released.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Join Waiting List
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors border-2 border-white"
            >
              Explore Current Resources
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
