import repositorySearchReducer from './RepositorySearchReducer';
import selectedRepositoryReducer from './SelectedRepositoryReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    query: repositorySearchReducer,
    selectedRepository: selectedRepositoryReducer
});

export default allReducers;