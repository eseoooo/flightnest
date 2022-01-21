import classes from "./Modal.module.css";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = (props) => {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	useEffect(() => {
		setModalIsVisible(props.isVisible);
	}, [props.isVisible]);

	const closeModalHandler = () => {
		setModalIsVisible(false);
		props.setIsVisible(false);
	};

	const modal = modalIsVisible && (
		<div className={classes.Modal}>
			<div
				className={classes["Modal__backdrop"]}
				onClick={closeModalHandler}
			></div>

			<div className={classes["Modal__container"]}>
				<div className={classes["Modal__close"]} onClick={closeModalHandler}>
					<IoMdClose />
				</div>
				{props.children}
			</div>
		</div>
	);

	return modal;
};

export default Modal;
