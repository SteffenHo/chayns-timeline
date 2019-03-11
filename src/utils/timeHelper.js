import format from 'date-fns/format';

export function toDate(timestamp) {
    return format( new Date(timestamp) , 'DD.MM.YYYY');
}

export function toLongDate(timestamp) {
    return format(new Date(timestamp), 'DD.MM.YYYY HH:MM');
}
