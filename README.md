# GK WebTech AI Institute Website

A modern, professional institute website built with **Next.js** and **Tailwind CSS**. This platform showcases industry-focused training programs, a comprehensive course catalog, internship opportunities, and a streamlined lead-capture system for enrollments.

## 🚀 Features

*   **Dynamic Course Catalog**: Browse programs by category (Technology, AI, Finance, Media, etc.).
*   **Program Variants**: Supports Foundation, Pro, and Master level tracks for different learning depths.
*   **Pricing Simulator**: Interactive Education Investment Planner for custom learning paths.
*   **Lead Capture & Support**: Integrated contact forms and automated email notifications via Nodemailer.
*   **Legal & Compliance**: Dedicated sections for Privacy Policy, Terms of Service, and Institute Policies.
*   **SEO Optimized**: High performance with server-side rendering, metadata control, and sitemaps.
*   **Modern UI/UX**: Fully responsive design with dark mode support and premium aesthetics.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **UI Library**: [React](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Media Hosting**: [Cloudinary](https://cloudinary.com/)
*   **Email Engine**: [Nodemailer](https://nodemailer.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (Integration ready)

## 📁 Project Structure

```text
app/          # Next.js App Router (Pages, APIs, Layouts)
components/   # Reusable UI components (shadcn/ui inspired)
constants/    # Global constants (site config, URLs)
context/      # React Context providers (Auth, Theme)
data/         # Static data catalogs (Courses, Testimonials, FAQs)
lib/          # Utility functions and shared logic
public/       # Static assets (images, PDFs, icons)
```

## ⚙️ Environment Setup

Copy `.env.example` to `.env.local` and configure the following variables:

```env
# Public Site Info
NEXT_PUBLIC_SITE_URL=https://institute.gkwebtech.cloud
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Email (SMTP) Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM="GK Institute <contact@gkwebtech.cloud>"
CONTACT_RECEIVER_EMAIL=admin@gkwebtech.cloud

# Database
MONGODB_URI=your_mongodb_connection_string
```

## 🛠️ Installation & Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Production Build**:
    ```bash
    npm run build
    ```

4.  **Start Production Server**:
    ```bash
    npm start
    ```

## 🌐 Deployment

The website is currently deployed on a VPS using **Dokploy**.

*   **Production URL**: [https://institute.gkwebtech.cloud](https://institute.gkwebtech.cloud)
*   **Staging/Development**: Handled via internal CI/CD pipelines.

## 📝 Author

**GK WebTech AI Institute**  
Empowering the next generation of digital professionals.  
[https://gkwebtech.cloud](https://gkwebtech.cloud)
