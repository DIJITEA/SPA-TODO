import React, { useState } from "react";
import "./style/style.scss";
import CPButton from "../../Atoms/CreateProjectButton.atom";
import SubButton from "../../Atoms/SubmitButton.atom";
import CustomInput from "../../Atoms/Input.atom";
import store from "../../../../../../business.interfaceLayer/store";
import { ADD_PROJECT } from "../../../../../../business.interfaceLayer/store/actions/projectsList.action";
// type Props = {}

const CProject = () => {
  const [modal, setModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  store.dispatch({
    type: ADD_PROJECT,
    ProjectObj: { ProjectName: 'string', ProjectId: 'string' },
  });
  console.log(store.getState());

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const updateName = (ProjectName: string) => {
    setProjectName(ProjectName);
  };
  const submit = () => {
    console.log(projectName);
  };

  return (
    <div>
      <CPButton
        src={{
          clickFun: openModal,
          openState: true,
        }}
      />
      {modal && (
        <div className="modal">
          <div className="modal__window">
            <div className="modal__header">
              <h2 className="modal__h2">Create project</h2>
              <CPButton
                src={{
                  clickFun: closeModal,
                  openState: false,
                }}
              />
            </div>
            <CustomInput
              src={{
                updateName: updateName,
              }}
            />
            <SubButton
              src={{
                clickFun: submit,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CProject;
