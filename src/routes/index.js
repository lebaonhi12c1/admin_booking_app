
import Home from './../page/home/Home';
import List from './../page/list/List'
import Single from './../page/single/Single';
import New from './../page/new/New';
import Defautlayout from '../layout/Defautlayout';
import Login from '../page/login/Login';
const router = [
    {
        path: '/',
        element: Home,
        layout: Defautlayout,
    },
    {
        path: '/users/:id',
        element: Single,
        layout: Defautlayout,
    },
    {
        path: '/users',
        element: List,
        layout: Defautlayout,
    },
    {
        path: '/users/new',
        element: New,
        layout: Defautlayout,
    },
    {
        path: '/hotels',
        element: List,
        layout: Defautlayout,
    },
    {
        path: '/hotels/:id',
        element: Single,
        layout: Defautlayout,
    },
    {
        path: '/hotels/new',
        element: New,
        layout: Defautlayout,
    },
    {
        path: '/rooms',
        element: List,
        layout: Defautlayout,
    },
    {
        path: '/rooms/:id',
        element: Single,
        layout: Defautlayout,
    },
    {
        path: '/rooms/new',
        element: New,
        layout: Defautlayout,
    },
    {
        path: '/orders',
        element: List,
        layout: Defautlayout,
    },
    {
        path: '/orders/:id',
        element: Single,
        layout: Defautlayout,
    },
    {
        path: '/orders/new',
        element: New,
        layout: Defautlayout,
    },
    {
        path: '/login',
        element: Login,
        layout: null,
    },
]


export {router} 