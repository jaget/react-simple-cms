import React from 'react';
import { connect } from "react-redux";
import { addPage } from "../actions/addPage";
import Nav from "../nav";
import { Field, reduxForm } from 'redux-form';
import AddPage from "./pageAddForm";

const mapStateToProps = (state) => {//todo is this needed
    return {
        pages: state.pages
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        addPage: (values) => {
            dispatch(
                addPage({
                    linkText: values.linkText,
                    title: values.title,
                    slug: values.slug,
                    content: values.content
                })
            );

        }
    });
}

class PageAdd extends React.Component {
    submit = (values) => {
        // Do something with the form values
        this.props.addPage(values);
    }

    render() {
        return (
            <div>
                <Nav/>
                <AddPage onSubmit={this.submit} />
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageAdd);
