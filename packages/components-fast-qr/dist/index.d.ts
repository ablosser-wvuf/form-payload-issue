import { Definer } from '@react-form-builder/core';
import { Model } from '@react-form-builder/core';

export declare const fastQrComponent: Definer<FastQrProps>;

export declare const fastQrModel: Model<any>;

/**
 * The Fast QR component properties.
 */
export declare interface FastQrProps {
    /**
     * The QR code width.
     */
    width?: number;
    /**
     * The QR code content.
     */
    content: string;
    /**
     * The different possible shapes to represent modules.
     */
    shape?: number;
    /**
     * The background color.
     */
    backgroundColor?: string;
    /**
     * The module color.
     */
    moduleColor?: string;
    /**
     * The margin.
     */
    margin?: number;
    /**
     * The image, base64 or URL.
     */
    image?: string;
    /**
     * The image background color.
     */
    imageBackgroundColor?: string;
    /**
     * The image background shape.
     */
    imageBackgroundShape?: number;
    /**
     * The image X position in module units.
     */
    imagePositionX?: number;
    /**
     * The image Y position in module units.
     */
    imagePositionY?: number;
    /**
     * Image size in module units.
     */
    imageSize?: number;
    /**
     * Image gap in module units.
     */
    imageGap?: number;
    /**
     * The error correction coding level.
     */
    errorCorrectionLevel?: number;
    /**
     * The QR code version.
     */
    version?: number;
    /**
     * The CSS class name.
     */
    className?: string;
}

export { }
