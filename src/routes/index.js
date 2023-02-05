const router = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/users/:id',
        element: Single,
    },
    {
        path: '/users',
        element: List,
    },
    {
        path: '/users/new',
        element: New,
    },
    {
        path: '/hotels',
        element: List,
    },
    {
        path: '/hotels/:id',
        element: Single,
    },
    {
        path: '/hotels/new',
        element: New,
    },
]