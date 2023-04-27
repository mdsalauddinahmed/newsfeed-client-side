import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { BsBookmark, BsEye, BsShareFill } from 'react-icons/bs';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title,_id,details,image_url,author,total_view,rating}=news
    return (
        <Card className=" mb-4">
        <Card.Header> 
       <div className='d-flex align-items-center'>
       <Image style={{height:'40px'}} src= {author.img} roundedCircle />
       <div className='ps-3 flex-grow-1 text-muted fs-6'>
        <p>{author?.name}</p>
        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
       </div>
       <div >
        <BsBookmark className='me-4'></BsBookmark>
        <BsShareFill></BsShareFill>
       </div>
       </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src= {image_url} />
          <Card.Text className='fs-6 mt-3'>
           {details.length<250 ? <>{details}</>: <>{
           details.slice(0,250)}....<Link to={`/news/${_id}`}>Read More</Link></>}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="fs-6 d-flex"> 
              <div className='align-items-center flex-grow-1'>
                <Rating
                
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                fullSymbol={<FaStar></FaStar>}
                
                >

                </Rating>
                <span className='ps-2'>{rating?.number}</span>
              </div>
              <div>
              <BsEye></BsEye> {total_view}
              </div>

        </Card.Footer>
      </Card>
    );
};

export default NewsCard;