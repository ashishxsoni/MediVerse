# 🏥 MediVerse - Healthcare Consultation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/ashishxsoni/MediVerse.svg)](https://github.com/ashishxsoni/MediVerse/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ashishxsoni/MediVerse.svg)](https://github.com/ashishxsoni/MediVerse/network)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://medi-verse-000.vercel.app/)

> A comprehensive healthcare consultation platform connecting patients with doctors through secure video consultations, appointment booking, and integrated payment systems.

## 🌟 Live Demo

**Try MediVerse now:** [https://medi-verse-000.vercel.app/](https://medi-verse-000.vercel.app/)

![MediVerse Demo](images/screenshots/dashboard.png)

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](images/screenshots/homepage.png)

### 👨‍⚕️ Doctor Directory
![Doctor Directory](images/screenshots/doctors.png)

### 📅 Appointment Booking
![Appointment Booking](images/screenshots/booking.png)

### 💬 Video Consultation
![Video Consultation](images/screenshots/consultation.png)

### 👤 Patient Dashboard
![Patient Dashboard](images/screenshots/patient-dashboard.png)

### 🩺 Doctor Dashboard
![Doctor Dashboard](images/screenshots/doctor-dashboard.png)

### 🔧 Admin Panel
![Admin Panel](images/screenshots/admin-panel.png)

</div>

## 📋 Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [User Roles](#user-roles)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

MediVerse is a modern healthcare consultation platform that bridges the gap between patients and healthcare providers. Built with cutting-edge technology, it offers a seamless experience for booking appointments, conducting video consultations, and managing healthcare interactions with integrated payment processing and administrative oversight.

The platform serves three primary user roles - patients seeking medical consultation, doctors providing healthcare services, and administrators managing the platform - all within a secure, scalable, and user-friendly environment.

## ✨ Key Features

### 🏥 Patient Experience
- **Doctor Discovery**: Browse doctors by specialty and expertise
- **Smart Appointment Booking**: Select available time slots and book consultations
- **Credit-Based System**: Purchase and manage consultation credits
- **HD Video Consultations**: High-quality 1-on-1 video calls with doctors
- **Medical History**: Track consultation history and medical records
- **Secure Authentication**: Multi-factor authentication for account security

### 👨‍⚕️ Doctor Portal
- **Professional Profile**: Comprehensive doctor profiles with specializations
- **Schedule Management**: Set availability and manage appointment slots
- **Video Consultation Platform**: Conduct secure video consultations
- **Earnings Dashboard**: Track consultation fees and payout history
- **Patient Management**: Access patient information and consultation history
- **Performance Analytics**: Monitor consultation statistics and patient feedback

### 🛡️ Admin Dashboard
- **Platform Management**: Oversee all platform operations and user activities
- **Revenue Tracking**: Monitor platform fees and transaction analytics
- **User Management**: Manage patient and doctor accounts
- **Quality Assurance**: Review consultations and maintain service quality
- **Financial Reports**: Comprehensive reporting on platform revenue and payouts
- **System Analytics**: Track platform usage and performance metrics

### 💳 Payment & Credit System
- **Secure Transactions**: Integrated payment processing with multiple payment methods
- **Credit Management**: Flexible credit system for consultation bookings
- **Automated Payouts**: Streamlined payout system for healthcare providers
- **Platform Fee Management**: Configurable commission structure
- **Transaction History**: Detailed financial records for all users

### 🎥 Video Integration
- **Vonage Video API**: Professional-grade video calling infrastructure
- **Crystal Clear Audio**: High-quality audio for clear communication
- **Screen Sharing**: Share documents and medical images during consultations
- **Recording Capabilities**: Optional consultation recording for medical records
- **Multi-Device Support**: Seamless experience across desktop and mobile devices

## 👥 User Roles

### 🧑‍⚕️ Patient
- Browse and select doctors by specialty
- Book consultation appointments using credits
- Participate in video consultations
- Manage medical history and appointments
- Purchase and track consultation credits

### 👨‍⚕️ Doctor
- Create detailed professional profiles
- Set availability and consultation fees
- Conduct video consultations with patients
- Manage earnings and payout schedules
- Access patient consultation history

### 🔧 Administrator
- Oversee platform operations
- Manage user accounts and permissions
- Monitor financial transactions and payouts
- Generate platform analytics and reports
- Configure platform settings and fees

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with server-side rendering
- **React 18** - Modern UI library with hooks and context API
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **shadcn/ui** - High-quality UI components built on Radix UI
- **JavaScript (ES6+)** - Modern JavaScript features

### Backend & Database
- **PostgreSQL** - Robust relational database for data persistence
- **Prisma ORM** - Type-safe database client and query builder
- **Next.js API Routes** - Serverless API endpoints
- **Vercel** - Cloud platform for deployment and hosting

### Authentication & Security
- **Clerk.js** - Complete authentication and user management solution
- **JWT Tokens** - Secure session management
- **Role-Based Access Control** - Multi-tier permission system
- **Data Encryption** - End-to-end encryption for sensitive medical data

### Video & Communication
- **Vonage Video API** - Professional video calling platform
- **WebRTC** - Real-time communication protocols
- **Socket.io** - Real-time bidirectional event-based communication

### Payment Processing
- **Stripe/Razorpay** - Secure payment processing
- **Credit System** - Custom credit management for consultations
- **Automated Payouts** - Scheduled payments to healthcare providers

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v13.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashishxsoni/MediVerse.git
   cd MediVerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # Seed initial data (optional)
   npx prisma db seed
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the application**
   - Application: `http://localhost:3000`

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mediverse"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Vonage Video API
VONAGE_API_KEY=your_vonage_api_key
VONAGE_API_SECRET=your_vonage_api_secret

# Payment Processing
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

## 💻 Usage

### For Patients

1. **Registration**: Sign up and complete your patient profile
2. **Browse Doctors**: Search doctors by specialty, rating, and availability
3. **Purchase Credits**: Buy consultation credits through secure payment
4. **Book Appointment**: Select a doctor and available time slot
5. **Video Consultation**: Join the scheduled video call with your doctor
6. **Medical Records**: Access your consultation history and prescriptions

### For Doctors

1. **Professional Setup**: Create detailed profile with qualifications and specialties
2. **Schedule Management**: Set your availability and consultation fees
3. **Patient Consultations**: Conduct video consultations with patients
4. **Earnings Tracking**: Monitor your consultation earnings and payouts
5. **Patient History**: Access patient medical history and previous consultations

### For Administrators

1. **Platform Overview**: Access comprehensive dashboard with key metrics
2. **User Management**: Manage patient and doctor accounts
3. **Financial Monitoring**: Track platform revenue, fees, and payouts
4. **Quality Control**: Review consultations and maintain service standards
5. **Analytics**: Generate reports on platform usage and performance

## 📁 Project Structure

```
MediVerse/
│
├── actions/                     # Server actions for data operations
│   ├── admin.js                # Admin-related server actions
│   ├── appointments.js         # Appointment management actions
│   ├── credits.js              # Credit system operations
│   ├── doctor.js               # Doctor profile actions
│   ├── doctors-listing.js      # Doctor directory actions
│   ├── onboarding.js           # User onboarding flow
│   ├── patient.js              # Patient profile actions
│   └── payout.js               # Payment and payout processing
│
├── app/                        # Next.js 14 App Router
│   ├── (auth)/                 # Authentication routes group
│   │   ├── layout.js           # Auth layout wrapper
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.jsx    # Clerk sign-in page
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   │           └── page.jsx    # Clerk sign-up page
│   ├── (main)/                 # Main application routes
│   │   ├── admin/              # Admin dashboard
│   │   │   ├── components/
│   │   │   │   ├── pending-doctors.jsx
│   │   │   │   ├── pending-payouts.jsx
│   │   │   │   └── verified-doctors.jsx
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   ├── doctor/             # Doctor dashboard
│   │   │   ├── _components/
│   │   │   │   ├── appointments-list.jsx
│   │   │   │   ├── availability-settings.jsx
│   │   │   │   └── doctor-earnings.jsx
│   │   │   ├── verification/
│   │   │   │   └── page.jsx    # Doctor verification page
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   ├── doctors/            # Doctor directory and booking
│   │   │   ├── [specialty]/    # Dynamic specialty routes
│   │   │   │   └── [id]/       # Individual doctor pages
│   │   │   │       ├── _components/
│   │   │   │       │   ├── appointment-form.jsx
│   │   │   │       │   ├── doctor-profile.jsx
│   │   │   │       │   └── slot-picker.jsx
│   │   │   │       ├── layout.js
│   │   │   │       └── page.jsx
│   │   │   ├── components/
│   │   │   │   └── doctor-card.jsx
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   ├── onboarding/         # User onboarding flow
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   └── video-call/         # Video consultation interface
│   │       ├── page.jsx
│   │       └── video-call-ui.jsx
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.js               # Root layout component
│   └── page.js                 # Landing page
│
├── components/                 # Reusable UI components
│   ├── ui/                     # shadcn/ui components
│   │   ├── alert.jsx           # Alert notifications
│   │   ├── badge.jsx           # Status badges
│   │   ├── button.jsx          # Button variants
│   │   ├── card.jsx            # Card containers
│   │   ├── dialog.jsx          # Modal dialogs
│   │   ├── input.jsx           # Form inputs
│   │   ├── label.jsx           # Form labels
│   │   ├── select.jsx          # Dropdown selects
│   │   ├── separator.jsx       # Visual separators
│   │   ├── sonner.jsx          # Toast notifications
│   │   ├── tabs.jsx            # Tab navigation
│   │   └── textarea.jsx        # Text area inputs
│   ├── appointment-card.jsx    # Appointment display component
│   ├── cta-section.jsx         # Call-to-action sections
│   ├── feature-section.jsx     # Feature highlights
│   ├── footer.jsx              # Site footer
│   ├── header.jsx              # Site header/navigation
│   ├── hero-section.jsx        # Landing page hero
│   ├── mode-toggle.jsx         # Dark/light mode toggle
│   ├── page-header.jsx         # Page title headers
│   ├── pricing-section.jsx     # Pricing display
│   ├── pricing.jsx             # Credit pricing component
│   ├── testimonials.jsx        # User testimonials
│   └── theme-provider.jsx      # Theme context provider
│
├── hooks/                      # Custom React hooks
│   └── use-fetch.js            # Data fetching hook
│
├── lib/                        # Utility functions and configurations
│   ├── animation.js            # Animation utilities
│   ├── checkUser.js            # User authentication checks
│   ├── data.js                 # Static data and constants
│   ├── prisma.js               # Prisma client configuration
│   ├── private.key             # Private key for JWT/encryption
│   ├── schema.js               # Validation schemas
│   ├── specialities.js         # Medical specialties data
│   └── utils.js                # General utility functions
│
├── prisma/                     # Database configuration
│   ├── migrations/             # Database migrations
│   │   ├── 20250621192548_create_models/
│   │   │   └── migration.sql   # Initial database schema
│   │   └── migration_lock.toml # Migration lock file
│   └── schema.prisma           # Prisma schema definition
│
├── public/                     # Static assets
│   ├── banner--2.png           # Banner images
│   ├── banner.png
│   ├── banner2.png
│   ├── favicon-.png            # Favicon variants
│   ├── favicon.png
│   ├── logo (2).png            # Logo variants
│   ├── logo-single.png
│   └── logo.png
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs           # ESLint configuration
├── jsconfig.json               # JavaScript configuration
├── middleware.js               # Next.js middleware for auth
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies
├── postcss.config.mjs          # PostCSS configuration
└── README.md                   # Project documentation
```

## 🔌 API Endpoints

### Authentication
- `GET /api/auth/user` - Get current user details
- `POST /api/auth/role` - Update user role

### Appointments
- `GET /api/appointments` - Get user appointments
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor details
- `POST /api/doctors` - Create doctor profile
- `PUT /api/doctors/:id` - Update doctor profile

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/credits` - Purchase credits
- `GET /api/payments/history` - Get payment history
- `POST /api/payments/payout` - Process doctor payout

### Video Consultations
- `POST /api/video/session` - Create video session
- `GET /api/video/token` - Get session token
- `POST /api/video/end-session` - End consultation

## 🤝 Contributing

We welcome contributions to make MediVerse better! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow Next.js 14 app router conventions
   - Use JavaScript ES6+ best practices
   - Add tests for new features
   - Update documentation as needed
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow Next.js 14 app router conventions
- Use JavaScript ES6+ for consistency
- Implement responsive design with Tailwind CSS
- Write clean, documented code
- Test your changes thoroughly
- Ensure HIPAA compliance for medical data

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contact

**Ashish Soni**
- GitHub: [@ashishxsoni](https://github.com/ashishxsoni)
- Email: ashishxsoni@gmail.com
- LinkedIn: [Connect with me](https://linkedin.com/in/ashishxsoni)

## 🙏 Acknowledgments

- Thanks to the healthcare professionals who provided insights during development
- Vonage for their robust video API platform
- Clerk.js for seamless authentication solutions
- The open-source community for the amazing tools and libraries
- All contributors and beta testers who helped improve MediVerse

## 🌟 Show Your Support

If you found MediVerse helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 💡 Suggesting new features
- 🤝 Contributing to the codebase
- 📢 Sharing with healthcare professionals

---

**Made with ❤️ by [Ashish Soni](https://github.com/ashishxsoni)**

*Revolutionizing healthcare accessibility through technology, one consultation at a time.*
