import Magician from '../classes/Magician';


test('Magician initialization', () => {
    const magician = new Magician('Sakura');
    expect(magician.name).toBe('Sakura');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
});

test('Magician levelUp', () => {
    const magician = new Magician('Sakura');
    magician.health = 70;
    magician.levelUp();
    expect(magician.level).toBe(2);
    expect(magician.attack).toBe(12); // 10 * 1.2 = 12
    expect(magician.defence).toBe(48); // 40 * 1.2 = 48
    expect(magician.health).toBe(100);
});

test('Magician damage', () => {
    const magician = new Magician('Sakura');
    magician.damage(25);
    expect(magician.health).toBe(85); // 100 - 25 * (1 - 40/100) = 85
});