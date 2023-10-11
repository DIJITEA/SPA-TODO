export const ADD_PROJECT = "ADD_PROJECT"
export const SHOW_ALL = "SHOW_ALL"

type addProjectType = {
    ProjectName: string,
    ProjectId: string
}
export function showProject(ProjectObj: addProjectType) {
    return { type: SHOW_ALL, ProjectObj }
  }
export function addProject(ProjectObj: addProjectType) {
    return { type: ADD_PROJECT, ProjectObj }
  }