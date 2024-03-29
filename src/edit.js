/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, BlockControls, InspectorControls, JustifyContentControl } from "@wordpress/block-editor";

/**
 *  import wordpress components
 *  @see https://developer.wordpress.org/block-editor/reference-guides/components
*/
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { justification, sticky, showNumbers } = attributes;

	const onChangeJustification = (newJustification) => {
		setAttributes( { justification: newJustification } )
	}

	const onChangeSticky = () => {
		setAttributes( { sticky: ! sticky } );
	}

	const onChangeShowNumbers = () => {
		setAttributes( { showNumbers: ! showNumbers } );
	}

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title="Button Position">
					<ToggleControl 
						label="Sticky"
						help={
							sticky ?
							"Sticks to top of page on scroll"
							: "Does not stick to top of page"
						}
						checked={ sticky }
						onChange={ onChangeSticky }
					/>
				</PanelBody>
				<PanelBody title="Heading Numbers">
					<ToggleControl 
						label="Show heading numbers"
						help={
							showNumbers ?
							"Shows numbers from table of contents within headings"
							: "Does not show numbers from table of contents within headings"
						}
						checked={ showNumbers }
						onChange={ onChangeShowNumbers }
					/>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<JustifyContentControl
					value={ justification }
					onChange={ onChangeJustification }
				/>
			</BlockControls>

			<div id="il-toc-btn-wrapper" className={`items-justified-${justification}`}>

				<button
					type="button"
					id="il-toc-btn"
					className="il-button il-blue">
						Table of Contents
				</button>

			</div>

		</div>
	);
}
