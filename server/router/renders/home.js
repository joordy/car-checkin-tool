// Home route function (GET)
const home = async (req, res, next) => {
  try {
    res.render('home', {
      pageInfo: {
        title: `Home`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Export route
module.exports = home;
