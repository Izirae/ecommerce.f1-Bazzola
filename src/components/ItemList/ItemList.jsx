import React from "react";
import Item from "../Item/Item";

export default function ItemList({ gearList }) {
	return gearList.map((item) => (
		<Item
			key={item.id}
			id={item.id}
			model={item.model}
			brand={item.brand}
			price={item.price}
			imgURL={item.imgURL}
		/>
	));
}
