export default {
    projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
    titleSuffix: ' – Nextra',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    floatTOC: true,
    defaultMenuCollapsed: true,
    footer: true,
    footerText: `JS Community ${new Date().getFullYear()} © 🐛`,
    footerEditLink: `If you want to make something like this`,
    logo: (
        <>
            <svg>...</svg>
            <span>JS Course</span>
        </>
    ),
}