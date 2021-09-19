import repositorySearchReducer from './RepositorySearchReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    query: repositorySearchReducer
});

export default allReducers;