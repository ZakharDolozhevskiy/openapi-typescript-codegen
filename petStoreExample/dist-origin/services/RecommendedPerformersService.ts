/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class RecommendedPerformersService {

    /**
     * Get recommended performer for the member.
     * @param criteria Maximum amount of results
     * @param limit Maximum amount of results
     * @result any
     * @throws ApiError
     */
    public static async getRecommendedPerformersService({
        criteria,
        limit,
    }: {
        criteria: Array<string>,
        limit: number,
    }
): Promise<{
    performerIds?: Array<number>,
}> {
    const result = await __request({
        method: 'GET',
        path: `/performer/recommended`,
        query: {
            'criteria': criteria,
            'limit': limit,
        },
        errors: {
            400: `Trying to access service as a guest.`,
            500: `Temporary internal server error.`,
        },
    });
    return result.body;
}

}