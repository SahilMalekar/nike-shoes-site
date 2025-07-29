import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <div>
        <h1 className="text-4xl font-bold font-palanquin text-center">
          What Our <span className="text-coral-red"> Customers </span> Say?
        </h1>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-wrap items-center justify-evenly max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
