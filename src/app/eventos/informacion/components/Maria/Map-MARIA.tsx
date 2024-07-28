"use client";

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import styles from '@/Style/ComponentStyle-EXPOTEC.module.css'

interface MarkerPosition {
	name: string;
	lat: number;
	lng: number;
}

export const Map = () => {
	const mapRef = React.useRef<HTMLDivElement>(null)

	const markerPositions: MarkerPosition[] = [
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
				mapId: "MARIA MAP",
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
		<div className={styles.Map} style={{}} ref={mapRef}></div>
	)
}
