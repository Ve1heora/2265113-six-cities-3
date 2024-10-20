import { createSelector } from '@reduxjs/toolkit';
import { State, SortProcess } from '../../types/state';
import { NameSpace } from '../../const';

export const selectIsFiltersOpen = createSelector(
  (state: Pick<State, NameSpace.Sort>) => state[NameSpace.Sort],
  (state: SortProcess) => state.isFiltersOpen
);
