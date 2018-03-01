module.exports = {

    'facebookAuth' : {
        'clientID'      : '150925542386804', // your App ID
        'clientSecret'  : '687317a196960a7e28ba3f10109f085f', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'BGj8ZfNUcfXHdHsFPu9OGdoXr',
        'consumerSecret'    : 'Iz5pPCo8w6z1rktDtmFKQSyVUaigMn79dAY690DD35e2Aqig7S',
        'callbackURL'       : 'http://127.0.0.1:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
