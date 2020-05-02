import * as React from 'react';

import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css';
import 'suneditor/dist/suneditor.min.js';

export interface ITextEditor {
    onChange?: (value: string) => void,
    setContents?: string
}

export const TextEditor: React.FC<ITextEditor> = ({ onChange, ...props }) => {

    return (
        <SunEditor
            onChange={onChange}
            setOptions={{
                maxHeight: '50vh',
                height: '50vh',
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
                    [ 'table', 'link', 'image', 'video', 'math' ],
                    [ 'fullScreen', 'showBlocks', 'codeView' ],
                    [ 'preview', 'print' ],
                ],
            }}
            {...props}
        />
    );
};
