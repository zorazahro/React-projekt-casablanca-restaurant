// src/assets/assets.js

// Import des images
import basket_icon from './basket_icon.png';
import add_icon_white from './add_icon_white.jpg';
import add_icon_orange from './add_icon_orange.png'
import remove_icon_grey from './remove_icon_grey.png'
import logo from './logo.png';
import header_img from './header_img.png';
import search_icon from './search_icon.png';
import menu_1 from './entree1.png';
import menu_2 from './soupe2.png';
import menu_3 from './tajine4.jpg';
import menu_4 from './couscous5.jpg';
import menu_5 from './pastilla2.png';
import menu_6 from './grille1.png';
import menu_7 from './dessert12.png';
import menu_8 from './pain2.png';
import menu_9 from './boisson6.png';

import pain1_image from './pain1.png';
import pain2_image from './pain2.png';
import pain3_image from './pain3.png';
import pain4_image from './pain4.png';
import pain5_image from './pain5.png';

import entree1_image from './entree1.png';
import entree2_image from './entree2.png';
import entree3_image from './entree3.png';
import entree5_image from './entree5.png';
import entree6_image from './entree6.png';
import entree7_image from './entree7.png';
import entree8_image from './entree8.png';
import entree9_image from './entree9.png';
import entree10_image from './entree10.png';
import entree11_image from './entree11.png';
import entree12_image from './entree12.png';
import entree13_image from './entree13.png';
import entree14_image from './entree14.png';
import entree15_image from './entree15.png';
import entree16_image from './entree16.png';

import tajine1_image from './tajine1.jpg';
import tajine2_image from './tajine2.png';
import tajine3_image from './tajine3.png';
import tajine4_image from './tajine4.jpg';
import tajine5_image from './tajine5.jpeg';
import tajine6_image from './tajine6.png';
import tajine7_image from './tajine7.webp';
import tajine8_image from './tajine8.jpg';
import tajine9_image from './tajine9.png';
import tajine10_image from './tajine10.png';
import tajine11_image from './tajine11.png';

import couscous1_image from './couscous1.png';
import couscous2_image from './couscous2.jpg';
import couscous3_image from './couscous3.jpeg';
import couscous4_image from './couscous4.jpg';
import couscous5_image from './couscous5.jpg';
import couscous6_image from './couscous6.png';

import boisson1_image from './boisson1.png';
import boisson2_image from './boisson2.png';
import boisson3_image from './boisson3.png';
import boisson4_image from './boisson4.png';
import boisson5_image from './boisson5.png';
import boisson6_image from './boisson6.png';

import pastilla1_image from './pastilla1.png';
import pastilla2_image from './pastilla2.png';
import pastilla3_image from './pastilla3.png';
import pastilla5_image from './pastilla5.png';

import dessert1_image from './dessert1.png';
import dessert2_image from './dessert2.png';
import dessert3_image from './dessert3.png';
import dessert4_image from './dessert4.png';
import dessert5_image from './dessert5.png';
import dessert6_image from './dessert6.png';
import dessert7_image from './dessert7.png';
import dessert8_image from './dessert8.png';
import dessert9_image from './dessert9.png';
import dessert10_image from './dessert10.png';
import dessert11_image from './dessert11.png';
import dessert12_image from './dessert12.png';

import soupe1_image from './soupe1.png';
import soupe2_image from './soupe2.png';

import grille1_image from './grille1.png';
import grille2_image from './grille2.png';


export const assets = {
  basket_icon,
  logo,
  header_img,
  search_icon,
  add_icon_white,
  add_icon_orange,
  remove_icon_grey
  
};
export const menu_list=[
  {
    menu_name: 'Vorspeise',
    menu_image: menu_1
  },
  {
    menu_name: 'Suppe',
    menu_image: menu_2
  },
  {
    menu_name: 'Tajine',
    menu_image: menu_3
  },
  {
    menu_name: 'Couscous',
    menu_image: menu_4
  },
  {
    menu_name: 'Pastilla',
    menu_image: menu_5
  },
  {
    menu_name: 'Grill',
    menu_image: menu_6
  },
  {
    menu_name: 'Nachtisch',
    menu_image: menu_7
  },
  {
    menu_name: 'Brot',
    menu_image: menu_8
  },
  {
    menu_name: 'Getränk',
    menu_image: menu_9
  }
]

export const drink_list = [
  {
    _id: 1,
    name: 'Marokkanischer Minztee',
    image: boisson6_image,
    price: 3.99,
    description: 'Ein traditioneller Minztee, der in Marokko bei jeder Gelegenheit serviert wird. Frisch aufgebrühter grüner Tee mit marokkanischer Minze.',
    category: 'Boisson'
  },
  {
    _id: 2,
    name: 'Zitronen-Verveine-Limonade',
    image: boisson1_image,
    price: 4.49,
    description: 'Erfrischende hausgemachte Limonade mit Zitronen und Verveine, perfekt für warme Tage.',
    category: 'Boisson'
  },
  {
    _id: 7,
    name: 'Zitronen-Minze-Limonade',
    image: boisson2_image, // Assure-toi d'importer l'image correspondante si c'est différent
    price: 4.49,
    description: 'Erfrischende Limonade mit frischen Zitronen und Minze, ideal für heiße Tage.',
    category: 'Boisson'
  },
  {
    _id: 4,
    name: 'Rosenwasser-Limonade',
    image: boisson4_image,
    price: 4.99,
    description: 'Eine erfrischende Limonade mit einem leichten Rosengeschmack, serviert auf Eis.',
    category: 'Boisson'
  },
  {
    _id: 5,
    name: 'Jus d\'Amande',
    image: boisson5_image,
    price: 5.49,
    description: 'Ein traditionelles marokkanisches Getränk aus Mandeln, leicht gesüßt und perfekt an heißen Tagen.',
    category: 'Boisson'
  },
 
  {
    _id: 6,
    name: 'Kardamom-Kaffee',
    image: boisson3_image,
    price: 3.99,
    description: 'Ein starker schwarzer Kaffee, gewürzt mit einem Hauch von Kardamom, für ein authentisches orientalisches Aroma.',
    category: 'Boisson'
  }
];
  export const tajine_list = [
    {
      _id: 1,
      name: 'Tajine mit Lamm',
      image: tajine1_image,
      price: 16.99,
      description: 'Ein köstlicher marokkanischer Eintopf mit zartem Lamm und Gemüse, langsam in einer traditionellen Tajine gekocht.',
      category: 'Tajine'
    },
    {
      _id: 2,
      name: 'Huhn-Tajine mit Oliven und Zitrone',
      image: tajine2_image,
      price: 14.99,
      description: 'Ein schmackhaftes Gericht mit Hähnchen, Zitrone und grünen Oliven, serviert in einer herzhaften Sauce.',
      category: 'Tajine'
    },
    {
      _id: 3,
      name: 'Vegetarische Tajine',
      image: tajine3_image,
      price: 12.99,
      description: 'Ein bunter Gemüseeintopf mit Zucchini, Karotten, Tomaten und Kichererbsen, gewürzt mit traditionellen Gewürzen.',
      category: 'Tajine'
    },
    {
      _id: 4,
      name: 'Meeresfrüchte-Tajine',
      image: tajine4_image,
      price: 19.99,
      description: 'Eine exquisite Kombination aus frischen Meeresfrüchten, serviert mit marokkanischen Gewürzen in einer Tajine.',
      category: 'Tajine'
    },
    {
      _id: 5,
      name: 'Rind-Tajine mit Pflaumen',
      image: tajine5_image,
      price: 17.99,
      description: 'Zartes Rindfleisch kombiniert mit süßen Pflaumen und Gewürzen, perfekt gekocht in einer Tajine.',
      category: 'Tajine'
    },
    {
      _id: 6,
      name: 'Lamm-Tajine mit Aprikosen',
      image: tajine6_image,
      price: 18.99,
      description: 'Ein aromatisches Gericht mit Lamm, Aprikosen und Zimt, ideal für ein festliches Abendessen.',
      category: 'Tajine'
    },
    {
      _id: 7,
      name: 'Huhn-Tajine mit Mandeln',
      image: tajine7_image,
      price: 15.99,
      description: 'Zartes Hähnchen, gewürzt mit Safran und serviert mit gerösteten Mandeln in einer cremigen Sauce.',
      category: 'Tajine'
    },
    {
      _id: 8,
      name: 'Gemischte Fleisch-Tajine',
      image: tajine8_image,
      price: 20.99,
      description: 'Eine Mischung aus Lamm, Rind und Huhn, gekocht in einer würzigen Tomatenbasis mit Gemüse.',
      category: 'Tajine'
    },
    {
      _id: 9,
      name: 'Tajine mit Rind und Gemüse',
      image: tajine9_image,
      price: 16.99,
      description: 'Zartes Rindfleisch, serviert mit saisonalem Gemüse, langsam gegart in einer Tajine.',
      category: 'Tajine'
    },
    {
      _id: 10,
      name: 'Tajine mit Rind und Kartoffeln',
      image: tajine10_image,
      price: 17.49,
      description: 'Rindfleisch mit Kartoffeln, Karotten und Erbsen in einer würzigen Sauce, perfekt gekocht in einer Tajine.',
      category: 'Tajine'
    },
    {
      _id: 11,
      name: 'Lamm-Tajine mit Kichererbsen',
      image: tajine11_image,
      price: 18.49,
      description: 'Ein herzhafter Eintopf aus Lamm und Kichererbsen, langsam in einer Tajine gekocht.',
      category: 'Tajine'
    }
  ];
  export const dessert_list = [
    {
      _id: 1,
      name: 'Kaab Laghzal (Pied de Ghazel)',
      image: dessert1_image,
      price: 2.99,
      description: 'Ein köstliches Dessert in Form eines Ghazel-Fußes, traditionell mit Mandeln zubereitet.',
      category: 'Dessert'
    },
    {
      _id: 2,
      name: 'Mhancha (Escargot d\'Amande)',
      image: dessert2_image,
      price: 3.49,
      description: 'Ein gerolltes Gebäck aus Mandeln, süß und aromatisch.',
      category: 'Dessert'
    },
    {
      _id: 3,
      name: 'Makrout (Gâteau au Datté)',
      image: dessert3_image,
      price: 3.99,
      description: 'Ein traditioneller Dattelkuchen, frittiert und mit Honig überzogen.',
      category: 'Dessert'
    },
    {
      _id: 4,
      name: 'Jouhara (Mille Feuille Marocaine)',
      image: dessert4_image,
      price: 4.49,
      description: 'Ein zarter Mille-Feuille, gefüllt mit Creme und Mandeln.',
      category: 'Dessert'
    },
    {
      _id: 5,
      name: 'Briwat au Amande (Triangle au Amande)',
      image: dessert5_image,
      price: 2.99,
      description: 'Croustillige Dreiecke gefüllt mit Mandeln und in Honig getaucht.',
      category: 'Dessert'
    },
    {
      _id: 6,
      name: 'Baghrir au Miel (Crêpe Marocaine au Miel)',
      image: dessert6_image,
      price: 3.49,
      description: 'Eine fluffige marokkanische Crêpe, serviert mit Honig.',
      category: 'Dessert'
    },
    {
      _id: 7,
      name: 'Kaab Laghzal au Figue et Pistache',
      image: dessert7_image,
      price: 3.99,
      description: 'Eine Variation des Kaab Laghzal, zubereitet mit Feigen und Pistazien.',
      category: 'Dessert'
    },
    {
      _id: 8,
      name: 'Kaab Laghzal au Pistache',
      image: dessert8_image,
      price: 3.99,
      description: 'Traditionelles Gebäck mit einer köstlichen Pistazienfüllung.',
      category: 'Dessert'
    },
    {
      _id: 9,
      name: 'Ghriba au Amande et Orange (Gâteau au Amande et Orange)',
      image: dessert9_image,
      price: 2.99,
      description: 'Ein saftiger Mandelkuchen, aromatisiert mit Orange.',
      category: 'Dessert'
    },
    {
      _id: 10,
      name: 'Chabakia (Gâteau au Sésame au Miel)',
      image: dessert10_image,
      price: 3.49,
      description: 'Ein traditionelles marokkanisches Gebäck aus Sesam, in Honig getaucht.',
      category: 'Dessert'
    },
    {
      _id: 11,
      name: 'Flanc au Rose et Amande',
      image: dessert11_image,
      price: 4.49,
      description: 'Ein zarter Pudding mit Rosen- und Mandelaroma.',
      category: 'Dessert'
    },
    {
      _id: 12,
      name: 'Bahla au Noix de Pican (Gâteau au Noix de Pican)',
      image: dessert12_image,
      price: 4.99,
      description: 'Ein saftiger Kuchen mit Pekannüssen, eine unverzichtbare Süßigkeit.',
      category: 'Dessert'
    }
  ];

  export const entree_list = [
    {
      _id: 1,
      name: 'Aubergine und Tahina',
      image: entree1_image,
      price: 3.99,
      description: 'Ein köstliches Gericht aus Auberginen und cremiger Tahina.',
      category: 'Vorspeise'
    },
    {
      _id: 2,
      name: 'Zaalouk (Auberginen-Caviar, gegrillte Paprika)',
      image: entree2_image,
      price: 4.49,
      description: 'Ein traditionelles marokkanisches Gericht aus Auberginen und gegrillten Paprika.',
      category: 'Vorspeise'
    },
    {
      _id: 3,
      name: 'Taktouka (Tomate, gegrillte Paprika und Zwiebel)',
      image: entree3_image,
      price: 3.99,
      description: 'Eine köstliche Mischung aus Tomaten, gegrillten Paprika und Zwiebeln.',
      category: 'Vorspeise'
    },
    {
      _id: 5,
      name: 'Gegrilltes Gemüse (Kürbis, Feige, Granatapfel, Mandeln, Zwiebel, Paprika, Olive)',
      image: entree5_image,
      price: 4.99,
      description: 'Eine bunte Mischung aus gegrilltem Gemüse, perfekt gewürzt.',
      category: 'Vorspeise'
    },
    {
      _id: 6,
      name: 'Karotten-Linsen-Salat mit Pistazien und Zwiebel',
      image: entree6_image,
      price: 3.49,
      description: 'Ein gesunder Salat mit Karotten, Linsen, Pistazien und Zwiebeln.',
      category: 'Vorspeise'
    },
    {
      _id: 7,
      name: 'Hummus mit Bohnen',
      image: entree7_image,
      price: 4.49,
      description: 'Cremiger Hummus, zubereitet mit Bohnen und Gewürzen.',
      category: 'Vorspeise'
    },
    {
      _id: 8,
      name: 'Gegrillte Paprika in drei Farben',
      image: entree8_image,
      price: 3.99,
      description: 'Leckere gegrillte Paprika in verschiedenen Farben.',
      category: 'Vorspeise'
    },
    {
      _id: 9,
      name: 'Rote Beete mit Ziegenkäse und Arganöl',
      image: entree9_image,
      price: 4.49,
      description: 'Eine köstliche Kombination aus roter Beete und Ziegenkäse, verfeinert mit Arganöl.',
      category: 'Vorspeise'
    },
    {
      _id: 10,
      name: 'Salat mit Orange, Granatapfel und Pistazien mit Orangenblütenwasser',
      image: entree10_image,
      price: 3.99,
      description: 'Ein erfrischender Salat mit Orange, Granatapfel und Pistazien.',
      category: 'Vorspeise'
    },
    {
      _id: 11,
      name: 'Oktopus mit Tomaten und Oliven',
      image: entree11_image,
      price: 5.49,
      description: 'Ein schmackhaftes Gericht mit Oktopus, Tomaten und Oliven.',
      category: 'Vorspeise'
    },
    {
      _id: 12,
      name: 'Feigen mit Ziegenkäse, Walnüssen und Honig',
      image: entree12_image,
      price: 4.99,
      description: 'Eine süße Vorspeise aus Feigen, Ziegenkäse und Walnüssen.',
      category: 'Vorspeise'
    },
    {
      _id: 13,
      name: 'Kichererbsensalat mit Tomaten, Gurken, Zwiebeln, Sesam, Pfeffer, Petersilie und Minze',
      image: entree13_image,
      price: 3.49,
      description: 'Ein frischer Salat aus Kichererbsen, perfekt gewürzt.',
      category: 'Vorspeise'
    },
    {
      _id: 14,
      name: 'Bohnen mit Thunfisch, schwarzen Oliven, Petersilie und Zwiebeln',
      image: entree14_image,
      price: 4.49,
      description: 'Ein herzhaftes Gericht mit Bohnen und Thunfisch.',
      category: 'Vorspeise'
    },
    {
      _id: 15,
      name: 'Verschiedene marinierte Meeresfrüchte',
      image: entree15_image,
      price: 6.49,
      description: 'Ein köstliches Assortiment an marinierten Meeresfrüchten.',
      category: 'Vorspeise'
    },
    {
      _id: 16,
      name: 'Karottensalat mit Petersilie und Kreuzkümmel',
      image: entree16_image,
      price: 3.99,
      description: 'Ein erfrischender Karottensalat, gewürzt mit Petersilie und Kreuzkümmel.',
      category: 'Vorspeise'
    }
  ];


  export const couscous_list = [
    {
      _id: 1,
      name: 'Couscous Royal',
      image: couscous1_image,
      price: 12.99,
      description: 'Ein traditioneller Couscous mit Huhn, Lamm, Kaninchen und einer Mischung aus Gemüse.',
      category: 'Couscous'
    },
    {
      _id: 2,
      name: 'Couscous mit Lamm',
      image: couscous5_image, // Image from previous couscous2
      price: 11.99,
      description: 'Zarter Lammbraten auf einem Bett von leichtem Couscous und Gemüse.',
      category: 'Couscous'
    },
    {
      _id: 3,
      name: 'Couscous mit Kaninchen',
      image: couscous3_image,
      price: 11.99,
      description: 'Zartes Kaninchenfleisch auf einem Bett von leichtem Couscous und Gemüse.',
      category: 'Couscous'
    },
    {
      _id: 4,
      name: 'Couscous mit Fisch',
      image: couscous4_image,
      price: 12.49,
      description: 'Ein besonderer Couscous mit zartem Fisch und frischen Kräutern, serviert mit Gemüse.',
      category: 'Couscous'
    },
    {
      _id: 5,
      name: 'Couscous mit Huhn',
      image: couscous2_image, // Image from previous couscous5
      price: 10.49,
      description: 'Ein klassischer Couscous mit saftigem Huhn und Gemüse, serviert mit einer würzigen Brühe.',
      category: 'Couscous'
    },
    {
      _id: 6,
      name: 'Couscous mit 7 Gemüsen',
      image: couscous6_image,
      price: 10.99,
      description: 'Couscous mit einer reichhaltigen Auswahl von 7 verschiedenen Gemüsesorten, ideal für Vegetarier.',
      category: 'Couscous'
    }
  ];

  export const pastilla_list = [
    {
      _id: 1,
      name: 'Pastilla mit Huhn und Mandeln',
      image: pastilla1_image,
      price: 12.99,
      description: 'Eine herzhafte Pastilla mit zartem Huhn, knusprigen Mandeln und einem Hauch von Zimt und Zucker.',
      category: 'Pastilla'
    },
    {
      _id: 2,
      name: 'Pastilla mit Lamm, Pflaumen und Walnüssen',
      image: pastilla2_image,
      price: 13.49,
      description: 'Zartes Lammfleisch, kombiniert mit süßen Pflaumen und knackigen Walnüssen in einer feinen Teighülle.',
      category: 'Pastilla'
    },
    {
      _id: 3,
      name: 'Pastilla mit Fisch und Meeresfrüchten',
      image: pastilla3_image,
      price: 14.99,
      description: 'Eine delikate Mischung aus Fisch und Meeresfrüchten, eingewickelt in knusprigen Teig.',
      category: 'Pastilla'
    },
    {
      _id: 5,
      name: 'Pastilla mit Spinat, Ziegenkäse, Feigen und Walnüssen',
      image: pastilla5_image,
      price: 12.49,
      description: 'Eine vegetarische Pastilla gefüllt mit frischem Spinat, cremigem Ziegenkäse, süßen Feigen und knackigen Walnüssen.',
      category: 'Pastilla'
    }
  ];

  export const bread_list = [
    {
      _id: 1,
      name: 'Brot mit Arganöl, in der Pfanne gebacken',
      image: pain1_image,
      price: 3.49,
      description: 'Traditionelles marokkanisches Brot, mit Arganöl verfeinert und in der Pfanne knusprig gebacken.',
      category: 'Brot'
    },
    {
      _id: 2,
      name: 'Brot mit schwarzen Oliven',
      image: pain2_image,
      price: 3.99,
      description: 'Ein rustikales Brot, angereichert mit feinen schwarzen Oliven für einen herzhaften Geschmack.',
      category: 'Brot'
    },
    {
      _id: 3,
      name: 'Brot mit Sesam und Fenchel',
      image: pain3_image,
      price: 3.49,
      description: 'Ein aromatisches Brot mit gerösteten Sesamkörnern und Fenchelsamen, das perfekt zu marokkanischen Gerichten passt.',
      category: 'Brot'
    },
    {
      _id: 4,
      name: 'Maisbrot',
      image: pain4_image,
      price: 3.99,
      description: 'Ein fluffiges Brot aus Maismehl, perfekt für alle, die glutenfreie Optionen bevorzugen.',
      category: 'Brot'
    },
    {
      _id: 5,
      name: 'Msemen – Blätterteigbrot',
      image: pain5_image,
      price: 2.99,
      description: 'Ein traditionelles marokkanisches, geschichtetes Blätterteigbrot, das perfekt zu Tee oder herzhaften Füllungen passt.',
      category: 'Brot'
    }
  ];
 

export const soup_list = [
  {
    _id: 1,
    name: 'Bohnensuppe',
    image: soupe1_image,
    price: 5.49,
    description: 'Eine reichhaltige Suppe aus Saubohnen, gewürzt mit Kreuzkümmel und Knoblauch, perfekt für kalte Tage.',
    category: 'Suppe'
  },
  {
    _id: 2,
    name: 'Harira',
    image: soupe2_image,
    price: 5.99,
    description: 'Eine traditionelle marokkanische Suppe mit Tomaten, Kichererbsen, Linsen und feinen Gewürzen.',
    category: 'Suppe'
  }
];

export const grill_list = [
  {
    _id: 1,
    name: 'Gegrilltes Hackfleisch',
    image: grille1_image,
    price: 8.99,
    description: 'Saftiges, mariniertes Hackfleisch, gegrillt und perfekt gewürzt nach marokkanischer Art.',
    category: 'Grill'
  },
  {
    _id: 2,
    name: 'Gegrillte Leber',
    image: grille2_image,
    price: 9.49,
    description: 'Leber am Spieß, gegrillt und mit aromatischen Kräutern und Gewürzen verfeinert.',
    category: 'Grill'
  }
];
