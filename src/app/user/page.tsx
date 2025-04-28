type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    }, 2000);
  });
}

async function Teste() {
  const userList = await fetchUsers();

  return (
    <div>
      {userList.map((user) => (
        <p key={user.id} className="text-white mt-20">{user.name}</p>
      ))}
    </div>
  );
}

export default function User() {
  return (
    <>
      <Teste />
    </>
  );
}
