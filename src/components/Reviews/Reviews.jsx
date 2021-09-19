import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { FetchMovieReviews } from '../../servicies/FetchApi'
// import { Link } from "react-router-dom";

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams()
  useEffect(() => {
    FetchMovieReviews(movieId, setReviews)
  }, [movieId])
  console.log('reviews', reviews)
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.id} className='reviews-item'>
                <h4><span className="author">Author:</span>  {review.author}</h4>
                <p className='reviewContent'>{review.content}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <h1>No results</h1>
      )}
    </div>
  )
}
