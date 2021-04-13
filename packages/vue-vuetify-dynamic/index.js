const { TemplatePackage } = require('@cubejs-templates/core');

class VueVuetifyDynamicTemplate extends TemplatePackage {
  importDependencies() {
    return {
      sass: '^1.19.0',
      'sass-loader': '^8.0.0',
      'vue-cli-plugin-vuetify': '~2.0.6',
      'vuetify-loader': '^1.3.0',
      'graphql-tools': '5.0.0',
      'chart.js': '^2.9.4',
    };
  }
}

module.exports = (context) => new VueVuetifyDynamicTemplate(context);
