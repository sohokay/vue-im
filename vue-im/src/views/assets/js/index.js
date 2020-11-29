var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: true,
    },
    // Add default routes
    routes: [
        {
            path: '/about/',
            url: './views/about.html',
        },
        {
            path: '/login/',
            url: './login.html',
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');
