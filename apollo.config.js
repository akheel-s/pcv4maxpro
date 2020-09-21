module.exports = {
  // client: {
  service: {
    // name: 'Program',
    // URL to the GraphQL API
    endpoint: {
      url: 'https://us-west-2.aws.realm.mongodb.com/api/client/v2.0/app/program-otolc/graphql',
      headers: {
        apiKey: ''
      }
    }
  },
  // Files processed by the extension
  includes: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.js']
  // }
};
