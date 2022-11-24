const config = {
  db: {
    host: `${process.env.db_host}`,
    user: `${process.env.db_user}`,
    password: `${process.env.db_password}`,
    database: "kubergames",
  },
};

module.exports = config;
