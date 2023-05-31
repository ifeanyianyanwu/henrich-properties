import { ReactNode, useEffect, useState } from "react";
import { SERVICES_DATA, WHY_CHOOSE_US_DATA } from "../../helpers/constants";

import type { DataItem } from "../../helpers/constants";
import classes from "./LearnMore.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../../layout";

const LearnMore = () => {
  const [item, setItem] = useState<DataItem>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let item = SERVICES_DATA.find((obj) => id === obj.id);
    if (!item) {
      item = WHY_CHOOSE_US_DATA.find((obj) => id === obj.id);
    }
    item ? setItem(item) : navigate("/404");
  }, []);

  const element = document.getElementById("nav-bar");

  useEffect(() => {
    element?.classList.add("nav_bg");

    return () => element?.classList.remove("nav_bg");
  }, []);

  return (
    <section className={classes.page_container}>
      <Container>
        <img
          className={classes["learn-more-image"]}
          alt="image"
          src={item?.image_url}
        />
        <h1 className={classes["learn-more-header"]}>{item?.heading}</h1>
        <div className={classes["learn-more-text"]}>
          {item?.paragraphs.map((p, index): ReactNode => {
            return (
              <span key={index}>
                <p key={index}>{p.text}</p>
                {p.bulletPoints ? (
                  <ul key={index}>
                    {p.bulletPoints
                      ? p.bulletPoints.map((bp, index) => (
                          <li key={index}>{bp.point}</li>
                        ))
                      : null}
                  </ul>
                ) : null}
              </span>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default LearnMore;
