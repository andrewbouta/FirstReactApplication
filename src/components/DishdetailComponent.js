import { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);

        // Define a state for component
        this.state =  { }
        console.log('Dish Detail constructor is invoked');
    }
    renderDish(dish){
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

    renderComments(dish){
        if (dish != null){
            const comments = dish.comments.map(comment => {
                const date = new Date(comment.date);
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}, {date.toDateString()} </p>
                    </li>
                );
            });
            return comments;
        } else {
            return( <div></div> );
        }
    }
    render (){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;