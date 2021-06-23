import React from "react";
import { MetaPlugin } from "@models/MetaPlugin";
import classNames from "classnames";
import styles from "@css/components/cards/meta_card_comp.module.scss";

interface IMetaCardProps {
  data: MetaPlugin;
  className?: string;
}

const MetaCard: React.FC<IMetaCardProps> = (props: IMetaCardProps) => {
  const { data: pluginData, className: extClassName } = props,
    classes = classNames(styles["meta-card-comp"], extClassName);

  return (
    <div className={classes}>
      <div className={styles["img-container"]}>{pluginData.imageUrl && <img className={styles["img"]} src={pluginData.imageUrl} alt={pluginData.name} loading="lazy" />}</div>
      <div className={styles["body"]}>
        <h5 className={styles["title"]}>{pluginData.name}</h5>
        <p className={styles["description"]}>{pluginData.description}</p>
        {pluginData.url && (
          <a className={classNames(styles["btn-link"], "btn btn-secondary")} href={pluginData.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default MetaCard;
