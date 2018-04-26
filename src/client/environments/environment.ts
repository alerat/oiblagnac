// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0Config: {
    login: {
      clientID: '8VEIyy6btqL2gX16I2IcOdo4OM5ArCii',
      domain: 'oi-blagnac.eu.auth0.com',
      responseType: 'token id_token',
      audience: 'https://oi-blagnac.eu.auth0.com/userinfo',
      redirectUri: 'http://localhost:4200',
      scope: 'openid profile'
    },
    logout: {
      clientID: '8VEIyy6btqL2gX16I2IcOdo4OM5ArCii',
      returnTo: 'http://localhost:4200'
    }
  }
};
