import React from "react";
import styled from "styled-components";
import { StarRating } from './ratingstar'

///===================================================================================================
const CommentboxDiv = styled.div`
  max-width: 50rem;
  color: #fff;
  background-color: #686868;
  border-radius: 0.875rem;
  padding: 0.2rem 1rem 2rem;
`;

const CommentForm = styled.form`
background-color: #222222;
border-radius: 0.25rem;
margin: 1rem 0rem 5rem 0rem;
padding: 1rem 1rem 1rem 1rem;
`;

const Username = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 2.4375rem;
    padding: .5rem;
    border: 1px solid #cacaca;
    margin: 0 0 1rem;
    font-size: 1rem;
    color: #0a0a0a;
    background-color: #fefefe;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
`;


const UserComment = styled.textarea`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 8rem;
    padding: .5rem;
    border: 1px solid #cacaca;
    margin: 0 0 1rem;
    font-family: inherit;
    font-size: 1rem;
    color: #0a0a0a;
    background-color: #fefefe;
    min-height: 50px;
    max-width: 100%;
    overflow: auto;
`;


const UserPostButton = styled.button`
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0;
    padding: .85em 1em;
    margin: 0 0 1rem;
    font-size: .9rem;
    background-color: #2199e8;
    color: #fff;
`;


///===================================================================================================

class OneComment extends React.Component {
  render() {
    return (
      <div style={{ borderTop: '0.125rem solid #404040', paddingTop: '0.55rem' }}>
        <div style={{ fontSize: '1.4rem' }}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" focusable="true">
            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" fill="#fff"/>
          </svg>
          &nbsp; &nbsp; {this.props.author}
        </div>
        <div >
          <StarRating size={16} rating={this.props.ratingonproduct} />
        </div>
        <p style={{ fontStyle: 'italic', marginLeft: '1rem', color:'#6699ff' }}>
          - {this.props.commentonproduct}
        </p>
      </div>
    );
  }
}



class CommentControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0.0
    }
    this.onChangeRating = this.onChangeRating.bind(this)
  }

  onChangeRating(rating) {
    console.log('rating' + rating)
    this.setState({ rating: rating })
  }


  handleSubmit(event) {
    /// prevents page from reloading on submit
    event.preventDefault();
    let author = this._author.value;
    let commentonproduct = this._body.value;
    let ratingonproduct = this.state.rating;

    this.props.addComment(author, commentonproduct, ratingonproduct);
  }

  render() {
    return (
      <CommentForm onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: '700', lineHeight: '1.2' }}>Add a Comment</h1>

        <div >
          <Username placeholder="Your Name" required ref={(input) => this._author = input}></Username>
          <UserComment placeholder="How do you like this product" ref={(textarea) => this._body = textarea}></UserComment>
        </div>

        <div style={{     cursor: 'pointer', marginBottom: '1.5rem' }}>
          <StarRating
            size={86}
            rating={this.state.rating}
            onChangeRating={this.onChangeRating}
          />
        </div>

        <UserPostButton type="submit">Post Comment</UserPostButton>

      </CommentForm>
    )
  }
}



class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        { id: 1, author: "McDonald", commentonproduct: "Make it great", ratingonproduct: 4.5 },
        { id: 2, author: "ObraObra", commentonproduct: "Change it Change it, Yeah...", ratingonproduct: 2.5 },
        { id: 3, author: "Witch", commentonproduct: "Nooooooooooooooooooooooooooooooooooooooood", ratingonproduct: 3.5 },
        { id: 4, author: "bttsea@gmail.com", commentonproduct: "the author of this rating star component is looking for job of frontend or full stack, you know my email right :-)", ratingonproduct: 5.0 }
      ]
    };
  }

  addComment(author, commentonproduct, ratingonproduct) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      commentonproduct,
      ratingonproduct
    };

    this.setState({ comments: [...this.state.comments, comment] })
    /// this.setState({ comments: this.state.comments.concat([comment]) });
  }


  getComments() {
    return this.state.comments.slice(0).reverse().map((comment) => {
      return (
        <OneComment
          author={comment.author}
          commentonproduct={comment.commentonproduct}
          ratingonproduct={comment.ratingonproduct}
          key={comment.id} />
      )
    })
  }

  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet!';
    } else if (commentCount === 1) {
      return "Only 1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }


  render() {
    const comments = this.getComments();


    return (
      <CommentboxDiv>
        <CommentControl addComment={this.addComment.bind(this)} />
        <h3>Comments</h3>
        <h4 style={{ color: '#404040' }}>
          {this.getCommentsTitle(comments.length)}
        </h4>
        <div >{comments}</div>
      </CommentboxDiv>
    );
  }
}



export default CommentBox;
