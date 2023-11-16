const TOCPanel = () => {
    return (
        <div id="il-toc-panel" className="il-formatted" aria-labelledby="il-toc-heading" tabIndex="-1" role="dialog" aria-hidden="true" style="display:none;">
			<div className="il-toc-panel-content">

				<div className="il-toc-panel-header">
					<h2 id="il-toc-heading">Table of Contents</h2>
					<button type="button" className="il-toc-close-btn" title="Close modal" aria-label="Close modal"><span className="il-icon">cancel</span></button>
				</div>

				<div className="il-toc-panel-body">
                    <nav id="toc"></nav>
				</div>

				<div className="il-toc-panel-footer">
					<button type="button" className='il-toc-close-btn il-button'>Close</button>
				</div>

			</div>
		</div>
    );
}

export default TOCPanel;