import { ActionType } from '../action-type';

interface search_repositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface search_repositories_success {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface search_repositories_error {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | search_repositories
  | search_repositories_success
  | search_repositories_error;
