export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950 transition-colors">
            <div className="text-center">
                <h1 className="text-6xl font-black text-[#1F4037] dark:text-emerald-500">404</h1>
                <p className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Page not found</p>
                <p className="mt-2 text-slate-500 dark:text-slate-400">The page you are looking for does not exist or has been moved.</p>
                <a
                    href="/"
                    className="mt-8 inline-block px-8 py-3 bg-[#FDB827] text-[#1F4037] font-black rounded-lg hover:bg-[#E2A422] transition-colors shadow-lg"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}
