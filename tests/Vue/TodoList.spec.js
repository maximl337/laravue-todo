import { shallow, mount, createLocalVue } from 'vue-test-utils';
import expect from 'expect';
import Vuex from 'vuex';
import TodoList from '../../resources/js/components/TodoList.vue';
import moxios from 'moxios';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList', () => {
  let getters;
  let store;
  let actions;

  beforeEach(() => {
    moxios.install(axios);
    getters = {
      todos: jest.fn()
    }
    actions = {
      GET_TODOS: jest.fn()
    }
    store = new Vuex.Store({
      getters,
      actions
    })
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('shows todos fetched from api', () => {
    let wrapper = mount(TodoList, {store, localVue});
    moxios.stubRequest('/api/todos', {
      status: 200,
      response: [
        {
          id: 1,
          text: "Bingo",
          completed: false,
          created_at: "2018-01-10 00:00:00",
          updated_at: "2018-01-10 00:00:00",
        }
      ],
    });
    moxios.wait(() => {
      expect(wrapper.html()).toContain('Bingo');
      done();
    });
  });
});
