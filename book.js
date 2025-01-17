module.exports = function(RED) {
	const XLSX = require('xlsx');

	function BookNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', function(msg) {
			var option = {
				type: "buffer",
				raw: false,
				// dateNF: "yyyy-mm-dd",
				password: undefined,
				cellNF: true,
				cellStyles: true,
				WTF: true,
			};
			msg.payload = XLSX.read(msg.payload, option);
			node.send(msg);
		});
	}
	RED.nodes.registerType("book",BookNode);
}
