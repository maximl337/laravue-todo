import { shallow, mount, createLocalVue } from 'vue-test-utils';
import expect from 'expect';
import Vuex from 'vuex';
import Todo from '../../resources/js/components/Todo.vue';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todo', () => {
  let store;
  let actions;
  let mockTodo = {
    id: 1,
    text: "Bingo",
    completed: false,
    created_at: "2018-01-10 00:00:00",
    updated_at: "2018-01-10 00:00:00",
  };

  beforeEach(() => {
    actions = {
      DELETE_TODO: jest.fn(),
      TOGGLE_COMPLETE: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  });

  it('renders a single todo', () => {
    let wrapper = mount(Todo, {
      store,
      localVue,
      propsData: {
        todo: mockTodo
      }
    });
    expect(wrapper.props().todo).toBe(mockTodo);
  });

  it('calls store actions "TOGGLE_COMPLETE" on click', () => {
    let wrapper = shallow(Todo, {
      store,
      localVue,
      propsData: {
        todo: mockTodo
      }
    });
    const checkbox = wrapper.find('input');
    checkbox.trigger('click');
    expect(actions.TOGGLE_COMPLETE).toHaveBeenCalled();
  });

  it('calls store actions "DELETE_TODO" on click', () => {
    let wrapper = shallow(Todo, {
      store,
      localVue,
      propsData: {
        todo: mockTodo
      }
    });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(actions.DELETE_TODO).toHaveBeenCalled();
  });
});
