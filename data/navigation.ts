export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface NavigationGroup {
  id: string;
  label: string;
  items: NavigationItem[];
}

export interface NavigationConfig {
  header: NavigationGroup[];
  footer: NavigationGroup[];
}

export const NAVIGATION_CONFIG: NavigationConfig = {
  header: [
    {
      id: "nav_group_001",
      label: "Primary",
      items: [
        { id: "nav_001", label: "Home", href: "/" },
        {
          id: "nav_002",
          label: "Courses",
          href: "/courses",
          children: [
            { id: "nav_003", label: "Technology & Development", href: "/courses#technology-development" },
            { id: "nav_004", label: "AI & Automation", href: "/courses#ai-automation" },
            { id: "nav_005", label: "Data & Analytics", href: "/courses#data-analytics" }
          ]
        },
        {
          id: "nav_006",
          label: "Resources",
          href: "/resources",
          children: [
            { id: "nav_007", label: "Blog", href: "/blog" },
            { id: "nav_008", label: "Micro-Lessons", href: "/micro-lessons" },
            { id: "nav_009", label: "Ebooks", href: "/ebooks" }
          ]
        },
        { id: "nav_010", label: "Pricing", href: "/pricing" },
        { id: "nav_011", label: "Contact", href: "/contact" }
      ]
    }
  ],
  footer: [
    {
      id: "nav_group_002",
      label: "Company",
      items: [
        { id: "nav_012", label: "About", href: "/about" },
        { id: "nav_013", label: "Mentorship", href: "/mentorship" },
        { id: "nav_014", label: "Careers", href: "/careers" }
      ]
    },
    {
      id: "nav_group_003",
      label: "Legal",
      items: [
        { id: "nav_015", label: "Privacy Policy", href: "/privacy" },
        { id: "nav_016", label: "Terms of Service", href: "/terms" },
        { id: "nav_017", label: "Refund Policy", href: "/refund-policy" }
      ]
    },
    {
      id: "nav_group_004",
      label: "Social",
      items: [
        { id: "nav_018", label: "LinkedIn", href: "https://linkedin.com/company/gkinstitute", external: true },
        { id: "nav_019", label: "YouTube", href: "https://youtube.com/@gkinstitute", external: true },
        { id: "nav_020", label: "Instagram", href: "https://instagram.com/gkinstitute", external: true }
      ]
    }
  ]
};
