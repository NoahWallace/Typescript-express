import {NotAcceptable, HttpError} from 'http-errors';

export const getBoardsArray = (forceReject?: boolean):Promise<HttpError|object[]> => {
    /* Demo Only */
    return new Promise((resolve, reject) => {
        if (forceReject) {
            reject(new NotAcceptable("Pre Defined Message"));
            return;
        }
        resolve( [{title:"This is a board"}])
    })
};
