import classes from "./Avatar.module.css";
import SubmitButton from "../../../UI/Buttons/SubmitButton";
import RegularButton from "../../../UI/Buttons/RegularButton";
import Modal from "../../../UI/Modal/Modal";
import { useState, useEffect } from "react";
import { sendAvatarId } from "../../../store/account-actions";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import AvatarOptions from "./AvatarOptions";
import AVATARS from "../../../resources/AVATARS";

const Avatar = (props) => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [avatar, setAvatar] = useState(null);

	const dispatch = useDispatch();
	const avatarId = useSelector((state) => state.account.avatar.id);
	const userId = useSelector((state) => state.main.userId);

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

	const selectAvatarHandler = () => {
		setModalIsVisible(true);
	};

	const submitHandler = (event) => {
		event.preventDefault();
	};

	const removeAvatarHandler = () => {
		setAvatar(<BiUserCircle />);
		dispatch(sendAvatarId(0, userId));
	};

	return (
		<div className={classes.Avatar}>
			<h4>avatar</h4>
			<form className={classes["Avatar__container"]} onSubmit={submitHandler}>
				<Modal isVisible={modalIsVisible} setIsVisible={setModalIsVisible}>
					<AvatarOptions
						onSetAvatar={setAvatar}
						setIsVisible={setModalIsVisible}
					/>
				</Modal>

				<div className={classes["Avatar__image"]}>{avatar}</div>

				<div onClick={selectAvatarHandler}>
					<SubmitButton>Select Avatar</SubmitButton>
				</div>

				<div onClick={removeAvatarHandler}>
					<RegularButton>Remove</RegularButton>
				</div>
			</form>
		</div>
	);
};

export default Avatar;
