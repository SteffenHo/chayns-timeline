import format from 'date-fns/format';

export function toDate(timestamp) {
    return format( new Date(timestamp) , 'DD.MM.YYYY');
}

export function toLongDate(timestamp) {
    return format(new Date(timestamp), 'DD.MM.YYYY HH:MM');
}

export function toYear(timestamp) {
    return format(new Date(timestamp), 'YYYY');
}

export function toLongMonth(timestamp) {
    return format(new Date(timestamp), 'MMMM YYYY');
}
export function toShortMonth(timestamp) {
    return format(new Date(timestamp), 'MMM YYYY');
}
