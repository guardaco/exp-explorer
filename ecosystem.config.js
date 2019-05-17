module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
      {
          name : 'Exp-explorer',
          script : 'app.js',
          env: {
              MONGO_URI: 'mongodb://localhost/expexplorer',
              PORT: 3021
          },
          env_production : {
              NODE_ENV: 'production'
          }
      },
      {
          name : 'Exp-sync',
          script : 'tools/sync.js',
          env: {
              MONGO_URI: 'mongodb://localhost/expexplorer',
          },
          env_production : {
              NODE_ENV: 'production'
          }
      }
  ]
};
