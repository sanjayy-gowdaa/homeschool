import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, CheckCircle, AlertCircle, ExternalLink, FileText, Users, Calendar } from 'lucide-react';

const enrollmentSteps = [
  {
    step: 1,
    title: "Understand NIOS",
    description: "National Institute of Open Schooling provides flexible education for students who cannot attend regular schools.",
    details: ["Recognized by CBSE and other boards", "Flexible admission dates", "Multiple examination chances"]
  },
  {
    step: 2,
    title: "Check Eligibility",
    description: "Ensure your child meets the age and educational requirements for the desired level.",
    details: ["Secondary (Class 10): Minimum age 14 years", "Senior Secondary (Class 12): Minimum age 15 years", "Previous class completion certificate"]
  },
  {
    step: 3,
    title: "Choose Subjects",
    description: "Select from a wide range of subjects based on your child's interests and career goals.",
    details: ["Minimum 5 subjects for Class 10", "Minimum 5 subjects for Class 12", "Optional additional subjects available"]
  },
  {
    step: 4,
    title: "Submit Application",
    description: "Complete the online application form and submit required documents.",
    details: ["Online application form", "Passport size photographs", "Previous academic certificates", "Fee payment"]
  },
  {
    step: 5,
    title: "Study Materials",
    description: "Receive study materials and access online resources for self-study.",
    details: ["Physical study materials", "Online content access", "Assignment booklets", "Practical manuals if applicable"]
  },
  {
    step: 6,
    title: "Examinations",
    description: "Appear for examinations at designated centers and complete assignments.",
    details: ["Theory examinations", "Practical examinations (if applicable)", "Tutor Marked Assignments (TMA)", "Multiple exam opportunities"]
  }
];

const faqs = [
  {
    question: "Is NIOS legal for homeschooling in India?",
    answer: "Yes, NIOS is completely legal and recognized by the Government of India. It's specifically designed for students who cannot attend regular schools, making it perfect for homeschoolers."
  },
  {
    question: "Can NIOS students apply for higher education?",
    answer: "Absolutely! NIOS certificates are accepted by all universities and colleges in India for higher education admissions, including engineering, medical, and other professional courses."
  },
  {
    question: "What is the age limit for NIOS?",
    answer: "There's no upper age limit for NIOS. The minimum age is 14 years for Class 10 and 15 years for Class 12. Adults can also enroll to complete their education."
  },
  {
    question: "How many chances do students get for exams?",
    answer: "NIOS provides multiple opportunities. Students can appear for examinations twice a year (April and October) and have up to 5 years to complete their course."
  },
  {
    question: "Can students choose their own subjects?",
    answer: "Yes, NIOS offers great flexibility in subject selection. Students can choose from a wide range of subjects based on their interests and career goals."
  }
];

export default function NIOSGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop"
            alt="Educational background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NIOS Guide for Homeschoolers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to know about National Institute of Open Schooling (NIOS) 
              and how it supports homeschooling in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nios.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Visit Official NIOS Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is NIOS?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The National Institute of Open Schooling (NIOS) is the world's largest open schooling system under the Ministry of Education, Government of India. 
              It provides education to those who cannot attend regular schools due to various reasons, making it an ideal choice for homeschooling families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with no fixed schedules or attendance requirements.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Government Recognized</h3>
              <p className="text-gray-600">Certificates are valid and accepted by all universities and employers across India.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">Support System</h3>
              <p className="text-gray-600">Access to study materials, online resources, and academic support when needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step-by-Step Enrollment Guide
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to enroll your child in NIOS and start your homeschooling journey.
            </p>
          </div>

          <div className="space-y-8">
            {enrollmentSteps.map((step, index) => (
              <div key={step.step} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about NIOS and homeschooling laws in India.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <AlertCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start with NIOS?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized guidance for your NIOS enrollment and homeschooling journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Personal Guidance
              <Users className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors border-2 border-white"
            >
              Explore Resources
              <FileText className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
