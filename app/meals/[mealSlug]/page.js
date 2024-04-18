import Link from "next/link";
import React from "react";

const MealsDetailsPage = ({ params }) => {
  return (
    <main>
      <h1>Meals Details Page</h1>
      <p>params.mealSlug: {params.mealSlug}</p>
      <p>
        <Link href="/meals">All Meals</Link>
      </p>
      <p>
        <Link href="/">HOME</Link>
      </p>
    </main>
  );
};

export default MealsDetailsPage;
