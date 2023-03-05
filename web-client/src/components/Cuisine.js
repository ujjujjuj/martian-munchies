import styles from "../styles/Menu.module.css";
import { MenuItem } from "./MenuItem";
export const Cuisine = ({ items }) => {
  console.log(items);
  return (
    <>
      <section className=" px-24">
        <h1 className="font-[akira] text-4xl tracking-[0.1em] mb-8">
          OUR <span className={styles.stroke}>ELUSIVE</span> CUISINE :
        </h1>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <MenuItem
              key={idx}
              name={item.name}
              price={item.price}
              src={item.image}
              desc={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};
