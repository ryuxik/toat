import React from 'react';
import { EditorView } from 'prosemirror-view';

class PMEditorView extends React.Component {
    editorView;

    createEditorView = (element) => {
      if (element != null) {
        this.editorView = new EditorView(element, {
          state: this.props.editorState,
          dispatchTransaction: this.dispatchTransaction,
        });
      }
    };
  
    dispatchTransaction = (tx) => {
      // In case EditorView makes any modification to a state we funnel those
      // modifications up to the parent and apply to the EditorView itself.
      const editorState = this.props.editorState.apply(tx);
      if (this.editorView != null) {
        this.editorView.updateState(editorState);
      }
      this.props.onEditorState(editorState);
    };
  
    focus() {
      if (this.editorView) {
        this.editorView.focus();
      }
    }
  
    componentWillReceiveProps(nextProps) {
      // In case we receive new EditorState through props — we apply it to the
      // EditorView instance.
      if (this.editorView) {
        if (nextProps.editorState !== this.props.editorState) {
          this.editorView.updateState(nextProps.editorState);
        }
      }
    }
  
    componentWillUnmount() {
      if (this.editorView) {
        this.editorView.destroy();
      }
    }
  
    shouldComponentUpdate() {
      // Note that EditorView manages its DOM itself so we'd rather not mess
      // with it.
      return false;
    }
  
    render() {
      // Render just an empty div which is then used as a container for an
      // EditorView instance.
      return <div ref={this.createEditorView} />;
    }
};

export default PMEditorView;

  // https://discuss.prosemirror.net/t/using-with-react/904