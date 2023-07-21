import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import HelloWorld  from "@/components/HelloWorld.vue";

/**  The result after call function find, findAll will be a DOMWrapper
 * API reference
 * .text(): return content of element selected
 * .html() return HTML code of element selected
*/
describe.skip('interact with the DOM', () => {
    it('find element', () => {
        const wrapper = mount(HelloWorld)
        const h1 = wrapper.find('h1') //find by tag name
        wrapper.find('h1.title') //find by tag name and class
        wrapper.find({ ref: 'span' }) // find by attributes
        console.log(h1.text());
        expect(true).toBe(true)
    })

    it('findAll element', () => {
        const wrapper = mount(HelloWorld)
        const h1 = wrapper.findAll('h1') //find by tag name
        console.log(h1.length);
        expect(true).toBe(true)
    })

    it('check element exist or not', () => {
        const wrapper = mount(HelloWorld)
        const existBtn = wrapper.find('button')
        expect(existBtn.exists()).toBe(true)
    })

    it('check element visible state', () => {
        const wrapper = mount(HelloWorld)
        const existBtn = wrapper.find('button')
        expect(existBtn.isVisible()).toBe(true)
    })

    it('get list attribute of element', () => {
        const wrapper = mount(HelloWorld)
        const existBtn = wrapper.find('button')
        const attributes = existBtn.attributes();
        expect(attributes.class).toBe('click-btn');
    })

    it('get list classes of element', () => {
        const wrapper = mount(HelloWorld)
        const existBtn = wrapper.find('button')
        const classList = existBtn.classes();
        expect(classList).toContain('click-btn');
    })
})
/**
 * .trigger(): send an evnet to element.
 * .setValue(): set value for input element.
 * .setChecked(): set state checked for checkbox or radio.
 */
describe('sent event with the DOM', () => {
    it('trigger ["click"] event', async () => {
        const wrapper = mount(HelloWorld)
        const button = wrapper.find('button.click-btn')
        await button.trigger('click');
        expect(wrapper.vm.isClick).toBe(true)
    })
    /** 
     * .setValue() is used to set the value of input elements like: input, textarea, select,..
    */
    it('set value', async () => {
        const wrapper = mount(HelloWorld)
        const input = wrapper.find('input')
        await input.setValue('Hello, World!');
        expect(wrapper.vm.inputValue).toBe('Hello, World!')
    })

    it('set state for checkbox or radio', async () => {
        const wrapper = mount(HelloWorld)
        const checkbox = wrapper.find('input[type="checkbox"]')
        await checkbox.setChecked()
        expect(wrapper.vm.isChecked).toBe(true)
    })
})