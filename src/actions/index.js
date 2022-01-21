import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const fetchSmurfs = (newSmurf) => {
    return(dispatch => {
        dispatch({type:FETCH_START});
        axios.get(`http://localhost:3333/smurfs`)
            .then(resp => {
                dispatch({type: FETCH_SUCCESS, payload:resp.data})
            })
            .catch(error => {
                console.log({error});
            })
    });
}

export const fetchStart = () => {
    return({type:FETCH_START});
}
export const fetchSuccess = (smurfs) => {
    return({type:FETCH_SUCCESS, payload: smurfs})
}
export const fetchFailed = (error) => {
    return({type:FETCH_FAILED, payload:error})
}

export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload:smurf});
}

export const error  = (message) => {
    return({type:ERROR, payload:message});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.