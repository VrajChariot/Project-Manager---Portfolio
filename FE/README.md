# Aniket Shah - Portfolio

A modern, minimal, and attractive portfolio website for Aniket Shah, a Junior Project Manager actively seeking new opportunities.

## 🚀 Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Header, Footer)
│   └── sections/        # Page sections (Hero, About, Skills, Projects, Contact)
├── types/               # TypeScript type definitions
├── assets/              # Images and documents
│   ├── images/
│   └── documents/
├── App.tsx              # Main application component
├── App.css              # Global app styles
├── index.css            # Base styles and CSS variables
└── main.tsx             # Application entry point
```

## 🎨 Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional overview with key highlights
- **Skills Section**: Comprehensive display of project management, technical, and soft skills
- **Projects Section**: Showcase of 4 featured projects with outcomes
- **Contact Form**: Interactive contact form for inquiries
- **Resume Download**: Quick access to downloadable resume
- **Social Links**: Connect via LinkedIn, GitHub, Twitter, and Email
- **Responsive Design**: Mobile-friendly layout
- **Smooth Navigation**: Sticky header with smooth scrolling
- **Modern UI**: Clean, professional design with modern aesthetics

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/VrajChariot/Project-Manager---Portfolio.git
cd Project-Manager---Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

To customize the portfolio for your own use:

1. Update personal information in the component files:
   - `src/components/sections/Hero.tsx` - Name and introduction
   - `src/components/sections/About.tsx` - About me text
   - `src/components/sections/Skills.tsx` - Skills list
   - `src/components/sections/Projects.tsx` - Project details
   - `src/components/sections/Contact.tsx` - Contact information
   - `src/components/common/Footer.tsx` - Social media links

2. Replace the resume PDF:
   - Add your resume PDF to `public/` directory
   - Update the filename in `src/components/sections/Hero.tsx`

3. Customize colors in `tailwind.config.js` by modifying the theme colors

## 🎨 Tailwind CSS

This project uses Tailwind CSS v4 for styling. The configuration can be found in:
- `tailwind.config.js` - Theme customization (colors, fonts, animations)
- `postcss.config.js` - PostCSS plugin configuration
- `src/index.css` - Base styles and custom CSS variables

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vraj Shah**
- Email: Vraj0410shah@gmail.com
- LinkedIn: [linkedin.com/in/vrajshah04](https://www.linkedin.com/in/vrajshah04/)

---

Built with ❤️ using React + TypeScript + Vite + Tailwind CSS
