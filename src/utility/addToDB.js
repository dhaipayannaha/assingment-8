const getStoredAppoinment = () => {
    const storedAppointSTR = localStorage.getItem("readList");

    if (storedAppointSTR) {
        const storeAppointData = JSON.parse(storedAppointSTR);
        return storeAppointData
    }else{
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppoinmentData = getStoredAppoinment();

    if (storedAppoinmentData.includes(id)){
        alert('this id already exist')
    }else{
        storedAppoinmentData.push(id);
        const data = JSON.stringify(storedAppoinmentData);
        localStorage.setItem("readList", data)
    }
}

export {addToStoredDB, getStoredAppoinment}