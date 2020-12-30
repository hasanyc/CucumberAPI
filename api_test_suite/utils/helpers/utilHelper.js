import { v4 as uuid4 } from 'uuid';
import moment from 'moment';

export const uuid = () => uuid4();

export const getCurrentTime = (minutes = 10) => moment(new Date()).add(minutes, 'm').toISOString();
export const getNextDayFromNow = (day = 1) => moment(new Date()).add(day, 'd').toISOString();

export const prettifyJson = (json) => JSON.stringify(json, null, 2);

export const axiosErrorHandler = (error) => {
    if (error.response) {
        const {
            config: { url }, data, headers, status,
        } = error.response;
        return prettifyJson({
            'Req Url': url,
            Status: status,
            Headers: headers,
            'Response Payload': data,
        });
    }
    if (error.request) {
        return prettifyJson({
            'Failed Request': error.request,
        });
    }
    return prettifyJson({
        'Unknown Error': error,
    });
};

export const removeUnderscore = (input) => input.replace('_', '');
export const removePipe = (input) => input.replace('|', '').replace('|', '');
export const removeAllPipe = (input) => input.replace(/\|/g, '');
