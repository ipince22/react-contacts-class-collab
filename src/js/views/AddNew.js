import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function AddNew(props) {
	const fullname = useRef(null);
	const email = useRef(null);
	const phone = useRef(null);
	const address = useRef(null);
	const { store, actions } = useContext(Context);
	const [ifullname, SetIfullname] = useState(store.contacts[props.match.params.id].fullname);
	const [iemail, SetIemail] = useState(store.contacts[props.match.params.id].email);
	const [iphone, SetIphone] = useState(store.contacts[props.match.params.id].phone);
	const [iaddress, SetIaddress] = useState(store.contacts[props.match.params.id].address);

	return (
		<>
			<div className="mx-auto">
				<h1>Edit Contact Info</h1>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						value={ifullname}
						className="form-control"
						placeholder="Enter Name"
						ref={fullname}
						onChange={event => SetIfullname(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						type="text"
						value={iemail}
						className="form-control"
						placeholder="Enter Email"
						ref={email}
						onChange={event => SetIemail(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						type="text"
						value={iphone}
						className="form-control"
						placeholder="Enter Phone #"
						ref={phone}
						onChange={event => SetIphone(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						type="text"
						value={iaddress}
						className="form-control"
						placeholder="Enter Address"
						ref={address}
						onChange={event => SetIaddress(event.target.value)}
					/>
				</div>
				<button
					className="btn btn-large btn-primary"
					onClick={() => {
						actions.saveInfo(
							{
								agenda_slug: "Cohort-V",
								full_name: ifullname,
								email: iemail,
								phone: iphone,
								address: iaddress
							},
							store.contacts[props.match.params.id].id,
							props
						);
					}}>
					SAVE
				</button>
				<Link to="/rigo">back to contacts</Link>
			</div>
		</>
	);
}

export default AddNew;
