module.exports = {
  title: '{{ name }}',
  sections: ['principles', 'content', 'patterns'],
  buildStep: [
    'babel src --out-dir lib --copy-files',
    'dskit copy-components --from=src --to=patterns',
  ],
  cleanupStep: 'rm -rf patterns',
}
