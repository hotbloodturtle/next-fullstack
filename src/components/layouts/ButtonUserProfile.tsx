const ButtonUserProfile = () => {
  return (
    <div className="dropdown dropdown-end ml-4">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="profile" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="justify-between">
          <a>
            Profile Settings <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>ADS History</a>
        </li>
        <div className="divider mt-0 mb-0" />
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default ButtonUserProfile;
