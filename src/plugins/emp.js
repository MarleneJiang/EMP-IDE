var EMP = {};

EMP.install = function(Vue) {
  Vue.prototype.$emp = {
    funcName: func =>
      func("")
        .split("(")[0]
        .split(".")[1],
    deviceInfo: () => `emp_ide.device_info()\r`,
    memoryStatus: () => `emp_ide.memory_status()\r`,
    memoryAnalysing: filename => `emp_ide.memory_analysing('${filename}')\r`,
    runScript: filename => `exec(open('${filename}').read())\r`,
    tree: () => "emp_ide.tree()\r",
    getCode: filename => `emp_ide.get_code('${filename}')\r`,
    newFile: filename => `emp_ide.new_file('${filename}')\r`,
    delFile: filename => `emp_ide.del_file('${filename}')\r`,
    newFolder: path => `emp_ide.new_folder('${path}')\r`,
    delFolder: path => `emp_ide.del_folder('${path}')\r`,
    rename: (old, _new) => `emp_ide.rename('${old}','${_new}')\r`,
    install: pkg => `emp_ide.emp_install('${pkg}')\r`
  };
};

export default EMP;
