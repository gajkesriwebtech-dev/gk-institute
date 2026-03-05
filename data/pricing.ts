export interface PricingFeature {
  id: string;
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  slug: string;
  name: string;
  description: string;
  currency: "INR";
  interval: "month" | "year" | "one_time";
  amount: number;
  isPopular: boolean;
  trialDays?: number;
  features: PricingFeature[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan_001",
    slug: "starter",
    name: "Starter",
    description: "For self-paced learners building foundational skills.",
    currency: "INR",
    interval: "month",
    amount: 1499,

    isPopular: false,
    trialDays: 7,
    features: [
      { id: "pf_001", label: "Access to foundational courses", included: true },
      { id: "pf_002", label: "Community support", included: true },
      { id: "pf_003", label: "Mentor sessions", included: false }
    ]
  },
  {
    id: "plan_002",
    slug: "pro",
    name: "Pro",
    description: "For serious learners targeting placement outcomes.",
    currency: "INR",
    interval: "month",
    amount: 3999,

    isPopular: true,
    trialDays: 7,
    features: [
      { id: "pf_004", label: "Access to all courses", included: true },
      { id: "pf_005", label: "Weekly mentor sessions", included: true },
      { id: "pf_006", label: "Portfolio and interview prep", included: true }
    ]
  },
  {
    id: "plan_003",
    slug: "team",
    name: "Team",
    description: "For institutions and teams with centralized administration.",
    currency: "INR",
    interval: "year",
    amount: 89999,

    isPopular: false,
    features: [
      { id: "pf_007", label: "Up to 30 learner seats", included: true },
      { id: "pf_008", label: "Progress analytics dashboard", included: true },
      { id: "pf_009", label: "Dedicated success manager", included: true }
    ]
  }
];
