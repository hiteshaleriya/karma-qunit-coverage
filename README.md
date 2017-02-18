# Steps for automating test cases with karma test runner :

## First, you need to install node modules by running following commands:
    npm install -g karma-cli (for karma-cli globally)
    npm install karma –save-dev (for local karma)
    npm install grunt-karma –save-dev (grunt karma wrapper)
    npm install karma-coverage –save-dev (coverage report i.e., cobertura.xml and other formats supported too)
    npm install karma-junit-reporter –save-dev (junit report i.e., output.xml )
    npm install karma-phantomjs-launcher –save-dev (phantom launcher)
    npm install karma-qunit –save-dev (for running qunit test cases)

## After installing all the modules, now you need to make a karma config file (karma.conf.js). You can create a new by running following command:
    karma init
        or
    you can copy karma.conf.js from demo folder

## Let’s discuss about the karma.conf.js configuration attributes:
      
    * base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: './'
      
    * frameworks to use like qunit, jasmine etc
      frameworks: ['qunit']

    * list of files / patterns to load in the browser
      files: [
          'file-name.js'
      ]

    * coverage file or data-cover file
      preprocessors: {
          'file-name.js': 'coverage'
      }
    
    * test results reporter to use
      reporters: ['dots', 'coverage', 'junit']
    
    * reporter options: You can generate coverage report in different formats like, html, text, cobertura etc.    Config for coverage report as cobertura.xml in directory test_js
      coverageReporter: {
          type: 'cobertura',
          dir: './test_js',
          subdir: '.'
      } 
    
    * for junit report as output.xml in directory test_js
      junitReporter: {
          outputDir: './test_js',
          outputFile: 'output.xml',
          useBrowserName: false
      }
     
    * list of browser to use for testing like, Chrome, Firefox, IE, PhantomJS etc. 
      browsers: ['PhantomJS']
    
    * if true, Karma captures browsers, runs the tests and exits
      singleRun: true

## Finally, add following grunt task in Gruntfile.js:
    
    karma: {
        unit: {
            configFile: 'demo/karma.conf.js'       //path of your karma config file
        }
    }

## Now you can run your test cases by following command:
    
    grunt karma

and reports are generated in test_js.