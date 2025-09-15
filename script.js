const products = [
    { id: 1, name: "Яблоко", description: "Свежее красное яблоко", price: 50, details: "Выращено в яблоневых садах Краснодарского края. Сорт: Антоновка." },
    { id: 2, name: "Хлеб", description: "Свежий пшеничный хлеб", price: 30, details: "Испечён сегодня утром из муки высшего сорта без добавок." },
    { id: 3, name: "Молоко", description: "1 литр молока", price: 60, details: "Свежесобранное молоко от местных фермеров, 3.2% жирности." },
    { id: 4, name: "Яйца", description: "10 штук куриных яиц", price: 80, details: "От кур свободного выгула. Категория: С1." },
    { id: 5, name: "Сыр", description: "200 г твёрдого сыра", price: 150, details: "Твёрдый сыр с выдержкой 6 месяцев, насыщенный вкус и аромат." },
    { id: 6, name: "Мёд", description: "Банка натурального мёда", price: 250, details: "Мёд из луговых трав, без добавок и нагревания, проверен на качество." }
];

const productListEl = document.getElementById("product-list");

products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");

    productEl.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price} руб.</p>
        <button type="button">Подробнее</button>
        <div class="product-details">${product.details}</div>
    `;

    // Найдём кнопку и блок с деталями
    const btn = productEl.querySelector("button");
    const details = productEl.querySelector(".product-details");

    // Обработчик клика по кнопке
    btn.addEventListener("click", () => {
        const isVisible = details.style.display === "block";
        details.style.display = isVisible ? "none" : "block";
        btn.textContent = isVisible ? "Подробнее" : "Скрыть";
    });

    productListEl.appendChild(productEl);
});