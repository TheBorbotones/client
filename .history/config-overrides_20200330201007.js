const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
        '@primary-color': '#004d40',
        '@secondary-color': '#fafafa',
        '@layout-header-background': '#1DA57A',
        '@layout-trigger-background':'#1DA57A',
        '@menu-dark-submenu-bg':'#1DA57A',
    },
  }),
);