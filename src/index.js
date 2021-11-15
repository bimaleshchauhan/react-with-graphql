import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  useQuery,
  gql
} from "@apollo/client";

import {onError} from '@apollo/client/link/error';

const onerror = onError(({graphQLErrors, networkError}) =>{
    if(graphQLErrors){
      graphQLErrors.map(({message, locations, path})=>{
          alert(`Grapgql error ${message}`) 
      })
    }
})

const link = from([
  onerror,
   new HttpLink({uri:"https://48p1r2roz4.sse.codesandbox.io"}),
])

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
       <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
