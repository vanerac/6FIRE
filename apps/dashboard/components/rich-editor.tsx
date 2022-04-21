import { Editor, EditorState } from 'draft-js';
import React, { useState } from 'react';

export default function RichtextEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    return (
        <div>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
}
