import escapeHtml from "./utils/escape-html.js";
import fetchJson from "./utils/fetch-json.js";

const IMGUR_CLIENT_ID = "28aaa2e823b03b1";
const BACKEND_URL = "https://course-js.javascript.ru";

export default class ProductForm {
  subElements = {};
  element = document.createElement("div");
  constructor(productId) {
    this.productId = productId;
    // this.render();
  }

  addProductName = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__half_left";
    elem.innerHTML = `
      <fieldset>
        <label class="form-label">Название товара</label>
        <input required="" type="text" name="title" class="form-control" placeholder="Название товара">
      </fieldset>
    `;
    return elem;
  };

  addProductDescription = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__wide";
    elem.innerHTML = `
      <label class="form-label">Описание</label>
      <textarea required="" class="form-control" name="description" data-element="productDescription" placeholder="Описание товара"></textarea>
    `;
    return elem;
  };

  addProductPhotoInput = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__wide";
    elem.dataset.element = "sortable-list-container";
    elem.innerHTML = `
      <label class="form-label">Фото</label>
      <div data-element="imageListContainer"><ul class="sortable-list"><li class="products-edit__imagelist-item sortable-list__item" style="">
        <input type="hidden" name="url" value="https://i.imgur.com/MWorX2R.jpg">
        <input type="hidden" name="source" value="75462242_3746019958756848_838491213769211904_n.jpg">
        <span>
          <img src="icon-grab.svg" data-grab-handle="" alt="grab">
          <img class="sortable-table__cell-img" alt="Image" src="https://i.imgur.com/MWorX2R.jpg">
          <span>75462242_3746019958756848_838491213769211904_n.jpg</span>
        </span>
        <button type="button">
          <img src="icon-trash.svg" data-delete-handle="" alt="delete">
        </button></li></ul>
      </div>
      <button type="button" name="uploadImage" class="button-primary-outline"><span>Загрузить</span></button>
    `;
    return elem;
  };

  addProductCategoryInput = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__half_left";
    elem.innerHTML = `
      <label class="form-label">Категория</label>
      <select class="form-control" name="subcategory">
        <option value="progulki-i-detskaya-komnata">Детские товары и игрушки &gt; Прогулки и детская комната</option>
        <option value="kormlenie-i-gigiena">Детские товары и игрушки &gt; Кормление и гигиена</option>
        <option value="igrushki-i-razvlecheniya">Детские товары и игрушки &gt; Игрушки и развлечения</option>
        <option value="aktivniy-otdyh-i-ulitsa">Детские товары и игрушки &gt; Активный отдых и улица</option>
        <option value="radioupravlyaemye-modeli">Детские товары и игрушки &gt; Радиоуправляемые модели</option>
        <option value="shkolnye-tovary">Детские товары и игрушки &gt; Школьные товары</option>
        <option value="noutbuki-i-aksessuary">Компьютерная техника &gt; Ноутбуки и аксессуары</option>
        <option value="monitory">Компьютерная техника &gt; Мониторы</option>
        <option value="komplektuyuschie">Компьютерная техника &gt; Комплектующие</option>
        <option value="setevoe-oborudovanie">Компьютерная техника &gt; Сетевое оборудование</option>
        <option value="vstraivaemaya-tehnika">Крупная бытовая техника &gt; Встраиваемая техника</option>
        <option value="stiralnye-mashiny">Крупная бытовая техника &gt; Стиральные машины</option>
        <option value="sushilnye-mashiny">Крупная бытовая техника &gt; Сушильные машины</option>
        <option value="holodilniki">Крупная бытовая техника &gt; Холодильники</option>
        <option value="morozilnye-kamery">Крупная бытовая техника &gt; Морозильные камеры</option>
        <option value="vinnye-shkafy">Крупная бытовая техника &gt; Винные шкафы</option>
        <option value="vytyazhki">Крупная бытовая техника &gt; Вытяжки</option>
        <option value="plity">Крупная бытовая техника &gt; Плиты</option>
        <option value="posudomoechnye-mashiny">Крупная бытовая техника &gt; Посудомоечные машины</option>
        <option value="melkaya-bytovaya-tehnika">Крупная бытовая техника &gt; Мелкая бытовая техника</option>
        <option value="mikrovolnovye-pechi">Крупная бытовая техника &gt; Микроволновые печи</option>
        <option value="elektroduhovki">Крупная бытовая техника &gt; Электродуховки</option>
        <option value="uborochnye-mashiny">Крупная бытовая техника &gt; Уборочные машины</option>
        <option value="paroochistiteli">Крупная бытовая техника &gt; Пароочистители</option>
        <option value="kulery-i-purifayery">Крупная бытовая техника &gt; Кулеры и пурифайеры</option>
        <option value="kuhnya">Мелкая бытовая техника &gt; Кухня</option>
        <option value="bytovye-pribory-dlya-doma">Мелкая бытовая техника &gt; Бытовые приборы для дома</option>
        <option value="krasota-i-gigiena">Мелкая бытовая техника &gt; Красота и гигиена</option>
        <option value="lcd-televizory">ТВ и видеотехника &gt; LCD телевизоры</option>
        <option value="podstavki-i-krepleniya">ТВ и видеотехника &gt; Подставки и крепления</option>
        <option value="mediapleery">ТВ и видеотехника &gt; Медиаплееры</option>
        <option value="tv-tyunery">ТВ и видеотехника &gt; ТВ тюнеры</option>
        <option value="tv-antenny">ТВ и видеотехника &gt; ТВ антенны</option>
        <option value="3d-ochki">ТВ и видеотехника &gt; 3D очки</option>
        <option value="ochki-virtualnoy-realnosti">ТВ и видеотехника &gt; Очки виртуальной реальности</option>
        <option value="proektsionnoe-oborudovanie">ТВ и видеотехника &gt; Проекционное оборудование</option>
        <option value="videokamery-i-aksessuary">ТВ и видеотехника &gt; Видеокамеры и аксессуары</option>
        <option value="dvd/blu-ray-pleery">ТВ и видеотехника &gt; DVD/Blu-ray плееры</option>
      </select>
    `;
    return elem;
  };

  addProductPriceAndDiscountInput = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__half_left form-group__two-col";
    elem.innerHTML = `
      <fieldset>
        <label class="form-label">Цена ($)</label>
        <input required="" type="number" name="price" class="form-control" placeholder="100">
      </fieldset>
      <fieldset>
        <label class="form-label">Скидка ($)</label>
        <input required="" type="number" name="discount" class="form-control" placeholder="0">
      </fieldset>
    `;
    return elem;
  };

  addProductCountInput = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__part-half";
    elem.innerHTML = `
      <label class="form-label">Количество</label>
      <input required="" type="number" class="form-control" name="quantity" placeholder="1">
    `;
    return elem;
  };

  addProductStatusInput = () => {
    const elem = document.createElement("div");
    elem.className = "form-group form-group__part-half";
    elem.innerHTML = `
      <label class="form-label">Статус</label>
      <select class="form-control" name="status">
        <option value="1">Активен</option>
        <option value="0">Неактивен</option>
      </select>
    `;
    return elem;
  };

  addProductSaveButton = () => {
    const elem = document.createElement("div");
    elem.className = "form-buttons";
    elem.innerHTML = `
      <button type="submit" name="save" class="button-primary-outline">
        Сохранить товар
      </button>
    `;
    return elem;
  };

  testFunc = () => {
    const form = this.subElements.form;
    const elements = form.elements.title;
    const value = elements.value;
    console.log("elements:", value);
  };

  // saveProduct = () => {
  //   // console.log("SUBMIT");

  //   // formElem.onsubmit = async
  //   console.log("form:", this.subElements.form);

  //   const data = new FormData(this.subElements.form);
  //   // console.log("forms:", document.forms);
  //   console.log("data:", data);
  // };

  createProductForm = async () => {
    this.element.innerHTML = `<form data-element="productForm" class="form-grid"> </form>`;
    const form = this.element.querySelector(`[data-element="productForm"]`);
    form.append(this.addProductName());
    form.append(this.addProductDescription());
    form.append(this.addProductPhotoInput());
    form.append(this.addProductCategoryInput());
    form.append(this.addProductPriceAndDiscountInput());
    form.append(this.addProductCountInput());
    form.append(this.addProductStatusInput());

    this.subElements.saveButton = this.addProductSaveButton();
    form.append(this.subElements.saveButton);

    this.subElements.form = this.element.querySelector(
      `[data-element="productForm"]`
    );
  };

  addEventListeners = () => {
    this.subElements.saveButton.addEventListener("click", this.testFunc);
  };

  fetchItemById = async ()=> {
    const url = new URL(BACKEND_URL + "/" + this.url);
    url.searchParams.append("_sort", sortParams.sorted.id);
    url.searchParams.append("_order", sortParams.sorted.order);
    url.searchParams.append("_start", sortParams.start);
    url.searchParams.append("_end", sortParams.end);
    return fetchJson();
  }

  async render() {
    this.element.className = "product-form";
    if (this.productId) {
      this.data = await fetchItemById();
      // console.log("productId:", this.productId);
    }
    await this.createProductForm();
    // this.testFunc();
    this.addEventListeners();
  }
}
