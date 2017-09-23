module.exports = {
  apps : [
      {
        name: "onlinerti",
        script: "./server.js",
        watch: false,
        env: {
          "NODE_ENV": "development",
        }
      }
  ]
}