import { createSelector } from 'reselect';

// input selector returns a piece of state
const selectDirectory = state => state.directory;

// output selector that uses the input selector to get a piece of the store.
export const selectDirectoryItems= createSelector([selectDirectory], (directory) => directory.sections);
