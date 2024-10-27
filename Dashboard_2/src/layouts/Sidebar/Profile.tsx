import profile from '@/assets/images/profile.jpg';

const Profile: React.FC = () => (
  <div className="flex items-center gap-2 px-6">
    <img
      src={profile}
      alt="profile"
      className="aspect-square h-10 rounded-full"
    />
    <div className="text-xs">
      <p className="font-semibold text-white">Fandaww Punx</p>
      <p className="opacity-70">fundaww6@gmail.com</p>
    </div>
  </div>
);

export default Profile;
