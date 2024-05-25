# React 실습 서버
https://drive.google.com/drive/folders/1h8qfIK2He6ZaQ1zr5FleYuczgEtl80bp

https://shorturl.at/UolJY

java -jar ./react-api-server.jar

http://localhost:8888

# API Document
## 회원 이메일 중복 확인
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/member/available/{email}/</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>GET</td>
  </tr>
</table>

### Request
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Object</td>
    <td>응답 내용</td>
  </tr>
  <tr>
    <td>- available</td>
    <td>Bool</td>
    <td>등록 가능 여부</td>
  </tr>
  <tr>
    <td>- email</td>
    <td>String</td>
    <td>등록 요청 이메일</td>
  </tr>
</table>

### Sample Request
/api/v1/member/available/test@test.com/
<pre>
None
</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 2,
    "body": {
        "available": true,
        "email": "test@test.com"
    }
}
</pre>

---

## 회원 등록
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/member</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>POST</td>
  </tr>
</table>

### Request
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>email</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>회원 이메일</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>회원 이름</td>
  </tr>
  <tr>
    <td>password</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>비밀번호</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Object</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/member
<pre>
{
    "email": "test01@test.com",
    "name":  "Test",
    "password": "test"
}
</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

---

## JWT 발급
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/auth/token</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>POST</td>
  </tr>
</table>

### Request
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>email</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>회원 이메일</td>
  </tr>
  <tr>
    <td>password</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>비밀번호</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>token</td>
    <td>String</td>
    <td>인증 토큰</td>
  </tr>
</table>

### Sample Request
/api/v1/auth/token
<pre>
{
    "email": "test01@test.com",
    "password": "test"
}
</pre>

### Sample Response
<pre>
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdDAxQHRlc3QuY29tIiwibmFtZSI6IlRlc3QiLCJwYXNzd29yZCI6IjVlZGY3N2U4MjM1NTkyMWM1YmY0OWYzOWMwMmI2MGI2NzJlMzc0YTk5MWM1OTZmODZmOWMxNDQyNjdhMTRjMTkiLCJjb25maXJtUGFzc3dvcmQiOm51bGwsInNhbHQiOiIxYTA2NDhiYThjMzQwMjVlIiwicm9sZSI6bnVsbCwicHJvdmlkZXIiOm51bGx9fQ.SnTrDgGN1mTw0MVpCu6ljAUbAQ2bxSp88pX398Z0fIg"
}
</pre>

---

## 회원 정보 요청
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/member</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>GET</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Object</td>
    <td>응답 내용</td>
  </tr>
  <tr>
    <td>- email</td>
    <td>String</td>
    <td>회원 아이디</td>
  </tr>
  <tr>
    <td>- name</td>
    <td>String</td>
    <td>회원 명</td>
  </tr>
  <tr>
    <td>- password</td>
    <td>String</td>
    <td>암호화된 비밀번호</td>
  </tr>
  <tr>
    <td>- confirmPassword</td>
    <td>Null</td>
    <td>-</td>
  </tr>
  <tr>
    <td>- salt</td>
    <td>String</td>
    <td>SHA Salt</td>
  </tr>
  <tr>
    <td>- role</td>
    <td>String</td>
    <td>Security Role</td>
  </tr>
  <tr>
    <td>- provider</td>
    <td>String</td>
    <td>OAuth Provider</td>
  </tr>
</table>

### Sample Request
/api/v1/member
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": {
        "email": "test01@test.com",
        "name": "Test",
        "password": "5edf77e82355921c5bf49f39c02b60b672e374a991c596f86f9c144267a14c19",
        "confirmPassword": null,
        "salt": "1a0648ba8c34025e",
        "role": null,
        "provider": null
    }
}
</pre>

---

## 회원 삭제 요청
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/member</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>DELETE</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Object</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/member
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>


## 게시글 목록 조회
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/boards</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>GET</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>pageNo</td>
    <td>Number</td>
    <td>Optional</td>
    <td>페이지 번호</td>
  </tr>
  <tr>
    <td>listSize</td>
    <td>Number</td>
    <td>Optional</td>
    <td>조회할 게시글 수</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Array</td>
    <td>응답 내용</td>
  </tr>
  <tr>
    <td>- id</td>
    <td>Number</td>
    <td>게시글 번호</td>
  </tr>
  <tr>
    <td>- subject</td>
    <td>String</td>
    <td>게시글 제목</td>
  </tr>
  <tr>
    <td>- content</td>
    <td>String</td>
    <td>게시글 내용</td>
  </tr>
  <tr>
    <td>- email</td>
    <td>String</td>
    <td>게시글 작성자 이메일</td>
  </tr>
  <tr>
    <td>- viewCnt</td>
    <td>Number</td>
    <td>조회수</td>
  </tr>
  <tr>
    <td>- crtDt</td>
    <td>String</td>
    <td>게시글 등록 날짜/시간</td>
  </tr>
  <tr>
    <td>- mdfyDt</td>
    <td>String</td>
    <td>게시글 수정 날짜/시간</td>
  </tr>
  <tr>
    <td>- fileName</td>
    <td>String</td>
    <td>(난독화처리)첨부파일 명</td>
  </tr>
  <tr>
    <td>- originFileName</td>
    <td>String</td>
    <td>첨부파일 명</td>
  </tr>
  <tr>
    <td>- memberVO</td>
    <td>Object</td>
    <td>작성자 정보</td>
  </tr>
  <tr>
    <td>- - email</td>
    <td>String</td>
    <td>회원 아이디</td>
  </tr>
  <tr>
    <td>- - name</td>
    <td>String</td>
    <td>회원 명</td>
  </tr>
</table>

### Sample Request
/api/v1/boards
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 1,
    "next": false,
    "errors": null,
    "count": 2,
    "body": [
        {
            "id": 0,
            "subject": "Subject",
            "content": "Content",
            "email": "test@test.com",
            "viewCnt": 0,
            "crtDt": "2024-05-09 21:22:30",
            "mdfyDt": null,
            "fileName": null,
            "originFileName": null,
            "memberVO": null
        },
        {
            "id": 1,
            "subject": "Subject",
            "content": "Content",
            "email": "test01@test.com",
            "viewCnt": 0,
            "crtDt": "2024-05-09 21:28:54",
            "mdfyDt": null,
            "fileName": null,
            "originFileName": null,
            "memberVO": {
                "email": "test01@test.com",
                "name": "Test",
                "password": null,
                "confirmPassword": null,
                "salt": null,
                "role": null,
                "provider": null
            }
        }
    ]
}
</pre>

---

## 게시글 작성
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/boards</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>POST</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### multipart/form-data
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>subject</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>제목</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>내용</td>
  </tr>
  <tr>
    <td>file</td>
    <td>File</td>
    <td>Optional</td>
    <td>첨부파일</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/boards
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

---

## 게시글 조회
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/boards/{id}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>GET</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Object</td>
    <td>응답 내용</td>
  </tr>
  <tr>
    <td>- id</td>
    <td>Number</td>
    <td>게시글 번호</td>
  </tr>
  <tr>
    <td>- subject</td>
    <td>String</td>
    <td>게시글 제목</td>
  </tr>
  <tr>
    <td>- content</td>
    <td>String</td>
    <td>게시글 내용</td>
  </tr>
  <tr>
    <td>- email</td>
    <td>String</td>
    <td>게시글 작성자 이메일</td>
  </tr>
  <tr>
    <td>- viewCnt</td>
    <td>Number</td>
    <td>조회수</td>
  </tr>
  <tr>
    <td>- crtDt</td>
    <td>String</td>
    <td>게시글 등록 날짜/시간</td>
  </tr>
  <tr>
    <td>- mdfyDt</td>
    <td>String</td>
    <td>게시글 수정 날짜/시간</td>
  </tr>
  <tr>
    <td>- fileName</td>
    <td>String</td>
    <td>(난독화처리)첨부파일 명</td>
  </tr>
  <tr>
    <td>- originFileName</td>
    <td>String</td>
    <td>첨부파일 명</td>
  </tr>
  <tr>
    <td>- memberVO</td>
    <td>Object</td>
    <td>작성자 정보</td>
  </tr>
  <tr>
    <td>- - email</td>
    <td>String</td>
    <td>회원 아이디</td>
  </tr>
  <tr>
    <td>- - name</td>
    <td>String</td>
    <td>회원 명</td>
  </tr>
</table>

### Sample Request
/api/v1/boards/1
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": {
        "id": 1,
        "subject": "Subject",
        "content": "Content",
        "email": "test01@test.com",
        "viewCnt": 1,
        "crtDt": "2024-05-09 21:28:54",
        "mdfyDt": null,
        "fileName": null,
        "originFileName": null,
        "memberVO": {
            "email": "test01@test.com",
            "name": "Test",
            "password": null,
            "confirmPassword": null,
            "salt": null,
            "role": null,
            "provider": null
        }
    }
}
</pre>

---

## 게시글 첨부파일 다운로드
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/boards/files/{id}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>GET</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### body
None

### Response
Binary

### Sample Request
/api/v1/boards/files/1
<pre>None</pre>

### Sample Response
<pre>
Binary
</pre>

---

## 게시글 수정
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/boards/{id}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>PUT</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### multipart/form-data
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>subject</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>제목</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>내용</td>
  </tr>
  <tr>
    <td>file</td>
    <td>File</td>
    <td>Optional</td>
    <td>첨부파일</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/boards/1
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

---

## 게시글 삭제
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/boards/{id}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>DELETE</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/boards/1
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

## 댓글 목록 조회
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/reply/{게시글번호}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>GET</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Array</td>
    <td>응답 내용</td>
  </tr>
  <tr>
    <td>- level</td>
    <td>Number</td>
    <td>댓글 레벨 (댓글, 대댓글)</td>
  </tr>
  <tr>
    <td>- replyId</td>
    <td>Number</td>
    <td>댓글 번호</td>
  </tr>
  <tr>
    <td>- boardId</td>
    <td>Number</td>
    <td>게시글 번호</td>
  </tr>
  <tr>
    <td>- email</td>
    <td>String</td>
    <td>댓글 작성자 이메일</td>
  </tr>
  <tr>
    <td>- content</td>
    <td>String</td>
    <td>댓글 내용</td>
  </tr>
  <tr>
    <td>- crtDt</td>
    <td>String</td>
    <td>댓글 등록 날짜/시간</td>
  </tr>
  <tr>
    <td>- mdfyDt</td>
    <td>String</td>
    <td>댓글 수정 날짜/시간</td>
  </tr>
  <tr>
    <td>- recommendCnt</td>
    <td>Number</td>
    <td>댓글 추천 수</td>
  </tr>
  <tr>
    <td>- parentReplyId</td>
    <td>Number</td>
    <td>부모 댓글 번호</td>
  </tr>
  <tr>
    <td>- memberVO</td>
    <td>Object</td>
    <td>댓글 작성자 정보</td>
  </tr>
  <tr>
    <td>- - email</td>
    <td>String</td>
    <td>회원 아이디</td>
  </tr>
  <tr>
    <td>- - name</td>
    <td>String</td>
    <td>회원 명</td>
  </tr>
</table>

### Sample Request
/api/v1/reply/2
<pre>None</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 3,
    "body": [
        {
            "level": 0,
            "replyId": 4,
            "boardId": 2,
            "email": "test01@test.com",
            "content": "댓글 1",
            "crtDt": "2024-05-09 21:45:38",
            "mdfyDt": null,
            "recommendCnt": 0,
            "parentReplyId": 0,
            "memberVO": {
                "email": "test01@test.com",
                "name": "Test",
                "password": null,
                "confirmPassword": null,
                "salt": null,
                "role": null,
                "provider": null
            }
        },
        {
            "level": 0,
            "replyId": 5,
            "boardId": 2,
            "email": "test01@test.com",
            "content": "댓글 2",
            "crtDt": "2024-05-09 21:45:47",
            "mdfyDt": null,
            "recommendCnt": 0,
            "parentReplyId": 0,
            "memberVO": {
                "email": "test01@test.com",
                "name": "Test",
                "password": null,
                "confirmPassword": null,
                "salt": null,
                "role": null,
                "provider": null
            }
        },
        {
            "level": 0,
            "replyId": 6,
            "boardId": 2,
            "email": "test01@test.com",
            "content": "댓글 3",
            "crtDt": "2024-05-09 21:45:49",
            "mdfyDt": null,
            "recommendCnt": 0,
            "parentReplyId": 0,
            "memberVO": {
                "email": "test01@test.com",
                "name": "Test",
                "password": null,
                "confirmPassword": null,
                "salt": null,
                "role": null,
                "provider": null
            }
        }
    ]
}
</pre>

---

## 댓글 등록
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/reply/{게시글번호}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>POST</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>댓글 내용</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/reply/2
<pre>
{
    "content": "댓글 내용"
}
</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

---

## 댓글 수정
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/reply/{replyId}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>PUT</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>Mandatory</td>
    <td>댓글 내용</td>
  </tr>
</table>

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/reply/6
<pre>
{
    "content": "댓글 내용"
}
</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

---

## 댓글 추천
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/reply/recommend/{replyId}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>PUT</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/reply/recommend/2
<pre>
None
</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>

---

## 댓글 삭제
<table>
  <tr>
    <td>URL</td>
    <td>/api/v1/reply/{replyId}</td>
  </tr>
  <tr>
    <td>Method</td>
    <td>DELETE</td>
  </tr>
</table>

### Request
#### Header
<table>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>{JWT}</td>
  </tr>
</table>

#### Body
None

### Response
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Desc</th>
  </tr>
  <tr>
    <td>status</td>
    <td>Number</td>
    <td>HttpStatusCode</td>
  </tr>
  <tr>
    <td>statusMessage</td>
    <td>String</td>
    <td>Http Statue Message</td>
  </tr>
  <tr>
    <td>pages</td>
    <td>Number</td>
    <td>총 페이지 수</td>
  </tr>
  <tr>
    <td>next</td>
    <td>Bool</td>
    <td>다음 페이지 존재 여부</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Object</td>
    <td>에러 메시지 배열</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>결과 개수</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Bool</td>
    <td>응답 내용</td>
  </tr>
</table>

### Sample Request
/api/v1/reply/2
<pre>
None
</pre>

### Sample Response
<pre>
{
    "status": 200,
    "statusMessage": "OK",
    "pages": 0,
    "next": false,
    "errors": null,
    "count": 0,
    "body": true
}
</pre>
