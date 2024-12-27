import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
  const meals = await getMeals();
  console.log(meals);
  

  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicius meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
