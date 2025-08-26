import React from 'react';
import { ScrollView } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  {
    id: "1",
    name: "Pantene แพนทีน อินเทนซีฟ ครีมดิ้ง สะบู แชมพู+ครีมนวด ขนาด 500 มล.",
    price: "599",
    stock: "2",
    cate: "ผลิตภัณฑ์ดูแลผม",
    pic: "http://it2.sut.ac.th/labexample/pics/pantene.jpg"
  },
  {
    id: "2",
    name: "ลอรีอัล ปารีส เอลแซฟ แฮร์ครีมออยล์ เอ็กซ์ตร้าออดินารี่ ออยล์ 100 มล.",
    price: "259",
    stock: "0",
    cate: "ผลิตภัณฑ์ดูแลผม",
    pic: "http://it2.sut.ac.th/labexample/pics/elseve.jpg"
  },
  {
    id: "3",
    name: "Microsoft Surface Pro 7 Laptop with Type Cover",
    price: "38900",
    stock: "5",
    cate: "Computer",
    pic: "http://it2.sut.ac.th/labexample/pics/surface.jpg"
  },
  {
    id: "4",
    name: "Desktop PC DELL Optiplex 3080SFF",
    price: "14400",
    stock: "3",
    cate: "Computer",
    pic: "http://it2.sut.ac.th/labexample/pics/dell.jpg"
  },
  {
    id: "5",
    name: "ตู้เย็นซัมซุง ขนาด 7.4 คิว",
    price: "6990",
    stock: "10",
    cate: "เครื่องใช้ไฟฟ้า",
    pic: "http://it2.sut.ac.th/labexample/pics/fridge.jpg"
  },
  {
    id: "6",
    name: "ตู้เย็นLG ขนาด 7.4 คิว",
    price: "6990",
    stock: "0",
    cate: "เครื่องใช้ไฟฟ้า",
    pic: "https://assets.central.co.th/TOSHIBA-DoubleDoorRefrigerator64CubicSilverGRRT234WEDMTHSS-MKP1596263-5?$JPEG$&wid=550"
  },
  {
    id: "7",
    name: "iPhone 12 Pro",
    price: "34990",
    stock: "15",
    cate: "อุปกรณ์อิเล็กทรอนิก",
    pic: "https://www.iphone-droid.net/spec/wp-content/uploads/2020/10/iPhone-12-Pro-Spec-and-Price-1-600x600.jpg"
  },
  {
    id: "8",
    name: "GARMIN Smart Watch",
    price: "4990",
    stock: "8",
    cate: "อุปกรณ์อิเล็กทรอนิก",
    pic: "https://mediam.dotlife.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/g/a/garmin_forerunner_965_-_black.001.jpeg"
  }
  

];

export default function App() {
  return (
    <ScrollView>
      {products.map(item => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          stock={item.stock}
          cate={item.cate}
          pic={item.pic}
        />
      ))}
    </ScrollView>
  );
}
