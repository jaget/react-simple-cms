import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import TinyMCE from 'react-tinymce';
import * as tinymce from 'tinymce';

class AddPage extends Component {
    renderTinyMCE(field){
        let props = Object.assign({}, field);
        delete props.input;
        delete props.meta;

        return <TinyMCE
            {...props}
            content={field.input.value !== '' ? field.input.value : null}
            value={field.input.value !== '' ? field.input.value : null}
            onBlur={(event, value) => { field.input.onChange(event.target.getContent()) }}
        />
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="linkText">Link Text</label>
                    <Field name="linkText" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="slug">Slug</label>
                    <Field name="slug" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    {/*<Field name="content" component={props =>*/}
                        {/*<TinyMCE*/}
                            {/*config={{*/}
                                {/*inline: true*/}
                            {/*}}*/}
                            {/*// currentValue={{val: props.value}}*/}
                            {/*// content={props.input.value}*/}
                            {/*// onBlur={this.handleEditorChange.bind(this)}*/}
                            {/*// thingsChanged={param => props.onChange(param.val)}*/}
                            {/*{...content}*/}
                            {/*content={content.value}*/}

                        {/*/>*/}
                    {/*}/>*/}
                    <Field
                        component={ this.renderTinyMCE }
                        name="content"
                        ref={ this.props.id }
                        id={ this.props.id }
                        disabled={ this.props.readonly }
                        autoComplete="off"
                        config={{ inline: true }}
                    />
                </div>
                <button type="submit">Add this page</button>
            </form>
        );
    }
}

// Decorate the form component
AddPage = reduxForm({
    form: 'addPage', // a unique name for this form
    // initialValues: {
    //     linkText: 'asdf'
    // }
})(AddPage);

// AddPage = connect(
//     state => ({
//         initialValues: state.formPage // pull initial values from account reducer
//     })
// )(AddPage)

export default AddPage;