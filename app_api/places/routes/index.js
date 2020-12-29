const PlaceController = require("../controllers");
const router = require("express").Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");

router.get("/", PlaceController.getPlaces);
router.get("/:id", PlaceController.getPlaceById);
router.post("/", auth, admin, PlaceController.createPlace);
router.patch("/", auth, admin, PlaceController.updatePlace);
router.delete("/", auth, admin, PlaceController.removePlace);

module.exports = router;
