var exec = require('child_process').exec,
  epiq_dir = '../../../../../../profiles/recruiter/themes/epiq'
  cmd = 'cd node_modules/recruiter_epiq_deps && gulp styleguide-kss --epiq_dir ' + epiq_dir;

exec(cmd, function (error, stdout, stderr) {
  // command output is in stdout
  console.log(stdout);
});