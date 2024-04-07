import Zombie from '../classes/Zombie';



test('Zombie initialization', () => {
    const zombie = new Zombie('Luffy');
    expect(zombie.name).toBe('Luffy');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
});

test('Zombie levelUp', () => {
    const zombie = new Zombie('Luffy');
    zombie.health = 60;
    zombie.levelUp();
    expect(zombie.level).toBe(2);
    expect(zombie.attack).toBe(48); // 40 * 1.2 = 48
    expect(zombie.defence).toBe(12); // 10 * 1.2 = 12
    expect(zombie.health).toBe(100);
});

test('Zombie damage', () => {
    const zombie = new Zombie('Luffy');
    zombie.damage(30);
    expect(zombie.health).toBe(73); // Фактическое значение после применения урона
});