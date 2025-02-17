import { Definer } from '@react-form-builder/core';
import { ErrorWrapperProps } from '@react-form-builder/core';
import type { FormViewerWrapperComponentProps } from '@react-form-builder/core';
import { JSX } from '@emotion/react/jsx-runtime';
import { Model } from '@react-form-builder/core';
import type { OverlayTriggerType } from 'rsuite/esm/internals/Overlay/OverlayTrigger';
import type { TypeAttributes } from 'rsuite/esm/internals/types';
import { View } from '@react-form-builder/core';
import { WrapperProps } from '@react-form-builder/core';

/**
 * Loads FormEngine specific styles over "rsuite" library.
 * @returns the Promise that resolves when the custom styles have been loaded successfully.
 */
export declare const formEngineRsuiteCssLoader: () => Promise<void>;

/**
 * Loads the Left-To-Right (LTR) CSS for the "rsuite" library.
 * @returns the Promise that resolves when the LTR CSS has been loaded successfully.
 */
export declare const ltrCssLoader: () => Promise<void>;

/**
 * An array of rSuite component metadata for use in FormViewer.
 */
export declare const models: Model<any>[];

/**
 * Metadata builder for rSuite-based error display component.
 */
export declare const rsErrorMessage: Definer<RsErrorMessageProps>;

/**
 * The properties of RsErrorMessage component.
 */
export declare interface RsErrorMessageProps extends ErrorWrapperProps {
    /**
     * The placement of an error message.
     */
    placement?: TypeAttributes.Placement8;
}

/**
 * Wrapper component for RSuite components localization.
 * @param props the component props.
 * @param props.language the language object containing the language information.
 * @param props.children the children components to be wrapped.
 * @returns the wrapped components with localization settings applied.
 */
export declare const RsLocalizationWrapper: ({ language, children }: FormViewerWrapperComponentProps) => JSX.Element;

/**
 * Metadata builder for rSuite-based tooltip display component.
 */
export declare const rsTooltip: Definer<RsTooltipProps>;

/**
 * The properties of RsTooltip component.
 */
export declare interface RsTooltipProps extends WrapperProps {
    /**
     * The tooltip text.
     */
    text: string;
    /**
     * The placement of a tooltip.
     */
    placement: TypeAttributes.Placement;
    /**
     * The tooltip trigger.
     */
    trigger: OverlayTriggerType;
}

/**
 * An array of rSuite component metadata factories.
 */
export declare const rSuiteComponents: Definer<any>[];

/**
 * Loads the Right-to-Left (RTL) CSS for the "rsuite" library.
 * @returns the Promise that resolves when the RTL CSS has been loaded successfully.
 */
export declare const rtlCssLoader: () => Promise<void>;

/**
 * An assembled set of rSuite components, ready to be passed as a property to the FormViewer.
 */
export declare const view: View;

export { }
