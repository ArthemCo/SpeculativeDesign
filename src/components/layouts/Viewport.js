import React from 'react'

// Page Structure & Scene components
import View from '../canvas/canvas'
import Room from '../canvas/room/Room'
import Text from '../canvas/Text'
import Model from '../canvas/Model'

// Materials and Loaders from Three

// Links and data
import Sculpture from '../canvas/Sculpture'

export default ({ data, images, image }) => {

	const title = data.title || data.name

	// gets the link to previous and next rooms
	const next = data.linkto
	const prev = data.linkfrom

	// gets a random room shape
	const room = data.room
		? data.room
		// : `room${Math.floor(Math.random() * 3)}.glb`
		: `room_01.glb`

	console.log(data)

	return (
		<View center={[0, 0, 0]}>
			<Room url={`/meshes/rooms/${room}`}
				data={{ LinkA: next, LinkB: prev, images }} />
			<Model url={`/meshes/rooms/plinths/plinth-0.glb`} />
			{ data.sculpture
				? <Model url={`/meshes/sculptures/${data.sculpture}`} />
				: <Sculpture />
			}
			<Text
				string={title}
				options={
					{
						position: [0,-0.2,1.5],
						rotation: [0, 0, 0],
						color: '#fce867'
					}
				}
				size={0.2}
				bevelEnabled={true}
				height={0.2}
				bevelThickness={0.01}
				bevelSize={0.01}
				bevelSegments={1}
				curveSegments={4}
		/>
		</View>
	)
}
