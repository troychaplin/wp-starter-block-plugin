import { useBlockProps } from '@wordpress/block-editor';
import { LeadIn, Section } from '@troychaplin79/idc-frontend-ui';

export default function Edit() {
	return (
		<div
			{ ...useBlockProps( {
				className: `idc-block`,
			} ) }
		>
			<Section>
				<LeadIn
					headerBottom="As simple as A-B-C"
					headerTop="Our Process"
					text="We take the anxiety and uncertainty out of the document apostille process in these three simple steps!"
				/>
			</Section>
		</div>
	);
}
