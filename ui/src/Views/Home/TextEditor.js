import React from 'react';
import {EditorState} from 'prosemirror-state';
import {undo, redo, history} from 'prosemirror-history';
import {keymap} from 'prosemirror-keymap';
import {baseKeymap} from 'prosemirror-commands';
import {Schema} from 'prosemirror-model';
import {schema} from 'prosemirror-schema-basic';
import {addListNodes} from 'prosemirror-schema-list';

import PMEditorView from './PMEditorView';
import UndoMenuButton from './UndoMenuButton';

const diaryEntrySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks,
});

class TextEditor extends React.Component {
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

    dispatchTransaction = (transaction) => {
        this.setState((state) => {
            return { editorState: state.editorState.apply(transaction) };
        });
    };

    onEditorStateChange = (editorState) => {
        this.setState({editorState});
    };

    render() {
        return (
            <div>
                <div className="menu">
                    <UndoMenuButton
                        editorState={this.state.editorState}
                        dispatchTransaction={this.dispatchTransaction}
                        command={undo}
                        isActive={true}/>
                </div>
                <div className="editorview-wrapper">
                    <PMEditorView
                        key={this.props.userID}
                        editorState={this.state.editorState}
                        onEditorStateChange={this.onEditorStateChange}/>
                </div>
            </div>
        );
    }
    
}

export default TextEditor;

// https://discuss.prosemirror.net/t/using-with-react/904