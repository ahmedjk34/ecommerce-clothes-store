import axios from "axios";
import { useEffect, useState } from "react";
import heroImg from "../assets/menHero.jpg";
import styles from "../styles/pages/shop.module.scss";

import { Item } from "../Types";
import ShopItem from "./ShopItem";

type Props = {};

function Men({}: Props) {
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    axios
      .get("https://ecommerce-clothes-store.onrender.com/men-clothes")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.shop}>
      <div className={styles.shopGradient}></div>
      <div className={styles.shopHero}>
        <img src={heroImg} className={styles.heroImg}></img>
        <h1>MEN'S CLOTHING</h1>
      </div>
      <div className={styles.shopMain}>
        {data?.map((item, index) => (
          <ShopItem item={item} key={`item${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Men;
