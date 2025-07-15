import Restaurant from "../models/restaurant_model.js";

const restaurantController = {};

// Create and save a new restaurant
restaurantController.create = (req, res) => {
  const { title, type, img } = req.body;

  // Validate data
  if (!title || !type || !img) {
    res.status(400).send({ message: "Title, Type or ImageUri can not be empty!" });
    return;
  }

  // Check if restaurant already exists
  Restaurant.findOne({ where: { title: title } })
    .then((restaurant) => {
      if (restaurant) {
        res.status(400).send({ message: "Restaurant already exists!" });
        return;
      }

      // Create new restaurant
      const newRestaurant = {
        title: title,
        type: type,
        img: img,
      };

      Restaurant.create(newRestaurant)
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send({
            message:
              error.message || "Something went wrong while creating the restaurant.",
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error occurred while checking for existing restaurant.",
      });
    });
};

export default restaurantController;
