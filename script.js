Enterfunction copyCard() {
    const card = document.getElementById("card").value;

    navigator.clipboard.writeText(card).then(() => {
        alert("✅ شماره کارت با موفقیت کپی شد.");
    }).catch(() => {
        alert("❌ امکان کپی وجود ندارد.");
    });
}

function copySheba() {
    const sheba = document.getElementById("sheba").value;

    navigator.clipboard.writeText(sheba).then(() => {
        alert("✅ شماره شبا با موفقیت کپی شد.");
    }).catch(() => {
        alert("❌ امکان کپی وجود ندارد.");
    });
}
