"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Button, Icons } from '../../components/ui';

const PoliciesClient = () => {
    const policySections = [
        {
            id: "about",
            title: "1. About GK WebTech",
            content: "GK WebTech is a premier AI and Technology Institute dedicated to bridging the gap between academic learning and industry demands. Our mission is to empower students with project-based training, cutting-edge digital skills, and a professional mindset required for the modern workforce."
        },
        {
            id: "admission",
            title: "2. Admission & Enrollment Policy",
            content: "Enrollment is open to students meeting the prerequisite requirements for specific courses. Admission is confirmed only upon successful verification of educational documents and payment of the prescribed fees. The institute reserves the right to refuse admission based on internal screening criteria."
        },
        {
            id: "academic",
            title: "3. Academic & Training Regulations",
            content: "Students must maintain a consistent learning pace and follow the structured curriculum. Project submissions must adhere to the provided timelines to ensure timely completion. Academic integrity is paramount; any form of plagiarism or unauthorized sharing of course material is strictly prohibited."
        },
        {
            id: "attendance",
            title: "4. Attendance & Biometric Policy",
            content: "Regular attendance is mandatory for all certification programs. For on-campus students, we utilize biometric systems to track attendance accurately. A minimum of 80% attendance is required for students to be eligible for final examinations and placement assistance."
        },
        {
            id: "examination",
            title: "5. Examination & Certification Policy",
            content: "Certifications are awarded based on performance in module-level tests and the final capstone project. Students must achieve a minimum passing grade to receive their credentials. Retake opportunities for exams are available under specific institutional guidelines."
        },
        {
            id: "it-cyber",
            title: "6. IT & Cyber Security Policy",
            content: "Students must use institutional IT resources, including high-speed internet and lab systems, responsibly. Unauthorized access to administrative systems, misuse of the network for non-academic purposes, or any cyber-activity that compromises institute security is strictly prohibited."
        },
        {
            id: "conduct",
            title: "7. Student Code of Conduct",
            content: "Professional behavior and discipline are expected from every student at all times. Respect for faculty, staff, and fellow students is a core value of our institute. Any form of harassment, bullying, or disruptive behavior will lead to immediate disciplinary action or suspension."
        },
        {
            id: "grievance",
            title: "8. Grievance Redressal & Safety",
            content: "We provide a secure and inclusive environment for all learners. Students can report grievances or safety concerns directly to the Student Support Cell. All reported issues are reviewed by the management committee and addressed within 7 working days."
        },
        {
            id: "placement",
            title: "9. Placement Assistance Policy",
            content: "Placement support is an integral part of our pro and master programs. Assistance includes resume building workshops, mock technical interviews, and direct connections with our industry partners. Eligibility for placement drives is based on academic performance and interview readiness."
        }
    ];

    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeading align="center">GK WebTech Institute Policies</SectionHeading>
                    <SectionSubheading align="center" className="max-w-2xl mx-auto">
                        Official policies governing admissions, academic conduct, placement assistance, and institutional guidelines.
                    </SectionSubheading>

                    <div className="mt-8 flex justify-center">
                        <Button
                            variant="marigold"
                            size="lg"
                            onClick={() => window.open('/policies/gkwebtech-policies.pdf', '_blank')}
                            className="font-black"
                        >
                            <Icons.Download className="mr-2 w-5 h-5" />
                            Download Official PDF
                        </Button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Notice */}
                    <div className="mb-12 p- transition-all p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl flex items-start gap-4">
                        <Icons.Info className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300 leading-relaxed">
                            These policies are part of the official GK WebTech AI Institute handbook.
                            Students are advised to review them carefully before enrollment.
                        </p>
                    </div>

                    {/* Policy Grid */}
                    <div className="space-y-12">
                        {policySections.map((section) => (
                            <div key={section.id} className="scroll-mt-24">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    {section.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 text-center">
                        <p className="text-sm text-slate-400 font-medium">
                            For further clarifications, please contact our administrative office.
                        </p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default PoliciesClient;
