import { createStore, applyMiddleware, compose , combineReducers} from "redux";
import moviesReducer from '../reducers/movieListReducer';
import movieReducer from '../reducers/movieReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  combineReducers({
   movies: moviesReducer,
   movie: movieReducer
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
