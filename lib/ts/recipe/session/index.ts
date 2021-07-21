/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

import { BaseRequest, BaseResponse } from "../../framework";
import SuperTokensError from "./error";
import {
    VerifySessionOptions,
    RecipeInterface,
    SessionContainerInterface as SessionContainer,
    SessionRequest,
    APIInterface,
    APIOptions,
} from "./types";
import Recipe from "./recipe";
import framework from "./framework";

// For Express
export default class SessionWrapper {
    static init = Recipe.init;

    static Error = SuperTokensError;

    static createNewSession(res: BaseResponse, userId: string, jwtPayload: any = {}, sessionData: any = {}) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.createNewSession({
            res,
            userId,
            jwtPayload,
            sessionData,
        });
    }

    static getSession(req: BaseRequest, res: BaseResponse, options?: VerifySessionOptions) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.getSession({ req, res, options });
    }

    static refreshSession(req: BaseRequest, res: BaseResponse) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.refreshSession({ req, res });
    }

    static revokeAllSessionsForUser(userId: string) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.revokeAllSessionsForUser({ userId });
    }

    static getAllSessionHandlesForUser(userId: string) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.getAllSessionHandlesForUser({ userId });
    }

    static revokeSession(sessionHandle: string) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.revokeSession({ sessionHandle });
    }

    static revokeMultipleSessions(sessionHandles: string[]) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.revokeMultipleSessions({ sessionHandles });
    }

    static getSessionData(sessionHandle: string) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.getSessionData({ sessionHandle });
    }

    static updateSessionData(sessionHandle: string, newSessionData: any) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.updateSessionData({
            sessionHandle,
            newSessionData,
        });
    }

    static getJWTPayload(sessionHandle: string) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.getJWTPayload({ sessionHandle });
    }

    static updateJWTPayload(sessionHandle: string, newJWTPayload: any) {
        return Recipe.getInstanceOrThrowError().recipeInterfaceImpl.updateJWTPayload({ sessionHandle, newJWTPayload });
    }
}

export let init = SessionWrapper.init;

export let createNewSession = SessionWrapper.createNewSession;

export let getSession = SessionWrapper.getSession;

export let refreshSession = SessionWrapper.refreshSession;

export let revokeAllSessionsForUser = SessionWrapper.revokeAllSessionsForUser;

export let getAllSessionHandlesForUser = SessionWrapper.getAllSessionHandlesForUser;

export let revokeSession = SessionWrapper.revokeSession;

export let revokeMultipleSessions = SessionWrapper.revokeMultipleSessions;

export let getSessionData = SessionWrapper.getSessionData;

export let updateSessionData = SessionWrapper.updateSessionData;

export let getJWTPayload = SessionWrapper.getJWTPayload;

export let updateJWTPayload = SessionWrapper.updateJWTPayload;

/**
 * @deprecated
 */
export let verifySession = framework.express.verifySession;

export let Error = SessionWrapper.Error;

export type { VerifySessionOptions, RecipeInterface, SessionContainer, SessionRequest, APIInterface, APIOptions };
