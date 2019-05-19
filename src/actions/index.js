import forBet from "../apis/forBet";

export const fetchEvents = () => 
  async dispatch => {
    const response = await forBet.get("/popular");

    dispatch({ type: 'FETCH_EVENTS', payload: response.data })
  };
