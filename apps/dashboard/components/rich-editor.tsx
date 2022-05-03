import React, { useEffect, useState } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { useCookies } from 'react-cookie';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false }) as any;

//https://www.gyanblog.com/javascript/how-integrate-next-js-draft-js-strapi-create-article-upload-image-view-page/#image-upload
export default function RichtextEditor({
    onChange,
    existingContent,
}: {
    onChange: ($content: object) => void;
    existingContent?: object;
}) {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [cookies] = useCookies(['API_TOKEN']);

    useEffect(() => {
        if (
            existingContent &&
            JSON.stringify(existingContent) != JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        ) {
            setEditorState(EditorState.createWithContent(convertFromRaw(existingContent as any)));
        }
    }, [existingContent]);

    const uploadImageCallBack = async (file: never) => {
        const host: string = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3333/api';
        const path = '/upload';
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch(`${host}${path}`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${cookies['API_TOKEN']}`,
            },
        });

        const data = await res.json();

        console.log(data.url);
        return { data: { link: data.url } };
    };

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState);

        onChange(convertToRaw(editorState.getCurrentContent()));
    };

    return (
        <div>
            <Editor
                editorState={editorState}
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
