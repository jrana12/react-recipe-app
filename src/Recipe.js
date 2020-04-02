import React from 'react';
import './Recipe.css'

const Recipe = ({title,calories,img,ingredients}) => {
	return(
			<div className="content">
				<h1>{title}</h1>
				<img src={img} alt=""/>
				<p className="ing-declaration">Ingredients:</p>
				<ul>
					{ingredients.map(ingredient => (
						<li>{ingredient.text}</li>
						))}
				</ul>
			</div>
		);
}
export default Recipe;