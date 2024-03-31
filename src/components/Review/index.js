"use client"
import React from 'react';
import { reviews } from './data.js';

const Star = () => <span className='text-yellow-400 text'>★</span>;
const EmptyStar = () => <span className='text-gray-200'>☆</span>;

const Review = ({ author, rating, comment }) => (
  <div className="review rounded-lg overflow-hidden shadow-lg min-h-[200px] p-4">
    <h4 className="name text-lg font-bold">{author}</h4>
    <div className="rating ">
      {[...Array(5)].map((_, index) => index < rating ? <Star key={index} /> : <EmptyStar key={index} />)}
    </div>
    
    <p className="comment">&ldquo;{comment}&rdquo;</p>
  </div>
);

export default function ReviewComponent() {
  return (
    <section id="reviews"
    className="border rounded-xl p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold mb-2">CUSTOMER REVIEWS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {reviews.map((review) => (
        <Review key={review.id} author={review.author} rating={review.rating} comment={review.comment} />
      ))}
      <style jsx>{`
        .rating span {
          color: orange;
        }

        .name {
          font-weight: bold;
        }

        .comment {
          margin-top: 8px;
        }
      `}</style>
      </div>
    </section>
  );
}
