import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: "It's my first post!", likesCount: 12 },
      { id: 3, message: 'My name is Ravil', likesCount: 7 },
      { id: 4, message: 'I love React!', likesCount: 45 },
    ],
    newPostText: 'asdasd',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Naruto' },
      { id: 2, name: 'Sakura' },
      { id: 3, name: 'Sasuke' },
      { id: 4, name: 'Pain' },
      { id: 5, name: 'Deidara' },
      { id: 6, name: 'Itachi' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hola' },
      { id: 3, message: 'Hallo' },
      { id: 4, message: 'Hello' },
      { id: 5, message: 'Konnichiwa' },
      { id: 6, message: 'Привет' },
    ],
  },
  navbar: {
    friendsOnline: [
      { id: 1, name: 'Naruto' },
      { id: 2, name: 'Sakura' },
      { id: 3, name: 'Sasuke' },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
