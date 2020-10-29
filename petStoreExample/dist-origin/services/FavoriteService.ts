/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class FavoriteService {

    /**
     * Get favorite performer list of member.
     * @param criteria Available fields and their operators: <dl> <dt>performerNick:<dt><dd>LIKE</dd> <dt>performerId:<dt><dd>!=</dd> </dl>
     * @param limit Maximum amount of results
     * @param offset Offset to be applied to the result
     * @result any
     * @throws ApiError
     */
    public static async getFavoriteService({
        criteria,
        limit,
        offset,
    }: {
        criteria?: string,
        limit?: number,
        offset?: number,
    }
): Promise<{
    performerIds?: Array<number>,
    /**
     * Pagination information
     */
    pagination?: {
        total?: number,
        limit?: number,
        offset?: number,
    },
}> {
    const result = await __request({
        method: 'GET',
        path: `/favorite/favorites`,
        query: {
            'criteria[]': criteria,
            'limit': limit,
            'offset': offset,
        },
        errors: {
            403: `Trying to access service as a guest.`,
            503: `Temporary internal server error.`,
        },
    });
    return result.body;
}

}