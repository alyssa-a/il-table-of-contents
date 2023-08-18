const TOCPanel = () => {
    return (
        <div class="modal fade" id="toc-modal" tabindex="-1" role="dialog" aria-labelledby="toc-modal-label" aria-hidden="true">
			<div class="modal-dialog modal-dialog-slideout" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h2 class="modal-title" id="toc-modal-label">Table of Contents</h2>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
                        <nav id="toc"></nav>
					</div>
					<div class="modal-footer">
						<button type="button" class="il-button il-blue" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
    );
}

export default TOCPanel;