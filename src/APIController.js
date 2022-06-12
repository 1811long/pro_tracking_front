import api  from "./utils/api"


const APIController = (function(){
    
    const _getAllChampions = async () => {
        try{
            const response = await api.get('/champions');
            return response.data['result']
          }catch (err){
            if (err.response){
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            }else{
              console.log(`Error: ${err.message}`);
            }
          }
    }

    const _getSummonerByName = async (name) =>{
        try{
            const response = await api.get(`/summoner/${name}`)
            return response.data.result
        }catch (err){
           console.log(err)
        }
    }

    const _getHistoryMatchesBySummonerName = async(name) => {
       try{
          const response = await api.get(`/summoner/${name}/matches`)
          return response.data
       }catch (err){
        console.log(err)
     }
    }

    return{
        getAllChampions(){
            return _getAllChampions()
        },
        getSummonerByName(name){
            return _getSummonerByName(name)
        },
        getHistoryMatchesBySummonerName(name){
            return _getHistoryMatchesBySummonerName(name)
        }
    }


})()

export default APIController