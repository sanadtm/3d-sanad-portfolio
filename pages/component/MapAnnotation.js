/** @format */

import React from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup } from "react-simple-maps";

const MapAnnotationComponent = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [45.523064, -122.676483, 0],
				center: [-5, -3],
				scale: 1100,
			}}
			style={{ with: "100%", height: "100%" }}>
			<Geographies geography="/features.json" fill="#FF9F00" stroke="#FFFFFF" strokeWidth={2}>
				{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
			</Geographies>
			<Annotation
				subject={[2.3522, 48.8566]}
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: "white",
					strokeWidth: 3,
					strokeLinecap: "round",
				}}>
				<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
					{"Portland"}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default MapAnnotationComponent;
