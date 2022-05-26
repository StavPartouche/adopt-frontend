function load(key) {
    return localStorage.getItem(key);
}

function save(key, entity) {
    localStorage.setItem(key, JSON.stringify(entity));
}

export default {
    save,
    load
};