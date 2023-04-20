import { ReactNode, useEffect, useState } from "react";
import { SERVICES_DATA, WHY_CHOOSE_US_DATA } from "../../helpers/constants";

import type { DataItem } from "../../helpers/constants";
import classes from "./LearnMore.module.css";
import { useParams } from "react-router-dom";

const LearnMore = () => {
  const [item, setItem] = useState<DataItem>();
  const { id } = useParams();

  useEffect(() => {
    let item = SERVICES_DATA.find((obj) => id === obj.id);
    if (!item) {
      WHY_CHOOSE_US_DATA.find((obj) => id === obj.id);
    }
    setItem(item);
  }, []);

  return (
    <div className={classes["container"]}>
      <img
        className={classes["learn-more-image"]}
        alt="image"
        src={item?.image_url}
      />
      <h1 className={classes["learn-more-header"]}>{item?.heading}</h1>
      <div className={classes["learn-more-text"]}>
        {item?.paragraphs.map((p, index): ReactNode => {
          return (
            <>
              <p key={index}>{p.text}</p>
              {p.bulletPoints ? (
                <ul>
                  {p.bulletPoints
                    ? p.bulletPoints.map((bp, index) => (
                        <li key={index}>{bp.point}</li>
                      ))
                    : null}
                </ul>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LearnMore;
