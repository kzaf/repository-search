import repositorySearchReducer from './RepositorySearchReducer';
import selectedRepositoryReducer from './SelectedRepositoryReducer';
import searchOptionsReducer from './SearchLanguageOptionReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    query: repositorySearchReducer,
    selectedRepository: selectedRepositoryReducer,
    searchOption: searchOptionsReducer
});

export default allReducers;