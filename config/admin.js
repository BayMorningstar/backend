module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ddf88c2c3457a8216c2c794109aaefa1'),
  },
});
