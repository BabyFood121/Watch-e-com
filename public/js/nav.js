const CreateNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
      <img src="assets/buis-logo.png" class="brand__logo" alt="" />
      <div class="nav__items">
        <div class="search">
          <input
            type="text"
            placeholder="search brand, products"
            class="search__box"
          />
          <button class="search__btn">Search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
      </div>
    </div>
    <ul class="links__container">
      <li class="list__item"><a href="#" class="link">Home</a></li>
      <li class="list__item"><a href="#" class="link">Women</a></li>
      <li class="list__item"><a href="#" class="link">Men</a></li>
      <li class="list__item"><a href="#" class="link">Kids</a></li>
      <li class="list__item"><a href="#" class="link">Accessories</a></li>
    </ul>
`;
}

CreateNav();