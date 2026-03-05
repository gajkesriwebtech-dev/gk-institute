import type { Metadata } from 'next';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading } from '../../components/ui';

export const metadata: Metadata = {
    title: 'Privacy Policy | GK WebTech AI Institute',
    description: 'Learn how GK WebTech AI Institute collects, uses, and protects your personal information.',
};

const sections = [
    {
        title: "Introduction",
        content: `GK WebTech AI Institute ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at https://institute.gkwebtech.cloud or enroll in our programs.`
    },
    {
        title: "Information We Collect",
        content: `We may collect the following types of information:
• Personal identification information (name, email address, phone number)
• Academic background and learning preferences
• Payment and billing information (processed securely by third-party providers)
• Device and usage data (IP address, browser type, pages visited)
• Information submitted through contact or enrollment forms`
    },
    {
        title: "How We Use Information",
        content: `We use the information we collect to:
• Process course enrollments and manage your student account
• Send administrative and course-related communications
• Respond to inquiries and provide customer support
• Improve our website, curriculum, and services
• Send marketing communications where you have given consent
• Comply with legal obligations`
    },
    {
        title: "Data Protection",
        content: `We implement industry-standard security measures including SSL encryption and secure database storage to protect your personal data. Access to personal data is strictly limited to authorized personnel only. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.`
    },
    {
        title: "Cookies",
        content: `Our website uses cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. You may disable cookies through your browser settings; however, some features of our website may not function properly without them. By continuing to use our site, you consent to our use of cookies.`
    },
    {
        title: "Third-Party Services",
        content: `We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business (e.g., payment processors, email service providers, analytics platforms). These parties are obligated to keep your information confidential and are not permitted to use it for any other purpose.`
    },
    {
        title: "External Links",
        content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any website you visit through links on our site.`
    },
    {
        title: "Children's Information",
        content: `Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.`
    },
    {
        title: "Policy Updates",
        content: `We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.`
    },
    {
        title: "Contact Information",
        content: `If you have any questions about this Privacy Policy, please contact us:\n\nGK WebTech AI Institute\nWebsite: https://institute.gkwebtech.cloud\nEmail: contact@gkwebtech.cloud\nPhone: +91 9971944676\nAddress: 2nd Floor, Tiwari Clinic Building, Jyoti Rao Fule Circle, Alwar 301001, Rajasthan, India`
    }
];

export default function PrivacyPolicyPage() {
    return (
        <PublicLayout>
            <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <SectionHeading align="center">Privacy Policy</SectionHeading>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated: March 2026</p>
                </div>
            </section>

            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <div key={i}>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    {i + 1}. {section.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
