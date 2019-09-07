import React from 'react';
import {EditorState} from 'prosemirror-state';
import {undo, redo, history} from 'prosemirror-history';
import {keymap} from 'prosemirror-keymap';
import {baseKeymap} from 'prosemirror-commands';
import {Schema} from 'prosemirror-model';
import {schema} from 'prosemirror-schema-basic';
import {addListNodes} from 'prosemirror-schema-list';

import PMEditorView from './PMEditorView';

const diaryEntrySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks,
});


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.create({
                schema: diaryEntrySchema,
                plugins: [
                    history(),
                    keymap({"Mod-z": undo, "Mod-y": redo}),
                    keymap(baseKeymap)
                ]
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
                <div className="menu">
                    {/* <UndoMenuButton
                    editorState={editorState}
                    dispatchTransaction={this.dispatchTransaction}
                    > */}
                </div>
                <div className="editorview-wrapper">
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