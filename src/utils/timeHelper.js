import format from 'date-fns/format';

/**
 * Format timestamp to dateString, format: DD.MM.YYYY
 * @param timestamp
 * return {string} formatted dateString
 */
export function toDate(timestamp) {
    return format( new Date(timestamp), 'DD.MM.YYYY');
}

/**
 * Format timestamp to dateString, format: DD.MM.YYYY HH:MM
 * @param timestamp
 * return {string} formatted dateString
 */
export function toLongDate(timestamp) {
    return format(new Date(timestamp), 'DD.MM.YYYY HH:MM');
}

/**
 * Format timestamp to dateString, format: YYYY
 * @param timestamp
 * return {string} formatted dateString
 */
export function toYear(timestamp) {
    return format(new Date(timestamp), 'YYYY');
}

/**
 * Format timestamp to dateString, format: MMMM. YYYY
 * @param timestamp
 * return {string} formatted dateString
 */
export function toLongMonth(timestamp) {
    return format(new Date(timestamp), 'MMMM. YYYY');
}

/**
 * Format timestamp to dateString, format: MMM YYYY
 * @param timestamp
 * return {string} formatted dateString
 */
export function toShortMonth(timestamp) {
    return format(new Date(timestamp), 'MMM YYYY');
}

/**
 * formating a string by ID 1: toDate 2:toLongDate, 3:toYear 4:toLongMonth 5:toShortMonth
 * @param formatId
 * @param timestamp default now. Date which should be formatted
 * return {string} formatted dateString
 */
export function formatDateById(formatId, timestamp = Date.now()){

    switch (formatId) {
        case 1:
            return toDate(timestamp);
        case 2:
            return toLongDate(timestamp);
        case 3:
            return toYear(timestamp);
        case 4:
            return toLongMonth(timestamp);
        case 5:
            return toShortMonth(timestamp);
        default:
            return toDate(timestamp);
    }
};
