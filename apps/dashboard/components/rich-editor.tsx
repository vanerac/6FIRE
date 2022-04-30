import React, { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });

export default function RichtextEditor({
    $onChange,
    $existingContent,
}: {
    onChange?: ($content: string) => void;
    existingContent?: string;
}) {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const uploadImageCallBack = async ($file: any) => {
        // const imgData = await apiClient.uploadInlineImageForArticle(file);
        // return Promise.resolve({
        //     data: {
        //         link: `${process.env.NEXT_PUBLIC_API_URL}${imgData[0].formats.small.url}`,
        //     },
        // });
    };

    // useEffect(() => {
    //     if (existingContent) {
    //         setEditorState(EditorState.createWithContent(convertFromHTML(existingContent as any)));
    //     }
    // }, [existingContent]);

    // useEffect(() => {
    //     if (onChange) {
    //         onChange(editorState);
    //     }
    // }, [editorState]);

    const onEditorStateChange = (editorState: EditorState) => {
        console.log('updated');
        setEditorState(editorState);

        console.log(convertToRaw(editorState.getCurrentContent()));
    };

    return (
        <div>
            <Editor
                editorState={editorState as any}
                toolbarClassName="toolbar-class"
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                onEditorStateChange={onEditorStateChange}
                // toolbarOnFocus
                toolbar={{
                    options: [
                        'inline',
                        'blockType',
                        'fontSize',
                        'fontFamily',
                        'list',
                        'textAlign',
                        'colorPicker',
                        'link',
                        'embedded',
                        'emoji',
                        'image',
                        'history',
                    ],
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                        urlEnabled: true,
                        uploadEnabled: true,
                        uploadCallback: uploadImageCallBack,
                        previewImage: true,
                        alt: { present: false, mandatory: false },
                    },
                }}
            />
        </div>
    );
}
