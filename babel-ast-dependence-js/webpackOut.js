(function(gragh) {
	function require(module) {
		// 相对路径转换成绝对路径的方法
		function localRequire(relativePath) {
			return require(gragh[module].dependencies[relativePath])
		}
		const exports = {};
		(function(require, exports, code) {
			eval(code)
		})(localRequire, exports, gragh[module].code)

		return exports;
	}
	require('./src/index.js')
})({
	"./src/index.js": {
		"dependencies": {
			"./message.js": "./src/message.js"
		},
		"code": "\"use strict\";\n\nvar _message = require(\"./message.js\");\n\n// index.js\nconsole.log(_message.message);"
	},
	"./src/message.js": {
		"dependencies": {
			"./word.js": "./src/word.js"
		},
		"code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.message = void 0;\n\nvar _word = require(\"./word.js\");\n\n// message.js\nvar message = \"say \".concat(_word.word);\nexports.message = message;"
	},
	"./src/word.js": {
		"dependencies": {},
		"code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.word = void 0;\n// word.js\nvar word = 'hello world !';\nexports.word = word;"
	}
})