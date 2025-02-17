import type { Annotation } from '@react-form-builder/core';
import { BuilderView } from '@react-form-builder/core';
import type { ComponentData } from '@react-form-builder/core';
import type { ComponentPropertyComputeType } from '@react-form-builder/core';
import type { ComponentType } from 'react';
import type { CSSProperties } from 'react';
import type { EditorType } from '@react-form-builder/core';
import type { FormEventHandler } from 'react';
import type { FormViewerProps } from '@react-form-builder/core';
import type { ForwardedRef } from 'react';
import type { IconProps } from '@rsuite/icons/lib/Icon';
import type { InnerCellProps } from 'rsuite-table/lib/Cell.js';
import { JSX } from '@emotion/react/jsx-runtime';
import type { LabeledValue } from '@react-form-builder/core';
import type { Language } from '@react-form-builder/core';
import { ReactElement } from 'react';
import { RefAttributes } from 'react';
import type { RowDataType } from 'rsuite-table/lib';
import { StyledComponent } from '@emotion/styled';
import type { TableProps } from 'rsuite';
import { Theme } from '@emotion/react';

/**
 * The React component that displays the table cell with the icon button. **Internal use only.**
 * @param props the React component properties.
 * @param props.rowData the row data.
 * @param props.rowIndex the row index.
 * @param props.onAction the callback function called when the button is clicked.
 * @param props.icon the icon for the button.
 * @param props.props the other properties of the component.
 * @returns the React element.
 */
export declare const ActionCell: ({ rowData, rowIndex, onAction, icon, ...props }: ActionCellProps) => JSX.Element;

/**
 * The properties of ActionCell component.
 */
export declare interface ActionCellProps extends InnerCellProps<RowDataType, string | number> {
    /**
     * The callback function called when the cell is clicked.
     * @param rowIndex the row index.
     */
    onAction: (rowIndex?: number) => void;
    /**
     * The cell icon.
     */
    icon: () => ReactElement<IconProps>;
}

/**
 * Props for the AnnotationEditor component.
 */
export declare interface AnnotationEditorProps extends CalculableEditorProps {
    /**
     * Annotation editor value.
     */
    value: any;
    /**
     * Annotation editor onChange handler.
     */
    onChange: (value: any) => void;
    /**
     * Annotation editor onClean handler.
     */
    onClean: () => void;
    /**
     * Displays an error message to the user.
     */
    showError?: (message?: string) => void;
    /**
     * Annotation editor annotation.
     */
    annotation: Annotation;
    /**
     * The component data.
     */
    componentData: ComponentData;
}

export { BuilderView }

/**
 * Represents the props used to edit a calculable property.
 */
export declare interface CalculableEditorProps {
    /**
     * Disables the ability to make the property computable.
     */
    disableCompute: () => void;
    /**
     * Sets the computed property code.
     * @param value the code of computed property.
     * @param type the component property value type.
     * @param params the parameters of the compute code.
     * @template T the component property value type.
     */
    setComputeCode: <T extends ComponentPropertyComputeType>(value: string, type: T, params?: ComputeTypeParams<T>) => void;
    /**
     * Returns the code of the computed property.
     * @param type the component property value type.
     * @param params the parameters of the compute code.
     * @template T the component property value type.
     * @returns the code of the computed property.
     */
    getComputeCode: <T extends ComponentPropertyComputeType>(type: T, params?: ComputeTypeParams<T>) => string;
    /**
     * Returns the type of calculation for the property.
     */
    getComputeType: () => ComponentPropertyComputeType | undefined;
    /**
     * Returns true if the property has a compute code for the specified type, false otherwise.
     * @param type the compute type.
     * @returns true if the property has a compute code for the specified type, false otherwise.
     */
    hasComputeCode: (type: ComponentPropertyComputeType) => boolean;
}

/**
 * The React component that displays the table cell with the checkbox. **Internal use only.**
 * @param props the React component properties.
 * @param props.rowData the row data.
 * @param props.dataKey the key name in props.rowData.
 * @param props.rowIndex the row index.
 * @param props.onChange the onChange event of the checkbox.
 * @param props.props the other properties of the component.
 * @returns the React element.
 */
export declare const CheckCell: ({ rowData, dataKey, rowIndex, onChange, ...props }: InputCellProps) => JSX.Element;

/**
 * The description of the table column.
 */
export declare interface ColumnDescription {
    /**
     * The column name.
     */
    name: string;
    /**
     * The column title.
     */
    title?: string;
    /**
     * The React component that displays the value of a column.
     */
    input?: ComponentType;
    /**
     * The properties of the React component that displays the value of the column.
     */
    inputProps?: any;
}

/**
 * The parameter type of the component property value parameters.
 */
export declare type ComputePropertiesParameters = {
    /**
     * Function parameters.
     */
    function: never;
    /**
     * Localization parameters.
     */
    localization: LocalizationComputeCodeParams;
};

/**
 * The compute type parameters.
 * @template T the component property value type.
 */
export declare type ComputeTypeParams<T extends ComponentPropertyComputeType> = ComputePropertiesParameters[T];

/**
 * The available keys of the customizable components.
 */
export declare type CustomizableKey = 'MainContainer' | 'Header' | 'MainMenu_Button' | 'MainMenu_Dropdown' | 'Header_Toolbar' | 'ToggleModeButton' | 'ResolutionSelect' | 'LocalizationSelect' | 'JsonViewButton' | 'ToggleThemeButton' | 'LeftPanel' | 'LeftPanel_Nav' | 'LeftPanel_Content' | 'Tree_Tab' | 'Tree_Tab_Content' | 'Components_Tab' | 'Components_Tab_Content' | 'Settings_Tab' | 'Settings_Tab_Content' | 'Forms_Tab' | 'Forms_Tab_Content' | 'CentralPanel' | 'FormContainer' | 'RightPanel' | 'RightPanel_Nav' | 'RightPanel_Content' | 'Main_Tab' | 'Main_Tab_Content' | 'Style_Tab' | 'Style_Tab_Content' | 'Actions_Tab' | 'Actions_Tab_Content' | 'Rules_Tab' | 'Rules_Tab_Content' | 'LabeledProperty' | 'PropertyCodeButton' | 'PropertyLabel' | 'PropertyInput';

/**
 * The map of customizations for the FormBuilder components.
 */
export declare type CustomizationMap = Partial<Record<CustomizableKey, Options>>;

/**
 * The React component that displays the table with editable cells. **Internal use only.**
 * @param props the React component properties.
 * @returns the React element.
 */
export declare const EditableTable: (props: EditableTableProps) => JSX.Element;

/**
 * The React component properties for the {@link EditableTable} component.
 */
export declare interface EditableTableProps extends TableProps<any, any> {
    /**
     * The table data.
     */
    data: RowDataType[];
    /**
     * Maximum number of rows to be displayed.
     */
    maxRows?: number;
    /**
     * The callback function called when data in the table is changed.
     */
    onChange?: FormEventHandler<HTMLElement>;
    /**
     * The columns of the table.
     */
    columns?: JSX.Element[];
    /**
     * The table label.
     */
    label?: string;
    /**
     * The error message.
     */
    errorMessage?: string;
    /**
     * Flag, if true, one new row will be automatically added when editing the last row of the table, false otherwise.
     */
    autoAdd?: boolean;
    /**
     * Flag, if true then the table header will be hidden, false otherwise.
     */
    hideHeader?: boolean;
    /**
     * The callback function called when data in the table is removed.
     */
    onRemove?: (index: number) => void;
    /**
     * The callback function called when data in the table is added.
     */
    onAdd?: (index: number) => void;
}

/**
 * The state of the {@link EditableTable} component.
 */
export declare interface EditableTableState {
    /**
     * Flag, if true, the table height will be calculated automatically, false otherwise.
     */
    autoHeight?: boolean;
    /**
     * The maximum height of the table.
     */
    maxHeight?: number;
}

export declare const FormBuilder: (props: FormBuilderProps) => JSX.Element;

/**
 * The i18n data of the form builder.
 */
export declare type FormBuilderI18n = {
    /**
     * The languages.
     */
    languages: Language[];
    /**
     * The callback function called when loading data for i18n.
     * Accepts the full code (en-US, en-GB, etc.) of a language.
     */
    getData: (languageFullCode: string) => Promise<FormBuilderI18nData>;
};

/**
 * Data required to translate the form builder interface.
 */
export declare type FormBuilderI18nData = {
    /**
     * The JSON with translation.
     */
    data: any;
    /**
     * The locale for translating rSuite components https://rsuitejs.com/guide/i18n/#supported-locales.
     */
    componentsLocale?: any;
};

/**
 * Properties of the React Form builder component.
 */
export declare interface FormBuilderProps extends Omit<FormViewerProps, 'view'> {
    /**
     * All the metadata of the components of the form builder.
     */
    view: BuilderView;
    /**
     * The external form storage.
     */
    formStorage?: IFormStorage;
    /**
     * Custom component property editors. **Attention! Unstable API.**
     */
    propertyEditors?: Record<EditorType, ComponentType<AnnotationEditorProps>>;
    /**
     * The i18n data of the form builder.
     */
    i18n?: FormBuilderI18n;
    /**
     * The reference to {@link IFormBuilder}.
     */
    builderRef?: ForwardedRef<IFormBuilder>;
    /**
     * The map of customizations for the FormBuilder components.
     */
    customization?: CustomizationMap;
    /**
     * The event is called whenever a form schema changes.
     * @param formSchema the current form schema serialized to JSON.
     */
    onFormSchemaChange?: (formSchema: string) => void;
    /**
     * Indicates the theme preference.
     */
    theme?: FormBuilderTheme;
}

/**
 * Indicates the theme preference.
 */
export declare type FormBuilderTheme = 'light' | 'dark' | 'system';

/**
 * The form builder settings interface.
 */
export declare interface IFormBuilder {
    /**
     * @returns the current form serialized to JSON.
     */
    get formAsString(): string;
    /**
     * Sets the form serialized in JSON as the current form.
     * @param text the form serialized in JSON.
     */
    parseForm: (text: string) => void;
}

/**
 * Interface for storing forms in an external storage.
 */
export declare interface IFormStorage {
    /**
     * @returns the Promise with an array of form names.
     */
    getFormNames: () => Promise<string[]>;
    /**
     * Removes the form by form name.
     * @param formName the form name.
     * @returns the Promise with the result of removal.
     */
    removeForm: (formName: string) => Promise<any>;
    /**
     * Returns the form serialized in JSON by the form name.
     * @param formName the form name.
     * @returns the Promise with the form serialized in JSON.
     */
    getForm: (formName: string) => Promise<string>;
    /**
     * Saves the form serialized in JSON.
     * @param formName the form name.
     * @param formValue the form serialized in JSON.
     * @returns the Promise with the result of saving the form.
     */
    saveForm: (formName: string, formValue: string) => Promise<any>;
}

/**
 * The React component that displays the table cell with the input. **Internal use only.**
 * @param props the React component properties.
 * @param props.rowData the row data.
 * @param props.dataKey the key name in props.rowData.
 * @param props.rowIndex the row index.
 * @param props.props the other properties of the component.
 * @param props.onChange the onChange callback.
 * @param props.type the input type.
 * @returns the React element.
 */
export declare const InputCell: ({ rowData, dataKey, rowIndex, onChange, type, ...props }: InputCellProps) => JSX.Element;

/**
 * The properties of InputCell component.
 */
export declare interface InputCellProps extends InnerCellProps<RowDataType, string | number> {
    /**
     * The callback function called when the data in a cell is changed.
     * @param value the value.
     * @param dataKey the cell data key.
     * @param rowIndex the cell row index.
     */
    onChange?: (value?: any, dataKey?: string, rowIndex?: number) => void;
    /**
     * The cell data key.
     */
    dataKey: string;
    /**
     * Rows data.
     */
    rowData: RowDataType;
    /**
     * The input type.
     */
    type: string;
}

/**
 * Localization compute parameters.
 */
export declare type LocalizationComputeCodeParams = {
    /**
     * The full language code.
     */
    langCode?: string;
};

/**
 * Creates table columns based on their descriptions. **Internal use only.**
 * @param columns the column descriptions.
 * @returns the array with React elements.
 */
export declare const makeColumns: (columns: ColumnDescription[]) => JSX.Element[];

/**
 * Customization options for the FormBuilder component.
 */
export declare type Options = {
    /**
     * True if you want to hide the component.
     */
    hidden?: boolean;
    /**
     * The component className.
     */
    className?: string;
    /**
     * The component style. Supported formats - CSSProperties object, standard CSS as string, nested selectors.
     */
    style?: CSSProperties | string;
    /**
     * The component custom renderer.
     * @param defaultElement the default rendering result.
     * @param component the React component.
     * @param props the props that were sent to the component.
     * @returns the customized ReactElement.
     */
    customRenderer?: (defaultElement: ReactElement, component: ComponentType<any>, props: any) => ReactElement;
};

export declare const SCell: StyledComponent<InnerCellProps<RowDataType<any>, string | number> & RefAttributes<HTMLDivElement> & {
    theme?: Theme | undefined;
}, {}, {}>;

/**
 * The React component that displays the table cell with the select input. **Internal use only.**
 * @param props the React component properties.
 * @param props.rowData the row data.
 * @param props.dataKey the key name in props.rowData.
 * @param props.rowIndex the row index.
 * @param props.options the select options.
 * @param props.onChange the onChange event of the checkbox.
 * @param props.props the other properties of the component.
 * @returns the React element.
 */
export declare const SelectCell: ({ rowData, dataKey, rowIndex, options, onChange, ...props }: SelectCellProps) => JSX.Element;

/**
 * The properties of SelectCell component.
 */
export declare interface SelectCellProps extends InputCellProps {
    /**
     * The select options.
     */
    options: LabeledValue[];
}

export { }
