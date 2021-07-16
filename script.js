const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
     get mains() {
      return this._courses.mains;
    },
     get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
    },
    set mains(mains) {
    this._courses.mains = mains;
    },
    set desserts(desserts) {
    this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} the price is ${totalPrice}.`;
    }
  };
  menu.addDishToCourse('appetizers', 'Chips', 10.65);
  menu.addDishToCourse('appetizers', ' wings', 9.00);
  menu.addDishToCourse('appetizers', 'Chips and Salad', 7.50);
  
  menu.addDishToCourse('mains','banana', 20.13);
  menu.addDishToCourse('mains','rice', 12.90);
  menu.addDishToCourse('mains','apple', 10.90);
  
  menu.addDishToCourse('desserts','cake',6.20);
  menu.addDishToCourse('desserts','coffe',6.50);
  menu.addDishToCourse('desserts','ice cream',6.90);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);