
export const fetchNavigationTree = (page) => {
    const navigationTree = {
        react: [
            {
                id: 1,
                label: 'Components',
                to: '/component',
                category: true,
                nestedRoutes: [
                    {
                        id: 2,
                        label: 'Buttons',
                        to: '/button',
                        category: true,
                        nestedRoutes: [
                            {
                                id: 3,
                                label: 'Example',
                                to: '/example'
                            }
                        ]
                    },
                    {
                        id: 4,
                        label: 'Carousels',
                        to: '/carousel',
                        nestedRoutes: [
                            {
                                id: 5,
                                label: 'Example2',
                                to: '/example2'
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                label: 'Functions',
                to: '/function',
                category: true,
                nestedRoutes: [
                    {
                        id: 8,
                        label: 'JWT',
                        to: '/jwt'
                    }
                ]
            },
            {
                id: 9,
                label: 'Patterns',
                to: '/pattern',
                category: true,
                nestedRoutes: [
                    {
                        id: 10,
                        label: 'Factory',
                        to: '/factory',
                        nestedRoutes: [
                            {
                                id: 11,
                                label: 'Example3',
                                to: '/example3'
                            }
                        ]
                    },
                    {
                        id: 12,
                        label: 'Strategy',
                        to: '/strategy',
                        nestedRoutes: [
                            {
                                id: 13,
                                label: 'Example4',
                                to: '/example4'
                            }
                        ]
                    }
                ]
            }
        ],
        symfony: [
            {
                id: 1,
                label: 'Patterns',
                to: '/pattern',
                category: true,
                nestedRoutes: [
                    {
                        id: 2,
                        label: 'Factory',
                        to: '/factory'
                    },
                    {
                        id: 4,
                        label: 'Strategy',
                        to: '/strategy'
                    }
                ]
            },
            {
                id: 7,
                label: 'Security',
                to: '/security',
                category: true,
                nestedRoutes: [
                    {
                        id: 8,
                        label: 'JWT',
                        to: '/jwt'
                    }
                ]
            }
        ]
    };


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(navigationTree[page]);
            reject('Wrong')
        }, 1)
    });
};