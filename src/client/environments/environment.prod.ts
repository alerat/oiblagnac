export const environment = {
  production: true,
  auth0Config: {
    login: {
      clientID: '8VEIyy6btqL2gX16I2IcOdo4OM5ArCii',
      domain: 'oi-blagnac.eu.auth0.com',
      responseType: 'token id_token',
      audience: 'https://oi-blagnac.eu.auth0.com/userinfo',
      redirectUri: 'https://objectif-image-blagnac.herokuapp.com',
      scope: 'openid'
    },
    logout: {
      clientID: '8VEIyy6btqL2gX16I2IcOdo4OM5ArCii',
      returnTo: 'https://objectif-image-blagnac.herokuapp.com'
    }
  }
};
