module.exports = {
  apps : [
      {
        name: "onlinerti",
        script: "./server.js",
        watch: false,
        env: {
          "PORT": 8080,
          "NODE_ENV": "production",
        }
      }
  ]
}