/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class StoryService {

    /**
     * @param excludeOwnerIds
     * @param showTestModels A flag whether to show test models or not. NOT present in v2.
     * @result any The recommended stories with performer details in the requested category.
     * @throws ApiError
     */
    public static async getStoryService({
        excludeOwnerIds,
        showTestModels,
    }: {
        excludeOwnerIds?: Array<any>,
        showTestModels?: boolean,
    }
): Promise<Array<{
    storyId?: number,
    lastItem?: {
        id?: number,
        createdAt?: string,
        duration?: number,
        durationFloat?: number,
        media?: Array<{
            contentUrl?: string,
            dimension?: {
                height?: number,
                width?: number,
            },
            type?: 'image' | 'video',
            isBlurred?: boolean,
        }>,
        privacy?: 'free' | 'premium',
        type?: 'image' | 'video' | 'note',
        tags?: Array<{
            name?: string,
        }>,
        activatedAt?: string,
    },
    performer?: {
        /**
         * MSC Performer ID
         */
        id?: number,
        name?: string,
        profilePictureUrl?: string,
    },
}>> {
    const result = await __request({
        method: 'GET',
        path: `/story/recommended`,
        query: {
            'excludeOwnerIds': excludeOwnerIds,
            'showTestModels': showTestModels,
        },
    });
    return result.body;
}

}