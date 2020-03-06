import { shallow } from 'vue-test-utils';
import expect from 'expect';
import TodoApp from '../../resources/js/components/TodoApp.vue';

describe('TodoApp', () => {
  it('renders the correct title on the page', () => {
    let wrapper = shallow(TodoApp);
    expect(wrapper.html()).toContain('todos');
  });
});
