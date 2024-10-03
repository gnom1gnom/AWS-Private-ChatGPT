const amplifyConfig = {
    Auth: {
        Cognito: {
            userPoolId: 'eu-central-1_QeVlmWRh9',
            userPoolClientId: '3kdnreppiuhshp5bciqguosnel',
            identityPoolId: 'eu-central-1:02cb4187-3034-4d9b-8092-640fddcde656',
            allowGuestAccess: false,
            signUpVerificationMethod: 'code',
            loginWith: {
                oauth: {
                    domain: '02ea97a9b067.auth.eu-central-1.amazoncognito.com',
                    scopes: [
                        'email',
                        'openid',
                    ],
                    redirectSignIn: ['http://localhost:5173', 'https://d33wh8sbpcslxo.cloudfront.net'],
                    redirectSignOut: ['http://localhost:5173', 'https://d33wh8sbpcslxo.cloudfront.net'],
                    responseType: 'code'
                }
            }
        }
    }
};

export default amplifyConfig;