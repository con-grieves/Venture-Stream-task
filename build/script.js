// Appending product cards to the menu container
const productCardTemplate = document.querySelector(".productCardTemplate");
const productMenu = document.querySelector(".productContainer");

const createProductCard = () => {
    const productCard = productCardTemplate.content.cloneNode(true).children[0];
    return productCard;
};

const appendProductCards = (cardCount) => {
    for (let i = 0; i < cardCount; i++) {
        productMenu.append(createProductCard());
    }
};

appendProductCards(20);

// Adding both touch and mouse drag functionality to the product scroll menu whilst accounting for accidental clicks
const productMenuChildren = document.querySelectorAll(".productContainer > div");

let dragging = false,
    start,
    scrollLeft,
    clickTimer;

productMenu.scrollLeft = 0;

productMenuChildren.forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
});

const toggleHoverEventsOff = () => {
    productMenuChildren.forEach((child) => {
        child.style.pointerEvents = "none";
    });
};
const toggleHoverEventsOn = () => {
    productMenuChildren.forEach((child) => {
        child.style.pointerEvents = "auto";
    });
};

const productMenuDragStart = (e) => {
    const pageX = e.type === "touchstart" ? e.touches[0].pageX : e.pageX;
    start = pageX - productMenu.offsetLeft;
    scrollLeft = productMenu.scrollLeft;
    dragging = true;
    
    if (e.type === "mousedown") {
      clickTimer = setTimeout(toggleHoverEventsOff, 150);
    }
};
const productMenuDrag = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const pageX = e.type === "touchmove" ? e.touches[0].pageX : e.pageX;
    const x = pageX - productMenu.offsetLeft;
    const scroll = (x - start) * 2;
    productMenu.scrollLeft = scrollLeft - scroll;
};
const productMenuDragEnd = (e) => {
    if (e.type === "mouseup") {
      clearTimeout(clickTimer);
      toggleHoverEventsOn();
    }
    dragging = false;
};

productMenu.addEventListener("mousedown", productMenuDragStart);
productMenu.addEventListener("mousemove", productMenuDrag);
productMenu.addEventListener("mouseup", productMenuDragEnd);

productMenu.addEventListener("touchstart", productMenuDragStart);
productMenu.addEventListener("touchmove", productMenuDrag);
productMenu.addEventListener("touchend", productMenuDragEnd);
