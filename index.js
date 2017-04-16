module.exports = function(kibana) {
	return new kibana.Plugin({
		id: 'ob-kb-percent',
		name: 'ob-kb-percent',
		require: ['kibana', 'elasticsearch'],
		uiExports: {
			visTypes: ['plugins/ob-kb-percent/ob-kb-percent']
		}
	});
};