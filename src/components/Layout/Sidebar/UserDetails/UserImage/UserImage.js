import { BiUserCircle } from "react-icons/bi";
import classes from "./UserImage.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AVATARS from "../../../../../resources/AVATARS";

const UserImage = (props) => {
	//fetch id if not yet available
	const avatarId = useSelector((state) => state.account.avatar.id);
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		const avatarIndex = AVATARS.findIndex((avatar) => avatar.id === avatarId);
		if (avatarId === 0) {
			setAvatar(<BiUserCircle />);
			return;
		}

		if (avatarIndex !== -1) {
			setAvatar(AVATARS[avatarIndex].avatar);
		}
	}, [avatarId]);

	return <div className={classes.UserImage}>{avatar}</div>;
};

export default UserImage;
