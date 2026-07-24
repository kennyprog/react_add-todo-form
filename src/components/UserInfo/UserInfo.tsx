type User = {
  id: number,
  name: string,
  username: string,
  email: string,
}

type UserInfoProps = {
  user: User;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
