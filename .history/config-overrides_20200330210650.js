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
      '@primary-color': '#5d4037',
      '@secondary-color': '#fafafa',
    },
  }),
);

/*

'@primary-color': '#fdd835',
        '@secondary-color': '#FAFAFA',
        '@layout-header-background': '#ffff6b',
        '@layout-trigger-background':'#c6a700',
        '@menu-dark-submenu-bg':'#c6a700',
*/