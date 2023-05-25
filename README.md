# 라면 웹
### 아래의 과정을 수행하는 웹입니다.
#### 1. 라면 주문이 들어오면 곧바로 라면 조리를 시작한다.<br/>
#### 2. 라면 주문을 넣은 사람은 라면이 나오기 전에 언제든 현재의 라면 조리 상태를 문의할 수 있다. <br/>라면 조리상태는 (준비중, 물 끊이는 중, 라면과 스프를 넣어 추가로 끊이는 중, 라면 완료)<br/>
#### 3. 라면 완료가 되면 주문자에게 알린다.

#### 조건
 ``` 
a. 주문자는 client, 조리자는 server로 합니다.
client 화면은 간단하게 2가지 버튼 (주문 전송, 상태 문의)를 추가하고 1개의 서버 응답 표시창을 최소한 구현해야 합니다.

b. server 구현은 on-premise, cloud에서 서비스합니다. 
container를 사용하고, runtime은 docker로 합니다. 
 ``` 
Front-End : React.js <br/>
Back-End : Node.js <br/>
Service : AWS EC2 <br/>
Runtime : Docker <br/>
##### 문제 출처 : 알파서클 과제 면접
