$(document).ready(function(){
  // add your code here
  let newCommentButton = $("#new_comment_button");
  let newCommentForm = $("#new_comment");
  let commentList = $("#comment_list");

  newCommentButton.click(function() {
    newCommentButton.addClass("hidden");
    newCommentForm.removeClass("hidden");
  });

  newCommentForm.submit(function(event) {
    event.preventDefault();
    newCommentButton.removeClass("hidden");
    newCommentForm.addClass("hidden");
    addComment($('#comment_text').val(), $("#author_name").val());
  });

  function addComment(content, author) {
    if (!content) {
      alert("Please make sure to add some text.")
      return;
    }
    let newComment = document.createElement('li')
    commentList.append(newComment);
    $("#comment_list li:last-child").text(content);

    let newAuthor = document.createElement('div')
    $("#comment_list li:last-child").append(newAuthor);
    $("#comment_list li:last-child div").addClass("author");
    $("#comment_list li:last-child div").text(author)
  }
})
