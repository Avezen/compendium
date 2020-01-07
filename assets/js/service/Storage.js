export const storage = {
    set: (key, token) => sessionStorage.setItem(key, token),

    setObject: (key, token) => sessionStorage.setItem(key, JSON.stringify(token)),

    get: (key) => sessionStorage.getItem(key) || '',

    getObject: (key) => JSON.parse(sessionStorage.getItem(key) || '{}') ,

    delete: (key) => sessionStorage.removeItem(key),
};
