document.addEventListener("DOMContentLoaded", () => {

  const products = [
      {
        id: 1,
        title: "Shark - Men's cabretta white golf glove",
        category: "Аксесуари",
        price: "1299",
        oldPrice: "2600",
        image: "images/products/1.jpg",
        isDiscount: false,
        discount: 0,
        bestseller: true,
        rating: 5,
        description: "Рукавички для покращення зчеплення та комфорту під час гри.",
        specifications: {
          material: "Cabretta leather",
          size: "M",
          color: "Білий",
          gripEnhancement: "Так",
        },
      },
      {
        id: 2,
        title: "Pro Titanium Golf Driver",
        category: "Ключки",
        price: "8500",
        oldPrice: "10000",
        image: "images/products/10.jpg",
        isDiscount: true,
        discount: 15,
        bestseller: false,
        rating: 4,
        description: "Титановий драйвер для максимального віддалення удару.",
        specifications: {
          material: "Титан",
          loft: "10.5°",
          shaftType: "Graphite",
          flex: "Regular",
        },
      },
      {
        id: 3,
        title: "Tour Golf Balls (Pack of 12)",
        category: "М'ячі",
        price: "1999",
        oldPrice: "2500",
        image: "images/products/18.webp",
        isDiscount: true,
        discount: 20,
        bestseller: true,
        rating: 5,
        description: "М'ячі для професійної гри з високою точністю та контролем.",
        specifications: {
          compression: "90",
          dimples: "350",
          coverMaterial: "Urethane",
          color: "Білий",
        },
      },
      {
        id: 4,
        title: "Deluxe Golf Cart Bag",
        category: "Сумки",
        price: "6499",
        oldPrice: "8000",
        image: "images/products/15.webp",
        isDiscount: true,
        discount: 20,
        bestseller: false,
        rating: 4,
        description: "Містка сумка для всіх ваших гольф-аксесуарів.",
        specifications: {
          material: "Нейлон",
          weight: "3 кг",
          compartments: "14",
          waterproof: "Так",
        },
      },
      {
        id: 5,
        title: "Men's Polo Golf Shirt",
        category: "Одяг",
        price: "1999",
        oldPrice: "2500",
        image: "images/products/17.jpg",
        isDiscount: true,
        discount: 20,
        bestseller: false,
        rating: 4,
        description: "Класична гольф-футболка з дихаючої тканини.",
        specifications: {
          material: "Поліестер",
          size: "L",
          color: "Синій",
          moistureWicking: "Так",
        },
      },
      {
        id: 6,
        title: "Ladies Golf Shoes",
        category: "Взуття",
        price: "4999",
        oldPrice: "6000",
        image: "images/products/11.jpg",
        isDiscount: true,
        discount: 15,
        bestseller: true,
        rating: 5,
        description: "Зручні жіночі гольф-туфлі з хорошим зчепленням.",
        specifications: {
          material: "Штучна шкіра",
          size: "38",
          color: "Білий",
          waterResistant: "Так",
        },
      },
      {
        id: 7,
        title: "Precision Golf Wedges",
        category: "Ключки",
        price: "4500",
        oldPrice: "5000",
        image: "images/products/9.jpeg",
        isDiscount: true,
        discount: 10,
        bestseller: true,
        rating: 4,
        description: "Ключка для гри на коротких дистанціях.",
        specifications: {
          material: "Нержавіюча сталь",
          loft: "56°",
          shaftType: "Steel",
          flex: "Stiff",
        },
      },
      {
        id: 8,
        title: "Golf Ball Retriever",
        category: "Аксесуари",
        price: "799",
        oldPrice: "1000",
        image: "images/products/6.jpg",
        isDiscount: true,
        discount: 20,
        bestseller: false,
        rating: 4,
        description: "Зручний інструмент для підняття м'ячів з води.",
        specifications: {
          length: "2 м",
          material: "Алюміній",
          weight: "0.5 кг",
          collapsible: "Так",
        },
      },
      {
        id: 9,
        title: "Golf Training Net",
        category: "Аксесуари",
        price: "2499",
        oldPrice: "3000",
        image: "images/products/23.jpeg",
        isDiscount: true,
        discount: 15,
        bestseller: true,
        rating: 5,
        description: "Сітка для тренувань вдома.",
        specifications: {
          dimensions: "3x3 м",
          material: "Нейлон",
          setupTime: "5 хвилин",
          portability: "Так",
        },
      },
      {
        id: 10,
        title: "Men's Waterproof Golf Jacket",
        category: "Одяг",
        price: "2999",
        oldPrice: "3500",
        image: "images/products/19.webp",
        isDiscount: true,
        discount: 15,
        bestseller: false,
        rating: 4,
        description: "Водонепроникна куртка для гри в будь-яку погоду.",
        specifications: {
          material: "Поліестер",
          size: "XL",
          color: "Чорний",
          waterproof: "Так",
        },
      },
      {
        id: 11,
        title: "Ladies Golf Visor",
        category: "Аксесуари",
        price: "599",
        oldPrice: "800",
        image: "images/products/25.jpg",
        isDiscount: true,
        discount: 25,
        bestseller: false,
        rating: 4,
        description: "Козирок для захисту від сонця під час гри.",
        specifications: {
          material: "Бавовна",
          size: "Універсальний",
          color: "Рожевий",
          adjustable: "Так",
        },
      },
      {
        id: 12,
        title: "Professional Golf Push Cart",
        category: "Аксесуари",
        price: "5999",
        oldPrice: "7000",
        image: "images/products/8.jpg",
        isDiscount: true,
        discount: 15,
        bestseller: true,
        rating: 5,
        description: "Зручний візок для перенесення гольф-обладнання.",
        specifications: {
          material: "Алюміній",
          wheels: "3",
          foldable: "Так",
          weightCapacity: "20 кг",
        },
      },
      {
        id: 13,
        title: "Golf Club Head Covers (Set of 3)",
        category: "Аксесуари",
        price: "999",
        oldPrice: "1200",
        image: "images/products/4.jpg",
        isDiscount: true,
        discount: 15,
        bestseller: false,
        rating: 4,
        description: "Набір чохлів для захисту ключок.",
        specifications: {
          material: "Неопрен",
          color: "Чорний",
          compatibility: "Driver, Wood, Hybrid",
          washable: "Так",
        },
      },
      {
        id: 14,
        title: "Men's Golf Pants",
        category: "Одяг",
        price: "2399",
        oldPrice: "2800",
        image: "images/products/26.webp",
        isDiscount: true,
        discount: 15,
        bestseller: false,
        rating: 4,
        description: "Штани для гольфу з еластичного матеріалу.",
        specifications: {
          material: "Поліестер",
          size: "M",
          color: "Сірий",
          stretchable: "Так",
        },
      },
      {
        id: 15,
        title: "Junior Golf Club Set",
        category: "Ключки",
        price: "7999",
        oldPrice: "10000",
        image: "images/products/7.jpg",
        isDiscount: true,
        discount: 20,
        bestseller: true,
        rating: 5,
        description: "Набір ключок для молодих гравців.",
        specifications: {
          material: "Алюміній",
          clubsIncluded: "Driver, Iron, Putter",
          bagIncluded: "Так",
          weight: "4 кг",
        },
      },
    ];
  
    const categories = ["Аксесуари", "Ключки", "М'ячі", "Сумки", "Одяг", "Взуття"];
    const catalogSections = document.getElementById('catalog-sections');
  
    categories.forEach(category => {
      const section = document.createElement('section');
      section.classList.add('catalog-section');
      
      const sectionTitle = document.createElement('h2');
      sectionTitle.textContent = category;
      section.appendChild(sectionTitle);

      const itemsContainer = document.createElement('div');
      itemsContainer.classList.add('catalog-grid');

      products
          .filter(product => product.category === category)
          .forEach(product => {
              const item = document.createElement('div');
              item.classList.add('catalog-item');

              item.innerHTML = `
                  <div class='catalog-img'><img src="${product.image}" alt="${product.title}"></div>                  
                  <h3>${product.title}</h3>
                  <p>${product.price} грн</p>
                  <a href="product.html?id=${product.id}" class="details-btn">Переглянути</a>
              `;

              itemsContainer.appendChild(item);
          });

      section.appendChild(itemsContainer);
      catalogSections.appendChild(section);
    });
  
  })