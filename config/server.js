module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3007),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "baf127e3e7ba0f998c34d0a74751721d"),
    },
  },
});
