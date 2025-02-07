import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
				<path d="M352 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 384zM384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384z" />
			</svg>
		),
	},
	edit: Edit,
	save,
} );
