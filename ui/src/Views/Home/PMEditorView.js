import React from 'react';
import { EditorView } from 'prosemirror-view';

class PMEditorView extends React.Component {
    componentDidMount() {
      this.editorView = this.createEditorView(this.el);
      this.handleChange = this.handleChange.bind(this);
    }

    createEditorView = (element) => {
        return new EditorView(element, {
          state: this.props.editorState,
          dispatchTransaction: this.dispatchTransaction,
        });
    };
  
    dispatchTransaction = (transaction) => {
      const editorState = this.props.editorState.apply(transaction);
      this.editorView.updateState(editorState);
      this.handleChange(editorState);
    };
  
    focus() {
      this.editorView.focus();
    }
  
    componentWillUnmount() {
      this.editorView.destroy();
    }

    handleChange(editorState) {
      this.props.onEditorStateChange(editorState);
    }
    // TODO: find a better way to do this?
    shouldComponentUpdate() {
      console.log(this.props);
      return false;
    }
  
    render() {
      return (
        <div className="diary-entry" ref={el => this.el = el} />
      );
    }
};

export default PMEditorView;

// https://reactjs.org/docs/integrating-with-other-libraries.html

  // https://discuss.prosemirror.net/t/using-with-react/904