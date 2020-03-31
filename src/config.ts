const apiId = 'my43b7m38k';
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`;

export const authConfig = {
  domain: 'dev-k6izv4vp.auth0.com',            // Auth0 domain
  clientId: 'MCMDWyMXhWJcMs0yjQx8SHlkLH1dVQel',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
};
