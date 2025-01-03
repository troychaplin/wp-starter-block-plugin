import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M192 64l0 176 0 32 0 176-96 0 0-176 0-32L96 64l96 0zm32 176l0-176 0-32-32 0L96 32 64 32l0 32 0 176L0 240l0 32 64 0 0 176 0 32 32 0 96 0 32 0 0-32 0-176 64 0 0 112 0 32 32 0 96 0 32 0 0-32 0-112 64 0 0-32-64 0 0-112 0-32-32 0-96 0-32 0 0 32 0 112-64 0zm96 0l0-112 96 0 0 112 0 32 0 112-96 0 0-112 0-32z" />
			</svg>
		),
	},
	edit: Edit,
	save,
} );
