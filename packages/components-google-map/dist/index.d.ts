/// <reference types="google.maps" />

import type { CollisionBehavior } from '@vis.gl/react-google-maps';
import type { ControlPosition } from '@vis.gl/react-google-maps';
import { Definer } from '@react-form-builder/core';
import type { MapMouseEvent } from '@vis.gl/react-google-maps';
import { Model } from '@react-form-builder/core';

/**
 * Represents an address.
 */
export declare type Address = {
    /**
     * The first line of the address.
     */
    address?: string;
    /**
     * The city of the address.
     */
    city?: string;
    /**
     * The state of the address.
     */
    state?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The country of the address.
     */
    country?: string;
};

export declare const googleMapComponent: Definer<GoogleMapProps>;

export declare const googleMapModel: Model<any>;

/**
 * Props for the GoogleMap component.
 */
export declare interface GoogleMapProps {
    /**
     * Latitude of the center point on the map.
     */
    latitude: number;
    /**
     * Longitude of the center point on the map.
     */
    longitude: number;
    /**
     * Zoom level of the map.
     */
    zoom: number;
    /**
     * Google Maps API key used to load the map.
     */
    apiKey: string;
    /**
     * Whether multiple markers can be added to the map.
     * Defaults to false.
     */
    allowMultipleMarkers?: boolean;
    /**
     * If true, the user can change the markers.
     */
    allowChangingMarkers: boolean;
    /**
     * Coordinates of the markers
     */
    markers?: MapMarker[];
    /**
     * The markers collision behavior.
     */
    collisionBehavior?: CollisionBehavior;
    /**
     * The search input placeholder.
     */
    searchPlaceholder?: string;
    /**
     * The map ID is an identifier that's associated with a specific map style or feature.
     */
    mapId?: string;
    /**
     * The callback function called when a marker is added.
     */
    onMarkerAdd?: (marker: MapMarker) => void;
    /**
     * The callback function called when a marker is deleted.
     */
    onMarkerDelete?: (marker: MapMarker) => void;
    /**
     * The callback function called when a marker is clicked.
     */
    onMarkerClick?: (marker: MapMarker | null, element: google.maps.marker.AdvancedMarkerElement) => void;
    /**
     * The callback function called when the map is clicked.
     */
    onMapClick?: (event: MapMouseEvent) => void;
    /**
     * The callback function called when a place is selected.
     * @param place the selected place.
     * @param address the address of the selected place.
     */
    onPlaceSelect?: (place: google.maps.places.PlaceResult, address?: Address) => void;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * Sets the map to a specific region.
     * Read more about localizing the Map: https://developers.google.com/maps/documentation/javascript/localization.
     * Part of: https://developers.google.com/maps/documentation/javascript/url-params.
     */
    region?: string;
    /**
     * Use a specific language for the map.
     * Read more about localizing the Map: https://developers.google.com/maps/documentation/javascript/localization.
     * Part of: https://developers.google.com/maps/documentation/javascript/url-params.
     */
    language?: string;
    /**
     * The color scheme to use for the map.
     */
    colorScheme?: 'DARK' | 'LIGHT' | 'FOLLOW_SYSTEM';
    /**
     * The default map type to use.
     */
    mapTypeId: 'hybrid' | 'roadmap' | 'satellite' | 'terrain';
    /**
     * This setting controls how the API handles gestures on the map.
     */
    gestureHandling?: 'auto' | 'cooperative' | 'greedy' | 'none';
    /**
     * Whether to show the map control.
     */
    showMapControl: ControlPosition;
    /**
     * The position of the map control.
     */
    mapControlPosition: ControlPosition;
    /**
     * Whether to add a marker on search.
     */
    addMarkerOnSearch: boolean;
    /**
     * The title for the marker window.
     */
    markerWindowTitle: string;
    /**
     * The caption for the remove marker button.
     */
    removeMarkerCaption: string;
}

/**
 * Represents the marker data on the map.
 */
export declare type MapMarker = {
    /**
     *  The unique identifier of the marker.
     */
    id: string;
    /**
     * Latitude and longitude of the geographical location.
     */
    position: google.maps.LatLngLiteral;
    /**
     * The z-index of the marker.
     */
    zIndex: number;
    /**
     * The title of the marker.
     */
    title?: string;
    /**
     * The address of the location.
     */
    address?: Address;
};

/**
 * Converts the address components to an address object.
 * Original source code from https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform.
 * @param components the address components.
 * @returns the address object.
 */
export declare function toAddress(components: google.maps.GeocoderAddressComponent[]): Address;

export { }
