module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '534fbff5ce4439ea7b09fd6f930033c2'),
  },
});
