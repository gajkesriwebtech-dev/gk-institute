import { MetadataRoute } from 'next';
import { COURSES } from '@/data/courses';
import { MOCK_BLOGS } from '@/constants';
import { SITE_URL } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/courses',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/terms',
        '/policies',
        '/certifications',
        '/about',
        '/micro-lessons',
        '/ebooks',
        '/portfolio'
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const courseRoutes = COURSES.map((course) => ({
        url: `${SITE_URL}/courses/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogRoutes = MOCK_BLOGS.map((blog) => ({
        url: `${SITE_URL}/resources/blog/${blog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...courseRoutes, ...blogRoutes];
}
