import { Metadata } from "next";
import { Slider } from "@/components/shared";
import { sliderList } from "./data";

import styles from "./slider.module.scss";

export const metadata: Metadata = {
  title: "Slider",
};

const Page = () => {
  return (
    <main>
      <section className={styles.slider}>
        <Slider sliderList={sliderList} />
      </section>
    </main>
  );
};

export default Page;
