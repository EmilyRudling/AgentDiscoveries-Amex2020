import * as React from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class LocationReportModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
                    Click me
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Agent ID:</h4>
                        <p>{this.props.item.agentId}</p>
                        <h4>Report Body:</h4>
                        <p>{this.props.item.reportBody}</p>
                        <h4>Report ID:</h4>
                        <p>{this.props.item.reportId}</p>
                        <h4>Time of Report:</h4>
                        <p>{new Date(this.props.item.reportTime).toLocaleDateString()}</p>
                        <p>{new Date(this.props.item.reportTime).toLocaleTimeString()}</p>
                        <h4>Status:</h4>
                        <p>{this.props.item.status}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}