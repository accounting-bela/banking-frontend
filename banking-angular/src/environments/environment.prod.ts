const keycloakConfig = {
  url: 'http://belavic-accounting/auth',
  realm: 'accounting',
  clientId: 'angular-app',
  redirectUri: window.location.origin,
  responseType: 'code',
  scope: 'openid profile email',
  requireHttps: false,
  showDebugInformation: true,
  disableAtHashCheck: true
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
  url: 'http://localhost:8082/api'
};
