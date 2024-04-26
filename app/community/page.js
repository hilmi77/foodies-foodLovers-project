import React from "react";
import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

const CommunityPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion:
          <span className={classes.hightlight}> Accordion Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Meal Icon" />
            <p>Share & discoer reciper</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Community Icon" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="Events Icon" />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
