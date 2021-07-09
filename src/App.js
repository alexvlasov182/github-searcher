import Input from './components/Input/Input';
import Title from './components/Title/Title';
import MessageBox from './components/MessageBox/MessageBox';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <Title />
      <Input />
      <MessageBox />
    </div>
  );
}

export default App;
