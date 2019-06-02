import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {BrowserRouter} from 'react-router-dom';

import './reset.css';
import * as serviceWorker from './serviceWorker';
import Router from './Router';

const httplink = createHttpLink({
    uri:'http://localhost:3333/graphql',
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
    }
});

const client = new ApolloClient({
    link: httplink,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Router/>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
    );

serviceWorker.unregister();
