import classes from "./AvatarOptions.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendAvatarId } from "../../../store/account-actions";
import AVATARS from "../../../resources/AVATARS";

const AvatarOptions = (props) => {
	const [translateVal, setTranslateVal] = useState(-4.2);
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.main.userId);

	const leftArrowClickHandler = () => {
		if (Math.round((translateVal + Number.EPSILON) * 10) / 10 === -4.2) return;
		setTranslateVal((prevVal) => prevVal + 100);
	};

	const rightArrowClickHandler = () => {
		if (
			Math.round(translateVal + 4.2) / 100 - 2 <
			-Math.ceil(AVATARS.length / 4)
		) {
			return;
		}
		setTranslateVal((prevVal) => prevVal - 100);
	};

	const setAvatarHandler = (avatarId) => {
		const avatarObj = AVATARS.find((avatar) => avatar.id === avatarId);
		props.onSetAvatar(avatarObj.avatar);

		dispatch(sendAvatarId(avatarId, userId));
		//update user object
		props.setIsVisible(false);
	};

	// console.log(translateVal);

	return (
		<div className={classes.AvatarOptions}>
			<div
				className={`${classes["AvatarOptions__arrows"]} ${classes["AvatarOptions__arrows--left-arrow"]}`}
				onClick={leftArrowClickHandler}
			>
				<AiOutlineArrowLeft />
			</div>

			<div
				className={`${classes["AvatarOptions__arrows"]} ${classes["AvatarOptions__arrows--right-arrow"]}`}
				onClick={rightArrowClickHandler}
			>
				<AiOutlineArrowRight />
			</div>

			<div
				className={classes["AvatarOptions__container"]}
				style={{ transform: `translateX(${translateVal}%)` }}
			>
				{AVATARS.map((avatar) => {
					return (
						<div
							className={classes["AvatarOptions__option"]}
							key={avatar.id}
							onClick={() => setAvatarHandler(avatar.id)}
						>
							{avatar.avatar}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AvatarOptions;
