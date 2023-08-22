import {review, stars, user} from "../models/social-proof";

export const STARS: stars[] = [
  {
    imageUrl: "/assets/images/social-proof/icon-star.svg",
    imageAltText: "star-image"
  },
  {
    imageUrl: "/assets/images/social-proof/icon-star.svg",
    imageAltText: "star-image"
  },
  {
    imageUrl: "/assets/images/social-proof/icon-star.svg",
    imageAltText: "star-image"
  },
  {
    imageUrl: "/assets/images/social-proof/icon-star.svg",
    imageAltText: "star-image"
  },
  {
    imageUrl: "/assets/images/social-proof/icon-star.svg",
    imageAltText: "star-image"
  },
]

export const USER: user[] = [
  {
    id: 1,
    title: "Rated 5 Stars in Reviews"
  },
  {
    id: 2,
    title: "Rated 5 Stars in Report Guru"
  },
  {
    id: 3,
    title: "Rated 5 Stars in BestTech"
  }
]

export const REVIEW: review[] = [
  {
    id: 1,
    imageUrl: "/assets/images/social-proof/image-colton.jpg",
    imageAltText: "user-profile-image",
    name: "Colton Smith",
    comment: "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time. Excellent!"
  },
  {
    id: 2,
    imageUrl: "/assets/images/social-proof/image-irene.jpg",
    imageAltText: "user-profile-image",
    name: "Irene Roberts ",
    comment: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
  },
  {
    id: 3,
    imageUrl: "/assets/images/social-proof/image-anne.jpg",
    imageAltText: "user-profile-image",
    name: "Anne Wallace",
    comment: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
  }
]
