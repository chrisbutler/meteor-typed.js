Package.describe({
  name: 'chrisbutler:typed.js',
  version: '1.1.1',
  summary: 'Typed.js is a jQuery plugin that types.',
  git: 'https://github.com/chrisbutler/meteor-typed.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.addFiles('typed.js', 'client');
  api.export('Typed', 'client');
});
