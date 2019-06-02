import gql from 'graphql-tag';
export const VERIFY_TOKEN = gql `
   mutation verifyToken($token: String!){
    verifyToken(token: $token){
        userId
    }
   }
`;