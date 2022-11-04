import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Graphics powered by d3js",
    Svg: require("@site/static/img/d3js.svg").default,
    description: (
      <>
        Nice graphs allow you to follow the evolution of your sports performance
        and will allow you to progress and maintain your passion for sports
      </>
    ),
  },
  {
    title: "Documentation built with Docusaurus",
    Svg: require("@site/static/img/docusaurus.svg").default,
    description: (
      <>Docusaurus lets you focus on your docs, and he&apos;ll do the chores.</>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/react.svg").default,
    description: <>A responsive site built with React.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
