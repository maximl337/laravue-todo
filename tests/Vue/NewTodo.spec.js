import { shallow, createLocalVue } from 'vue-test-utils';
import expect from 'expect';
import Vuex from 'vuex';
import NewTodo from '../../resources/js/components/NewTodo.vue';
import getters from '../../resources/js/store/getters';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('NewTodo', () => {
  let getters;
  let store;
  let actions;

  beforeEach(() => {
    getters = {
      newTodo: () => ({
        title: '',
        completed: false
      }),
    }
    actions = {
      ADD_TODO: jest.fn()
    }
    store = new Vuex.Store({
      getters,
      actions
    })
  })

  it('renders an input', () => {
    let wrapper = shallow(NewTodo, {store, localVue});
    expect(wrapper.contains('input')).toBe(true);
  });

  it('calls store actions "ADD_TODO" on keyup enter', () => {
    let wrapper = shallow(NewTodo, {store, localVue});
    const input = wrapper.find('input');
    input.trigger('keyup.enter');
    expect(actions.ADD_TODO).toHaveBeenCalled();
  });
});
