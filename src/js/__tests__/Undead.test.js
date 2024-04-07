import Undead from '../classes/Undead';


test('Undead initialization', () => {
    const undead = new Undead('Alucard');
    expect(undead.name).toBe('Alucard');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
});

test('Undead levelUp', () => {
    const undead = new Undead('Alucard');
    undead.health = 80;
    undead.levelUp();
    expect(undead.level).toBe(2);
    expect(undead.attack).toBe(30); // 25 * 1.2 = 30
    expect(undead.defence).toBe(30); // 25 * 1.2 = 30
    expect(undead.health).toBe(100);
});

test('Undead damage', () => {
    const undead = new Undead('Alucard');
    undead.damage(35);
    expect(undead.health).toBeCloseTo(73.75); // Фактическое значение после применения урона
});