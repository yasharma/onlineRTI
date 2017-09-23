module.exports = {
  apps : [
      {
        name: "onlinerti",
        script: "./server.js",
        watch: false,
        env: {
          "PORT": 80,
          "NODE_ENV": "production",
        }
      }
  ]
}