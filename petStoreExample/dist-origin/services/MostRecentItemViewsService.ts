/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MostRecentItemViewsService {

    /**
     * Save multiple most recent story item views.
     * @param requestBody
     * @result any Most recent story items are updated.
     * @throws ApiError
     */
    public static async putMostRecentItemViewsService({
        requestBody,
    }: {
        requestBody?: {
            mostRecentItemViewList?: {
                ownerId?: number,
                itemId?: number,
                required?: any,
            },
        },
    }
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/story/story-item/most-recent-views`,
        body: requestBody,
    });
    return result.body;
}

}