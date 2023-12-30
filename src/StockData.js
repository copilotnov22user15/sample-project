// api url http://localhost:4000/stack



import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

class StockData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        stock: []
        };
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/stack')
        .then(res => {
            this.setState({ stock: res.data });
        })
        .catch((error) => {
            console.log(error);
        })
    }    
    render() {
        return (
      
    //add card to the table 
    <Card className="text-center">
    <Card.Header>Stock Data</Card.Header>
    <Card.Body>
        <Card.Title>Stock Data</Card.Title>
        <Card.Text>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Stock Price</th>
                        <th>Stock Quantity</th>
                        <th>Stock Date</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.stock.map((stock) => (
                     
                        <tr key={stock._id}>
                            <td>{stock.symbol}</td>
                            <td>{stock.lastPrice}</td>
                            <td>{stock.open}</td>
                            <td>{stock.lastUpdateTime}</td>
                        </tr>
                       
                    ))}
                </tbody>
            </table>
                        
        </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    
        )   

    }
}
export default StockData;
    
    










