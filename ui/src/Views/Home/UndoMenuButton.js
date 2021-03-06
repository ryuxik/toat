import React from 'react';
import GenericMenuButton from './GenericMenuButton';

const UndoMenuButton = props => {
  return (
    <GenericMenuButton 
      command={props.command}
      editorState={props.editorState}
      dispatchTransaction={props.dispatchTransaction}>&#8630;</GenericMenuButton>
  );
}

export default UndoMenuButton;