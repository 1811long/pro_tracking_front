import api from "./utils/api"


const APIController = (function () {


    const _getSummonerByName = async (name) => {
        try {
            const response = await api.get(`/summoner/${name}`)
            const data = response.data
            return data
        } catch (err) {
            console.log(err)
        }
    }

    const _getAllChampions = async () => {
        try {
            const response = await api.get('/champions');
            return response.data['result']
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    }
    
    const _getHistoryMatchesBySummonerName = async (name) => {
        try {
            const response = await api.get(`/summoner/${name}/matches`)
            const data = response.data
            return data
        } catch (err) {
            console.log(err)
        }
    }


    const _getInfoChampionByName = async (nameChampion) => {
        try{
            const response = await api.get(`/champions/${nameChampion}`)
            const data = response.data
            return data
        }catch(err){
            console.log(err)
        }
    }

    return {
        getAllChampions() {
            return _getAllChampions()
        },
        getSummonerByName(name) {
            return _getSummonerByName(name)
        },
        getHistoryMatchesBySummonerName(name) {
            return _getHistoryMatchesBySummonerName(name)
        },
        getInfoChampionByName(nameChampion){
            return _getInfoChampionByName(nameChampion)
        }
    }


})()

export default APIController