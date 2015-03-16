Package.describe({
  name: 'chrisbutler:typed.js',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Typed.js is a jQuery plugin that types.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chrisbutler/meteor-typed.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.addFiles('typed.js', 'client');
  api.export('Typed', 'client');
});
