const express = require("express");
const cors = require("cors");
const app = express();

let orderStatus = "준비중";
let orders = new Object();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// 주문하면 주문 번호와 주문 상태를 응답하도록 함.
app.post("/order", (req, res) => {
    const orderNumber = req.body.orderNumber;
    setOrderStatus(orderNumber, orderStatus);
    orderStatus = `물을 끓이는 중입니다.`;
    orders[orderNumber] = orderStatus;
    
    setTimeout(() => {
        orderStatus = `라면과 스프를 넣고 끓이는 중입니다.`;
        orders[orderNumber] = orderStatus;
        setTimeout(() => {
            orderStatus = `라면 조리 완료.\n`;
            orders[orderNumber] = orderStatus;
            res.status(200).json({ orderNumber: orderNumber });
        }, 5000);
    }, 5000);
});

//사용자가 주문 번호를 입력하면 해당 주문 번호의 상태를 확인 및 응답
app.get("/order", (req, res) => {
    const orderNumber = req.query.orderNumber;
    if (orderNumber && orders.hasOwnProperty(orderNumber)) {
        res.status(200).json({ status: orders[orderNumber] });
    } else {
        orders[orderNumber] = `주문 번호를 찾을 수 없습니다.`;
        res.status(404).json({ orderNumber : orderNumber });
    }
});

const setOrderStatus = (orderNumber, status) => {
    orders[orderNumber] = status;
};

const setOrders = (nums, status) => {
    orders['orderNumber'] = nums;
    orders['orderStatus'] = status;
}