export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "faq_cat_001",
    title: "Admissions",
    items: [
      {
        id: "faq_001",
        question: "Do I need prior experience before enrolling?",
        answer: "Most foundation tracks start from basics. Advanced tracks list prerequisites in the course overview."
      },
      {
        id: "faq_002",
        question: "Can I switch to another course after enrollment?",
        answer: "Yes, course migration is supported within the first 14 days, subject to fee difference."
      }
    ]
  },
  {
    id: "faq_cat_002",
    title: "Learning Experience",
    items: [
      {
        id: "faq_003",
        question: "How are projects evaluated?",
        answer: "Projects are reviewed against rubrics covering functionality, code quality, and deployment readiness."
      },
      {
        id: "faq_004",
        question: "Do I get mentor support?",
        answer: "Mentor support is included in selected plans and available as an add-on in base plans."
      }
    ]
  },
  {
    id: "faq_cat_003",
    title: "Payments & Certification",
    items: [
      {
        id: "faq_005",
        question: "Are EMI and installment options available?",
        answer: "Yes, EMI options are available at checkout for eligible payment methods and regions."
      },
      {
        id: "faq_006",
        question: "Will I receive a certificate after completion?",
        answer: "Yes, learners receive a verifiable digital certificate after completing required modules and assessments."
      }
    ]
  }
];
