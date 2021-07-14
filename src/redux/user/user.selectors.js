import { createSelector } from 'reselect';


// input selector returns a piece of state
const selectUser = state => state.user;

// output selector that uses (as array of) input selector(s) to get a piece of the store.
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
