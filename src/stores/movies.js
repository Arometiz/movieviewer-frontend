import { createStore, applyMiddleware, compose , combineReducers} from "redux";
import moviesReducer from '../reducers/movieListReducer';
import movieReducer from '../reducers/movieReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function WriteToStorage(state){
  try{
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (error) {
      console.error(error);
  }
}

function ReadFromStorage(){
  try{
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) return undefined;
      return JSON.parse(serializedState);
  } catch (error){
      console.error(error);
      return undefined;
  }
}


const store = createStore(
  combineReducers({
   movies: moviesReducer,
   movie: movieReducer
  }),
  ReadFromStorage(),
  composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => WriteToStorage(store.getState()));

export default store;
