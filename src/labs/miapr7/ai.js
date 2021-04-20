let AI = (pika) => {
    if (pika.head.y + 100 > pika.body.y) {
        alert("Голова находится слишком низко")
    } else if (pika.foot.y - 120 > pika.body.y) {
        alert("Ноги находятся слишком низко")
    } else if (pika.foot.y - 100 < pika.body.y) {
        alert("Ноги находятся слишком высоко")
    } else if (pika.tail.y + 100 > pika.body.y) {
        alert("Хвост находятся слишком низко")
    } else if (pika.tail.y + 120 < pika.body.y) {
        alert("Хвост находятся слишком высоко")
    } else if ((pika.head.x > pika.body.x) || (pika.head.x + 50 < pika.body.x)) {
        alert("Голова находится далеко от тела")
    } else if ((pika.foot.x - 20 > pika.body.x) || (pika.foot.x + 20 < pika.body.x)) {
        alert("Ноги находится далеко от тела")
    } else if ((pika.tail.x - 200 > pika.body.x) || (pika.tail.x - 50 < pika.body.x)) {
        alert("Хвост находится далеко от тела")
    } else if ((pika.sword.y - 25 > pika.body.y) || (pika.sword.y + 25 < pika.body.y)) {
        alert("меч находится далеко от тела")
    } else if ((pika.sword.x - 30 > pika.body.x) && (pika.sword.x - 80 < pika.body.x)) {
        alert("меч находится в левой лапе")
    } else if ((pika.sword.x + 70 > pika.body.x - 60) && (pika.sword.x + 70 < pika.body.x + 60)) {
        alert("меч находится в правой лапе")
    } else {
        alert("меч находится далеко от тела")
    }
}

export default AI;