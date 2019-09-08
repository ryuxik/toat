import React from 'react';
import GenericMenuButton from './GenericMenuButton';

const UndoMenuButton = props => {
  return (
    <GenericMenuButton 
      command={props.command}
      isAllowed={props.command}>
      &#8630;
    </GenericMenuButton>
  );
}

export default UndoMenuButton;