/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class SupportMessengerService {

    /**
     * Find support messages
     * @param limit Maximum amount of results
     * @param lastId Pagination id cursor.
     * @param reverseDirection Reverse pagination direction
     * @result any
     * @throws ApiError
     */
    public static async getSupportMessengerService({
        limit = 15,
        lastId = null,
        reverseDirection,
    }: {
        limit?: number,
        lastId?: number,
        reverseDirection?: number,
    }
): Promise<{
    items?: Array<{
        id?: number,
        sender?: {
            id?: number,
            type?: 'member' | 'support',
        },
        content?: string,
        createdAt?: string,
    }>,
}> {
    const result = await __request({
        method: 'GET',
        path: `/support-messenger/messages`,
        query: {
            'limit': limit,
            'lastId': lastId,
            'reverseDirection': reverseDirection,
        },
    });
    return result.body;
}

/**
 * Patch support messages
 * @param requestBody Patch body
 * @param ids
 * @result any
 * @throws ApiError
 */
public static async patchSupportMessengerService({
    requestBody,
    ids,
}: {
    requestBody: {
        status?: any,
    },
    ids?: Array<any>,
}
): Promise<any> {
    const result = await __request({
        method: 'PATCH',
        path: `/support-messenger/messages`,
        query: {
            'ids': ids,
        },
        body: requestBody,
    });
    return result.body;
}

}