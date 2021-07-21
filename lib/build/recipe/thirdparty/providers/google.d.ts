import { TypeProvider } from "../types";
import { BaseRequest } from "../../../framework";
declare type TypeThirdPartyProviderGoogleConfig = {
    clientId: string;
    clientSecret: string;
    scope?: string[];
    authorisationRedirect?: {
        params?: {
            [key: string]: string | ((request: BaseRequest) => Promise<string>);
        };
    };
};
export default function Google(config: TypeThirdPartyProviderGoogleConfig): TypeProvider;
export {};
