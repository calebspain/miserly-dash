/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Button } from 'reactstrap';

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

class BillsAndSubscriptions extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col md="6">
                                            <CardTitle tag="h4">Notifications</CardTitle>
                                        </Col>
                                        <Col md="6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button style={{ background: 'linear-gradient(0deg, #3358f4 0%, #1d8cf8 100%)' }}>Add Notification</Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Table className="tablesorter" responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>Name</th>
                                                <th>Amount</th>
                                                <th>Due Date</th>
                                                <th>Notification Date</th>
                                                <th>Notification Time</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sprint</td>
                                                <td>$42.00</td>
                                                <td>01/07/2020</td>
                                                <td>01/14/2020</td>
                                                <td>2:45 PM</td>
                                                <td>
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-pencil" />
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-trash-simple" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sprint</td>
                                                <td>$42.00</td>
                                                <td>01/07/2020</td>
                                                <td>01/14/2020</td>
                                                <td>2:45 PM</td>
                                                <td>
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-pencil" />
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-trash-simple" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sprint</td>
                                                <td>$42.00</td>
                                                <td>01/07/2020</td>
                                                <td>01/14/2020</td>
                                                <td>2:45 PM</td>
                                                <td>
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-pencil" />
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-trash-simple" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sprint</td>
                                                <td>$42.00</td>
                                                <td>01/07/2020</td>
                                                <td>01/14/2020</td>
                                                <td>2:45 PM</td>
                                                <td>
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-pencil" />
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-trash-simple" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sprint</td>
                                                <td>$42.00</td>
                                                <td>01/07/2020</td>
                                                <td>01/14/2020</td>
                                                <td>2:45 PM</td>
                                                <td>
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-pencil" />
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-trash-simple" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sprint</td>
                                                <td>$42.00</td>
                                                <td>01/07/2020</td>
                                                <td>01/14/2020</td>
                                                <td>2:45 PM</td>
                                                <td>
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-pencil" />
                                                    <i style={{ margin: '0px 15px', cursor: 'pointer' }} className="tim-icons icon-trash-simple" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default BillsAndSubscriptions;
