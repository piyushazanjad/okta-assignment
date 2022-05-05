/*
 * Copyright (c) 2018-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

const CLIENT_ID = process.env.CLIENT_ID || '{clientId}';
const ISSUER = process.env.ISSUER || 'https://dev-48213059.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = process.env.PUBLIC_URL || '';
const REDIRECT_URI = `${window.location.origin}${BASENAME}/login/callback`;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  widget: {
   issuer: 'https://dev-48213059.okta.com/oauth2/default',
   clientId: CLIENT_ID,
   redirectUri: `${window.location.origin}/login/callback`,
   scopes: ['openid', 'profile', 'email'],
   useInteractionCodeFlow: true
 },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
    todoUrl: 'http://localhost:8000/api/todo',
    saveTodoUrl: 'http://localhost:8000/api/savetodo'
  },
  app: {
    basename: BASENAME,
  },
};
