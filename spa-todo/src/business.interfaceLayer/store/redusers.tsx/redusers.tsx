import { combineReducers } from "redux";

import { SHOW_ALL, ADD_PROJECT } from "../actions/projectsList.action";

interface State {
  ProjectName: string;
  ProjectId: string;
}

function projects(state = null, action: any) {
  switch (action.type) {
    case SHOW_ALL:
      return state;
    case ADD_PROJECT:
      if (state === null)
        return [
          {
            ProjectName: action.ProjectObj.ProjectName,
            ProjectId: action.ProjectObj.ProjectId,
          },
        ];
      else
        return [
          ...state,
          {
            ProjectName: action.ProjectObj.ProjectName,
            ProjectId: action.ProjectObj.ProjectId,
          },
        ];
    default: // need this for default case
      return state;
  }
}

const todoSpaApp = combineReducers({
  projects,
});
export default todoSpaApp;
