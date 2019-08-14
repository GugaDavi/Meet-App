module.exports = {
  dialect: 'postgres', // Dialeto que iremos usar;
  host: 'localhost',
  username: 'postgres',
  password: 'rocketseat',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};