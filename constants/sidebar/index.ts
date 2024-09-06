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
            icon: "ic:baseline-dashboard",
            path: "",
            key: "pages",
            isBeta: false,
            child: [
                {
                    title: "Pages 1",
                    path: "/pages/1",
                    key: "pages-1",
                    isBeta: false,
                },
                {
                    title: "Pages 2",
                    path: "/pages/2",
                    key: "pages-2",
                    isBeta: false,
                }
            ]
        },
        {
            title: "Statistic",
            icon: "ic:baseline-dashboard",
            path: "",
            key: "stat",
            isBeta: false,
            child: [
                {
                    title: "stat 1",
                    path: "/stat/1",
                    key: "stat-1",
                    isBeta: false,
                },
                {
                    title: "stat 2",
                    path: "/stat/2",
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
            path: "/docs",
            key: "docs",
            isBeta: true,
            child: []
        }
    ]
]