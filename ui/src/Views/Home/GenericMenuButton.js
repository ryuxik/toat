import React from 'react';

const GenericMenuButton = props => {
    const onMouseDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        props.command(props.editorState, props.dispatchTransaction);
    }

    const disabled = props.isAllowed && !props.isAllowed(props.editorState);

    const active = props.isActive && props.isActive(props.editorState);
    
    return (
        <button
            disabled={disabled}
            active={active}
            onMouseDown={onMouseDown}
            className='menu-button'>
            {props.children}
        </button>
    );
}

export default GenericMenuButton;