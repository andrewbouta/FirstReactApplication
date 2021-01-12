import { Component } from 'react';
import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

    //Constructor no longer needed

    function RenderDish({dish}) {
        if (dish != null){
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return ( <div></div> );
        }
    }

    function RenderComments({comments}) {
        if (comments != null){
            const comments = comments.map(comment => {
                const date = new Date(comment.date);
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });
            return comments;
        } else {
            return( <div></div> );
        }
    }


    const DishDetail = (props) => {
        console.log('Dishdetail Component componentDidUpdate render is invoked.')
        if (props.dish != null)
        return (
            <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <renderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                            <renderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        ); else
        return null;
    }

export default DishDetail;