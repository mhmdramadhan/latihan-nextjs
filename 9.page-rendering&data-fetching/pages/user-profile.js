function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log("Server Side Code");

  return {
    props: {
      username: "Rama",
    },
  };
}
