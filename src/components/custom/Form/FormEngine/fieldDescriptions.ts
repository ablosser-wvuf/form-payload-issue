/**
 * Various descriptions of props that are used among various components.
 *
 */

export const characterCountToBeginSearch = "The number of characters a user must enter before the search is issued (if this value is set to 3 the search would begin on the 4th character). (Imagine a user " +
    "looking up a constituent ID, most of our ids begin with 700 or 800 so it would not be that useful to actually query the database for all constituents that have an id of 700 or 800, the 4th character " +
    "would significantly narrow down the search and begin returning potentially useful results.)";

export const timeBetweenKeystrokes = "The time (In milliseconds. ex: 1000 ms = 1 second) between keystrokes before the search is issued. " +
    "This is helpful so the user is not hammering the backend with requests. The default of 300 seems to be pretty standard.";

export const numberOfResults = "The number of results to return.";