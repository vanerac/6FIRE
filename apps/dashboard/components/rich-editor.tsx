import React, { useEffect, useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { useCookies } from 'react-cookie';

import axios from 'axios';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });

//https://www.gyanblog.com/javascript/how-integrate-next-js-draft-js-strapi-create-article-upload-image-view-page/#image-upload
export default function RichtextEditor({
    onChange,
    existingContent,
}: {
    onChange: ($content: string) => void;
    existingContent?: any;
}) {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [cookies] = useCookies(['API_TOKEN']);

    useEffect(() => {
        if (existingContent) {
            setEditorState(EditorState.createWithContent(existingContent));
        }
    }, [existingContent]);

    const uploadImageCallBack = async (file: never) => {
        const host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api';
        const path = '/upload';
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post(`${host}${path}`, formData, {
            headers: {
                Authorization: `Bearer ${cookies['API_TOKEN']}`,
            },
        });

        return { data: { link: res.data.url } };
    };

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState);

        onChange(convertToRaw(editorState.getCurrentContent()) as any);
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
