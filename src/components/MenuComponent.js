import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        // Define a state for component
        this.state =  {
            selectedDish: null
        }
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null) {
            return (
               <DishDetail dish = {dish}/>
            )

        } else {
            return (
                <div> </div>
            );
        }
    }

    render() {
        // iterate over all items in the array using 'map'
        // for every dish, return the key
        const menu = this.props.dishes.map((dish) =>  {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                {/*After card is clicked, it is passed to onDishSelect()*/}
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

    
        console.log('Menu Component render is invoked');

        return ( 
            <div className="container">
                <div className="row">
                    {menu} {/* JavaScript variable, using a const in this case */}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {/*this.renderDish(this.state.dishDetail)*/}
                </div>
            </div>
        );
    }
}

export default Menu;
