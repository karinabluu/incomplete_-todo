import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    title: '열라면 먹고 싶다',
    content: '열라면 4개 한 번에 먹고 싶다',
    isDone: false,
  },
  {
    id: uuid(),
    title: '피자먹기',
    content: '치즈크러스트는 꼭 추가하기',
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'TODO_ADD':
      state = [...state, action.payload];
      return state;

    case 'TODO_DELETE':
      state = state.filter((item) => {
        return item.id !== action.payload;
      });
      return state;

    case 'TODO_UPDATE':
      state = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      return state;

    default:
      return state;
  }
};

export default todos;
