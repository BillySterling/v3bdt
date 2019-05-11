/*Shoutout and many thanks to John Blackwell for teaching us AWS Cognito*/

import React, {Component} from 'react';

import Amplify, { Auth } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

//import { getConfig } from './../../utils/API';
//import { Loader } from '../common';
const refreshSession = () => {
    return new Promise (async resolve => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            if (!user) {
                resolve(true);
                return
            }
            user.getSession((err, session) => {
                if (err || session.isValid()) {
                    resolve (true);
                    return
                }
                const refreshToken = session.getRefreshToken();
                user.refreshSession(refreshToken, (refreshError, refresh_session) => {
                    if (!refreshError) {
                        user.setSignInUserSession(refresh_session);
                        resolve (true);
                    }
                })
            })
        }
        catch(error) {
            resolve (false);
        }
    })
}
class CustomAuthenticator extends Component {
    state = {
        config: 
        {
            userPoolId: "us-east-1_RX3L5Cy35", // Your user pool id here. Should be added to keys.   
            userPoolWebClientId: "v13f23lpjv5143ko1rcoifj57" // Your client id here. Should be added to keys.
        },  
        isLoading: false,
        userIsAuthenticated: false,
        user: null,
        cognitoUser: null
    };

    getErrorMessage = err => (typeof err === 'string' ? err : err.message);

    onLogin = (username, password) => {
        const response = Auth.signIn(username, password)
            .then(cognitoUser => {
            console.log('user :::', cognitoUser);
            const { attributes, signInUserSession } = cognitoUser;
            const {email} = attributes;
            const {
                refreshToken: {token: refreshToken},
                idToken: {jwtToken: idToken},
                accessToken: {jwtToken: accessToken}
            } = signInUserSession;
            const user = {
                userName: email, refreshToken, idToken, accessToken
            }
            this.props.handleUser(user);
            return user;
            })
            .catch(err => {
                console.log('auth.error :::', err);
                if (err.code === 'UserNotConfirmedException') {
                    Auth.resendSignUp(username).then(() => {
                    console.log('code resent successfully');
                    const error = { code: err.code, message: err.message };
                    return { error };
                    });
                }
                const error = err.code
                ? { code: err.code, message: err.message }
                : { message: this.getErrorMessage(err) };
                return { error };
            });
        return response;
    };

    onLogout = async () => {
        const currentUser = Auth.userPool.getCurrentUser();
        await currentUser.signOut();
        this.props.handleUser(null);
    };

    onSignUp = async (username, password, attributes) => {
        const response = await Auth.signUp({
            username,
            password,
            attributes,
            validationData: [] // optional
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err);
            const error = this.getErrorMessage(err);
            return { error };
        });
        return response;
    };

    onForgotPassword = async username => {
        let response = await Auth.forgotPassword(username)
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.log(err);
            const error = this.getErrorMessage(err);
            return { error };
        });
        return response;
    };

    onResetPassword = async (username, code, new_password) => {
        // Collect confirmation code and new password, then
        let response = await Auth.forgotPasswordSubmit(username, code, new_password)
        .then(data => {
            console.log(data);
            return data;
        }) // we don't get anything back for this
        .catch(err => {
            console.log(err);
            const error = this.getErrorMessage(err);
            return { error };
        });
        return response;
    };

    onNewPassword = newPassword => {
        return new Promise(async resolve => {
            try {
                const { cognitoUser } = this.state;
                if (!cognitoUser) {
                    this.props.history.push('/login');
                    resolve({});
                    return;
                }
                const user = await Auth.completeNewPassword(
                    cognitoUser, // the Cognito User Object
                    newPassword // the new password
                );
                this.newPasswordContinue(user);
                resolve({});
            } catch (error) {
                if (error.code === 'InvalidParameterException') {
                    const user = await Auth.currentAuthenticatedUser();
                    this.newPasswordContinue(user);
                    resolve({});
                } else {
                    console.log('new password error :::', error);
                    resolve({ error });
                }
            }
        });
    };

    newPasswordContinue = user => {
        const { getConfig, history } = this.props;
        this.setState({ user, userIsAuthenticated: true });
        getConfig();
        history.push('/');
    };

    async componentDidMount() {
        setInterval(async()=> {
            console.log("interval refresh");
            await refreshSession()
        }, 1000*60);
        console.log("normal refresh");
        await refreshSession();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //   const { config } = this.state;
    //   if (config && !(config.userPoolId || config.userPoolWebClientId)) {
    //     getConfig();
    //   }
    // }

    render() {
        const { config, cognitoUser, isLoading } = this.state;
        const { userPoolId, userPoolWebClientId } = config;

        !isLoading &&
        Amplify.configure({
            Auth: {
                // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
                // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

                // REQUIRED - Amazon Cognito Region
                region: 'us-east-1',

                // OPTIONAL - Amazon Cognito Federated Identity Pool Region
                // Required only if it's different from Amazon Cognito Region
                // identityPoolRegion: 'XX-XXXX-X',

                // OPTIONAL - Amazon Cognito User Pool ID
                userPoolId,

                // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
                userPoolWebClientId,

                // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
                mandatorySignIn: false,

                // OPTIONAL - Configuration for cookie storage
                // cookieStorage: {
                //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
                //   domain: '.yourdomain.com',
                //   // OPTIONAL - Cookie path
                //   path: '/',
                //   // OPTIONAL - Cookie expiration in days
                //   expires: 365,
                //   // OPTIONAL - Cookie secure flag
                //   secure: true
                // },

                // OPTIONAL - customized storage object
                // storage: new MyStorage(),

                // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
                authenticationFlowType: 'USER_SRP_AUTH'
            }
        });

        // your Cognito Hosted UI configuration -- for social login
        // const oauth = {
        //   domain: domainUrl,
        //   scope: [
        //     'phone',
        //     'email',
        //     'profile',
        //     'openid',
        //     'aws.cognito.signin.user.admin'
        //   ],
        //   redirectSignIn: redirectUrl,
        //   redirectSignOut: redirectUrl,
        //   responseType: 'code' // or code
        // };

        // !isLoading && Auth.configure({ oauth });
        const { children } = this.props;

        return (
            // <Loader isLoading={isLoading}>
            <Authenticator
            // Optionally hard-code an initial state
            // authState="signIn"
            // Pass in an already authenticated CognitoUser or FederatedUser object
            // authData={CognitoUser | 'username'}
            // Fired when Authentication State changes
            onStateChange={authState => {
                if (authState === 'signedIn') {
                    this.setState({ userIsAuthenticated: true });
                }
            }}
            // An object referencing federation and/or social providers
            // *** Only supported on React/Web (Not React Native) ***
            // For React Native use the API Auth.federatedSignIn()
            // federated={federated}
            // A theme object to override the UI / styling
            // theme={myCustomTheme}
            // Hide specific components within the Authenticator
            // hide={
            //     [
            //         Greetings,
            //         SignIn,
            //         ConfirmSignIn,
            //         RequireNewPassword,
            //         SignUp,
            //         ConfirmSignUp,
            //         VerifyContact,
            //         ForgotPassword,
            //         TOTPSetup
            //     ]
            // }
            // or hide all the default components
            hideDefault
            // Pass in an aws-exports configuration
            // amplifyConfig={myAWSExports}
            // Pass in a message map for error strings
            // errorMessage={myMessageMap}
            >
            {
                // Default components can be customized/passed in as child components.
                // Define them here if you used hideDefault={true}
            }
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                onLogin: this.onLogin,
                onSignUp: this.onSignUp,
                onLogout: this.onLogout,
                isAuthenticated: this.state.userIsAuthenticated,
                onForgotPassword: this.onForgotPassword,
                onResetPassword: this.onResetPassword,
                onNewPassword: this.onNewPassword,
                cognitoUser: cognitoUser
                })
            )}
        </Authenticator>
        //</Loader>
        );
    }
}

export default CustomAuthenticator;