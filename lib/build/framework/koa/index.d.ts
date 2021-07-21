/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
import { KoaWrapper } from "./framework";
export default KoaWrapper;
export declare const middleware: () => (ctx: import("koa").Context, next: import("koa").Next) => Promise<void>;
export declare const wrapRequest: (unwrapped: any) => import("..").BaseRequest;
export declare const wrapResponse: (unwrapped: any) => import("..").BaseResponse;
