
const useLocalStorage = (key) => {

    const setItem = (value) => {
        localStorage.setItem(key, value)
    }
    const getItem = (key) => {
        return localStorage.getItem(key)
    }
    const deleteItem = (key) => {
        localStorage.removeItem(key)
    }
    return { setItem, getItem, deleteItem }
};

export default useLocalStorage;