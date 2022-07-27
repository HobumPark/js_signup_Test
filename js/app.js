

var nameInput=document.getElementById("name-input");
nameInput.addEventListener("focusout",nameFocusOut)

var idInput=document.getElementById("id-input");
idInput.addEventListener("focusout",idFocusOut)

var pwInput=document.getElementById("pw-input");
pwInput.addEventListener("focusout",pwFocusOut)

var pwCheckInput=document.getElementById("pw-check-input");
pwCheckInput.addEventListener("focusout",pwCheckFocusOut)

var phone2CheckInput=document.getElementById("phone2");
phone2CheckInput.addEventListener("focusout",phone2FocusOut)

var phone3CheckInput=document.getElementById("phone3");
phone3CheckInput.addEventListener("focusout",phone3FocusOut)

var birth1Select=document.getElementById("birthday1");
birth1Select.addEventListener("change",birth1Change)

var birth2Select=document.getElementById("birthday2");
birth2Select.addEventListener("change",birth2Change)

var birth3Select=document.getElementById("birthday3");
birth3Select.addEventListener("change",birth3Change)

var searchPostBtn=document.getElementById("search-post");
searchPostBtn.addEventListener("click",searchPost)


function nameFocusOut(){
    alert('nameFocusOut')
    let korRegExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;//이름 유효성 검사
    var nameVal=nameInput.value
    var result=korRegExp.test(nameVal)
    alert(result)
}

function idFocusOut(){
    alert('idFocusOut')
    var idRegExp = /^[a-zA-z0-9]{4,12}$/; //아이디 유효성 검사
    var idVal=idInput.value
    var result=idRegExp .test(idVal)
    alert(result)
}   

function pwFocusOut(){
    alert('pwFocusOut')
    var pwRegExp = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사
    var pwVal=pwInput.value
    var result=pwRegExp.test(pwVal)
    alert(result)
}

function pwCheckFocusOut(){
    alert('pwCheckFocusOut')

    var pwVal=pwInput.value
    var pwCheckVal=pwCheckInput.value
    if(pwVal==''){
        alert("패스워드 먼저 입력하세요")
        return
    }
    if(pwVal==pwCheckVal){
        alert("비밀번호, 비밀번호 확인 일치!")
    }
}

function phone2FocusOut(){
    alert('phone2FocusOut')
    let numRegExp = /[0-9]/;//숫자 유효성 검사
    var phone2Val=phone2CheckInput.value
    var result=numRegExp.test(phone2Val)
    alert(result)
}

function phone3FocusOut(){
    alert('phone3FocusOut')
    let numRegExp = /[0-9]/;//숫자 유효성 검사
    var phone3Val=phone3CheckInput.value
    var result=numRegExp.test(phone3Val)
    alert(result)
}

function birth1Change(event){
    alert('birth1Change')
    alert(event.target.value)
}

function birth2Change(event){
    alert('birth2Change')
    alert(event.target.value)
}

function birth3Change(event){
    alert('birth3Change')
    alert(event.target.value)
}

function searchPost(){
    alert("searchPost!")
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            alert('주소검색!')
            alert(data.zonecode)
            alert(data.address)
            document.getElementById("zone-code").value=data.zonecode
            document.getElementById("address").value=data.address
        }
    }).open();
}