"use client";

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import EventRenderStyle from '../Style/ComponentStyle-EXPOTEC.module.css'

interface MarkerPosition {
	name: string;
	lat: number;
	lng: number;
}

export const Map = () => {
	const mapRef = React.useRef<HTMLDivElement>(null)

	const markerPositions: MarkerPosition[] = [
		{ name: "CI2A", lat: 9.88978330759717, lng: -84.08857106510652 },
		{ name: "Edificio A", lat: 9.889216301483811, lng: -84.08832970481312 },
		{ name: "Edificio B", lat: 9.888993973879364, lng: -84.08829840525526 },
		{ name: "Diseño Gráfico", lat: 9.889766268431677, lng: -84.08935444692479 },
		{ name: "Escuela San Juan Bosco", lat: 9.88975603098589, lng: -84.0870353958373 },
		{ name: "Departamento de Electrónica", lat: 9.889424372182015, lng: -84.08952828583884 },
		{ name: "Departamento de Informática", lat: 9.889605268901967, lng: -84.08948033924906 },
		{ name: "Departamento de Electromecánica", lat: 9.88930980420788, lng: -84.08910288737212 },
		{ name: "Centro Infantil Pasitos Pequeños", lat: 9.889906636728199, lng: -84.0880868548137 },
		{ name: "Departamento de Mecánica de Presión", lat: 9.890031147905809, lng: -84.0894525146436 },
		{ name: "Departamento de Dibujo Arquitectónico", lat: 9.889508790663717, lng: -84.08911308877421 },
	];

	useEffect(() => {
		const initMap = async () => {


			const loader = new Loader({ // CREA EL NUEVO LOADER
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
				version: 'weekly'
			})

			const { Map } = await loader.importLibrary('maps')
			const { Marker } = await loader.importLibrary('marker')

			// MAP OPTIONS DOCUMENTATION https://developers.google.com/maps/documentation/
			const fristPosition = { lat: 9.889545498324285, lng: -84.08808911690134 }
			const mapOptions: google.maps.MapOptions = {
				center: fristPosition,
				zoom: 18.5,
				mapId: "EXPOTEC MAP",
				disableDefaultUI: true,
			}

			// SETUP DEL MAP
			const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

			// MARKERS
			markerPositions.forEach((markerPositions) => {
				new Marker({
					map: map,
					position: { lat: markerPositions.lat, lng: markerPositions.lng },
					title: markerPositions.name
				})
			})
		}
		initMap()
	}, [])

	return (
		<div className={EventRenderStyle.Map} style={{}} ref={mapRef}></div>
	)
}
