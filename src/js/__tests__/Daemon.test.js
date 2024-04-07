import Daemon from '../classes/Daemon';


test('Daemon initialization', () => {
    const daemon = new Daemon('Sesshomaru');
    expect(daemon.name).toBe('Sesshomaru');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
});

test('Daemon levelUp', () => {
    const daemon = new Daemon('Sesshomaru');
    daemon.health = 70;
    daemon.levelUp();
    expect(daemon.level).toBe(2);
    expect(daemon.attack).toBe(12); // 10 * 1.2 = 12
    expect(daemon.defence).toBe(48); // 40 * 1.2 = 48
    expect(daemon.health).toBe(100);
});

test('Daemon damage', () => {
    const daemon = new Daemon('Sesshomaru');
    daemon.damage(15);
    expect(daemon.health).toBe(91); // Фактическое значение после применения урона
});