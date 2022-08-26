import jwt from 'jsonwebtoken';

// auth middleware confirms or denies a request to do a specific action
// if auth calls next(), then we'll move onto the controller

// next means do something, then move to the next thing
const auth = async (req, res, next) => {
    // must verify if the user is who they're claiming to be; get token from frontend
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        // 2 types of tokens: one from Google auth, one from my own
        const isCustomAuth = token.length < 500;

        // data we want to get from the token
        let decodedData;

        if (token && isCustomAuth) {
            // get data from each specific token; gets username and id
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            // GOOGLE OAUTH
            decodedData = jwt.decode(token);
            
            // sub is Google's name for a specific id that differentiates every Google user
            req.userId = decodedData?.sub;
        }

        // pass the action onto the next thing
        next();

    } catch (err) {
        console.log(err);
    }
}

export default auth;