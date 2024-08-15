import './Home.css';

function Home() {
  const par = 'This site is about doing mathematics operations in easy and simple way.';

  return (
    <section className="Home">
      <h1>Welcome to our Page!</h1>
      <p>{par}</p>
      {/* <p>{par}</p> */}
    </section>
  );
}

export default Home;
