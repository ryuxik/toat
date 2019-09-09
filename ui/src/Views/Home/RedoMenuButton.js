import React from 'react';
import GenericMenuButton from './GenericMenuButton';

const RedoMenuButton = props => {
  return (
    <GenericMenuButton 
      command={props.command}
      editorState={props.editorState}
      dispatchTransaction={props.dispatchTransaction}>&#8631;</GenericMenuButton>
  );
}

export default RedoMenuButton;