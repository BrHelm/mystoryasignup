import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks, fetchBooksUser, fetchBooksCinema, fetchBooksCulture, fetchBooksEducation, fetchBooksFamily, fetchBooksFashion, fetchBooksHistory, fetchBooksMusic, fetchBooksSports, fetchBooksTravel } from '../../actions';
import * as actions from '../../actions';

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
        this.props.fetchBooksCinema();
        this.props.fetchBooksCulture();
        this.props.fetchBooksEducation();
        this.props.fetchBooksFamily();
        this.props.fetchBooksFashion();
        this.props.fetchBooksHistory();
        this.props.fetchBooksMusic();
        this.props.fetchBooksSports();
        this.props.fetchBooksTravel();
        this.props.fetchBooksUser();
    }

    renderBooksUser() {
        return this.props.books.map(book => {
            return (
                <div key={book._id}>
                    <p>
                        <span>title: {book.title}</span>
                    </p>
                    <p>
                        <span>book_id: {book._id}</span>
                    </p>
                </div>
            )
        });
    }

    renderBooksSports() {
        return this.props.bookssports.map(book => {
            return (
                <div key={book._id}>
                    <p>
                        <span>title: {book.title}</span>
                    </p>
                    <p>
                        <span>book_id: {book._id}</span>
                    </p>
                </div>
            )
        });
    }

    renderBooksMusic(props, onBookSelect) {
        return this.props.booksmusic.map(book => {
            const bookId = (book._id);
            return (
                <div
                    onBookSelect={this.state.onBookSelect}
                    key={book._id}
                    onClick={() => onBookSelect(this.bookId)}
                >
                    <p>
                        <span>title: {book.title}</span>
                    </p>
                    <p>
                        <span>book_id: {book._id}</span>
                    </p>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <h4>Shelf of User Stories</h4>
                {this.renderBooksUser()}
                <h4>Shelf of Sports Stories</h4>
                {this.renderBooksSports()}
                <h4>Shelf of Music Stories</h4>
                {this.renderBooksMusic()}
                <p>selectedBook: {this.props.selectedBook}</p>
            </div>
        );
    }
}

function mapStateToProps({ books, booksuser, booksgenre, bookscinema, booksculture, bookseducation, booksfamily, booksFashion, bookshistory, booksmusic, bookssports, bookstravel }) {
    return { books, booksuser, booksgenre, bookscinema, booksculture, bookseducation, booksfamily, booksFashion, bookshistory, booksmusic, bookssports, bookstravel };
}

export default connect(mapStateToProps, { fetchBooksUser, fetchBooksCinema, fetchBooksCulture, fetchBooksEducation, fetchBooksFamily, fetchBooksFashion, fetchBooksHistory, fetchBooksMusic, fetchBooksSports, fetchBooksTravel, fetchBooks })(BookList);
