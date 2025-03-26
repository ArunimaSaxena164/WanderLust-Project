const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const reviewController=require("../controllers/review.js")
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
//REVIEWS
//Reviews- POST route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createReview));
    //Reviews- DELETE route
    router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));
    module.exports=router;
    