import React from 'react';
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({songs , image , follows , title }) => {
   

   return (
      <>
         <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
               <div className={styles.card}>
                  <img src={image} alt="album" />
                  <div className={styles.banner}>
                     <Chip
                        label={`${follows} Follows`}
                        size="small"
                        className={styles.chip}
                     ></Chip>
                  </div>
               </div>
               <div className={styles.titleWrappers}>
                  <p>{title}</p>
               </div>
            </div>
         </Tooltip>
      </>
   );
};

export default Card;
