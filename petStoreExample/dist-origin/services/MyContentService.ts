/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MyContentService {

    /**
     * Create a subscription for MyContent document.
     * @param postId Package ID
     * @param pos2TId Package ID
     * @param requestBody
     * @result any Subscription was created.
     * @throws ApiError
     */
    public static async postMyContentService({
        postId,
        pos2TId,
        requestBody,
    }: {
        postId: string,
        pos2TId: string,
        requestBody?: {
            documentId?: string,
            domain?: string,
            /**
             * Cobrand name or empty string.
             */
            cobrand?: string,
            siteId?: string,
        },
    }
): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/my-content/subscriptions/${postId}`,
        body: requestBody,
        errors: {
            400: `Bad request.`,
            402: `Payment required.`,
            500: `Unkownn internal server error.`,
        },
    });
    return result.body;
}

}