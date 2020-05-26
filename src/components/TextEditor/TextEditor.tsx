import * as React from 'react';

import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css';
import 'suneditor/dist/suneditor.min.js';

export interface ITextEditor {
    setInfoMessage: (msg: string) => void,
    onChange?: (value: string) => void,
    setContents?: string
}

export const TextEditor: React.FC<ITextEditor> = ({ setInfoMessage, onChange, ...props }) => {
    const beforeImageUpload = (files: File[], info: {}) => {
        if(files.reduce((accum, file) => accum + file.size, 0) < 10000000) {
            return { files, info };
        }
        setInfoMessage('Ошибка! Вы превысили допустимый размер записей (максимум 1.5мб)!')
    }

    return (
        <SunEditor
            lang="ru"
            onChange={onChange}
            onImageUploadBefore={beforeImageUpload}
            setOptions={{
                height: '100%',
                minHeight: '400px',
                buttonList: [
                    [ 'undo', 'redo' ],
                    [ 'font', 'fontSize', 'formatBlock' ],
                    [ 'paragraphStyle', 'blockquote' ],
                    [ 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript' ],
                    [ 'fontColor', 'hiliteColor', 'textStyle' ],
                    [ 'removeFormat' ],
                    [ 'outdent', 'indent' ],
                    [ 'align', 'horizontalRule', 'list', 'lineHeight' ],
                    [ 'table', 'link', 'image', 'math' ],
                    [ 'fullScreen', 'showBlocks', 'codeView' ],
                    [ 'preview', 'print' ],
                ],
            }}
            {...props}
        />
    );
};
