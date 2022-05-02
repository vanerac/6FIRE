/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {CancelablePromise} from '../core/CancelablePromise';
import type {BaseHttpRequest} from '../core/BaseHttpRequest';

export class UploadService {

    constructor(public readonly httpRequest: BaseHttpRequest) {
    }

    /**
     * Upload file
     * Upload file
     * @param formData
     * @returns any Successful operation
     * @throws ApiError
     */
    public uploadFile(
        formData?: {
            file?: Blob;
        },
    ): CancelablePromise<{
        url?: string;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/upload',
            formData: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            mediaType: 'multipart/form-data',
        });
    }

}
