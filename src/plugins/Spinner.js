import SpinnerTemplate from '@/components/spinners/cornerSpinner.vue'

const Spinner = {
  install(Vue, options) {
    const spinnerComponent = Vue.component('mkd-spinner', SpinnerTemplate)

    function show() {
      document.getElementById('spinner').style.display = "flex";
    }

    function hide() {
      document.getElementById('spinner').style.display = "none";
    }

    Vue.prototype.$mkdSpinner = {
      show, hide
    }
  }
}

export default Spinner
export const START = 0
export const END = 1
