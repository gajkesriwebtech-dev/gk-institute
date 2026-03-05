import type { Metadata } from 'next';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading } from '../../components/ui';

export const metadata: Metadata = {
    title: 'Terms of Service | GK WebTech AI Institute',
    description: 'Terms governing the use of the GK WebTech AI Institute website and services.',
};

const sections = [
    {
        title: "Website Use",
        content: `By accessing and using the GK WebTech AI Institute website at https://institute.gkwebtech.cloud, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`
    },
    {
        title: "Accuracy of Information",
        content: `While we strive to keep information on our website accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the content. Course details, pricing, and schedules are subject to change without prior notice.`
    },
    {
        title: "Intellectual Property",
        content: `All content on this website — including course materials, curriculum guides, branding, logos, graphics, and text — is the intellectual property of GK WebTech AI Institute and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.`
    },
    {
        title: "User Conduct",
        content: `You agree not to:
• Use the website for any unlawful purpose
• Attempt to gain unauthorized access to our systems or data
• Disrupt the website's normal functioning
• Post or transmit harmful, offensive, or misleading content
• Impersonate any person or entity or misrepresent your affiliation`
    },
    {
        title: "Course Enrollment Disclaimer",
        content: `Enrollment in any GK WebTech AI Institute program is subject to the availability of seats and successful payment of applicable fees. We reserve the right to modify, postpone, or cancel any course or program due to operational requirements. In such cases, enrolled students will be notified and offered alternatives or refunds as per our refund policy.`
    },
    {
        title: "Limitation of Liability",
        content: `GK WebTech AI Institute shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of or inability to use our website or services. We are not responsible for any errors, interruptions, or losses that may arise, including loss of data, revenue, or profit.`
    },
    {
        title: "Reference to Institute Policies",
        content: `In addition to these Terms of Service, your use of our institute's programs is governed by our official Institute Policies, which cover admissions, academic conduct, attendance, examinations, and placement assistance. You can review the full institute policies at: https://institute.gkwebtech.cloud/policies`
    },
    {
        title: "Changes to Terms",
        content: `We reserve the right to update these Terms of Service at any time. Changes become effective immediately upon posting on this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes. We encourage you to review these terms periodically.`
    },
    {
        title: "Contact Information",
        content: `For questions about these Terms of Service, please contact us:\n\nGK WebTech AI Institute\nWebsite: https://institute.gkwebtech.cloud\nEmail: contact@gkwebtech.cloud\nPhone: +91 9971944676\nAddress: 2nd Floor, Tiwari Clinic Building, Jyoti Rao Fule Circle, Alwar 301001, Rajasthan, India`
    }
];

export default function TermsPage() {
    return (
        <PublicLayout>
            <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <SectionHeading align="center">Terms of Service</SectionHeading>
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
