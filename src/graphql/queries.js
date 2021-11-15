import {gql} from '@apollo/client';

export const getusers = gql`
    query{
        getUsers{
        name,
        username,
        id,
        email
        }
    }
    
`
