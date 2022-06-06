function savePet(pet){
    _save('lastPet', pet.name)
    let pets = _load('pets')
    if(!pets) pets = []
    const idx = pets.findIndex( p => p.name === pet.name)
    if(idx !== -1){
        pets.splice(idx, 1)
    }
    pets.push(pet)
    _save('pets', pets)
}
function loadLastPet(){
    const lastPet = _load('lastPet')
    if(!lastPet) return null
    const pets = _load('pets')
    if(!pets) return null
    return pets.find( p => p.name === lastPet)
}

function loadPetByName(petName){
    const pets = _load('pets')
    if(!pets) return null
    return pets.find( p => p.name === petName)
}

function loadAllPets(){
    return _load('pets')
}

function _load(key) {
    return JSON.parse(localStorage.getItem(key))
}

function _save(key, entity) {
    localStorage.setItem(key, JSON.stringify(entity));
}

export const storageService = {
    savePet,
    loadLastPet,
    loadAllPets,
    loadPetByName
};