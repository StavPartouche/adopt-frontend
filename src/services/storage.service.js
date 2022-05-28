function load(key) {
    return JSON.parse(localStorage.getItem(key))
}

function save(key, entity) {
    localStorage.setItem(key, JSON.stringify(entity));
}

export const storageService = {
    save,
    load
};