import Swordsman from '../classes/Swordsman';



test('Swordsman initialization', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
});

test('Swordsman levelUp', () => {
    const swordsman = new Swordsman('Arthur');
    swordsman.health = 60;
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48); // 40 * 1.2 = 48
    expect(swordsman.defence).toBe(12); // 10 * 1.2 = 12
    expect(swordsman.health).toBe(100);
});

test('Swordsman damage', () => {
    const swordsman = new Swordsman('Arthur');
    swordsman.damage(30);
    expect(swordsman.health).toBe(73); // 100 - 30 * (1 - 10/100) = 73
});