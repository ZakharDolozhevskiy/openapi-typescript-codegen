/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class AdvertisementService {

    /**
     * Get a list of user-targeting advertisements.
     * @param user User information for targeting specific ads
     * @result any
     * @throws ApiError
     */
    public static async getAdvertisementService({
        user,
    }: {
        user?: {
            lastLoggedOnMemberType?: 'free' | 'paying' | 'validated' | 'none',
            visitorId?: string,
            /**
             * A JWT string
             */
            luckyWheelRewardToken?: string,
        },
    }
): Promise<{
    data?: Array<{
        /**
         * Determines the way it will be displayed. e.g. static, luckywheel, happyhour, etc.
         */
        type?: string,
        name?: string,
        /**
         * Additional information related to the ad
         */
        metadata?: any,
    }>,
}> {
    const result = await __request({
        method: 'GET',
        path: `/announcement/announcements`,
        query: {
            'user': user,
        },
        errors: {
            400: `Bad request`,
            500: `Internal server error`,
        },
    });
    return result.body;
}

}