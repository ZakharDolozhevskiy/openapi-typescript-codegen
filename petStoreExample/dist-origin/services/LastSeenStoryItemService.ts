/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class LastSeenStoryItemService {

    /**
     * @result any The last seen story items.
     * @throws ApiError
     */
    public static async getLastSeenStoryItemService(): Promise<{
        data?: Array<{
            viewerId: number,
            ownerId: number,
            lastSeenItemType: 'image' | 'video' | 'note',
            lastSeenItemCreatedAt: string,
        }>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/story/story-item/last-seen`,
        });
        return result.body;
    }

}