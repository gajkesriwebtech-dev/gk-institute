import { calculateSequentialPricing, SelectedCourse, AppliedDiscount } from '../lib/coursePricing';

const mockCourses: SelectedCourse[] = [
    {
        courseId: 'mern-stack-development', // base 24999 for 6mo
        duration: 6,
        addOns: {}
    },
    {
        courseId: 'mern-stack-development', // total effectively 49998
        duration: 6,
        addOns: {}
    },
    {
        courseId: 'mern-stack-development', // total effectively 74997
        duration: 6,
        addOns: {}
    },
    {
        courseId: 'mern-stack-development', // total effectively 99996 -> close to 100k
        duration: 6,
        addOns: {}
    }
];

const appliedCodes: AppliedDiscount[] = [
    { code: 'FESTIVE10', type: 'normal', percentage: 10 },
    { code: 'REF-XYZ', type: 'referral', percentage: 5 },
    { code: 'STAFF-1', type: 'staff', percentage: 5 },
    { code: 'STAFF-2', type: 'staff', percentage: 5 },
];

// MANUAL CALCULATION TEST
const base = 100000;
console.log("--- Manual Compounding Test (Base 100,000) ---");
let current = base;
console.log(`Initial: ${current}`);
current *= 0.9; // 10%
console.log(`After 10%: ${current}`);
current *= 0.95; // 5% referral
console.log(`After 5% Referral: ${current}`);
current *= 0.95; // 5% Staff 1
console.log(`After 5% Staff 1: ${current}`);
current *= 0.95; // 5% Staff 2
console.log(`After 5% Staff 2: ${current}`);
console.log(`Final Rounded: ${Math.round(current)}`);

// ENGINE LOGIC TEST (Pure Math)
console.log("\n--- Engine Logic Test (Base 100,000) ---");

const testAppliedCodes: AppliedDiscount[] = [
    { code: 'FESTIVE10', type: 'normal', percentage: 10 },
    { code: 'REF-XYZ', type: 'referral', percentage: 5 },
    { code: 'STAFF-1', type: 'staff', percentage: 5 },
    { code: 'STAFF-2', type: 'staff', percentage: 5 },
];

// We bypass selectedCourses for the math check by summing to 100k
// and setting bundle discount to 0 (by using 1 course)
const testCourses: SelectedCourse[] = [
    {
        courseId: 'mern-stack-development', // base 24999, but we'll manually check the running total in the result
        duration: 6,
        addOns: {}
    }
];

const testResult = calculateSequentialPricing(testCourses, testAppliedCodes);

// The actual total depends on COURSE_PRICING, but the steps show the math
console.log(`Initial Amount After Bundle: ${testResult.grossTotal - testResult.bundleDiscountAmt}`);

testResult.steps.forEach(step => {
    console.log(`Step: ${step.label} | Discount: ${step.discountAmt} | After: ${step.amountAfter}`);
});

console.log(`Final Total: ${testResult.finalTotal}`);

// Verify order: normal -> referral -> staff -> staff
const typesInOrder = testResult.steps.map(s => s.label.split(' ')[0]);
console.log(`Order Verified: ${JSON.stringify(typesInOrder)}`);
if (typesInOrder[0] === 'Promo' && typesInOrder[1] === 'Referral' && typesInOrder[2] === 'Staff' && typesInOrder[3] === 'Staff') {
    console.log("ORDER IS CORRECT");
} else {
    console.log("ORDER IS INCORRECT!");
}

