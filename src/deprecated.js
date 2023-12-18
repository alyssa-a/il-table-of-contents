import { useBlockProps } from '@wordpress/block-editor';
import deprecatedTOCPanel from './deprecated-TOCPanel';
import TOCPanel from './TOCPanel';

const attributes = {
    "justification": {
        "type": "string",
        "default": "left"
    },
    "sticky": {
        "type": "boolean",
        "default": false
    }
}

const v1 = {
    attributes,
    save( { attributes } ) {
        const { justification, sticky } = attributes;
    
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
}

export default [ v1 ];