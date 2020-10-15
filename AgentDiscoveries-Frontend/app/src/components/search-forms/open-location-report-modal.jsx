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
                        <p>
                            {this.props.item.agentId}
                            {this.props.item.regionId}
                            {this.props.item.reportBody}
                            {this.props.item.reportId}
                            {this.props.item.reportTime}
                            {this.props.item.status}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}