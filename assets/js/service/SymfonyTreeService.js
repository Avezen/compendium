
export const fetchSymfonyTree = () => {
    const symfonyTree = [
        {
            id: 1,
            label: 'Patterns',
            to: '/patterns',
            nestedRoutes: [
                {
                    id: 1,
                    label: 'Factory',
                    to: '/factory',
                    nestedRoutes: [
                        {
                            id: 3,
                            label: 'Example',
                            to: '/example'
                        }
                    ]
                },
                {
                    id: 2,
                    label: 'Strategy',
                    to: '/strategy',
                    nestedRoutes: [
                        {
                            id: 3,
                            label: 'Example',
                            to: '/example',
                            nestedRoutes: [
                                {
                                    id: 3,
                                    label: 'Example2',
                                    to: '/example2'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            label: 'Security',
            to: '/security',
            nestedRoutes: [
                {
                    id: 1,
                    label: 'JWT',
                    to: '/jwt'
                }
            ]
        }

    ];


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(symfonyTree);
            reject('Wrong')
        }, 1)
    });
};