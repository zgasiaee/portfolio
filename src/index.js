import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
    uri : 'https://api-ca-central-1.hygraph.com/v2/clf97kgiz0mde01t81kxz4dqx/master' ,
    cache : new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
           <App />
        </ApolloProvider>
    </BrowserRouter>
   
);

