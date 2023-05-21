import React, { useState } from "react";
import axios from "axios";
import "./App.css";

let orderNumber = 0;

function App() {
  const [orderStatus, setOrderStatus] = useState("");
  const [searchNumber, setSearchNumber] = useState(1);

  const orderRamen = async () => {
    try {
      orderNumber++;
      alert(`주문이 완료되었습니다. 주문 번호: ${orderNumber}`);
      const result = await axios.post("http://43.200.164.186:3000/order", { orderNumber: orderNumber });
      setOrderStatus(`${result.data.orderNumber}번 손님. 주문하신 라면 나왔습니다.`);
    } catch (error) {
      console.log(error);
    }
  };

  const checkRamen = async () => {
    try {
      const res = await axios.get(`http://43.200.164.186:3000/order?orderNumber=${searchNumber}`);
      const status = res.data.status;
      if (status) {
        setOrderStatus(status);
      }
    } catch (error) {
      setOrderStatus("주문 번호를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Ramen</h1>
      </header>

      <h1>라면 주문 및 상태 조회</h1>
      <div className="buttonContainer">
        <button className="orderRamen" onClick={orderRamen}>
          주문 전송
        </button>
        <div className="inputContainer">
          <label className="text">주문 번호 입력:</label>
          <input
            type="number"
            id="orderNumberInput"
            value={searchNumber}
            onChange={(e) => setSearchNumber(parseInt(e.target.value))}
          />
        </div>
        <button className="checkOrder" onClick={checkRamen}>
          상태 문의
        </button>
      </div>
      <div className="statusContainer">
        {orderStatus && <div className="orderStatus">{orderStatus}</div>}
      </div>
    </div>
  );
}

export default App;
