const PlaceController = require("../controllers");
const router = require("express").Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router.get("/", PlaceController.getPlaces);
router.get("/:id", PlaceController.getPlaceById);
router.post("/", PlaceController.createPlace);
router.patch("/", PlaceController.updatePlace);
router.delete("/", PlaceController.removePlace);

module.exports = router;
