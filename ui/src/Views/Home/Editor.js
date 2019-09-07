import React from 'react';
import {EditorState} from 'prosemirror-state';
// import {EditorView} from 'prosemirror-view';
import {Schema, DOMParser} from 'prosemirror-model';
import {schema} from 'prosemirror-schema-basic';
import {addListNodes} from 'prosemirror-schema-list';
// import {exampleSetup} from 'prosemirror-example-setup';

import PMEditorView from './PMEditorView';

const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks
});


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.create({
                schema: mySchema
            })
        };
    }

    dispatchTransaction = (tx) => {
        const editorState = this.state.editorState.apply(tx);
        this.setState({editorState});
    };

    onEditorState = (editorState) => {
        this.setState({editorState});
    };

    render() {
        const {editorState} = this.state;
        return (
            <div>
                <div class="menu">
                    {/* <UndoMenuButton
                    editorState={editorState}
                    dispatchTransaction={this.dispatchTransaction}
                    > */}
                </div>
                <div class="editorview-wrapper">
                    <PMEditorView
                        ref={this.onEditorView}
                        editorState={editorState}
                        onEditorState={this.onEditorState}/>
                </div>
            </div>
        );
    }
    
}

export default Editor;

// https://discuss.prosemirror.net/t/using-with-react/904

// window.view = new EditorView(document.querySelector("#editor"), {
//   state: EditorState.create({
//     doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
//     plugins: exampleSetup({schema: mySchema})
//   })
// })