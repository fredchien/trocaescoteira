module.exports = function(grunt){

	// Grunt Config
	grunt.initConfig({

		// Sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compact'
			},
			dist: {
				files: {
					'public/css/style.min.css': 'assets/scss/style.scss'
				}
			}
		},

		// Watch
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: '*.html'
			},
			sass: {
	    		files: 'assets/scss/*.scss',
	    		tasks: 'css'
	    	}
		},

		// Sprite
		sprite: {
			all: {
				src: 'public/img/sprites/*.png', 
				dest: 'public/img/sprite.png',
				destCss: 'assets/scss/sprite.scss',
				cssFormat: 'scss',
				cssTemplate: 'assets/scss/icons.mustache'	
			}
		},

		// Connect
		connect: {
			server: {
				options: {
					port: 9000,
					base: '.',
					hostname: 'localhost',
					livereload: true
				}
			}
		},

		//copy files
		copy: {
			main: {
				files: [
					{cwd:'components/bootstrap/dist/js', src:'bootstrap.js', dest: 'public/js/',expand: true},
					{cwd:'components/bootstrap/dist/css', src:'bootstrap.css', dest: 'public/css/',expand: true},
					{cwd:'components/jquery/dist', src:'jquery.js', dest: 'public/js/',expand: true},
					{cwd:'components/angular', src:'angular.js', dest: 'public/js/',expand: true},
					{cwd:'components/normalize-css', src:'normalize.css', dest: 'public/css/',expand: true}
				],
			},
		}

	});

	// Load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Tasks
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('copiar', ['copy:main']);
	grunt.registerTask('live', ['connect', 'watch']);
};