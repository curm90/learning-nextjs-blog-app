const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodbUsername: "Liam-blog",
        mongodbPassword: "TYhweu9TczNkUWkN",
        mongodbClusterName: "cluster0",
        mongodbKey: "nextjs-blog-udemy-dev",
      },
    };
  }
  return {
    env: {
      mongodbUsername: "Liam-blog",
      mongodbPassword: "TYhweu9TczNkUWkN",
      mongodbClusterName: "cluster0",
      mongodbKey: "nextjs-blog-udemy",
    },
  };
};
