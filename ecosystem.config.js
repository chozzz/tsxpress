module.exports = {
  apps: [
    {
      name: "tsxpress-boilerplate",
      script: "./dist/server/index.js",
      instances: "1",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
