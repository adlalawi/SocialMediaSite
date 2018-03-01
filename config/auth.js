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
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '905411933283-jo43ug1fggglc108p45qqm7adbjhnnkc.apps.googleusercontent.com',
        'clientSecret'  : 'Cl9AuJIg5lUyxAZhhDk9PA0S',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
