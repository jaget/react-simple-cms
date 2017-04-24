import React from 'react';
import { connect } from "react-redux";
import { deletePage } from "../actions/deletePage";
import Nav from "../nav";
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {//todo is this needed
    return {
        pages: state.pages,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        deletePage: (id) => {
            dispatch(
                deletePage(id)
            );
            browserHistory.push('/');
        }
    });
}

class PageDelete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            confirmDelete: false
        };
    }

    nag = () => {
        this.setState({confirmDelete: !this.state.confirmDelete});
    }

    submit = (values) => {
        let id = this.props.routeParams.id;
        // Do something with the form values

        this.props.deletePage(id);
    }

    render() {
        return (
            <div>
                <Nav/>
                    <p className={this.state.confirmDelete ? '' : 'hidden'} >Are you sure?
                        <button onClick={this.submit}>Delete</button>
                    </p>
                <button onClick={this.nag} >Delete</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDelete);