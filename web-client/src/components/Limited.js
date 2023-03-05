import styles from "../styles/Menu.module.css";
import { MenuItem } from "./MenuItem";
export const Limited = ({ item }) => {
  return (
    <>
      <section
        className={`flex flex-col justify-center items-center mt-0 text-white${styles.limited} mx-16 py-16`}
      >
        <h1 className="font-[akira] text-4xl tracking-[0.1em]">
          {" "}
          LIMITED EDITION <span className={styles.stroke}>CUISINE</span>
        </h1>
        <p className="tracking-[0.58em] text-sm mt-1 mb-4">
          GET A FREE LE NFT WITH EACH ORDER
        </p>
        <MenuItem
          name={item.name}
          price={item.price}
          id={item.id}
          src={item.image}
          sm={true}
          desc={item.description}
        />{" "}
      </section>
    </>
  );
};
