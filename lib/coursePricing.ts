
export interface CoursePricingConfig {
    baseDuration: number;
    durations: {
        [key: number]: number;
    };
    hardwareRequired: boolean;
    hardwareExtensionFeePerMonth?: number;
    addOns: {
        internship?: number;
        liveProjects?: number;
        portfolioHosting?: number;
        certificationSupport?: number;
    };
}

export const BUNDLE_DISCOUNTS = [
    { threshold: 3, discount: 0.10 }, // 3 or more courses: 10% off
    { threshold: 2, discount: 0.05 }, // 2 courses: 5% off
];

// Special discounts moved to bottom of file


export const COURSE_PRICING: Record<string, CoursePricingConfig> = {
    "mern-stack-development": {
        baseDuration: 6,
        durations: {
            3: 14999,
            6: 24999,
            12: 44999
        },
        hardwareRequired: false,
        addOns: {
            internship: 5000,
            liveProjects: 3000,
            portfolioHosting: 1000,
            certificationSupport: 2000
        }
    },
    "wordpress-development": {
        baseDuration: 3,
        durations: {
            3: 9999,
            6: 17999
        },
        hardwareRequired: false,
        addOns: {
            internship: 3000,
            certificationSupport: 1000
        }
    },
    "n8n-automation": {
        baseDuration: 3,
        durations: {
            3: 12999,
            6: 22999
        },
        hardwareRequired: false,
        addOns: {
            liveProjects: 4000,
            certificationSupport: 1500
        }
    },
    "prompt-engineering": {
        baseDuration: 1,
        durations: {
            1: 4999,
            3: 12999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 500
        }
    },
    "java-programming": {
        baseDuration: 6,
        durations: {
            3: 14999,
            6: 24999,
            12: 44999
        },
        hardwareRequired: false,
        addOns: {
            internship: 5000,
            liveProjects: 3000,
            certificationSupport: 2000
        }
    },
    "digital-marketing": {
        baseDuration: 6,
        durations: {
            3: 14999,
            6: 24999,
            12: 44999
        },
        hardwareRequired: false,
        addOns: {
            internship: 4000,
            liveProjects: 2000,
            portfolioHosting: 1000,
            certificationSupport: 2000
        }
    },
    "photography": {
        baseDuration: 3,
        durations: {
            3: 19999,
            6: 34999
        },
        hardwareRequired: true,
        hardwareExtensionFeePerMonth: 2000,
        addOns: {
            portfolioHosting: 1500,
            certificationSupport: 1000
        }
    },
    "youtube-script-writing": {
        baseDuration: 6,
        durations: {
            3: 8999,
            6: 14999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 1000
        }
    },
    "ar-vr-development": {
        baseDuration: 6,
        durations: {
            3: 24999,
            6: 39999,
            12: 69999
        },
        hardwareRequired: true,
        hardwareExtensionFeePerMonth: 5000,
        addOns: {
            internship: 8000,
            liveProjects: 5000,
            certificationSupport: 3000
        }
    },
    "oracle-sql-database-management": {
        baseDuration: 6,
        durations: {
            3: 14999,
            6: 24999
        },
        hardwareRequired: false,
        addOns: {
            internship: 4000,
            certificationSupport: 2000
        }
    },
    "data-science": {
        baseDuration: 6,
        durations: {
            3: 19999,
            6: 34999,
            12: 59999
        },
        hardwareRequired: false,
        addOns: {
            internship: 6000,
            liveProjects: 4000,
            certificationSupport: 2500
        }
    },
    "basic-computer": {
        baseDuration: 3,
        durations: {
            3: 4999,
            6: 8999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 500
        }
    },
    "microsoft-excel": {
        baseDuration: 3,
        durations: {
            3: 5999,
            6: 9999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 500
        }
    },
    "game-app-development": {
        baseDuration: 6,
        durations: {
            3: 19999,
            6: 34999,
            12: 59999
        },
        hardwareRequired: true,
        hardwareExtensionFeePerMonth: 3000,
        addOns: {
            internship: 6000,
            liveProjects: 4000,
            certificationSupport: 2000
        }
    },
    "interior-design": {
        baseDuration: 6,
        durations: {
            3: 24999,
            6: 39999,
            12: 69999
        },
        hardwareRequired: true,
        hardwareExtensionFeePerMonth: 4000,
        addOns: {
            portfolioHosting: 2000,
            certificationSupport: 2000
        }
    },
    "tally-with-gst": {
        baseDuration: 6,
        durations: {
            3: 9999,
            6: 16999
        },
        hardwareRequired: false,
        addOns: {
            internship: 3000,
            certificationSupport: 1000
        }
    },
    "personality-development": {
        baseDuration: 3,
        durations: {
            3: 7999,
            6: 12999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 1000
        }
    },
    "english-for-banking": {
        baseDuration: 3,
        durations: {
            3: 6999,
            6: 11999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 1000
        }
    },
    "ui-ux-design": {
        baseDuration: 6,
        durations: {
            3: 19999,
            6: 34999,
            12: 59999
        },
        hardwareRequired: false,
        addOns: {
            internship: 6000,
            liveProjects: 4000,
            portfolioHosting: 2000,
            certificationSupport: 2000
        }
    },
    "ecommerce-dropshipping": {
        baseDuration: 6,
        durations: {
            3: 14999,
            6: 24999
        },
        hardwareRequired: false,
        addOns: {
            liveProjects: 3000,
            certificationSupport: 2000
        }
    },
    "business-analytics": {
        baseDuration: 6,
        durations: {
            3: 17999,
            6: 29999
        },
        hardwareRequired: false,
        addOns: {
            internship: 5000,
            liveProjects: 3000,
            certificationSupport: 2000
        }
    },
    "stock-market-financial-trading": {
        baseDuration: 6,
        durations: {
            3: 19999,
            6: 34999
        },
        hardwareRequired: false,
        addOns: {
            liveProjects: 5000,
            certificationSupport: 2000
        }
    },
    "ai-tools-business-office": {
        baseDuration: 3,
        durations: {
            3: 9999,
            6: 16999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 1000
        }
    },
    "software-testing": {
        baseDuration: 6,
        durations: {
            3: 12999,
            6: 21999
        },
        hardwareRequired: false,
        addOns: {
            internship: 4000,
            certificationSupport: 1500
        }
    },
    "ai-cyber-safety": {
        baseDuration: 3,
        durations: {
            3: 7999,
            6: 13999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 1000
        }
    },
    "affiliate-marketing": {
        baseDuration: 6,
        durations: {
            3: 8999,
            6: 14999
        },
        hardwareRequired: false,
        addOns: {
            certificationSupport: 1000
        }
    },
    "complete-banking-course": {
        baseDuration: 6,
        durations: {
            3: 14999,
            6: 24999,
            12: 44999
        },
        hardwareRequired: false,
        addOns: {
            internship: 5000,
            certificationSupport: 2000
        }
    },
    // New Courses
    "video-editing": { baseDuration: 3, durations: { 3: 25000 }, hardwareRequired: false, addOns: {} },
    "drone-pilot": { baseDuration: 2, durations: { 2: 45000 }, hardwareRequired: false, addOns: {} },
    "youtube-video-creation": { baseDuration: 1, durations: { 1: 15000 }, hardwareRequired: false, addOns: {} },
    "podcasting-mastery": { baseDuration: 2, durations: { 2: 18000 }, hardwareRequired: false, addOns: {} },
    "instagram-shorts-mastery": { baseDuration: 1, durations: { 1: 12000 }, hardwareRequired: false, addOns: {} },
    "drawing": { baseDuration: 1, durations: { 1: 8000 }, hardwareRequired: false, addOns: {} },
    "jewellery-design": { baseDuration: 2, durations: { 2: 30000 }, hardwareRequired: false, addOns: {} },
    "interview-skills": { baseDuration: 1, durations: { 1: 5000 }, hardwareRequired: false, addOns: {} },
    "english": { baseDuration: 3, durations: { 3: 12000 }, hardwareRequired: false, addOns: {} },
    "graphic-designing-diploma": { baseDuration: 6, durations: { 6: 35000 }, hardwareRequired: false, addOns: {} },
    "digital-marketing-seo": { baseDuration: 6, durations: { 6: 32000 }, hardwareRequired: false, addOns: {} },
    "oracle-certified-professional-ocp": { baseDuration: 4, durations: { 4: 40000 }, hardwareRequired: false, addOns: {} },
    "smart-dropshipping-mastery": { baseDuration: 4, durations: { 4: 28000 }, hardwareRequired: false, addOns: {} }
};

import { FULL_PROGRAM_CATALOG } from '@/data/courses.data';

/**
 * Helper to get the base price (for the base duration) of a course.
 */
export const getBasePrice = (courseId: string): number => {
    const config = COURSE_PRICING[courseId];
    if (config) {
        return config.durations[config.baseDuration] || 0;
    }
    const course = FULL_PROGRAM_CATALOG.find(c => c.id === courseId);
    return course?.price || 0;
};

/**
 * Helper to get the price for a specific duration.
 */
export const getDurationPrice = (courseId: string, duration: number): number => {
    const config = COURSE_PRICING[courseId];
    if (config) {
        return config.durations[duration] || 0;
    }
    const course = FULL_PROGRAM_CATALOG.find(c => c.id === courseId);
    return course?.price || 0;
};

// --- SIMULATOR PRICING ENGINE ---

export interface SelectedCourse {
    courseId: string;
    duration: number;
    addOns: {
        internship?: boolean;
        liveProjects?: boolean;
        portfolioHosting?: boolean;
        certificationSupport?: boolean;
    };
}

/**
 * Calculates the total base price of all selected courses (at their base durations).
 */
export const calculateBaseTotal = (courses: SelectedCourse[]): number => {
    return courses.reduce((total, sc) => total + getBasePrice(sc.courseId), 0);
};

/**
 * Calculates the total adjustment for selected durations (e.g., extensions or 3-month options).
 * Result is (Duration Price - Base Price).
 */
export const calculateDurationAdjustments = (courses: SelectedCourse[]): number => {
    return courses.reduce((total, sc) => {
        const base = getBasePrice(sc.courseId);
        const selected = getDurationPrice(sc.courseId, sc.duration);
        return total + (selected - base);
    }, 0);
};

/**
 * Calculates hardware fees if applicable (e.g., photography equipment).
 * Includes base extension fees if duration exceeds base duration.
 */
export const calculateHardwareFees = (courses: SelectedCourse[]): number => {
    return courses.reduce((total, sc) => {
        const config = COURSE_PRICING[sc.courseId];
        if (!config || !config.hardwareRequired) return total;

        let fee = 0;
        // If extension fee exists and duration > base
        if (config.hardwareExtensionFeePerMonth && sc.duration > config.baseDuration) {
            fee += (sc.duration - config.baseDuration) * config.hardwareExtensionFeePerMonth;
        }
        return total + fee;
    }, 0);
};

/**
 * Calculates total fees for optional add-ons.
 */
export const calculateAddOnFees = (courses: SelectedCourse[]): number => {
    return courses.reduce((total, sc) => {
        const config = COURSE_PRICING[sc.courseId];
        if (!config) return total;

        let addOnTotal = 0;
        if (sc.addOns.internship && config.addOns.internship) addOnTotal += config.addOns.internship;
        if (sc.addOns.liveProjects && config.addOns.liveProjects) addOnTotal += config.addOns.liveProjects;
        if (sc.addOns.portfolioHosting && config.addOns.portfolioHosting) addOnTotal += config.addOns.portfolioHosting;
        if (sc.addOns.certificationSupport && config.addOns.certificationSupport) addOnTotal += config.addOns.certificationSupport;

        return total + addOnTotal;
    }, 0);
};

/**
 * Calculates the bundle discount percentage based on the number of courses.
 */
export const getBundleDiscount = (count: number): number => {
    const discountObj = BUNDLE_DISCOUNTS.find(d => count >= d.threshold);
    return discountObj ? discountObj.discount : 0;
};

/**
 * Applies bundle discount to a total value.
 */
export const applyBundleDiscount = (total: number, count: number): number => {
    const discount = getBundleDiscount(count);
    return total * discount;
};

/**
 * Applies a promo code discount.
 * promo: { type: 'percentage' | 'fixed', value: number }
 */
export const applyPromoDiscount = (total: number, promo: { type: 'percentage' | 'fixed', value: number }): number => {
    if (promo.type === 'percentage') {
        return total * (promo.value / 100);
    }
    return Math.min(promo.value, total);
};

/**
 * Applies referral discount.
 */
export const applyReferralDiscount = (total: number, discountValue: number): number => {
    return total * discountValue;
};

export const SPECIAL_DISCOUNTS = {
    STAFF_DEFAULT: 0.05, // 5% staff discount per code
    REFERRAL_DEFAULT: 0.05, // 5% default referral discount
};

/**
 * Applies staff discount (5% as per new rules).
 */
export const applyStaffDiscount = (total: number): number => {
    return total * SPECIAL_DISCOUNTS.STAFF_DEFAULT;
};

// --- SEQUENTIAL PRICING ENGINE ---

export interface AppliedDiscount {
    code: string;
    type: 'normal' | 'referral' | 'staff';
    percentage: number; // e.g. 10 for 10%
}

export interface SequentialPricingResult {
    baseTotal: number;
    hardwareFees: number;
    addOnFees: number;
    grossTotal: number;
    bundleDiscountAmt: number;
    steps: {
        label: string;
        amountBefore: number;
        discountAmt: number;
        amountAfter: number;
    }[];
    finalTotal: number;
}

/**
 * Calculates pricing using the Sequential (Compounded) model.
 * Application Order:
 * 1) Normal Promo Code
 * 2) Referral Code
 * 3) Staff Codes (in order applied)
 */
export const calculateSequentialPricing = (
    courses: SelectedCourse[],
    appliedCodes: AppliedDiscount[]
): SequentialPricingResult => {
    const courseSubtotal = courses.reduce((sum, sc) => sum + getDurationPrice(sc.courseId, sc.duration), 0);
    const hardwareFees = calculateHardwareFees(courses);
    const addOnFees = calculateAddOnFees(courses);
    const grossTotal = courseSubtotal + hardwareFees + addOnFees;

    const bundleDiscountRate = getBundleDiscount(courses.length);
    const bundleDiscountAmt = grossTotal * bundleDiscountRate;

    const initialAmount = grossTotal - bundleDiscountAmt;
    let runningTotal = initialAmount;

    const steps: SequentialPricingResult['steps'] = [];

    // Filter and Sort codes: 1) normal, 2) referral, 3) staff
    const sortedCodes = [
        ...appliedCodes.filter(c => c.type === 'normal').slice(0, 1), // Only ONE normal
        ...appliedCodes.filter(c => c.type === 'referral').slice(0, 1), // Only ONE referral
        ...appliedCodes.filter(c => c.type === 'staff') // Unlimited staff
    ];

    sortedCodes.forEach(discount => {
        const amountBefore = runningTotal;
        const discountAmt = amountBefore * (discount.percentage / 100);
        runningTotal -= discountAmt;

        let label = '';
        if (discount.type === 'normal') label = `Promo (${discount.code})`;
        else if (discount.type === 'referral') label = `Referral (${discount.code})`;
        else label = `Staff (${discount.code})`;

        steps.push({
            label,
            amountBefore,
            discountAmt,
            amountAfter: runningTotal
        });
    });

    return {
        baseTotal: courseSubtotal,
        hardwareFees,
        addOnFees,
        grossTotal,
        bundleDiscountAmt,
        steps,
        finalTotal: Math.max(0, runningTotal)
    };
};
