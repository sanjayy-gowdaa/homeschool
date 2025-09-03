# HomeschoolIndia - Home is the new normal

A comprehensive Next.js website designed to support homeschooling families in India. This platform provides resources, guidance, and community support for parents choosing to educate their children at home.

## Features

### 🏠 Home Page
- **Hero Section**: "Home is the new normal" with call-to-action buttons
- **Benefits Overview**: Highlighting flexible learning, customized curriculum, and stress-free environment
- **Community Section**: Encouraging family connections

### 📚 Resources (/features)
- **Articles & Guides**: Comprehensive homeschooling methodology guides
- **Printable Worksheets**: Age-appropriate activities for all subjects
- **Support Groups & Forums**: Community connections and parent networking
- **Resource Library**: Curated educational tools and materials

### 🎓 NIOS Guide (/nios-guide)
- **Complete NIOS Information**: Introduction to National Institute of Open Schooling
- **Step-by-Step Enrollment**: Detailed enrollment process and requirements
- **FAQ Section**: Common questions about NIOS and homeschooling laws
- **Official Links**: Direct access to NIOS resources

### 📖 Study Materials (/study-materials) *Coming Soon*
- Subject-wise PDF resources
- Interactive worksheets and activities
- Grade-level appropriate content
- Parent guidance materials

### 🎥 Video Lessons (/video-lessons) *Coming Soon*
- Expert-led educational videos
- Interactive learning platform
- Progress tracking system
- Multi-subject coverage

### 📝 Blog (/blog)
- **Homeschooling Tips**: Practical advice and strategies
- **NIOS Updates**: Latest news and policy changes
- **Parent Experiences**: Real stories from homeschooling families
- **Community Insights**: Shared knowledge and support

### 📞 Contact (/contact)
- **Contact Form**: Direct communication with support team
- **Multiple Channels**: Email, WhatsApp, and phone support
- **Quick Help**: Popular topics and instant assistance

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment Ready**: Optimized for Vercel/Netlify

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd homeschool
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on:

- **Vercel** (Recommended)
- **Netlify**
- **Globe.gl** or other hosting platforms

### Environment Variables
Currently, no environment variables are required for basic functionality.

## Project Structure

```
src/
├── app/
│   ├── blog/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── features/
│   │   └── page.tsx
│   ├── nios-guide/
│   │   └── page.tsx
│   ├── study-materials/
│   │   └── page.tsx
│   ├── video-lessons/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
```

## Features in Development

- **Study Materials Platform**: Comprehensive subject-wise resources
- **Video Learning Platform**: Interactive video lessons with progress tracking
- **User Authentication**: Personalized experience for families
- **Community Forum**: Interactive discussion boards
- **Mobile App**: Native mobile experience

## Contributing

We welcome contributions from the homeschooling community! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support and questions:
- **Email**: info@homeschoolindia.com
- **Website**: [Contact Page](/contact)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- NIOS (National Institute of Open Schooling) for providing flexible education options
- The homeschooling community in India for inspiration and feedback
- Contributors and supporters of this project

---

**HomeschoolIndia** - Empowering families through flexible education solutions.
