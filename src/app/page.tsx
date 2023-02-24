import { getUsers } from "@/server/users";

export const revalidate = 10;
const Home = async () => {
  const users = await getUsers();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="badge">ERR</div>
      <div className="flex justify-center">
        <button className="btn">Button 1</button>
        <button className="btn">Button 2</button>
        <div>{JSON.stringify(users)}</div>
      </div>
    </>
  );
};

export default Home;
