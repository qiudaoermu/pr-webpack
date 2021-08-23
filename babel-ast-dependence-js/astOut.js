(function (gragh) {
	function require(module) {
		console.log(module)
		// 相对路径转换成绝对路径的方法
		function localRequire(relativePath) {
			// console.log(relativePath, 'relativePath')
			return require(gragh[module].dependencies[relativePath])
		}
		const exports = {};
		(function (require, exports, code) {
			eval(code)
		})(localRequire, exports, gragh[module].code)
		console.log(exports)
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
		"dependencies": {
			"./people/people.js": "./src/people/people.js"
		},
		"code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.word = void 0;\n\nvar _people = require(\"./people/people.js\");\n\n// word.js\nvar word = \"\".concat(_people.people, \"  hello world !\");\nexports.word = word;"
	},
	"./src/people/people.js": {
		"dependencies": {},
		"code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.people = void 0;\n// message.js\nvar people = 'people';\nexports.people = people;"
	}
})
