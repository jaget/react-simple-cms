import React from 'react';
import { connect } from "react-redux";
import { addPage } from "../actions/addPage";
import TinyMCE from 'react-tinymce';
import * as tinymce from 'tinymce';

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
       theThing: (e) => {
           e.preventDefault();
           dispatch(
               addPage({
                   linkText: document.getElementById('linkText').value,
                   title: document.getElementById('title').value,
                   slug: document.getElementById('slug').value,
                   content: document.getElementById('content').value
               })
           );

        }
    });
}

class PageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {
                linkText: 'link text',
                slug: 'slug',
                title: 'page title',
                coontent: 'content'
            }
        };
    }

    handleChange(field, event) {
        this.setState({
            page: {
                field: event.target.value
            }
        })
    }

    render() {
        let mappedPages = this.props.pages.map((page, i) =>
            <li key={i} className="asdf">{page.title}</li>
        );

        return (
            <div>
                <ul>
                    {mappedPages}
                </ul>
                <form onSubmit={this.props.theThing}>
                    <label htmlFor="linkText">Link test</label>
                    <input type="text" name="linkText" id="linkText"
                           value={this.state.page.linkText}
                           onChange={e => { this.handleChange('linkText', e) } }
                    />
                    <label htmlFor="slug">Slug</label>
                    <input type="text" name="slug" id="slug"
                           value={this.state.page.slug}
                           onChange={e => { this.handleChange('slug', e) } }
                    />
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"
                           value={this.state.page.title}
                           onChange={e => { this.handleChange('title', e) } }
                    />
                    <TinyMCE
                        content="<p>This is the initial content of the editor</p>"
                        config={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                        }}
                        value={this.state.page.content}
                        id="content"
                        onChange={e => { this.handleChange('content', e) } }
                    />
                    <button>Click me</button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageList);
