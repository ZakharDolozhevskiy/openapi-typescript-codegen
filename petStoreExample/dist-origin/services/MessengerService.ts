/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MessengerService {

    /**
     * Find available threads for the given member
     * @param session User Session identifier
     * @param criteria Available fields and their operators: <dl> <dt>performerNick:<dt><dd>LIKE</dd> </dl>
     * @result any
     * @throws ApiError
     */
    public static async getMessengerService({
        session,
        criteria,
    }: {
        session: string,
        criteria?: string,
    }
): Promise<{
    items?: Array<{
        id?: number,
        unreadMessageCount?: any,
        lastMessageId?: number,
        participants?: Array<{
            id?: number,
            type?: 'member' | 'performer',
        }>,
    }>,
    totalCount?: number,
    totalUnreadCount?: number,
}> {
    const result = await __request({
        method: 'GET',
        path: `/messenger/threads`,
        query: {
            'session': session,
            'criteria[]': criteria,
        },
    });
    return result.body;
}

}