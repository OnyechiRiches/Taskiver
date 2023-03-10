const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
  {
    path: '/app',
    component: App,
    children: [
      {
        path: 'signup',
        name: 'Signup',
        component: Signup,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
        {
          path: 'user/:id',
          component: UserApp,
          children: [
            {
              path: 'myday',
              name: 'Myday',
              component: Myday
            },
            {
              path: 'tasks',
              name: 'Tasks',
              component: Tasks,
              children: [
                {
                  path: 'all',
                  name: 'All',
                  component: All
                },
                {
                  path: 'missing',
                  name: 'Missing',
                  component: Missing,
                },
                {
                  path: 'next-seven-days',
                  name: 'Next Seven Days',
                  component: NextSevenDays
                },
                {
                  path: 'lists/:id',
                  name: 'Lists',
                  component: Lists
                }
              ]
            },
          ]
        }
     ]
  }
]