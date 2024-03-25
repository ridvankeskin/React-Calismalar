// başlangıç değeri

export const initialState = {
  todos: [],
  x: "",
  y: "",
  isDarkMode: true,
};

// reducer fonksiyonu

const reducer = (state, action) => {
  // aksiyonun tipine göre return edilmesi gereken veriye karar veriyotuz
  switch (action.type) {
    case "CHANGE_THEME":
      // state deki değerleri koru isDarkMode mevcut değerinin tersi olsun
      return { ...state, isDarkMode: !state.isDarkMode };

    case "CREATE":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "CLEAR":
      return { ...state, todos: [] };

    case "DELETE":
      //aksiyonun payload ı ile gönderilen id dışarısındakileri al
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // state , güncelle
      return { ...state, todos: filtred };

    default:
      return state;
  }
};

export default reducer;
