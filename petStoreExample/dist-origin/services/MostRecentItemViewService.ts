/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MostRecentItemViewService {

    /**
     * Save a single most recent story item view.
     * @param requestBody
     * @result any Most recent story item views are updated.
     * @throws ApiError
     */
    public static async putMostRecentItemViewService({
        requestBody,
    }: {
        requestBody?: {
            storyId: number,
            ownerId: number,
            itemType: 'image' | 'video' | 'note',
            itemId: number,
        },
    }
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/story/story-item/most-recent-view`,
        body: requestBody,
    });
    return result.body;
}

}