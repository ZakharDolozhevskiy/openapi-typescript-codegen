/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class PaymentService {

    /**
     * Get quickbuy packages.
     * @param xSessionId User Session identifier
     * @param site Site name
     * @param successCallbackUrl successCallbackUrl
     * @param errorCallbackUrl errorCallbackUrl
     * @param redirectCallbackUrl redirectCallbackUrl
     * @param backwardCallbackUrl backwardCallbackUrl
     * @param cobrand Cobrand name
     * @param campaignTags Any extra information to be provided to the campaign. Commonly used for A/B testing ids.
     * @param forceCampaign Force campaing name
     * @param aweReferralId Referral id in the AWE referral program
     * @param referralId Referral id in the JSM1 referral program
     * @param refererq Seo admin referer id ('refererq' from cookie)
     * @param requiredCredits If given, this endpoint will return only the smallest package with enough credits.
     * @param customCredits Returns with custom packages for the requested credits.
     * @param platform Platform name
     * @result any Available package list for user.
     * @throws ApiError
     */
    public static async getPaymentService({
        xSessionId,
        site,
        successCallbackUrl,
        errorCallbackUrl,
        redirectCallbackUrl,
        backwardCallbackUrl,
        cobrand,
        campaignTags,
        forceCampaign,
        aweReferralId,
        referralId,
        refererq,
        requiredCredits,
        customCredits,
        platform = 'pc',
    }: {
        xSessionId: string,
        site: string,
        successCallbackUrl: string,
        errorCallbackUrl: string,
        redirectCallbackUrl: string,
        backwardCallbackUrl: string,
        cobrand?: string,
        campaignTags?: Array<string>,
        forceCampaign?: string,
        aweReferralId?: number,
        referralId?: string,
        refererq?: string,
        requiredCredits?: number,
        customCredits?: Array<number>,
        platform?: 'pc' | 'mobile',
    }
): Promise<{
    data?: any,
}> {
    const result = await __request({
        method: 'GET',
        path: `/eps/quickbuy-packages`,
        headers: {
            'X-SESSION-ID': xSessionId,
        },
        query: {
            'site': site,
            'successCallbackUrl': successCallbackUrl,
            'errorCallbackUrl': errorCallbackUrl,
            'redirectCallbackUrl': redirectCallbackUrl,
            'backwardCallbackUrl': backwardCallbackUrl,
            'cobrand': cobrand,
            'campaignTags': campaignTags,
            'forceCampaign': forceCampaign,
            'aweReferralId': aweReferralId,
            'referralId': referralId,
            'refererq': refererq,
            'requiredCredits': requiredCredits,
            'customCredits': customCredits,
            'platform': platform,
        },
        errors: {
            503: `Service unavailable`,
        },
    });
    return result.body;
}

/**
 * Get subscription package.
 * @param id Package ID
 * @param serviceId serviceId
 * @result any Requested package.
 * @throws ApiError
 */
public static async getPaymentService1({
    id,
    serviceId,
}: {
    id: string,
    serviceId: string,
}
): Promise<{
    data?: any,
}> {
    const result = await __request({
        method: 'GET',
        path: `/eps/subscription-packages/${id}`,
        query: {
            'serviceId': serviceId,
        },
        errors: {
            404: `Member account or package could not be found`,
            503: `Service unavailable`,
        },
    });
    return result.body;
}

/**
 * Create an EPS Transaction (use it before secure redirection because of 3d secure challenge)
 * @result any Transaction created
 * @throws ApiError
 */
public static async postPaymentService(): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/eps/transactions/${id}`,
        errors: {
            409: `Transaction already exists`,
        },
    });
    return result.body;
}

/**
 * Get EPS Transaction
 * @param id Purchase token id
 * @result any Gets a transaction
 * @throws ApiError
 */
public static async getPaymentService2({
    id,
}: {
    id: string,
}
): Promise<{
    data?: {
        memberId?: number,
        status?: {
            value?: 'pending' | 'completed' | 'declined',
            message?: 'Insufficient funds' | 'Timeout' | 'Do not honor' | 'declined by turkish bank' | null,
        },
    },
}> {
    const result = await __request({
        method: 'GET',
        path: `/eps/transactions/${id}`,
        errors: {
            404: `Transaction not found`,
        },
    });
    return result.body;
}

/**
 * Start an EPS Transaction (use it when we don't need 3d secure challenge redirection)
 * @result any Transaction created and started
 * @throws ApiError
 */
public static async postPaymentService1(): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/eps/transactions/${id}/start`,
        errors: {
            409: `Transaction already exists`,
        },
    });
    return result.body;
}

}