import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Character from './routes/Character.tsx'
import Episodes from './routes/Episodes.tsx'
// import Hompage from './routes/Hompage.tsx'
import App from './App.tsx'
import { 
  ApolloClient, 
  InMemoryCache, 
 ApolloProvider,
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // Your GraphQL API endpoint
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/characters",
    element: <Character />
  }, 
  {
    path: "episodes",
    element:<Episodes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
    
  </React.StrictMode>,
)
