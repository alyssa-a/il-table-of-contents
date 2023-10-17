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

export default [ v1 ];