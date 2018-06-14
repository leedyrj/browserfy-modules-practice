console.log("contcoll.js working top");

const contactCollection = {
    contact: Robert
}

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(contactDatabase, "contactData")


console.log("contcoll.js working bottom");

