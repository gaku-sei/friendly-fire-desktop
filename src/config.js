System.config({
  defaultJSExtensions: true,
  paths: {
    'app/*': 'app/*.js',
    'vendors/*': 'vendors/*.js',
    'vendorsmin/*': 'vendors/*.min.js'
  },
  map: {
    react: 'vendorsmin/react/react',
    router5: 'vendorsmin/router5/dist/amd/router5',
    'router5-react': 'vendors/router5-react/dist/amd/index'
  }
});
