import React from 'react';

import './AppTripRow.css';
import {Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faCar,
	faChair,
	faIndustry,
	faMoneyBill,
	faPaintBrush,
	faPhone,
	faSuitcase, faSuitcaseRolling
} from "@fortawesome/free-solid-svg-icons";

import Moment from 'react-moment';
import 'moment/locale/mk';

const appTripRow = (props) => {
	return (
		<Row>
			<div className="col-md-4">
				<div className="product product-border">
					<div className="product-header">
						<div className="row">
							<div className="col-lg-7 col-md-12">
								<div className="driver-name">
									<p>{props.trip.driver.name}</p>
								</div>
							</div>
							<div className="col-lg-5 col-md-12">
								<div className="driver-number">
									<p><FontAwesomeIcon icon={faPhone}/> {props.trip.telNumber.number}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="product-block">
						<div className="row trip-info">
							<div className="col-12">
								<div className="free-spaces">
									<p>
										<FontAwesomeIcon icon={faChair}/> Слободни места: {props.trip.availableSeats}
									</p>
								</div>
							</div>
							<div className="col-12">
								<div className="price">
									<p>
										<FontAwesomeIcon icon={faMoneyBill}/> Цена: {props.trip.price}ден.
									</p>
								</div>
							</div>
							<div className="col-12">
								<p>
									<FontAwesomeIcon icon={faSuitcaseRolling}/> Поаѓање: <Moment locale="mk" date={props.trip.startTime} format="Do MMMM, hh:mm" /> часот
								</p>
							</div>
						</div>
						<div className="row car-info">
							<p>
								<FontAwesomeIcon icon={faCar}/> Возило: {props.trip.car.manufacturer} {props.trip.car.model} <br />
								<FontAwesomeIcon icon={faPaintBrush}/> Боја: {props.trip.car.color}
							</p>
						</div>
					</div>
					<div className="product-footer">
						<div className="row">
							<div className="col-md-12 text-center">
								<p>Објавено на <Moment locale="mk" date={props.trip.startTime} format="Do MMMM, hh:mm" /> часот</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Row>
	)
};

export default appTripRow;