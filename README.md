# 라면 웹

첫째, 라면 주문이 들어오면 곧바로 라면 조리를 시작한다.<br/>
둘째, 라면 주문을 넣은 사람은 라면이 나오기 전에 언제든 현재의 라면 조리 상태를
문의할 수 있다. 라면 조리상태는 (준비중, 물 끊이는 중, 라면과 스프를 넣어 추가로
끊이는 중, 라면 완료)<br/>
셋째, 라면 완료가 되면 주문자에게 알린다.

a. 주문자는 client, 조리자는 server로 합니다. 
client 구현은 웹,안드로이드, ios등 사용하기 편한 플랫폼을 택일할 수 있고, 
client 화면은 간단하게 2가지 버튼 (주문 전송, 상태 문의)를 추가하고 
1개의 서버 응답 표시창을 최소한 구현해야 합니다.
b. server 구현은 on-premise, cloud (어떤 사업자든 상관없으나 AWS면 더
좋습니다..)에서 서비스합니다. container를 사용하고, runtime은 docker로
합니다. container의 수나 load balancer (k8s, docker swarm…)의 사용 여부는
개의치 않습니다. 
c. 서버 클라이언트 간 통신은 http 혹은 https를 사용하되 API는 CRUD에
맞춥니다.

해당 문제에 대한 코드입니다.
Front-end는 react.js, Back-end는 express.js로 구현했으며
AWS EC2를 통해 서비스했으며
Docker를 런타임으로 하였습니다.

##### 문제 출처 : 알파서클 과제 면접
