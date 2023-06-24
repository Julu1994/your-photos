import { GetStaticPaths, GetStaticProps } from 'next';
import { User } from '../../interfaces';



type UserPageProps = {
  user: User;
};

export default function UserPage({ user }: UserPageProps) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>User details...</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const paths = users.map(user => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`);
  const user: User = await res.json();

  return {
    props: { user },
  };
};
