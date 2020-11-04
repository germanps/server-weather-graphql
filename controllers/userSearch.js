const UserSearch = require('../models/userSearch')

function userSearch(input) {
    try {
        const search = new UserSearch({
            idUser: input.idUser,
            label: input.label,
            codprov: input.codprov,
            idpob: input.idpob,
        })
        search.save();
        return search;
    } catch (error) {
        console.log(error);
    }
}

async function getUserSearch(idUser) {
    const search = await UserSearch.find({ idUser })
    return search;
}

module.exports = {
    userSearch,
    getUserSearch,
} 