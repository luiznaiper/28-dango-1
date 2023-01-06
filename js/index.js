//NODES
const main = document.getElementById('main-cards-container');
const blueBtn = document.getElementById('blue-btn');
const orangeBtn = document.getElementById('orange-btn');
const greenBtn = document.getElementById('green-btn');
const purpleBtn = document.getElementById('purple-btn');
const removeBtn = document.getElementById('remove-btn');
//FUNCTIONS
blueBtn.addEventListener('click', function () {
  const item = document.createRange()
    .createContextualFragment(` <div class="blue card-container">
  <div class="inner-card">
    <div class="inner-card__title">tourmaly</div>
    <div class="inner-card__category">Tourmaline & Eucalyptus</div>
    <div class="inner-card__tag">All Natural Soup Bar</div>
    <div class="inner-card__product-highlits">
      <div class="inner-card__description">
        Calms Redness & irritation <br /><span
          >Hydrating and Refreshing</span
        >
      </div>
      <div class="inner-card__logo">
        <img src="./images/logo.png" alt="Quebraluz, Quebradora" />
      </div>
    </div>
    <div class="inner-card__footer">
      <div class="inner-card__subtitle">Suitable for all skyn types</div>
      <div class="inner-card__ingredients">Not Wt 7oz</div>
    </div>
  </div>
  <div class="product-content__container">
    <div class="product-title">
      <h2>Tourmaline & <br />Eucalyptus Bar Soap</h2>
    </div>
    <div class="product-price-stock">
      <span class="price">$12.00</span>
      <span class="stock">1</span>
    </div>
    <div class="product-description">
      <p>
        Recharge your skin with the super energizing power of finely
        crushed tourmaline powder blended with natural complexion
      </p>
    </div>
    <div class="buttons-container">
      <a>Add to cart</a>
      <a>Learn More</a>
    </div>
  </div>
</div>`);
  main.appendChild(item);
});

orangeBtn.addEventListener('click', function () {
  const item = document.createRange()
    .createContextualFragment(`   <div class="orange card-container">
    <div class="inner-card">
      <div class="inner-card__title">tourmaly</div>
      <div class="inner-card__category">Tourmaline & Argan Oil</div>
      <div class="inner-card__tag">All Natural Soup Bar</div>
      <div class="inner-card__product-highlits">
        <div class="inner-card__description">
          Calms Redness & irritation <br /><span
            >Hydrating and Refreshing</span
          >
        </div>
        <div class="inner-card__logo">
          <img src="./images/logo.png" alt="Quebraluz, Quebradora" />
        </div>
      </div>
      <div class="inner-card__footer">
        <div class="inner-card__subtitle">Suitable for all skyn types</div>
        <div class="inner-card__ingredients">Not Wt 7oz</div>
      </div>
    </div>
    <div class="product-content__container">
      <div class="product-title">
        <h2>Tourmaline & Argain Oil Bar Soap</h2>
      </div>
      <div class="product-price-stock">
        <span class="price">$12.00</span>
        <span class="stock">1</span>
      </div>
      <div class="product-description">
        <p>
          Recharge your skin with the super energizing power of finely
          crushed tourmaline powder blended with natural complexion
        </p>
      </div>
      <div class="buttons-container">
        <a>Add to cart</a>
        <a>Learn More</a>
      </div>
    </div>
  </div>`);
  main.appendChild(item);
});

greenBtn.addEventListener('click', function () {
  const item = document.createRange()
    .createContextualFragment(`  <div class="green card-container">
    <div class="inner-card">
      <div class="inner-card__title">tourmaly</div>
      <div class="inner-card__category">Tourmaline & Tea Tree</div>
      <div class="inner-card__tag">All Natural Soup Bar</div>
      <div class="inner-card__product-highlits">
        <div class="inner-card__description">
          Calms Redness & irritation <br /><span
            >Hydrating and Refreshing</span
          >
        </div>
        <div class="inner-card__logo">
          <img src="./images/logo.png" alt="Quebraluz, Quebradora" />
        </div>
      </div>
      <div class="inner-card__footer">
        <div class="inner-card__subtitle">Suitable for all skyn types</div>
        <div class="inner-card__ingredients">Not Wt 7oz</div>
      </div>
    </div>
    <div class="product-content__container">
      <div class="product-title">
        <h2>
          Tourmaline & Tea Tree<br />
          Bar Soap
        </h2>
      </div>
      <div class="product-price-stock">
        <span class="price">$12.00</span>
        <span class="stock">1</span>
      </div>
      <div class="product-description">
        <p>
          Recharge your skin with the super energizing power of finely
          crushed tourmaline powder blended with natural complexion
        </p>
      </div>
      <div class="buttons-container">
        <a>Add to cart</a>
        <a>Learn More</a>
      </div>
    </div>
  </div>`);
  main.appendChild(item);
});

purpleBtn.addEventListener('click', function () {
  const item = document.createRange()
    .createContextualFragment(` <div class="purple card-container">
    <div class="inner-card">
      <div class="inner-card__title">tourmaly</div>
      <div class="inner-card__category">Tourmaline & Unscented</div>
      <div class="inner-card__tag">All Natural Soup Bar</div>
      <div class="inner-card__product-highlits">
        <div class="inner-card__description">
          Calms Redness & irritation <br /><span
            >Hydrating and Refreshing</span
          >
        </div>
        <div class="inner-card__logo">
          <img src="./images/logo.png" alt="Quebraluz, Quebradora" />
        </div>
      </div>
      <div class="inner-card__footer">
        <div class="inner-card__subtitle">Suitable for all skyn types</div>
        <div class="inner-card__ingredients">Not Wt 7oz</div>
      </div>
    </div>
    <div class="product-content__container">
      <div class="product-title">
        <h2>
          Tourmaline & Unscented<br />
          Bar Soap
        </h2>
      </div>
      <div class="product-price-stock">
        <span class="price">$12.00</span>
        <span class="stock">1</span>
      </div>
      <div class="product-description">
        <p>
          Recharge your skin with the super energizing power of finely
          crushed tourmaline powder blended with natural complexion
        </p>
      </div>
      <div class="buttons-container">
        <a>Add to cart</a>
        <a>Learn More</a>
      </div>
    </div>
  </div>`);
  main.appendChild(item);
});

removeBtn.addEventListener('click', () => {
  main.lastChild.remove();
  console.log('click');
});
