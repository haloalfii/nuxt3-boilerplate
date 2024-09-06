export const menus = [
    [
        {
            title: "Overview",
            icon: "ic:baseline-dashboard",
            path: "/",
            key: "overview",
            isBeta: false,
            child: []
        },
        {
            title: "Pages",
            icon: "material-symbols:find-in-page-sharp",
            path: "",
            key: "pages",
            isBeta: false,
            child: [
                {
                    title: "Login",
                    path: "/login",
                    key: "login",
                    isBeta: false,
                },
                {
                    title: "Register",
                    path: "/register",
                    key: "register",
                    isBeta: false,
                }
            ]
        },
        {
            title: "Statistic",
            icon: "material-symbols:stacked-line-chart",
            path: "",
            key: "stat",
            isBeta: true,
            child: [
                {
                    title: "stat 1",
                    path: "/",
                    key: "stat-1",
                    isBeta: false,
                },
                {
                    title: "stat 2",
                    path: "/",
                    key: "stat-2",
                    isBeta: false,
                }
            ]
        }
    ],
    [
        {
            title: "Documents",
            icon: "i-heroicons-light-bulb",
            path: "/",
            key: "docs",
            isBeta: true,
            child: []
        }
    ]
]