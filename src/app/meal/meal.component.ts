import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarMealComponent } from '../navbar-meal/navbar-meal.component';
import { BreakFastComponent } from '../break-fast/break-fast.component';
import { PastaComponent } from '../pasta/pasta.component';
import { SeaFoodComponent } from '../sea-food/sea-food.component';
interface IMeals {
  strMeal: string;
  strMealThumb: string;
  Desc: string;
  idMeal: string;
}
@Component({
  selector: 'app-meal',
  imports: [
    RouterOutlet,
    NavbarMealComponent,
    BreakFastComponent,
    PastaComponent,
    SeaFoodComponent,
  ],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css',
})
export class MealComponent {
  seafood: IMeals[] = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52959',
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52819',
    },
    {
      strMeal: 'Escovitch Fish',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1520084413.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52944',
    },
    {
      strMeal: 'Fish fofos',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53043',
    },
    {
      strMeal: 'Fish pie',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52802',
    },
    {
      strMeal: 'Fish Soup (Ukha)',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53079',
    },
    {
      strMeal: 'Fish Stew with Rouille',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52918',
    },
    {
      strMeal: 'Garides Saganaki',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52764',
    },
    {
      strMeal: 'Grilled Portuguese sardines',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53041',
    },
    {
      strMeal: 'Honey Teriyaki Salmon',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52773',
    },
    {
      strMeal: 'Kedgeree',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52887',
    },
    {
      strMeal: 'Kung Po Prawns',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1525873040.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52946',
    },
    {
      strMeal: 'Laksa King Prawn Noodles',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52821',
    },
    {
      strMeal: 'Mediterranean Pasta Salad',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52777',
    },
    {
      strMeal: 'Mee goreng mamak',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53048',
    },
    {
      strMeal: 'Nasi lemak',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53051',
    },
    {
      strMeal: 'Portuguese fish stew (Caldeirada de peixe)',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53045',
    },
    {
      strMeal: 'Recheado Masala Fish',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52809',
    },
    {
      strMeal: 'Salmon Avocado Salad',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1549542994.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52960',
    },
    {
      strMeal: 'Salmon Prawn Risotto',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52823',
    },
    {
      strMeal: 'Saltfish and Ackee',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52936',
    },
    {
      strMeal: 'Seafood fideuà',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52836',
    },
    {
      strMeal: 'Shrimp Chow Fun',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1529445434.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52953',
    },
    {
      strMeal: 'Sledz w Oleju (Polish Herrings)',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/7ttta31593350374.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53023',
    },
    {
      strMeal: 'Spring onion and prawn empanadas',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53040',
    },
    {
      strMeal: 'Sushi',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53065',
    },
    {
      strMeal: 'Three Fish Pie',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52882',
    },
    {
      strMeal: 'Tuna and Egg Briks',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52975',
    },
    {
      strMeal: 'Tuna Nicoise',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52852',
    },
  ];

  breakFast: IMeals[] = [
    {
      strMeal: 'Bread omelette',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53076',
    },
    {
      strMeal: 'Breakfast Potatoes',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1550441882.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52965',
    },
    {
      strMeal: 'English Breakfast',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52895',
    },
    {
      strMeal: 'Fruit and Cream Cheese Breakfast Pastries',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1543774956.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52957',
    },
    {
      strMeal: 'Full English Breakfast',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52896',
    },
    {
      strMeal: 'Home-made Mandazi',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52967',
    },
    {
      strMeal: 'Salmon Eggs Eggs Benedict',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1550440197.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52962',
    },
    {
      strMeal: 'Smoked Haddock Kedgeree',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1550441275.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52964',
    },
  ];

  past: IMeals[] = [
    {
      strMeal: 'Chilli prawn linguine',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52839',
    },
    {
      strMeal: 'Fettuccine Alfredo',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '53064',
    },
    {
      strMeal: 'Fettucine alfredo',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52835',
    },
    {
      strMeal: 'Grilled Mac and Cheese Sandwich',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52829',
    },
    {
      strMeal: 'Lasagna Sandwiches',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52987',
    },
    {
      strMeal: 'Lasagne',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52844',
    },
    {
      strMeal: 'Pilchard puttanesca',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52837',
    },
    {
      strMeal: 'Spaghetti alla Carbonara',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52982',
    },
    {
      strMeal: 'Venetian Duck Ragu',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
      Desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      idMeal: '52838',
    },
  ];
}
