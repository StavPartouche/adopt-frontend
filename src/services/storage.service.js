function load(key) {
    return localStorage.getItem(key);
}

function save(key, entity) {
    localStorage.setItem(key, JSON.stringify(entity));
}

export const storageService = {
    save,
    load
};