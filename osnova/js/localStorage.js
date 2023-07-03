const LOCAL_KEY = 'cardsKey'

function save(value) {
    const valueJSON = JSON.stringify(value);
    return localStorage.setItem(LOCAL_KEY, valueJSON)
}
function load() {
    const saveLocal =localStorage.getItem(LOCAL_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_KEY))
    : undefined
    return saveLocal;
}

export default{
    save,
    load,
}