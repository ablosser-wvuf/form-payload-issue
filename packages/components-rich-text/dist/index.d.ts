import { Definer } from '@react-form-builder/core';
import { Model } from '@react-form-builder/core';
import ReactQuill from 'react-quill-new';

declare const options: {
    font: {
        font: never[];
    }[];
    header: {
        header: never[];
    }[];
    align: {
        align: never[];
    }[];
    direction: {
        direction: string;
    }[];
    decoration: string[];
    color: ({
        color: never[];
        background?: undefined;
    } | {
        background: never[];
        color?: undefined;
    })[];
    script: {
        script: string;
    }[];
    block: string[];
    list: {
        list: string;
    }[];
    indent: {
        indent: string;
    }[];
    insert: string[];
    size: {
        size: (string | boolean)[];
    }[];
    clean: string[];
};

export declare const richTextComponent: Definer<RichTextEditorProps>;

/**
 * The Rich text editor component properties.
 */
export declare interface RichTextEditorProps extends ReactQuill.ReactQuillProps {
    /**
     * The initial value for the editor.
     */
    initialValue?: string;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * Triggered after the content changed.
     */
    onChange: (value?: string) => void;
    /**
     * Groups of buttons to be displayed on the toolbar.
     */
    toolbarOptions?: ToolbarOption[];
    /**
     * Allows to customize the behavior and functionality of the editor.
     */
    modules?: Record<string, unknown>;
    /**
     * The label for the component.
     */
    label?: string;
}

export declare const richTextModel: Model<any>;

declare type ToolbarOption = keyof typeof options;

export { }
