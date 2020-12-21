import VueRouter from 'vue-router'
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { addLinkToHead } from '@theme/helpers/utils'
import { registerCodeThemeCss } from '@theme/helpers/other'
import Vue from 'vue'

import MCUI from "mch-ui";
import 'mch-ui/lib/mch-ui.css';

const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err);
};


export default ({
  Vue,
  siteData,
  router,
  isServer
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.use(MCUI)
  if (!isServer) {
    addLinkToHead('//at.alicdn.com/t/font_1030519_2ciwdtb4x65.css')
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }
}
