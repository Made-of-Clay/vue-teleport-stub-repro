import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('HelloWorld', () => {
  it('renders properly', async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    await wrapper.find('#increment').trigger('click')

    console.log(wrapper.html())

    wrapper.findAll('.count').forEach((el) => {
      expect(el.text()).toBe('1')
    })
  })
})
