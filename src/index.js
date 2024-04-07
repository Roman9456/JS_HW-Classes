import './css/style.css';

import './js/app';

// Импорт всех необходимых классов персонажей
import Bowman from './js/classes/Bowman';
import Daemon from './js/classes/Daemon';
import Zombie from './js/classes/Zombie';
import Undead from './js/classes/Undead';

// Экспорт всех классов персонажей для использования в других модулях
export { Bowman, Daemon, Zombie, Undead };