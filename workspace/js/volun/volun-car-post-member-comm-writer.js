// 댓글수정버튼
function modifyCommentBtnClcik() {
  const commentBox1 = document.getElementById('review-comment-buttonBox'); //수정/삭제버튼 div
  const commentBox2 = document.getElementById('review-modifyInput');       //댓글수정하는div
  const commentBox3 = document.getElementById('review-comment');           //이미입력된댓글

  // 수정버튼 눌렀을시(수정/삭제 div와 이미 있는 댓글 none , 댓글입력창 block)
  commentBox1.style.display = 'none'; //수정,삭제 버튼 숨김
  commentBox3.style.display = 'none'; //현재 댓글 숨김
  commentBox2.style.display = 'block'; // 수정 입력란 보임
}

// 댓글등록버튼 눌렀을 때
function editCommentBtnClcik() {
  const commentBox1 = document.getElementById('review-comment-buttonBox'); //수정/삭제버튼 div
  const commentBox2 = document.getElementById('review-modifyInput');       //댓글수정하는div
  const commentBox3 = document.getElementById('review-comment');           //이미입력된댓글

  // 등록버튼 눌렀을 때(수정,삭제 버튼과 현재 댓글 보이게 하고 , 수정 입력란 숨김)
  commentBox1.style.display = 'block'; //수정,삭제 버튼 보이게
  commentBox3.style.display = 'block'; //현재 댓글 보이게
  commentBox2.style.display = 'none'; //수정 입력란 숨김
}

// 댓글 삭제 버튼 클릭 시 알터창
function CommentDeleteClick() {
  // 삭제 확인 알림창
  const Delete = confirm("삭제하시겠습니까?");
  
  // 사용자가 '확인'을 클릭한 경우
  if (Delete) {
    
    alert("댓글이 삭제되었습니다."); // 삭제 완료 알림
  } else {
    alert("삭제가 취소되었습니다."); // 취소버튼 눌렀을 때
  }
}

// 수정, 삭제,신고 알터창
function modifyAlert() {
  alert("수정하시겠습니까?");
}

function deleteAlert() {
  alert("삭제하시겠습니까?");
}

function endAlert() {
  alert("신고가 완료되었습니다.");
}

// 댓글 등록 알터창
function Comment() {
  const comment = document.getElementById('commentInput').value.trim();
  
  if (comment === '') {
    alert('입력한 내용이 없습니다.');
    return false; // 내용 비었을경우
  }
  return true; // 내용이 있을 경우 
}