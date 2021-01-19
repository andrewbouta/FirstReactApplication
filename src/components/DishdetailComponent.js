import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle = () => this.setState({modal : !this.state.modal})

    handleSubmit = (values) => {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }


    render(){
        return (
        <React.Fragment>
        <Button outline onClick={this.toggleModal}>
    <span className="fa fa-pencil fa-lg"></span>Submit Comment
    </Button>
    <Modal isOpen ={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
    <ModalBody>
    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            
        
    <Row className="form-group">
    <Label htmlFor="rating" md={12}> Rating </Label>
            <Col md={12}>
        <Control.select model=".rating" name="rating" className="form-control"  >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    </Control.select>
            </Col>
    </Row>
    <Row className="form-group">
    <Label htmlFor="author" md={12}>Your Name</Label>
    <Col md={12}>
    <Control.text model=".author" id="author" name="author"
    placeholder="Your Name"
    className="form-control"
    validators={{
            required, minLength: minLength(3), maxLength: maxLength(15)
                }}
    />
        <Errors
            className="text-danger"
            model=".author"
            show="touched"
            messages={{
            required: 'Required ',
            minLength: 'Must be greater than 2 characters',
            maxLength: 'Must be 15 characters or less'
                    }}
                    />
                </Col>
        </Row>

    <Row className="form-group">
    <Label htmlFor="comment" md={12} > Comment </Label>
    <Col md={12}>
    <Control.textarea model=".comment" className="form-control" id ="comment" name="comment" rows="12"  />
    </Col>
    </Row>

    <Row className="form-group">
    <Col md={{size:10 }}>
    <Button type="submit"  color="primary">
    Submit
    </Button>
    </Col>
    </Row>

    </LocalForm>
    </ModalBody>
    </Modal>
        </React.Fragment>
        );
        }
    }

    function RenderDish({ dish }) {
        return (
            <div className="col-12 col-md-5 m-1">
            <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>    
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
            </div>
        );
    }    
    

function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="listUnstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, Date: {comment.date.slice(0, 10)} </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }
    else
        return (
            <div></div>
        );
}


export default DishDetail;