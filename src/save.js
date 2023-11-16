/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import TOCPanel from './TOCPanel';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const { justification, sticky } = attributes

	return (
		<div { ...useBlockProps.save() }>
			
			<div id="il-toc-btn-wrapper" className={`items-justified-${justification} ${ sticky ? 'toc-btn-sticky' : '' }`} >
				<button
					type="button"
					id="il-toc-btn"
					className="il-button il-blue"
					data-toggle="modal"
					data-target="#toc-modal">
						Table of Contents
				</button>
			</div>

			<TOCPanel />

		</div>
	);
}
