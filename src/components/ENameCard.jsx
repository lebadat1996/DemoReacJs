import React, {Component} from 'react';
import ENameCardService from "../service/ENameCardService";

class ENameCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ENameCards: []
        }
    }

    componentDidMount() {
        ENameCardService.getENameCard().then((res) => {
            this.setState({ENameCards: res.data.data.content});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">ENameCards</h2>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>avatar</th>
                            <th>fullName</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>faceBookLink</th>
                            <th>positions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.ENameCards.map(
                                eNameCard =>
                                    <tr key={eNameCard.avatar}>
                                        <td> {eNameCard.fullName}</td>
                                        <td> {eNameCard.phone}</td>
                                        <td> {eNameCard.email}</td>
                                        <td> {eNameCard.faceBookLink}</td>
                                        <td> {eNameCard.positions}</td>
                                        <td>
                                            <button onClick={() => this.editEmployee(eNameCard.id)}
                                                    className="btn btn-info">Update
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.deleteEmployee(eNameCard.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ENameCard;
