
export const fetchCategories = () => {
    const categoryItems = [
        {
            id: 1,
            name: 'Malowanie',
            subcategories: [
                {
                    id: 1,
                    name: 'Podkategoria 1'
                },
                {
                    id: 2,
                    name: 'Podkategoria 2'
                },
                {
                    id: 3,
                    name: 'Podkategoria 3'
                },
                {
                    id: 4,
                    name: 'Podkategoria 4'
                },
                {
                    id: 5,
                    name: 'Podkategoria 5'
                },
                {
                    id: 6,
                    name: 'Podkategoria 6'
                },
                {
                    id: 7,
                    name: 'Podkategoria 7'
                },
                {
                    id: 8,
                    name: 'Podkategoria 8'
                },
            ]
        },
        {
            id: 2,
            name: 'Elewacja',
            subcategories: [
                {
                    id: 1,
                    name: 'Podkategoria 1'
                },
                {
                    id: 2,
                    name: 'Podkategoria 2'
                },
                {
                    id: 3,
                    name: 'Podkategoria 3'
                },
                {
                    id: 4,
                    name: 'Podkategoria 4'
                },
                {
                    id: 5,
                    name: 'Podkategoria 5'
                },
                {
                    id: 6,
                    name: 'Podkategoria 6'
                },
                {
                    id: 7,
                    name: 'Podkategoria 7'
                },
                {
                    id: 8,
                    name: 'Podkategoria 8'
                },
            ]
        },
        {
            id: 3,
            name: 'Sciany',
            subcategories: [
                {
                    id: 9,
                    name: 'Podkategoria 1'
                },
                {
                    id: 10,
                    name: 'Podkategoria 2'
                },
                {
                    id: 11,
                    name: 'Podkategoria 3'
                },
                {
                    id: 12,
                    name: 'Podkategoria 4'
                },
                {
                    id: 13,
                    name: 'Podkategoria 5'
                },
                {
                    id: 14,
                    name: 'Podkategoria 6'
                },
                {
                    id: 15,
                    name: 'Podkategoria 7'
                },
                {
                    id: 16,
                    name: 'Podkategoria 8'
                },
            ]
        },
        {
            id: 4,
            name: 'Dach',
            subcategories: [
                {
                    id: 17,
                    name: 'Podkategoria 1'
                },
                {
                    id: 18,
                    name: 'Podkategoria 2'
                },
                {
                    id: 19,
                    name: 'Podkategoria 3'
                },
                {
                    id: 20,
                    name: 'Podkategoria 4'
                },
                {
                    id: 21,
                    name: 'Podkategoria 5'
                },
                {
                    id: 22,
                    name: 'Podkategoria 6'
                },
                {
                    id: 23,
                    name: 'Podkategoria 7'
                },
                {
                    id: 24,
                    name: 'Podkategoria 8'
                },
            ]
        },
        {
            id: 5,
            name: 'Tynki',
            subcategories: [
                {
                    id: 25,
                    name: 'Podkategoria 1'
                },
                {
                    id: 26,
                    name: 'Podkategoria 2'
                },
                {
                    id: 27,
                    name: 'Podkategoria 3'
                },
                {
                    id: 28,
                    name: 'Podkategoria 4'
                },
                {
                    id: 29,
                    name: 'Podkategoria 5'
                },
                {
                    id: 30,
                    name: 'Podkategoria 6'
                },
                {
                    id: 31,
                    name: 'Podkategoria 7'
                },
                {
                    id: 32,
                    name: 'Podkategoria 8'
                },
            ]
        }

    ];


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(categoryItems);
            reject('Wrong')
        }, 1)
    });
};