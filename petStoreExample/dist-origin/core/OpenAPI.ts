/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
interface Config {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    TOKEN: string | (() => Promise<string>);
}

export const OpenAPI: Config = {
    BASE: 'https://master-shared-dev-api-gateway-livejasmin.dhdevel2.com/v2/guest',
    VERSION: '2',
    WITH_CREDENTIALS: false,
    TOKEN: '',
};