import Bowman from '../classes/Bowman';

test('Bowman initialization', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
});

test('Bowman levelUp', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 50;
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30); // 25 * 1.2 = 30
    expect(bowman.defence).toBe(30); // 25 * 1.2 = 30
    expect(bowman.health).toBe(100);
});

test('Bowman damage', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(20);
    expect(bowman.health).toBe(85); // Фактическое значение после применения урона
});