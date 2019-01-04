import VeeValidate from 'vee-validate';
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const localVue = createLocalVue();
localVue.use(VeeValidate);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue,
    })
    expect(wrapper.text()).to.include(msg)
  })
})
