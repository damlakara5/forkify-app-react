import { resultActions } from "./result-slice"

export const fetchResultData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://forkify-app-f7969-default-rtdb.firebaseio.com/data.json' )

            if(!response.ok){
                throw new Error("Couldn't fetch data")
            }
            const data = await response.json()
            
            return data
        }

        try{
           const cardData = await fetchData()
           
           
           dispatch(resultActions.replaceResults({
                recipe: cardData.food,
                bookmarked: cardData.bookmarks
           }

           ))

        }catch(error){
            console.log(error)
        }
    }
}


export const sendData = (data, url) => {
    return async (dispatch) => {
      console.log(data)
      const sendRequest = async () => {
        const response = await fetch(
          `https://forkify-app-f7969-default-rtdb.firebaseio.com/data/${url}.json`,
          {
            method: 'POST',
            body: JSON.stringify(data),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();

      } catch (error) {
        console.log(error)
      }
    };
  };

