'use client';

const errorPage = ({ error }) => {
  return (
    <main className="error">
      <h1>An errror occured!</h1>
      <p>Failed to fetch data please try again later...</p>
    </main>
  );
};

export default errorPage;
