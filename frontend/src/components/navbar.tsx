export default function Navbar () {
    return (
        <header aria-label="Site Header" className="bg-emerald-500">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M2 22v-2s5-2 10-2s10 2 10 2v2H2m9.3-12.9c-1.2-3.9-7.3-3-7.3-3s.2 7.8 5.9 6.6C9.5 9.8 8 9 8 9c2.8 0 3 3.4 3 3.4V17h2v-4.2s0-3.9 3-4.9c0 0-2 3-2 5c7 .7 7-8.9 7-8.9s-8.9-1-9.7 5.1Z"/></svg>
                    </a>
                </div>
                <div className="hidden md:block">
                    <nav aria-label="Site Nav">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a
                            className="text-white transition hover:text-gray-500/75"
                            href="/"
                        >
                            About
                        </a>
                        </li>
                        <li>
                        <a
                            className="text-white transition hover:text-gray-500/75"
                            href="/"
                        >
                            Team
                        </a>
                        </li>

                        <li>
                        <a
                            className="text-white transition hover:text-gray-500/75"
                            href="/"
                        >
                            Impact
                        </a>
                        </li>
                        <li>
                        <a
                            className="text-white transition hover:text-gray-500/75"
                            href="/"
                        >
                            Resources
                        </a>
                        </li>
                        <li>
                        <a
                            className="text-white transition hover:text-gray-500/75"
                            href="/"
                        >
                            Community
                        </a>
                        </li>
                        <li>
                        <a
                            className="text-white transition hover:text-gray-500/75"
                            href="/"
                        >
                            Contact
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <a
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="/"
                        >
                        Apply
                        </a>
                    <div className="hidden sm:flex">
                        <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                        href="/"
                        >
                        Login
                        </a>
                    </div>
                    </div>
                    <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
  };