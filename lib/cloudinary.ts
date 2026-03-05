
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dnzbwokjy';
export const FALLBACK_COURSE_IMAGE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,w_800,h_450/gkinstitute/fallback-course`;

/**
 * Standardized Cloudinary image loading helper.
 * @param publicId The Cloudinary public ID (e.g. "team/founder")
 * @param width Optional width for transformation
 * @param height Optional height for transformation (defaults to width if not provided)
 * @returns Fully optimized Cloudinary URL
 */
export const cld = (publicId: string, width?: number, height?: number): string => {
    if (!publicId) return "";

    // Handle full URLs if they accidentally pass through
    if (publicId.startsWith('http')) return publicId;

    const transformations = [
        'f_auto',
        'q_auto',
        'c_fill'
    ];

    if (width) {
        transformations.push(`w_${width}`);
        const finalHeight = height || width;
        transformations.push(`h_${finalHeight}`);
    }

    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations.join(',')}/${publicId}`;
};
