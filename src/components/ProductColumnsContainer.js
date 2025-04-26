import React from 'react';
import ProductColumn from './ProductColumn';
import './ProductColumnsContainer.css';
import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import a4 from '../images/a4.jpg';
import a5 from '../images/a5.jpg';
import a6 from '../images/a6.jpg';
import a7 from '../images/a7.jpg';
import a8 from '../images/a8.jpg';
import a9 from '../images/a9.jpg';
import a10 from '../images/a10.jpg';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import b4 from '../images/b4.jpg';
import b5 from '../images/b5.jpg';
import b6 from '../images/b6.jpg';
import b7 from '../images/b7.jpg';
import b8 from '../images/b8.jpg';
import b9 from '../images/b9.jpg';
import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
import d3 from '../images/d3.jpg';
import d4 from '../images/d4.jpg';
import d5 from '../images/d5.jpg';
import d6 from '../images/d6.jpg';
import d7 from '../images/d7.jpg';
import d8 from '../images/d8.jpg';
import d9 from '../images/d9.jpg';
import d10 from '../images/d10.jpg';
import d11 from '../images/d11.jpg';
import d12 from '../images/d12.jpg';

const ProductColumnsContainer = () => {
  // Données pour la première colonne : ARTICLES À LA UNE
  const featuredProducts = [
    {
      id: 1,
      title: "Rouleau câble 30AWG 200 mètre Vert",
      image: a1,
      price: "28,000"
    },
    {
      id: 2,
      title: "Contrôleur de température et humidité",
      image: a2,
      price: "280,000"
    },
    {
      id: 3,
      title: "Module WiFi ESP8266 NodeMCU",
      image: a3,
      price: "35,000"
    },
    {
      id: 4,
      title: "Capteur ultrason HC-SR04",
      image: a4,
      price: "12,000"
    },
    {
      id: 5,
      title: "Kit Arduino Uno R3",
      image: a5,
      price: "85,000"
    },
    {
      id: 6,
      title: "Display LCD 16x2 I2C",
      image: a6,
      price: "18,000"
    },
    {
      id: 7,
      title: "Display LCD 16x2 I2C",
      image: a7,
      price: "18,000"
    },
    {
      id: 8,
      title: "Display LCD 16x2 I2C",
      image: a8,
      price: "18,000"
    },
    {
      id: 9,
      title: "Display LCD 16x2 I2C",
      image: a9,
      price: "18,000"
    },
    {
      id: 10,
      title: "Display LCD 16x2 I2C",
      image: a10,
      price: "18,000"
    }
    
  ];

  // Données pour la deuxième colonne : NOUVEAUX ARTICLES
  const newProducts = [
    {
      id: 11,
      title: "Machine de découpe Cameo 5WM Blanc",
      image: b1,
      price: "2,400,000"
    },
    {
      id: 12,
      title: "Compteur horaire 6-80V AC/DC 0-99999.9h",
      image: b2,
      price: "190,000"
    },
    {
      id: 13,
      title: "Module caméra 8MP pour Raspberry Pi",
      image: b3,
      price: "120,000"
    },
    {
      id: 14,
      title: "Relay Module 4 Channel 5V",
      image: b4,
      price: "15,000"
    },
    {
      id: 15,
      title: "Step Motor Nema 17",
      image: b5,
      price: "45,000"
    },
    {
      id: 16,
      title: "Alimentation 12V 5A",
      image: b6,
      price: "35,000"
    },
    {
      id: 17,
      title: "RÉSISTANCE CARBONE 1/4W 5%",
      image: b7,
      price: "0,039"
    },
    {
      id: 18,
      title: "CARTE RFID PROGRAMMABLE 125khz",
      image: b8,
      price: "1,150",
      oldPrice: "1,550"
    },
    {
      id: 19,
      title: "DHT22 Capteur température et humidité",
      image: b9,
      price: "25,000"
    }
  ];

  // Données pour la troisième colonne : MEILLEURS ARTICLES
  const bestProducts = [
    {
      id: 20,
      title: "Raspberry Pi 4 4GB",
      image: d1,
      price: "350,000"
    },
    {
      id: 21,
      title: "LED RGB 5mm",
      image: d2,
      price: "0,750"
    },
    {
      id: 22,
      title: "Batterie LiPo 3.7V 1200mAh",
      image: d3,
      price: "28,000"
    },
    {
      id: 23,
      title: "LED RGB 5mm",
      image: d4,
      price: "0,750"
    },
    {
      id: 24,
      title: "LED RGB 5mm",
      image: d5,
      price: "0,750"
    },
    {
      id: 25,
      title: "LED RGB 5mm",
      image: d6,
      price: "0,750"
    },
    {
      id: 26,
      title: "LED RGB 5mm",
      image: d7,
      price: "0,750"
    },
    {
      id: 27,
      title: "LED RGB 5mm",
      image: d8,
      price: "0,750"
    },
    {
      id: 28,
      title: "LED RGB 5mm",
      image: d9,
      price: "0,750"
    },
    {
      id: 29,
      title: "LED RGB 5mm",
      image: d10,
      price: "0,750"
    },
    {
      id: 30,
      title: "LED RGB 5mm",
      image: d11,
      price: "0,750"
    },
    {
      id: 31,
      title: "LED RGB 5mm",
      image: d12,
      price: "0,750"
    }
  ];

  return (
    <div className="product-columns-container">
      <div className="column-wrapper">
        <ProductColumn 
          title="ARTICLES À LA UNE" 
          products={featuredProducts} 
        />
      </div>
      <div className="column-wrapper">
        <ProductColumn 
          title="NOUVEAUX ARTICLES" 
          products={newProducts} 
        />
      </div>
      <div className="column-wrapper">
        <ProductColumn 
          title="MEILLEURS ARTICLES" 
          products={bestProducts} 
        />
      </div>
    </div>
  );
};

export default ProductColumnsContainer;