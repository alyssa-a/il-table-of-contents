import { useBlockProps } from '@wordpress/block-editor';
import TOCPanel from './TOCPanel';

const v1 = {
    save() {
        return (
            <div { ...useBlockProps.save() }>
    
                <button type="button" id="toc-btn" class="il-button il-blue" data-toggle="modal" data-target="#toc-modal">
                    Table of Contents
                </button>
    
                <TOCPanel />
    
            </div>
        );
    }
}

const v2 = {
    save( { attributes } ) {
        const { justification, sticky } = attributes
    
        return (
            <div { ...useBlockProps.save() }>
                
                <div id="toc-btn-wrapper" className={`items-justified-${justification} ${ sticky ? 'toc-btn-sticky' : '' }`} >
                    <button
                        type="button"
                        id="toc-btn"
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

export default [ v1, v2 ];