

import {gql} from '@apollo/client';

export const Creat_User = gql`
    mutation createUser($name: String!, $username: String!, $email: String!){
        createUser(name: $name, username: $username, email: $email) {
        name
        username
        email
        }
    }
    
`
