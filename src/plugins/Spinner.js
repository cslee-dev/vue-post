import SpinnerTemplate from '@/components/spinners/cornerSpinner.vue'

const Spinner ={
  install(Vue, options){
    Vue.component('mkd-spinner', SpinnerTemplate)

    function setSpinner(command){
      if(command === 0){
      }
    }
    Vue.prototype.$mkdSpinner = {
      setSpinner
    }
  }
}

export default Spinner
export const START = 0
export const END = 1
