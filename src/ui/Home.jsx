import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div>
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-500">
        The best pizza.
        <br />
        <span className="text-yellow-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
