'use client';

const errorPage = ({ error }) => {
  return (
    <main className="error">
      <h1>An errror occured!</h1>
      <p>Failed to create a meal</p>
    </main>
  );
};

export default errorPage;
