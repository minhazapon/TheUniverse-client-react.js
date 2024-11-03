import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css file/Universe.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Page from './page file/Page';


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import OurMenu from './our menu file/OurMenu';


// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/page",
        element: <Page></Page> ,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    
  </StrictMode>,
)
